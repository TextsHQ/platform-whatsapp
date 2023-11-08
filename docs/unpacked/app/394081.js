var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAckPeerSimpleReceipt = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./731165.js");
function o() {
  return (o = (0, i.default)(function* (e) {
    yield (0, a.deletePeerMessage)(e.stanzaId);
  })).apply(this, arguments);
}