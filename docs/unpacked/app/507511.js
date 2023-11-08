Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = new Uint8Array(32);
  self.crypto.getRandomValues(e);
  return {
    key: (0, r.encodeB64)(e),
    timestamp: (0, i.unixTime)()
  };
};
var r = require("./417405.js");
var i = require("./632157.js");