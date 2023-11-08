var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuHeading = function (e) {
  let {
    children: t
  } = e;
  const {
    size: n
  } = (0, u.useMenu)();
  return s.default.createElement(l.FlexItem, {
    padding: n === "small" ? 8 : 16,
    shrink: 0
  }, s.default.createElement(i.WDSTextSectionTitle, null, t));
};
exports.MenuSection = function (e) {
  let {
    scroll: t
  } = e;
  let n = (0, o.default)(e, d);
  return s.default.createElement(l.FlexColumn, (0, r.default)({}, n, {
    className: (0, c.default)(t === true && f.scroll)
  }));
};
exports.MenuSeparator = function () {
  return s.default.createElement(l.FlexItem, {
    xstyle: f.separator,
    margin: [8, 16]
  });
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/690495.js");
var i = require("../app/180519.js");
var u = require("./268541.js");
var s = a(require("../vendor/667294.js"));
var c = a(require("../app/156720.js"));
const d = ["scroll"];
const f = {
  scroll: {
    overflowY: "ag5g9lrv"
  },
  separator: {
    height: "kanlod6e",
    backgroundColor: "h77y0my3"
  }
};