# auxtools

auxtools is a Rust-based successor to the [Extools](https://github.com/MCHSL/extools) project.

Currently, it implements some of the features such as the debug server, but is planned to supplant most functionality (maptick, etc.).

## Features
Debug Server - Working with SpaceManiac's [SpacemanDMM](https://github.com/SpaceManiac/SpacemanDMM), Auxtools interfaces with the debugger frontend to provide debugger information and management of breakpoints.

*Dissassembly*  - When currently stopped at a breakpoint, enter the `#dis` command into the Debug Console in VSC to see the DM bytecode for the current proc. You can also provide it any arbitrary proc path like `#dis /mob/proc/Life`.

## Dependencies

*These instructions were taken directly from tgstation's [rust-g](https://github.com/tgstation/rust-g) documentation.*

The [Rust] compiler:

1. Install the Rust compiler's dependencies (primarily the system linker):

   * Ubuntu: `sudo apt-get install gcc-multilib`
   * Windows (MSVC): [Build Tools for Visual Studio 2017][msvc]
   * Windows (GNU): No action required

1. Use [the Rust installer], or another Rust installation method,
   or run the following:

    ```sh
    curl https://sh.rustup.rs -sSfo rustup-init.sh
    chmod +x rustup-init.sh
    ./rustup-init.sh
    ```

1. Set the default compiler to **32-bit**:

    ```sh
    # Clone the `auxtools` repository to a directory of your choice
    git clone https://github.com/willox/auxtools
    # in the `auxtools` directory...
    cd auxtools
    # Linux
    rustup target add i686-unknown-linux-gnu
    # Windows
    rustup target add i686-pc-windows-msvc
    ```

System libraries:

* Ubuntu and Debian users run:

    ```sh
    sudo dpkg --add-architecture i386
    sudo apt-get update
    sudo apt-get install zlib1g-dev:i386 libssl-dev:i386 pkg-config:i386
    ```

* Other Linux distributions install the appropriate **32-bit development** and **32-bit runtime** packages.

## Compiling

The [Cargo] tool handles compilation, as well as automatically downloading and
compiling all Rust dependencies. To compile in release mode (recommended for speed):

Linux:
```sh
export PKG_CONFIG_ALLOW_CROSS=1
cargo build --release --target i686-unknown-linux-gnu
# output: target/i686-unknown-linux-gnu/release/libauxtools.so
```

Windows:

```sh
cargo build --release --target i686-pc-windows-msvc
# output: target/i686-pc-windows-msvc/release/auxtools.dll,debug_server.dll
```

[Rust]: https://rust-lang.org
[Cargo]: https://doc.rust-lang.org/cargo/
[rustup]: https://rustup.rs/
[msvc]: https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15

## License

This project is licensed under the [MIT license](https://en.wikipedia.org/wiki/MIT_License).

See [LICENSE](./LICENSE) for more details.
