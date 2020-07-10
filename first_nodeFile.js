let http = require("http");
let dt = require("./myfirstModule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("the date and time is:" + dt.myDateTime());
    res.end();
  })
  .listen(8080);

/////
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(req.url);
//     res.end();
//   })
//   .listen(8080);
