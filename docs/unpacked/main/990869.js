var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerContainer = function (e) {
  let {
    onDateSelected: t
  } = e;
  const n = (0, l.getHistorySyncEarliestDate)() * 1000;
  const a = new Date();
  const d = new Date(n);
  const f = (0, s.default)();
  return i.default.createElement(o.default, {
    xstyle: c.overrideRotateFocusStyles
  }, i.default.createElement("div", {
    ref: f,
    tabIndex: -1,
    className: (0, u.default)(c.container)
  }, i.default.createElement(r.DatePicker, {
    maxDate: a,
    minDate: d,
    onDateSelected: t
  })));
};
var r = require("./930600.js");
var o = a(require("../app/241115.js"));
var l = require("../app/157942.js");
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
var s = a(require("../app/401715.js"));
const c = {
  container: {
    backgroundColor: "kqrqaf7v",
    width: "tcgih8fm",
    height: "c0nlwtcm",
    boxShadow: "o8gxb310",
    borderTopStartRadius: "ikqdvm1y",
    borderTopEndRadius: "m3qqxsiz",
    borderBottomEndRadius: "r1ncx0sg",
    borderBottomStartRadius: "mmj7r7ye"
  },
  overrideRotateFocusStyles: {
    position: "p8m96bff"
  }
};