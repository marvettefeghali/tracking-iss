/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Static Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n\t<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n    \n    <!--REPLACE marv.scriptrapps.io WITH YOUR SCRIPTR DOMAIN -->\n\t<link rel=\"stylesheet\" href=\"https://marv.scriptrapps.io/Maps/css/style.css\" />\n    <script src=\"https://marv.scriptrapps.io/Maps/static/config.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/Maps/static/httpClient.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/Maps/static/dataHandler.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/Maps/static/utils.js\"></script>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <script>\n      var client;\n      var lat, lng, zoom;\n      var dataHandler;\n      $(window).load(function() { \n          client = new $.HTTPClient({config: window.config.http});\n          dataHandler = new $.DataHandler({config: window.config.map});\n        \n          zoom = $.urlParam('zoom');\n          lat = $.urlParam('lat');\n          lng = $.urlParam('lng');\n        \n          //Load google Maps API\n          var scr = document.createElement(\"script\");\n          scr.setAttribute(\"src\",'https://maps.googleapis.com/maps/api/js?key='+config.map.key+'&callback=initMap&output='+config.map.output);\n          document.head.appendChild(scr);\n      });\n      \n      var map;\n      function buildMap(entries) {\n      \tmap =  eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries, map)\");\n      }\n\n      function showFailMessage(message) {\n        $(\"#map\").html(message);\n      }\n\n      function initMap() {\n        map = new google.maps.Map(document.getElementById('map'), {\n        \tzoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n          \tcenter: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n          \tmapTypeId: eval(window.config.map.type)\n      \t});\n        client.callApi(client.buildRequest(), buildMap, showFailMessage);\n      }\n    </script>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Static Map</title>\n\
    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n\
    <meta charset=\"utf-8\">\n\
	<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
    \n\
    <!--REPLACE marv.scriptrapps.io WITH YOUR SCRIPTR DOMAIN -->\n\
	<link rel=\"stylesheet\" href=\"https://marv.scriptrapps.io/Maps/css/style.css\" />\n\
    <script src=\"https://marv.scriptrapps.io/Maps/static/config.js\"></script>\n\
    <script src=\"https://marv.scriptrapps.io/Maps/static/httpClient.js\"></script>\n\
    <script src=\"https://marv.scriptrapps.io/Maps/static/dataHandler.js\"></script>\n\
    <script src=\"https://marv.scriptrapps.io/Maps/static/utils.js\"></script>\n\
  </head>\n\
  <body>\n\
    <div id=\"map\"></div>\n\
    <script>\n\
      var client;\n\
      var lat, lng, zoom;\n\
      var dataHandler;\n\
      $(window).load(function() { \n\
          client = new $.HTTPClient({config: window.config.http});\n\
          dataHandler = new $.DataHandler({config: window.config.map});\n\
        \n\
          zoom = $.urlParam(\'zoom\');\n\
          lat = $.urlParam(\'lat\');\n\
          lng = $.urlParam(\'lng\');\n\
        \n\
          //Load google Maps API\n\
          var scr = document.createElement(\"script\");\n\
          scr.setAttribute(\"src\",\'https://maps.googleapis.com/maps/api/js?key=\'+config.map.key+\'&callback=initMap&output=\'+config.map.output);\n\
          document.head.appendChild(scr);\n\
      });\n\
      \n\
      var map;\n\
      function buildMap(entries) {\n\
      	map =  eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries, map)\");\n\
      }\n\
\n\
      function showFailMessage(message) {\n\
        $(\"#map\").html(message);\n\
      }\n\
\n\
      function initMap() {\n\
        map = new google.maps.Map(document.getElementById(\'map\'), {\n\
        	zoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n\
          	center: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n\
          	mapTypeId: eval(window.config.map.type)\n\
      	});\n\
        client.callApi(client.buildRequest(), buildMap, showFailMessage);\n\
      }\n\
    </script>\n\
  </body>\n\
</html>';  response.write(content);response.close();			