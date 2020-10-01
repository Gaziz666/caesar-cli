const { Transform } = require("stream");

const { ceasar } = require("./caesar");

exports.transformStream = (shift, action) => {
  return new Transform({
    transform(chunk, _encoding, callback) {
      shift = action === "encode" ? shift * 1 : shift * -1;
      this.push(ceasar(chunk.toString("utf8"), shift));
      callback();
    }
  })
}
