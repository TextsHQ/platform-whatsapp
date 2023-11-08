var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterPhoneNumbersFromMsg = function (e) {
  var t;
  const n = (0, c.unproxy)(e);
  if (!(0, i.getSupportsMessageFooterLinks)(n) || n.footer == null) {
    return [];
  }
  if (n.getRawFooterPhoneNumbers().length > 0) {
    return n.getRawFooterPhoneNumbers();
  }
  const [a] = d({
    content: (t = n.footer) !== null && t !== undefined ? t : "",
    cachedValue: n.getRawFooterPhoneNumbers()
  });
  n.setRawFooterPhoneNumbers(a);
  return a;
};
exports.getHeaderPhoneNumbersFromMsg = function (e) {
  var t;
  const n = (0, c.unproxy)(e);
  var a;
  if ((0, u.shouldDisplayHeaderLinks)(n, true)) {
    return f(n, ((a = n.list) === null || a === undefined ? undefined : a.title) || "");
  }
  if ((0, u.shouldDisplayHeaderLinks)(n, false)) {
    return f(n, n.title);
  }
  if (n.type === s.MSG_TYPE.INTERACTIVE && ((t = n.interactiveHeader) === null || t === undefined ? undefined : t.title) != null) {
    return f(n, n.interactiveHeader.title);
  }
  return [];
};
exports.getPhoneNumbersFromMsg = function (e, t) {
  const n = (0, c.unproxy)(e);
  const a = t != null ? t : (0, i.getInitialPageSize)(n) + 1;
  const r = (0, o.getText)(n);
  if (r == null) {
    return n.getRawPhoneNumbers();
  }
  const [l, u] = d({
    content: r,
    cachedValue: n.getRawPhoneNumbers(),
    currentIndex: n.phoneNumbersIndexParsed,
    endIndex: a
  });
  n.phoneNumbersIndexParsed = u;
  n.setRawPhoneNumbers(l);
  return l;
};
exports.getPhoneNumbersFromMsgImpl = d;
var r = require("../app/370257.js");
var o = require("../app/163755.js");
var l = a(require("./525632.js"));
var i = require("../app/787742.js");
var u = require("../app/44118.js");
var s = require("../app/373070.js");
var c = require("../app/163139.js");
function d(e) {
  const {
    content: t,
    cachedValue: n,
    currentIndex: a = 0,
    endIndex: o = 1 / 0
  } = e;
  if (a >= o) {
    return [n, o];
  }
  const i = (0, r.firstNCodepoints)(t, o);
  let u = (0, l.default)(i);
  if ((0, r.numCodepoints)(t) > o && u.length > 0) {
    const e = u[u.length - 1];
    if ((0, r.numCodepoints)(i.slice(0, e.index)) + (0, r.numCodepoints)(e.phone) === o) {
      u = (0, l.default)(t);
    }
  }
  return [u, o];
}
function f(e, t) {
  if (e.getRawHeaderPhoneNumbers().length > 0) {
    return e.getRawHeaderPhoneNumbers();
  }
  const [n] = d({
    content: t,
    cachedValue: e.getRawHeaderPhoneNumbers()
  });
  e.setRawHeaderPhoneNumbers(n);
  return n;
}