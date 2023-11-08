var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultName = function (e) {
  let t;
  if (e.type === i.MSG_TYPE.DOCUMENT) {
    const n = (e.filename || "").trim();
    t = n || (e.caption || "").trim() || s.default._("Untitled", null, {
      hk: "4dgIss"
    }).toString();
    if (!(n && function (e) {
      return /[\.].{1,4}$/.test(e);
    }(n))) {
      t = d(t, e);
    }
  } else if (e.type === i.MSG_TYPE.VCARD) {
    t = (e.vcardFormattedName || "").trim() || f(e);
    t = d(t, e);
  } else if (e.type === i.MSG_TYPE.MULTI_VCARD) {
    t = e.vcardList ? (0, u.getNameString)(e.vcardList).toString() : f(e);
    t = d(t, e);
  } else {
    t = f(e);
    t = d(t, e);
  }
  return t;
};
var r = a(require("../app/817173.js"));
var o = require("../app/63014.js");
var l = require("../app/937484.js");
var i = require("../app/373070.js");
var u = require("../app/105284.js");
var s = a(require("../app/286816.js"));
var c = a(require("../vendor/730381.js"));
function d(e, t) {
  let n = e;
  const a = t.type === i.MSG_TYPE.VCARD || t.type === i.MSG_TYPE.MULTI_VCARD ? "text/vcard" : t.mimetype;
  const r = (0, l.getExtension)(a);
  if (!n.endsWith(r)) {
    n += r;
  }
  return n;
}
function f(e) {
  const t = c.default.unix(e.t).locale("en");
  const n = `${t.format("YYYY-MM-DD")} at ${t.format(o.Clock.getIs24Hour() ? "HH.mm.ss" : "h.mm.ss A")}`;
  return `WhatsApp ${(0, r.default)(e.type)} ${n}`;
}