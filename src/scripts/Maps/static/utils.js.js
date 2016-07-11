/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { \n  $.urlParam = function(name){\n    \t\tvar results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);\n    \t\tif (results==null){\n      \t\t\treturn null;\n    \t\t}else{\n       \t\t\treturn results[1] || 0;\n    \t\t}\n\t}\n\t\n  $.getUrlVars = function() {\n    var vars = [], hash;\n    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\n    for(var i = 0; i < hashes.length; i++)\n    {\n      hash = hashes[i].split('=');\n      vars.push(hash[0]);\n      vars[hash[0]] = hash[1];\n    }\n    return vars;\n  }\n}(jQuery));\n  \n\t\t"},"scriptrdata":[]}}*#*#*/
var content= '(function ($) { \n\
  $.urlParam = function(name){\n\
    		var results = new RegExp(\'[\\?&]\' + name + \'=([^&#]*)\').exec(window.location.href);\n\
    		if (results==null){\n\
      			return null;\n\
    		}else{\n\
       			return results[1] || 0;\n\
    		}\n\
	}\n\
	\n\
  $.getUrlVars = function() {\n\
    var vars = [], hash;\n\
    var hashes = window.location.href.slice(window.location.href.indexOf(\'?\') + 1).split(\'&\');\n\
    for(var i = 0; i < hashes.length; i++)\n\
    {\n\
      hash = hashes[i].split(\'=\');\n\
      vars.push(hash[0]);\n\
      vars[hash[0]] = hash[1];\n\
    }\n\
    return vars;\n\
  }\n\
}(jQuery));\n\
  \n\
		';  response.write(content);response.close();			