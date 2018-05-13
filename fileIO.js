var fileReadPath = [...process.argv].slice(2);

var fs = require("fs");

fs.readFile(fileReadPath[0], (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});