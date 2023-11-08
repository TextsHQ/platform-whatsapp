Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeExtensionScreenDataExtensionScreen = s;
exports.mergeExtensionScreenDataMixin = function (e, t) {
  const n = function (e) {
    const {
      extensionScreenArgs: t
    } = e;
    return (0, i.smax)("message", null, (0, r.REPEATED_CHILD)(s, t, 1, 100));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");
function s(e) {
  const {
    extensionScreenExtensionId: t,
    extensionScreenSessionId: n,
    extensionScreenT: r,
    extensionScreenName: a,
    dataElementValue: s
  } = e;
  return (0, i.smax)("extension_screen", {
    extension_id: (0, o.CUSTOM_STRING)(t),
    session_id: (0, o.CUSTOM_STRING)(n),
    t: (0, o.INT)(r),
    name: (0, o.CUSTOM_STRING)(a)
  }, (0, i.smax)("data", null, s));
}