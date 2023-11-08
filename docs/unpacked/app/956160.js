Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeGetIQMixin = function (e, t) {
  const n = function (e) {
    const {
      iqTarget: t
    } = e;
    return (0, a.mergeServerDomainIQMixin)((0, r.smax)("iq", {
      target: (0, o.JID)(t)
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./341205.js");
var o = require("./716358.js");