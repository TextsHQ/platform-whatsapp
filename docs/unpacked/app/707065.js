var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCoreAckTemplate = function (e) {
  const t = (0, a.extractJidFromJidWithType)((0, o.widToJidWithType)(e.from));
  const n = e.participant == null ? undefined : (0, o.widToDeviceJid)(e.participant);
  const r = e.recipient == null ? undefined : (0, o.widToUserJid)(e.recipient);
  return (0, i.default)((0, i.default)({}, e), {}, {
    from: t,
    participant: n,
    recipient: r
  });
};
var i = r(require("../vendor/81109.js"));
var a = require("./714443.js");
var o = require("./574819.js");