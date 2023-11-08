Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeServerFrankingTagMixin = function (e, t) {
  const n = function (e) {
    const {
      reportingTagElementValue: t
    } = e;
    return (0, r.smax)("smax$any", null, (0, r.smax)("franking", null, (0, r.smax)("reporting_tag", null, t)));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");