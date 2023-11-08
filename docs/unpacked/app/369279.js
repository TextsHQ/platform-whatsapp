Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetNameMixinMixin = function (e, t) {
  const n = function (e) {
    const {
      nameElementValue: t
    } = e;
    return (0, r.smax)("metadata", null, (0, r.smax)("name", null, t));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");