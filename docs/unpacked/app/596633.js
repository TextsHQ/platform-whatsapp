var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deriveNonce = y;
exports.deriveNonceString = S;
exports.genContentBindingForMsg = function () {
  return b.apply(this, arguments);
};
exports.genNonceForMsg = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./562075.js");
var s = require("./301055.js");
var l = r(require("./670983.js"));
var u = require("./287461.js");
var c = require("./163755.js");
var d = require("./787742.js");
var p = require("./373070.js");
var f = require("./459857.js");
var _ = require("./365214.js");
var g = require("./574819.js");
const m = "Rcat";
function h() {
  return (h = (0, i.default)(function* (e) {
    if (e.nonce != null) {
      return e.nonce;
    }
    const t = (0, d.getSender)(e);
    const n = (0, f.getMaybeMeUser)();
    if (t == null || n == null) {
      return null;
    }
    if (e.rcat == null || e.messageSecret == null) {
      return null;
    }
    const r = yield S(e.id.id, e.messageSecret, (0, g.widToUserJid)(t), (0, g.widToUserJid)(n));
    e.nonce = r;
    return r;
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t, n, r) {
    const i = new TextEncoder().encode([e, n, r, m].join(""));
    const a = yield (0, o.extractAndExpand)(t, i, 32);
    return new Uint8Array(a);
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e, t, n, r) {
    const i = yield y(e, t, n, r);
    return (0, a.encodeB64UrlSafe)(i, true);
  })).apply(this, arguments);
}
function T(e) {
  var t;
  const n = (0, d.getCanonicalUrl)(e);
  if (n == null || n === "") {
    return null;
  }
  const r = (t = (0, _.parseYoutubeVideoId)(n)) !== null && t !== undefined ? t : n;
  return new TextEncoder().encode(r);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    const n = yield (0, s.hmacSha256)(t, e);
    return new Uint8Array(n).slice(0, 8);
  })).apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    const n = (0, l.default)((0, d.getFrom)(e), "getFrom(msg)");
    const r = T(e);
    const i = (0, d.getMessageSecret)(e);
    if (!(0, u.getABPropConfigValue)("web_youtube_rcat_chat_generation_enabled") || t.length === 0 || e.type !== p.MSG_TYPE.CHAT || !(0, c.getIsUrlMessage)(e) || i == null || r == null || !(0, d.getIsSentByMe)(e) || t.length > (0, u.getABPropConfigValue)("maximum_group_size_for_rcat")) {
      return null;
    }
    const a = (0, g.widToUserJid)(n);
    const o = new Map();
    const s = t.map(t => {
      const n = (0, g.widToUserJid)(t);
      return y((0, d.getId)(e).id, i, a, n).then(e => M(r, e)).then(e => {
        o.set(n, e);
      });
    });
    yield Promise.all(s);
    return o;
  })).apply(this, arguments);
}