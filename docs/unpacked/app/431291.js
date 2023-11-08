var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupAddressingMode = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./185212.js");
var o = require("./883310.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    if (!e.isGroup()) {
      return;
    }
    const t = yield (0, a.getGroupMetadata)(e);
    if (t == null) {
      return null;
    } else if (t.isLidAddressingMode == null) {
      return o.STANZA_MSG_ADDRESSING_MODE.pn;
    } else if (t.isLidAddressingMode) {
      return o.STANZA_MSG_ADDRESSING_MODE.lid;
    } else {
      return o.STANZA_MSG_ADDRESSING_MODE.pn;
    }
  })).apply(this, arguments);
}