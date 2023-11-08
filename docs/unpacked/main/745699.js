var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    elementId: t,
    onClick: n,
    divider: a
  } = e;
  if (!document.queryCommandSupported("copy")) {
    return null;
  }
  return c.default.createElement(l.DrawerButtonSimple, {
    testid: "li-copy-link",
    icon: c.default.createElement(r.CopyIcon, {
      xstyle: d.icon
    }),
    onClick: () => function (e, t) {
      if ((0, o.copyToClipboard)(e)) {
        u.ToastManager.open(c.default.createElement(i.Toast, {
          msg: s.fbt._("Link copied to clipboard.", null, {
            hk: "2d44NZ"
          })
        }));
      } else {
        u.ToastManager.open(c.default.createElement(i.Toast, {
          msg: s.fbt._("Couldn't copy to clipboard. Copy using mouse or keyboard.", null, {
            hk: "4aKgWx"
          })
        }));
      }
      if (t != null) {
        t();
      }
    }(t, n),
    divider: a
  }, s.fbt._("Copy link", null, {
    hk: "2ZtjA3"
  }));
};
var r = require("./528259.js");
var o = require("./985714.js");
var l = require("./36045.js");
var i = require("../app/625786.js");
var u = require("../app/390737.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const d = {
  icon: {
    color: "rahkaw8d"
  }
};