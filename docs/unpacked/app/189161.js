var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgKeyNewSHA256Id = exports.getMsgKeyNewId = exports.genMsgKeyUint = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./390934.js");
var l = r(require("./983254.js"));
var u = require("./632157.js");
var c = require("./459857.js");
const d = () => {
  var e;
  const t = (0, u.unixTime)();
  const n = (e = (0, c.getMaybeMeUser)()) === null || e === undefined ? undefined : e.toString();
  const r = (0, s.parseHex)((0, s.randomHex)(16));
  const i = new o.Binary();
  i.writeInt64(t);
  i.writeString(n);
  i.writeBuffer(r);
  return i.readByteArray();
};
exports.genMsgKeyUint = d;
exports.getMsgKeyNewId = () => {
  const e = new Uint8Array((0, a.decodeB64)((0, l.default)(d().join(""))), 0, 9);
  return "3EB0" + (0, s.toHex)(e);
};
const p = function () {
  var e = (0, i.default)(function* () {
    const e = new Uint8Array(yield self.crypto.subtle.digest("SHA-256", d()), 0, 9);
    return "3EB0" + (0, s.toHex)(e);
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.getMsgKeyNewSHA256Id = p;