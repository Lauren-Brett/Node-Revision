let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let fileName = "." + q.pathname;
  fs.readFile(fileName, function (err, data) {
    if (err) {
      res.writeHead(404, {});
    }
  });
});
