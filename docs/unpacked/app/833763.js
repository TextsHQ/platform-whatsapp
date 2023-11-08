Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBufferMixin = function (e, t) {
  const n = function (e) {
    const {
      addElementValue: t
    } = e;
    return (0, r.smax)("add", null, t);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");