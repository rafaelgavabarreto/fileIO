var fileContent = [...process.argv].slice(2);

console.log(fileContent);

var fs = require("fs");

var fileReadPath = "/read_file.txt";
var fileWritePath = "/tmp/test_async.txt";
var fileData = "Testing the first asynchronous file read and write.\n";


/*
fs.open(fileReadPath, 'r', (err, fd) => {
  if (err) throw err;
  fs.fstat(fd, (err, stat) => {
    if (err) throw err;
    // use stat

    // always close the file descriptor!
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});

var value = "";



while (!file.eof) {
  // read each line of text
  str += file.readln() + "\n";
}


fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});
*/