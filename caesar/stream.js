const { Transform, pipeline } = require("stream");
const fs = require("fs");

// let inputStream = fs.createReadStream("input.txt");
// let outputStream = fs.createWriteStream("output.txt");
let inputStream = process.stdin;
let outputStream = process.stdout;

const upperStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

pipeline(
  inputStream,
  upperStream,
  outputStream,
  err => {
    if (err) {
      console.error("error", err);
    }
  }
)
