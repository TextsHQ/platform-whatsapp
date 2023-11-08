Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFRXFrxParameters = l;
exports.makeFRXFrxTagsetTag = s;
exports.mergeFRXMixin = function (e, t) {
  const n = function (e) {
    const {
      tagArgs: t,
      parametersArgs: n,
      spamListReportee: a,
      contextElementValue: u
    } = e;
    return (0, i.smax)("iq", null, (0, i.smax)("spam_list", {
      reportee: (0, o.USER_JID)(a)
    }), (0, i.smax)("frx", null, (0, i.smax)("tagset", null, (0, r.REPEATED_CHILD)(s, t, 0, 20)), (0, i.smax)("context", null, u), (0, r.OPTIONAL_CHILD)(l, n)));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");
function s(e) {
  const {
    tagValue: t
  } = e;
  return (0, i.smax)("tag", {
    value: (0, o.CUSTOM_STRING)(t)
  });
}
function l(e) {
  const {
    parametersElementValue: t
  } = e;
  return (0, i.smax)("parameters", null, t);
}