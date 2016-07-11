/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//Configuration file used by client side\nvar config = {\n  http: {\n    baseUrl: \"https://marv.scriptrapps.io\", //Your scriptr domain\n  \tdataScript:\"Maps/scripts/generateIssLiveData\" //Scriptr script responsible for fetching needed geolocation data\n  },\n  websocket: {\n    url: \"wss://api.scriptrapps.io/RTg2MTczN0ZDRQ==\",\n    receive_channel: \"ISSGeoLocation\"//The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n  },\n  map: {\n  \tkey: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\", //https://developers.google.com/maps/documentation/javascript/get-api-key#get-an-api-key\n    output: 'embed',\n\ttype: \"google.maps.MapTypeId.HYBRID\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n    mode: [\"marker\", \"polyline\"], // flags to be used by the dataHandler transformFnc\n    strokeColor: '#FF0000',\n    strokeOpacity: 2.0, \n    strokeWeight: 2,\n    zoom: 2,\n    fetchCenter: true,\n    defaultCenter: {lat: 32.7038888889, lng: -117.153611111},\n    spaceStationIcon: 'http://icons.iconarchive.com/icons/aha-soft/free-global-security/48/Satellite-icon.png'\n  },\n  dataHandler: {\n    transformFnc:  \"addSpaceStationPoint\" // //Define the transformation function you will use. ex: \"renderEarthquakeGeoLocations\", \"renderRandomGeoLocations\" \n  }\n}\n\n"},"scriptrdata":[]}}*#*#*/
var content= '//Configuration file used by client side\n\
var config = {\n\
  http: {\n\
    baseUrl: \"https://marv.scriptrapps.io\", //Your scriptr domain\n\
  	dataScript:\"Maps/scripts/generateIssLiveData\" //Scriptr script responsible for fetching needed geolocation data\n\
  },\n\
  websocket: {\n\
    url: \"wss://api.scriptrapps.io/RTg2MTczN0ZDRQ==\",\n\
    receive_channel: \"ISSGeoLocation\"//The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n\
  },\n\
  map: {\n\
  	key: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\", //https://developers.google.com/maps/documentation/javascript/get-api-key#get-an-api-key\n\
    output: \'embed\',\n\
	type: \"google.maps.MapTypeId.HYBRID\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n\
    mode: [\"marker\", \"polyline\"], // flags to be used by the dataHandler transformFnc\n\
    strokeColor: \'#FF0000\',\n\
    strokeOpacity: 2.0, \n\
    strokeWeight: 2,\n\
    zoom: 2,\n\
    fetchCenter: true,\n\
    defaultCenter: {lat: 32.7038888889, lng: -117.153611111},\n\
    spaceStationIcon: \'http://icons.iconarchive.com/icons/aha-soft/free-global-security/48/Satellite-icon.png\'\n\
  },\n\
  dataHandler: {\n\
    transformFnc:  \"addSpaceStationPoint\" // //Define the transformation function you will use. ex: \"renderEarthquakeGeoLocations\", \"renderRandomGeoLocations\" \n\
  }\n\
}\n\
\n\
';  response.write(content);response.close();			