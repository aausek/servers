var http = require("http");
var twitter  = require("twitter");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
	
	response.end("Path hit!" + request.url);
	//response.end("Tweet: " + request.url);

}

var server1 = http.createServer(handleRequest);

server1.listen(PORT1, function(){

	console.log("Server listening on: http://localhost:%s! I'M AWESOME", PORT1);
});

var server2 = http.createServer(handleRequest);

server2.listen(PORT2, function(){

	console.log("Server listening on: http://localhost:%s! I SUCK!", PORT2);

});