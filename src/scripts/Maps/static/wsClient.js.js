/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { \n    \n\t$.WSClient = function (args) { \n          this.args = args;\n    };\n\t\n    $.WSClient.prototype = {\n        //Open a websocket connection to scriptr and subscribe to a channel\n        openConnection: function(onSuccess, onFailure) {\n          \tvar socket = new WebSocket(this.args.config.url);\n            var self = this;\n            socket.onopen = function (event) {\n                socket.send(JSON.stringify({\n                    \"method\":\"Subscribe\",\n                    \"params\":{\n                        \"channel\": self.args.config.receive_channel\n                    }\n                }));\n            }\n\t\t\t//When receiving a message on channel\n            socket.onmessage = function(event) {\n                try{\n                   var message = JSON.parse(event.data);\n                   onSuccess(message)\n                }catch(e){\n                    console.log(e)\n                }\n            },\n            socket.onClose = function(event) {\n\t\t\t\tconsole.log(\"Socket Closed\",event)\n            }\n        }\n    };\n}(jQuery));\n\n\n\n\n"},"scriptrdata":[]}}*#*#*/
var content= '(function ($) { \n\
    \n\
	$.WSClient = function (args) { \n\
          this.args = args;\n\
    };\n\
	\n\
    $.WSClient.prototype = {\n\
        //Open a websocket connection to scriptr and subscribe to a channel\n\
        openConnection: function(onSuccess, onFailure) {\n\
          	var socket = new WebSocket(this.args.config.url);\n\
            var self = this;\n\
            socket.onopen = function (event) {\n\
                socket.send(JSON.stringify({\n\
                    \"method\":\"Subscribe\",\n\
                    \"params\":{\n\
                        \"channel\": self.args.config.receive_channel\n\
                    }\n\
                }));\n\
            }\n\
			//When receiving a message on channel\n\
            socket.onmessage = function(event) {\n\
                try{\n\
                   var message = JSON.parse(event.data);\n\
                   onSuccess(message)\n\
                }catch(e){\n\
                    console.log(e)\n\
                }\n\
            },\n\
            socket.onClose = function(event) {\n\
				console.log(\"Socket Closed\",event)\n\
            }\n\
        }\n\
    };\n\
}(jQuery));\n\
\n\
\n\
\n\
\n\
';  response.write(content);response.close();			