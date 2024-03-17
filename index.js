var express = require("express");
var app = express();
var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});

const multiplyTwoNumber = (n1, n2) => {
  return n1 * n2;
};
app.get("/multiplyTwoNumber", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = multiplyTwoNumber(n1, n2);
  res.json({ statuscocde: 200, data: result });
});

app.get("/", (req, res) => {
  const n1 = "<html><body><H1>Multiplication Device </H1></body></html>";
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(n1));
});
console.log(multiplyTwoNumber(2, 7));
