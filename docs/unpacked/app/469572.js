var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHandlerProps = function (e) {
  const t = {
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter
  };
  if (typeof e.role == "string") {
    var n;
    var r;
    t.role = e.role;
    if (e.disabled !== true) {
      t.onClick = e.onClick;
      t.onBlur = e.onBlur;
      t.onFocus = e.onFocus;
      if (t.onClick != null) {
        t.onKeyPress = e => {
          if ((0, i.default)(e)) {
            e.stopPropagation();
            e.preventDefault();
            e.currentTarget.click();
          }
        };
      }
    }
    t.tabIndex = (n = e.tabIndex) !== null && n !== undefined ? n : 0;
    t.disabled = (r = e.disabled) !== null && r !== undefined ? r : undefined;
    t["aria-disabled"] = t.disabled;
  }
  return t;
};
var i = r(require("./83162.js"));