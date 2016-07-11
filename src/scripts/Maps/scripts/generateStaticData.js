/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
 //Retrieve your data
var http = require("http");

function fetch() {
    var earthquakeFead = "http://earthquake-report.com/feeds/recent-eq?json";
    //invoke the earthquake third party API
	var callResult = http.request({"url":earthquakeFead});
	//parse the result of the call using regular JSON object
	var earthQuakeInfo = JSON.parse(callResult.body);

	var myArray = [["Latitude", "Longitude", "magnitude", "description", "location" , "date"]];
	earthQuakeInfo.forEach(function(entry){
       myArray.push(
         [ parseFloat(entry.latitude),
           parseFloat(entry.longitude),
           parseFloat(entry.magnitude), 
           entry.title, 
           entry.location, 
           entry.date_time
         ]
       );
	});
	return myArray;
}
return fetch();			