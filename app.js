var http = require('http');
var dt = require('./maximumWealth.js');
var rm = require('./romanGenerate.js');
var account = [[2,8,7],[7,1,3],[1,9,5]];
var roman = "XVILCDM"

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  account.forEach(a => {
    res.write("array: " + a + "\n");
  });
  res.write("MaximumWealth: " + dt.maximumWealth(account));
  res.write("\n");
  res.write("input : " + roman + "\n");
  res.write("romanGenerate: " + rm.romanGenerate(roman));
  res.end();
}).listen(8080);

