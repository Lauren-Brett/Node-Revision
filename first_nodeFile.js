let http = require("http");
let dt = require("./firstModule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("the date and time is:" + dt.myDateTime());
    res.end();
  })
  .listen(8080);
