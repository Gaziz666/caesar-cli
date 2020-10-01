const fs = require("fs");

exports.outputStream = filename => {
  if (filename) {
    try {
      return fs.createWriteStream(filename);
    } catch (e) {
      console.error("Output file does not exist", e);
      process.exit(9);
    }
  }

  return process.stdout;
}
