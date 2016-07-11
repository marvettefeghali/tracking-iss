/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var http = require("http");
//Internationa Station Location api
var issLocationUrl = "http://api.open-notify.org/iss-now.json";

// invoke the  third party API
var callResult = http.request({"url":issLocationUrl});

/**
parse the response of the call
{
  "message": "success", 
  "timestamp": UNIX_TIME_STAMP, 
  "iss_position": {
      	"latitude": CURRENT_LATITUDE, 
        "longitude": CURRENT_LONGITUDE
  }
}
using regular JSON object
**/

var entry = JSON.parse(callResult.body)["iss_position"];

var x = {lat: parseFloat(entry.latitude), lng: parseFloat(entry.longitude)};

//Publish GeoLocation to ISSLocationChannel
publish('ISSGeoLocation',[x], false);

return [x];			