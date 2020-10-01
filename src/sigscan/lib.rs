use winapi::shared::minwindef;
use winapi::um::processthreadsapi;
use winapi::um::libloaderapi;
use winapi::um::psapi;
use std::ptr;
use std::mem;

pub struct Scanner {
    module: minwindef::HMODULE,
    data_begin: *mut u8,
    data_end: *mut u8,
}

impl Scanner {
    pub fn for_module(name: &str) -> Option<Scanner> {
        let mut module: minwindef::HMODULE = ptr::null_mut();
        let data_begin: *mut u8;
        let data_end: *mut u8;

        // Construct a null-terminated UTF-16 string to pass to the Windows API
        let name_winapi: Vec<u16> = name
            .encode_utf16()
            .chain(std::iter::once(0))
            .collect();

        unsafe {
            if libloaderapi::GetModuleHandleExW(0, name_winapi.as_ptr(), &mut module) == 0 {
                return None
            }

            let mut module_info_wrapper = mem::MaybeUninit::<psapi::MODULEINFO>::zeroed();
            if psapi::GetModuleInformation(processthreadsapi::GetCurrentProcess(), module, module_info_wrapper.as_mut_ptr(), mem::size_of::<psapi::MODULEINFO>() as u32) == 0 {
                libloaderapi::FreeLibrary(module);
                return None
            }

            let module_info = module_info_wrapper.assume_init();
            data_begin = module_info.lpBaseOfDll as *mut u8;
            data_end = data_begin.offset(module_info.SizeOfImage as isize).offset(-1);
        }

        Some(Scanner {
            module: module,
            data_begin: data_begin,
            data_end: data_end,
        })
    }

    // TODO: Fail on multiple matches
    pub fn find(&self, signature: &[u8]) -> Option<*mut u8> {
        let mut data_current = self.data_begin;
        let data_end = self.data_end;
        let mut signature_offset = 0;

        unsafe {
            while data_current <= data_end {
                if signature[signature_offset] == b'?' || signature[signature_offset] == *data_current {
                    if signature.len() <= signature_offset + 1 {
                        return Some(data_current.offset(-(signature_offset as isize)));
                    }
                    signature_offset += 1;
                } else {
                    data_current = data_current.offset(-(signature_offset as isize));
                    signature_offset = 0;
                }

                data_current = data_current.offset(1);
            }
        }

        None
    }
}

impl Drop for Scanner {
    fn drop(&mut self) {
        unsafe {
            libloaderapi::FreeLibrary(self.module);
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::Scanner;

    #[test]
    fn scan_self() {
        let scanner = Scanner::for_executable().unwrap();
        println!("Fulak!");
        let res = scanner.find(b"Fu??k!");
        println!("ok");
    }
}