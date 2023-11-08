var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return l.default.createElement(r.default, {
    primary: e.row.title,
    secondary: e.row.description,
    theme: "list-msg",
    onClick: e.onSelect,
    detail: l.default.createElement(o.default, {
      checked: e.selected,
      hover: false,
      radio: true,
      onChange: e.onSelect,
      systemUncheckedColor: true,
      ariaLabel: e.row.title
    })
  });
};
var r = a(require("../main-chunk/170206.js"));
var o = a(require("./46650.js"));
var l = a(require("../vendor/667294.js"));