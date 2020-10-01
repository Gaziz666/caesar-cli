const fs = require("fs");

exports.inputStream = filename => {
  if (filename) {
    try {
      return fs.createReadStream(filename);
    } catch (e) {
      console.error("Input file does not exist", e);
      process.exit(9);
    }
  }

  return process.stdin;
}
