const http=require("http");

const server=http.createServer((req,res)=>{
    console.log("Request event");
    res.write("<h1>Message from node Server</h1>");
    res.end("<h3>End of response</h3>");
});

server.listen(1992,"localhost",()=>{
    console.log("Server listening on port 1992");
});

