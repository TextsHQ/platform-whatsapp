var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildHandshakePayload = function (e) {
  return {
    __command: i.HANDSHAKE_COMMAND,
    __port: e
  };
};
exports.extractPortFromHandshakePayload = function (e) {
  if (e != null && e.__command != null && e.__command === i.HANDSHAKE_COMMAND && e.__port != null) {
    (0, a.default)(e.__port instanceof MessagePort, "Malformed connection payload");
    return e.__port;
  }
};
var i = require("./270594.js");
var a = r(require("../vendor/441143.js"));