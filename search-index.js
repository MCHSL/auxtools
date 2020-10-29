var searchIndex = JSON.parse('{\
"auxtools":{"doc":"","i":[],"p":[]},\
"dm":{"doc":"For when BYOND is not enough. Probably often.","i":[[23,"hook","dm","The `hook` attribute is used to define functions that may…",null,null],[3,"Callback","","Callbacks",null,null],[3,"DMContext","","Used to interact with global variables.",null,null],[3,"List","","A wrapper around Values that make working with lists a…",null,null],[3,"Proc","","Used to hook and call procs.",null,null],[12,"id","","",0,null],[12,"entry","","",0,null],[12,"path","","",0,null],[3,"Runtime","","Represents a byond runtime, sort of. This will probably…",null,null],[12,"message","","",1,null],[3,"StringRef","","A wrapper around Values that make working with strings a…",null,null],[12,"value","","",2,null],[3,"Value","","`Value` represents any value a DM variable can hold, such…",null,null],[12,"value","","",3,null],[11,"new","","Creates a new callback. The passed Value must be of type…",4,[[["asref",8],["value",3]],[["callbackhandle",3],["runtime",3],["result",4]]]],[11,"get_global","","Fetch a global variable from BYOND. Will return a runtime…",5,[[["stringref",3],["into",8]],["dmresult",6]]],[11,"get_global_number","","Fetch a numeric global variable from BYOND. Will return a…",5,[[["stringref",3],["into",8]],["conversionresult",6]]],[11,"get_global_string","","Fetch a string global variable from BYOND. Will return a…",5,[[["stringref",3],["into",8]],[["conversionresult",6],["string",3]]]],[11,"get_global_list","","Fetch a list global variable from BYOND. Will return a…",5,[[["stringref",3],["into",8]],[["conversionresult",6],["list",3]]]],[11,"get_world","","Returns a Value representing the world object. It\'s the…",5,[[],["value",3]]],[11,"new","","",5,[[]]],[11,"hook","","",0,[[],[["hookfailure",4],["result",4]]]],[11,"from_value","","",6,[[["value",3]],["conversionresult",6]]],[11,"new","","Creates a new empty list.",6,[[]]],[11,"with_size","","Creates a new list filled with `capacity` nulls.",6,[[]]],[11,"get","","",6,[[["listkey",8]],["dmresult",6]]],[11,"set","","",6,[[["intorawvalue",8],["listkey",8]],[["result",4],["runtime",3]]]],[11,"append","","",6,[[["intorawvalue",8]]]],[11,"remove","","",6,[[["intorawvalue",8]]]],[11,"len","","",6,[[]]],[11,"find","","Finds the first proc with the given path",0,[[["into",8],["string",3]],["option",4]]],[11,"call","","Calls a global proc with the given arguments.",0,[[],["dmresult",6]]],[0,"raw_types","","",null,null],[0,"funcs","dm::raw_types","",null,null],[7,"call_proc_by_id_byond","dm::raw_types::funcs","",null,null],[7,"call_datum_proc_by_name_byond","","",null,null],[7,"get_proc_array_entry_byond","","",null,null],[7,"get_string_id_byond","","",null,null],[7,"get_variable_byond","","",null,null],[7,"set_variable_byond","","",null,null],[7,"get_string_table_entry_byond","","",null,null],[7,"inc_ref_count_byond","","",null,null],[7,"dec_ref_count_byond","","",null,null],[7,"get_list_by_id_byond","","",null,null],[7,"get_assoc_element_byond","","",null,null],[7,"set_assoc_element_byond","","",null,null],[7,"create_list_byond","","",null,null],[7,"append_to_list_byond","","",null,null],[7,"remove_from_list_byond","","",null,null],[7,"get_length_byond","","",null,null],[5,"call_proc_by_id","","",null,null],[5,"call_datum_proc_by_name","","",null,null],[5,"get_proc_array_entry","","",null,null],[5,"get_string_id","","",null,null],[5,"get_variable","","",null,null],[5,"set_variable","","",null,null],[5,"get_string_table_entry","","",null,null],[5,"inc_ref_count","","",null,null],[5,"dec_ref_count","","",null,null],[5,"get_list_by_id","","",null,null],[5,"get_assoc_element","","",null,null],[5,"set_assoc_element","","",null,null],[5,"create_list","","",null,null],[5,"append_to_list","","",null,null],[5,"remove_from_list","","",null,null],[5,"get_length","","",null,null],[0,"lists","dm::raw_types","",null,null],[3,"ListId","dm::raw_types::lists","",null,null],[12,"0","","",7,null],[3,"AssociativeListEntry","","",null,null],[3,"List","","",null,null],[12,"vector_part","","",8,null],[12,"assoc_part","","",8,null],[12,"allocated","","",8,null],[12,"length","","",8,null],[12,"refcount","","",8,null],[0,"procs","dm::raw_types","",null,null],[3,"ProcId","dm::raw_types::procs","",null,null],[12,"0","","",9,null],[3,"ProcEntry","","",null,null],[12,"path","","",10,null],[3,"ProcInstance","","",null,null],[3,"ExecutionContext","","",null,null],[0,"strings","dm::raw_types","",null,null],[3,"StringId","dm::raw_types::strings","",null,null],[12,"0","","",11,null],[3,"StringEntry","","",null,null],[12,"data","","",12,null],[12,"this","","",12,null],[12,"left","","",12,null],[12,"right","","",12,null],[12,"ref_count","","",12,null],[12,"unk_1","","",12,null],[12,"unk_2","","",12,null],[0,"values","dm::raw_types","",null,null],[3,"Value","dm::raw_types::values","Internal thing used when interfacing with BYOND. You…",null,null],[12,"tag","","",13,null],[12,"data","","",13,null],[19,"ValueData","","",null,null],[12,"string","","",14,null],[12,"number","","",14,null],[12,"id","","",14,null],[4,"ValueTag","","",null,null],[13,"Null","","",15,null],[13,"Turf","","",15,null],[13,"Obj","","",15,null],[13,"Mob","","",15,null],[13,"Area","","",15,null],[13,"Client","","",15,null],[13,"String","","",15,null],[13,"MobTypepath","","",15,null],[13,"ObjTypepath","","",15,null],[13,"TurfTypepath","","",15,null],[13,"AreaTypepath","","",15,null],[13,"Resource","","",15,null],[13,"Image","","",15,null],[13,"World","","",15,null],[13,"List","","",15,null],[13,"MobVars","","",15,null],[13,"ObjVars","","",15,null],[13,"TurfVars","","",15,null],[13,"AreaVars","","",15,null],[13,"ClientVars","","",15,null],[13,"Vars","","",15,null],[13,"MobOverlays","","",15,null],[13,"MobUnderlays","","",15,null],[13,"ObjOverlays","","",15,null],[13,"ObjUnderlays","","",15,null],[13,"TurfOverlays","","",15,null],[13,"TurfUnderlays","","",15,null],[13,"AreaOverlays","","",15,null],[13,"AreaUnderlays","","",15,null],[13,"ImageVars","","",15,null],[13,"WorldVars","","",15,null],[13,"GlobalVars","","",15,null],[13,"Number","","",15,null],[13,"Appearance","","",15,null],[8,"IntoRawValue","","",null,null],[10,"into_raw_value","","",16,[[],["value",3]]],[11,"new","dm","",1,[[["into",8],["string",3]]]],[11,"new","","",2,[[]]],[11,"from_value","","",2,[[["value",3]],["option",4]]],[11,"from_id","","",2,[[]]],[11,"get_id","","",2,[[]]],[11,"new","","Creates a new value from raw tag and data. Use if you know…",3,[[["valuedata",19],["valuetag",4]],["value",3]]],[11,"globals","","Equivalent to DM\'s `global.vars`.",3,[[],["value",3]]],[11,"null","","Equivalent to DM\'s `null`.",3,[[],["value",3]]],[11,"get","","Gets a variable by name.",3,[[["stringref",3],["into",8]],["dmresult",6]]],[11,"get_number","","Gets a variable by name and safely casts it to a float.",3,[[["stringref",3],["into",8]],["conversionresult",6]]],[11,"get_string","","Gets a variable by name and safely casts it to a string.",3,[[["stringref",3],["into",8]],[["conversionresult",6],["string",3]]]],[11,"get_list","","Gets a variable by name and safely casts it to a…",3,[[["stringref",3],["into",8]],[["conversionresult",6],["list",3]]]],[11,"set","","Sets a variable by name to a given value.",3,[[["stringref",3],["into",8],["intorawvalue",8]]]],[11,"as_number","","Check if the current value is a number and casts it.",3,[[],["conversionresult",6]]],[11,"as_string","","Check if the current value is a string and casts it.",3,[[],[["conversionresult",6],["string",3]]]],[11,"as_list","","Check if the current value is a list and casts it.",3,[[],[["conversionresult",6],["list",3]]]],[11,"call","","Calls a method of the value with the given arguments.",3,[[["asref",8]],["dmresult",6]]],[11,"from_string","","Creates a Value that references a byond string. Will panic…",3,[[["asref",8]],["value",3]]],[11,"from_raw","","blah blah lifetime is not verified with this so use at…",3,[[["value",3]]]],[11,"from_raw_owned","","same as from_raw but does not increment the reference…",3,[[["value",3]],["value",3]]],[6,"ConversionResult","","Used as a result for conversions between DM values and…",null,null],[6,"DMResult","","Used as a result for hooks and calls into BYOND.",null,null],[14,"byond_ffi_fn","","Creates a normal byond ffi function that can be called in…",null,null],[14,"runtime","","This macro makes instantiating Runtimes a (little bit)…",null,null],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","dm::raw_types::lists","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","dm::raw_types::procs","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","dm::raw_types::strings","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","dm::raw_types::values","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"to_string","","",15,[[],["string",3]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"drop","dm","",3,[[]]],[11,"as_ref","","",3,[[],["value",3]]],[11,"from","","",3,[[["list",3]],["value",3]]],[11,"from","","",2,[[],["stringref",3]]],[11,"from","","",3,[[]]],[11,"from","","",3,[[]]],[11,"from","","",3,[[]]],[11,"from","","",3,[[]]],[11,"into","","",2,[[],["string",3]]],[11,"clone","","",4,[[],["callback",3]]],[11,"clone","","",0,[[],["proc",3]]],[11,"clone","dm::raw_types::lists","",7,[[],["listid",3]]],[11,"clone","dm::raw_types::procs","",9,[[],["procid",3]]],[11,"clone","dm::raw_types::strings","",11,[[],["stringid",3]]],[11,"clone","dm::raw_types::values","",15,[[],["valuetag",4]]],[11,"clone","","",14,[[],["valuedata",19]]],[11,"clone","","",13,[[],["value",3]]],[11,"clone","dm","",2,[[]]],[11,"clone","","",3,[[],["value",3]]],[11,"eq","dm::raw_types::procs","",9,[[["procid",3]]]],[11,"ne","","",9,[[["procid",3]]]],[11,"eq","dm::raw_types::values","",15,[[["valuetag",4]]]],[11,"fmt","dm::raw_types::lists","",7,[[["formatter",3]],["result",6]]],[11,"fmt","dm::raw_types::strings","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","dm::raw_types::values","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","dm","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","dm::raw_types::values","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","dm","",3,[[["formatter",3]],["result",6]]],[11,"hash","dm::raw_types::procs","",9,[[]]]],"p":[[3,"Proc"],[3,"Runtime"],[3,"StringRef"],[3,"Value"],[3,"Callback"],[3,"DMContext"],[3,"List"],[3,"ListId"],[3,"List"],[3,"ProcId"],[3,"ProcEntry"],[3,"StringId"],[3,"StringEntry"],[3,"Value"],[19,"ValueData"],[4,"ValueTag"],[8,"IntoRawValue"],[3,"AssociativeListEntry"],[3,"ProcInstance"],[3,"ExecutionContext"]]},\
"dm_impl":{"doc":"","i":[[14,"convert_signature","dm_impl","",null,null],[23,"hook","","The `hook` attribute is used to define functions that may…",null,null]],"p":[]},\
"sigscan":{"doc":"","i":[[3,"Scanner","sigscan","",null,null],[11,"for_module","","",0,[[],[["option",4],["scanner",3]]]],[11,"find","","",0,[[["vec",3],["option",4]],["option",4]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]]],"p":[[3,"Scanner"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);