const { pipeline } = require("stream");

const { inputStream } = require("./inputStream");
const { outputStream } = require("./outputStream");
const { transformStream } = require("./transformStream");

exports.process = (shift, action, input, output) => {
  if (!action || !shift) {
    console.error("Action and shift are required");
    process.exit(9);
  }

  pipeline(
    inputStream(input),
    transformStream(shift, action),
    outputStream(output),
    e => {
      if (e) {
        console.error("Somthing gone wrong", e);
        process.exit(9)
      }
    }
  );
}
