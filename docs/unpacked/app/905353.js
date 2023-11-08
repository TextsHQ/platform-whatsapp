Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeInternalTestMixin = function (e, t) {
  const n = function (e) {
    const {
      testConfig: t
    } = e;
    return (0, i.smax)("smax$any", null, (0, i.smax)("test", {
      config: (0, r.OPTIONAL)(o.CUSTOM_STRING, t)
    }));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");