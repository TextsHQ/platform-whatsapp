Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetNewDescriptionMixinMixin = function (e, t) {
  const n = function (e) {
    const {
      descriptionElementValue: t
    } = e;
    return (0, r.smax)("metadata", null, (0, r.smax)("description", null, t));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");