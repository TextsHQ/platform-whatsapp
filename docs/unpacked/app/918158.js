Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMyAddOnsRequest = function (e) {
  const {
    myAddonsLimit: t,
    myAddonsJid: n
  } = e;
  return (0, a.mergeSelfIQGetRequestMixin)((0, i.smax)("iq", null, (0, i.smax)("my_addons", {
    limit: (0, o.INT)(t),
    jid: (0, r.OPTIONAL)(o.JID, n)
  })));
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./738312.js");
var o = require("./716358.js");