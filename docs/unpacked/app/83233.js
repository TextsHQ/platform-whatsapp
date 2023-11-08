var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  var n;
  var r;
  const s = (0, a.useRef)();
  const l = (t == null ? undefined : t.disabled) === true;
  const u = l ? o : e;
  return [e => {
    s.current = e;
  }, {
    "aria-disabled": (n = t == null ? undefined : t.disabled) !== null && n !== undefined ? n : undefined,
    onClick: u,
    onKeyPress: function (e) {
      var t;
      if ((0, i.default)(e)) {
        e.stopPropagation();
        e.preventDefault();
        if (!((t = s.current) === null || t === undefined)) {
          t.click();
        }
      }
    },
    role: "button",
    tabIndex: l ? -1 : (r = t == null ? undefined : t.tabIndex) !== null && r !== undefined ? r : 0
  }];
};
var i = r(require("./83162.js"));
var a = require("../vendor/667294.js");
function o() {}