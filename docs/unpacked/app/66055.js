var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlternateMsgKey = function (e) {
  const t = e.participant != null ? (0, i.getAlternateWid)(e.participant) : null;
  if (t == null) {
    return;
  }
  return new a.default({
    fromMe: e.fromMe,
    remote: e.remote,
    id: e.id,
    participant: t
  });
};
exports.normalizeUserWidsToLidOrPn = function (e, t) {
  if (e != null && t != null && e.isLid() !== t.isLid()) {
    const n = (0, i.getAlternateWid)(e);
    if (n != null) {
      return [n, t];
    }
    const r = (0, i.getAlternateWid)(t);
    if (r != null) {
      return [e, r];
    }
  }
  return [e, t];
};
exports.normalizeWidToLid = s;
exports.normalizeWidToPn = o;
exports.normalizeWidsToAddressingMode = function (e, t) {
  return t.map(e ? s : o);
};
var i = require("./12643.js");
var a = r(require("./565754.js"));
function o(e) {
  if (e.isLid()) {
    return (0, i.getPhoneNumber)(e);
  } else {
    return e;
  }
}
function s(e) {
  if (e.isLid()) {
    return e;
  } else {
    return (0, i.getCurrentLid)(e);
  }
}