var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("./517608.js"));
var l = a(require("../vendor/667294.js"));
const i = require("./846023.js");
var u = e => {
  let {
    text: t
  } = e;
  return l.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)(o.default.emptyContainer, o.default.panelHeight)
  }, l.default.createElement("div", {
    className: o.default.emptySticker,
    style: {
      backgroundImage: `url(${i})`
    }
  }), l.default.createElement("p", {
    className: o.default.emptyText
  }, t));
};
exports.default = u;