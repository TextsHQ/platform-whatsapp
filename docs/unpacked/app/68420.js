var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    className: t,
    children: n = "",
    link: r,
    selectable: u
  } = e;
  return l.default.createElement(a.SelectableLink, {
    className: t,
    onClick: () => {
      o.ModalManager.open(l.default.createElement(s.default, {
        link: r
      }));
      i.Cmd.openLongLinkModal();
    },
    selectable: u,
    style: {
      cursor: "pointer"
    }
  }, n);
};
var i = require("./780549.js");
var a = require("./306703.js");
var o = require("./114850.js");
var s = r(require("./569984.js"));
var l = r(require("../vendor/667294.js"));