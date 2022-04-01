const http = require("http");

const server = http.createServer((req, res) => {
    let urlInp = req.url;
    switch (urlInp) {
        case "/":
            res.write("<h1>Welcome to our Node Server port 5000</h1>");
            res.write("<h1>First HTTP node server made by Kazi tanvir azad</h1>");
            res.end();
            break;
        case "/home":
            res.write("<h1>This is the home page</h1>");
            res.end();
            break;
        default:
            res.write(`<h1>Oops...</h1>
                <h3>page not found</h3>`);
            res.write(`<p><a href="/home">Go to Home</a></p>`);
            res.end();
            break;
    }

    console.log(req);
});

server.listen(5000);
