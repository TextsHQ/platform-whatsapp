Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeHackBaseIQGetRequestMixin = function (e, t) {
  const n = function (e) {
    const {
      iqFrom: t
    } = e;
    return (0, o.mergeBaseIQGetRequestMixin)((0, i.smax)("iq", {
      from: (0, r.OPTIONAL)(s.USER_JID, t),
      to: s.S_WHATSAPP_NET
    }));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./910151.js");
var s = require("./716358.js");