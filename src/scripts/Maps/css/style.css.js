/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"html, body {\n\theight: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n#map {\n   height: 100%;\n}"},"scriptrdata":[]}}*#*#*/
var content= 'html, body {\n\
	height: 100%;\n\
    margin: 0;\n\
    padding: 0;\n\
}\n\
\n\
#map {\n\
   height: 100%;\n\
}';  response.write(content);response.close();			