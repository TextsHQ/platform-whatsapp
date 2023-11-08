var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvisibleLabel = function (e) {
  let {
    children: t
  } = e;
  return r.default.createElement("span", {
    "aria-label": t
  });
};
exports.accessibleClickableButtonProps = undefined;
var r = a(require("../vendor/667294.js"));
exports.accessibleClickableButtonProps = e => {
  let {
    onClick: t,
    disabled: n
  } = e;
  const a = e => t == null ? undefined : t(e);
  return {
    onClick: e => {
      if (n !== true) {
        a(e);
      }
    },
    onKeyPress: e => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar" || e.which === 13 || e.which === 32) {
        e.preventDefault();
        a(e);
      }
    },
    disabled: n,
    tabIndex: n === true ? -1 : 0,
    role: "button"
  };
};