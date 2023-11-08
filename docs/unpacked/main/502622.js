var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    seenCount: t,
    onClick: n
  } = e;
  const a = (0, l.getUserPrivacySettings)().readReceipts === "none";
  const p = a ? c.default.createElement(i.VisibilityOffIcon, {
    className: (0, d.default)(f.iconSeen)
  }) : c.default.createElement(c.default.Fragment, null, c.default.createElement(u.VisibilityOnIcon, {
    className: (0, d.default)(f.iconSeen)
  }), c.default.createElement("div", {
    className: (0, d.default)(f.seenCount)
  }, t));
  const m = n ? c.default.createElement(o.default, {
    xstyle: f.container,
    onClick: n,
    "aria-label": s.fbt._("See viewers", null, {
      hk: "THnuz"
    })
  }, p) : p;
  if (a || t != null) {
    return c.default.createElement("div", {
      className: (0, d.default)(f.container),
      "aria-label": s.fbt._("Seen count", null, {
        hk: "2r6iCk"
      })
    }, m);
  }
  return c.default.createElement(r.Spinner, {
    stroke: 3,
    size: 12
  });
};
var r = require("../app/956113.js");
var o = a(require("../app/625903.js"));
var l = require("../app/757453.js");
var i = require("../app/54052.js");
var u = require("../app/442176.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  iconSeen: {
    color: "lxozqee9"
  },
  seenCount: {
    marginStart: "p3lsiedt",
    color: "lxozqee9"
  },
  container: {
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno"
  }
};