var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return o.default.createElement("span", {
    className: (0, s.default)(!e.inline && l.block)
  }, o.default.createElement(a.default, {
    dataTab: e.dataTab,
    onClick: e.action
  }, o.default.createElement("span", {
    className: (0, s.default)(l.actionText)
  }, e.children)), o.default.createElement(i.ChevronRightTextIcon, {
    className: (0, s.default)(l.chevron),
    directional: true
  }));
};
var i = require("./701173.js");
var a = r(require("./625903.js"));
var o = r(require("../vendor/667294.js"));
var s = r(require("./156720.js"));
const l = {
  block: {
    display: "f804f6gw"
  },
  actionText: {
    ":hover": {
      textDecoration: "edeob0r2",
      cursor: "t94efhq2"
    }
  },
  chevron: {
    display: "l7jjieqr",
    marginTop: "hymafltn",
    marginStart: "k6y3xtnu",
    verticalAlign: "fewfhwl7"
  }
};