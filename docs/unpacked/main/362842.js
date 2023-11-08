var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, f.unproxy)(e.msg);
  const {
    ctwaContext: n
  } = t;
  if (n == null) {
    return null;
  }
  const a = n.mediaType === d.ContextInfo$ExternalAdReplyInfo$MediaType.VIDEO && n.isSuspiciousLink !== true ? p.default.createElement(p.default.Fragment, null, p.default.createElement(s.default, {
    msg: t
  }), p.default.createElement(l.default, {
    msg: t,
    context: n
  })) : p.default.createElement(p.default.Fragment, null, p.default.createElement(u.SuspiciousLabel, {
    msg: t
  }), p.default.createElement(s.default, {
    msg: t
  }), (0, i.isAdsAttributionEnabled)() ? p.default.createElement(o.default, {
    context: n,
    msg: t
  }) : p.default.createElement(r.default, {
    context: n,
    isSentByMe: (0, c.getIsSentByMe)(t),
    compose: false
  }));
  return p.default.createElement("div", {
    className: e.wrapperClass
  }, a);
};
var r = a(require("./702148.js"));
var o = a(require("./727546.js"));
var l = a(require("./106015.js"));
var i = require("../app/72696.js");
var u = require("./751349.js");
var s = a(require("./162357.js"));
var c = require("../app/787742.js");
var d = require("../app/533494.js");
var f = require("../app/163139.js");
var p = a(require("../vendor/667294.js"));