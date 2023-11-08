Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeUpdateBlockListReportBlockEntryPointMixin = function (e, t) {
  const n = function (e) {
    const {
      entryPointSource: t
    } = e;
    return (0, r.smax)("iq", null, (0, r.smax)("entry_point", {
      source: (0, a.CUSTOM_STRING)(t)
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");