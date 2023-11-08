var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageKeyHash = function () {
  return f.apply(this, arguments);
};
exports.messageKeyHashEnabled = function () {
  return (0, s.getABPropConfigValue)("placeholder_message_key_hash_logging");
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./301055.js");
var s = require("./287461.js");
var l = require("./673168.js");
let u = null;
const c = new TextEncoder();
const d = e => c.encode(e).buffer;
function p() {
  if (!u) {
    u = (0, l.getChatThreadLoggingSecretB64)().then(e => e == null ? null : (0, a.decodeB64)(e));
  }
  return u;
}
function f() {
  return (f = (0, i.default)(function* (e) {
    var t;
    var n;
    var r;
    var i;
    const s = yield p();
    if (!s) {
      return null;
    }
    const l = d(String(e.id.id + (e.id.fromMe ? "1" : "0") + ((t = (n = e.id.remote) === null || n === undefined ? undefined : n.toString({
      legacy: true
    })) !== null && t !== undefined ? t : "") + ((r = (i = e.id.participant) === null || i === undefined ? undefined : i.toString({
      legacy: true
    })) !== null && r !== undefined ? r : "")));
    const u = yield (0, o.hmacSha256)(s, l);
    return (0, a.encodeB64)(u);
  })).apply(this, arguments);
}