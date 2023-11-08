Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeContentTypePayMixin = function (e) {
  const t = (0, r.smax)("message", {
    type: "pay"
  });
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");