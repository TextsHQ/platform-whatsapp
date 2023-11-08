Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBaseIQGetRequestMixin = function (e) {
  const t = (0, a.smax)("iq", {
    id: (0, o.generateId)(),
    type: "get"
  });
  return (0, r.mergeStanzas)(e, t);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("../app/716358.js");