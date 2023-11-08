Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeHackBaseIQGetRequestMixin = function (e, t) {
  const n = function (e) {
    const {
      iqFrom: t
    } = e;
    return (0, l.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
      from: (0, a.OPTIONAL)(i.USER_JID, t),
      to: i.S_WHATSAPP_NET
    }));
  }(t);
  return (0, o.mergeStanzas)(e, n);
};
var a = require("../app/93864.js");
var r = require("../app/758616.js");
var o = require("../app/770006.js");
var l = require("./269100.js");
var i = require("../app/716358.js");