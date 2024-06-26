// we bouwen onze eigen api om naar te callen met onze frontend
// This line imports the Express framework, which is used to create web servers in Node.js.
import express from "express"
// Here, an instance of an Express application is created and assigned to the constant app. This instance will be used to define routes and middleware for the web server.
const app = express()
// This line defines a route for HTTP GET requests to the path /api. When a request is made to this path, the provided callback function is executed. The callback function takes two parameters: req (the request object) and res (the response object). Inside the callback, console.log('hallo'); is executed, which logs "hallo" to the console.
app.get("/api", (req, res) => {

    console.log('hallo');

});
// This line starts the server and makes it listen for incoming connections on port 80. The callback function provided to app.listen is executed once the server starts successfully, logging "start" to the console.
app.listen(80, () => {
    console.log("start");
});


// The code sets up a basic Express server.
// It imports the Express framework and creates an application instance.
// It defines a single GET route at /api that logs "hallo" to the console when accessed.
// The server listens for incoming requests on port 80 and logs "start" to the console when it starts successfully.
// This code would run a web server that responds to requests at http://localhost/api by logging "hallo" to the console. The server listens on port 80

// In the context of web development, a route refers to a specific endpoint defined within a web application that is associated with a particular URL pattern and an HTTP method (such as GET, POST, PUT, DELETE). When a request is made to that URL, the web server processes the request based on the route's definition.

// components of route:
// 1. Path: The URL pattern that the route matches.
// 2. HTTP Method: The type of request (GET, POST, etc.) that the route responds to.
// 3. Handler Function: The function that is executed when the route is matched. This function typically takes two arguments:
//  - req (request object): Contains information about the incoming request, such as headers, query parameters, and body data.
//  - res (response object): Used to send a response back to the client.