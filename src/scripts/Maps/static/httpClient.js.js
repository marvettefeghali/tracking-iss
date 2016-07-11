/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { \n    \n\t$.HTTPClient = function (args) { \n          this.args = args;\n    };\n\t\n    $.HTTPClient.prototype = {\n        //Build a scriptr http request object. If no params, use default config\n        buildRequest: function(baseUrl, scriptName, token, parameters) {\n            var config = this.args.config;\n          \tvar options = {};\n            var baseUrl = (baseUrl) ? baseUrl :config.baseUrl;\n          \tvar scriptName = (scriptName) ? scriptName : config.dataScript;\n          \n            var search = window.location.search.substring(1);\n\t\t\tvar params = (parameters) ? parameters : (search ? JSON.parse('{\"' + search.replace(/&/g, '\",\"').replace(/=/g,'\":\"') + '\"}', function(key, value) { return key===\"\"?value:decodeURIComponent(value) }) : {})\n\n            var token = (token) ? token : ((params) ? params['auth_token'] : null);\n\n            options = {\n                type: \"POST\",\n                url: baseUrl + \"/\" + scriptName,\n                success: function() {},\n                failure: function() {},\n                dataType: \"json\",\n                data: params //{ \"device\": device}\n            };\n            console.log(options);\n\n            if(token) {\n              \toptions[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n            }\n            return options;\n        },\n       //Call a scriptr api, and use callback success and failure to channel response\n\t\tcallApi: function(options, onSuccess, onFailure) {\n            $.ajax(options).done(function(response) {\n                 if(response.response.metadata.status == \"failure\") {\n                   out += response.response.metadata.errorCode+\": \"+response.response.metadata.errorDetail;\n                 } else {\n                   onSuccess(response.response.result);\n                 }\n            }).fail(function(response){\n              var out = \"\";\n              if(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n                 out += \"An error has occurred. This is most likely a cross-domain issue.\"\n                 out += \"In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n                 onFailure(out);\n              }else{\n                var output = response;\n                if(response.responseJSON){\n                    out += \"Your data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\";\n                  \tonFailure(out);\n                }\n              }\n            }).always(function(response){\n\n            })\n\t\t}\n    };\n}(jQuery));\n\n\n\n\n"},"scriptrdata":[]}}*#*#*/
var content= '(function ($) { \n\
    \n\
	$.HTTPClient = function (args) { \n\
          this.args = args;\n\
    };\n\
	\n\
    $.HTTPClient.prototype = {\n\
        //Build a scriptr http request object. If no params, use default config\n\
        buildRequest: function(baseUrl, scriptName, token, parameters) {\n\
            var config = this.args.config;\n\
          	var options = {};\n\
            var baseUrl = (baseUrl) ? baseUrl :config.baseUrl;\n\
          	var scriptName = (scriptName) ? scriptName : config.dataScript;\n\
          \n\
            var search = window.location.search.substring(1);\n\
			var params = (parameters) ? parameters : (search ? JSON.parse(\'{\"\' + search.replace(/&/g, \'\",\"\').replace(/=/g,\'\":\"\') + \'\"}\', function(key, value) { return key===\"\"?value:decodeURIComponent(value) }) : {})\n\
\n\
            var token = (token) ? token : ((params) ? params[\'auth_token\'] : null);\n\
\n\
            options = {\n\
                type: \"POST\",\n\
                url: baseUrl + \"/\" + scriptName,\n\
                success: function() {},\n\
                failure: function() {},\n\
                dataType: \"json\",\n\
                data: params //{ \"device\": device}\n\
            };\n\
            console.log(options);\n\
\n\
            if(token) {\n\
              	options[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n\
            }\n\
            return options;\n\
        },\n\
       //Call a scriptr api, and use callback success and failure to channel response\n\
		callApi: function(options, onSuccess, onFailure) {\n\
            $.ajax(options).done(function(response) {\n\
                 if(response.response.metadata.status == \"failure\") {\n\
                   out += response.response.metadata.errorCode+\": \"+response.response.metadata.errorDetail;\n\
                 } else {\n\
                   onSuccess(response.response.result);\n\
                 }\n\
            }).fail(function(response){\n\
              var out = \"\";\n\
              if(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n\
                 out += \"An error has occurred. This is most likely a cross-domain issue.\"\n\
                 out += \"In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n\
                 onFailure(out);\n\
              }else{\n\
                var output = response;\n\
                if(response.responseJSON){\n\
                    out += \"Your data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\";\n\
                  	onFailure(out);\n\
                }\n\
              }\n\
            }).always(function(response){\n\
\n\
            })\n\
		}\n\
    };\n\
}(jQuery));\n\
\n\
\n\
\n\
\n\
';  response.write(content);response.close();			