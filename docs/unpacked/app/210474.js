Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUIStateSetUistatesetUistate = o;
exports.mergeUIStateSetMixin = function (e, t) {
  const n = function (e) {
    const {
      hasUistate: t
    } = e;
    return (0, i.smax)("spam_list", null, (0, i.smax)("uistateset", null, (0, r.HAS_OPTIONAL_CHILD)(o, t)));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./770006.js");
function o() {
  return (0, i.smax)("uistate", {
    value: "spam_banner"
  });
}