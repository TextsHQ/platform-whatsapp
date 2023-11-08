var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    link: t
  } = e;
  const {
    suspiciousCharacters: n,
    domain: r,
    href: f
  } = t;
  const E = r.split(".");
  const S = E.map((e, t) => {
    let r = false;
    const i = e.split("").map((e, i) => {
      const a = n && n.has(e);
      r = a || r;
      const o = a ? (0, p.default)(g) : undefined;
      return d.default.createElement("span", {
        key: `${t}-${i}-${e}`,
        className: o
      }, e);
    });
    const a = r ? (0, p.default)(_) : undefined;
    return d.default.createElement(d.Fragment, {
      key: `${t}-${e}`
    }, d.default.createElement("span", {
      className: a
    }, i), t + 1 !== E.length ? d.default.createElement("span", null, ".") : null);
  });
  const [v, T] = f.split(r);
  return d.default.createElement(a.ConfirmPopup, {
    title: c.fbt._("Suspicious link", null, {
      hk: "J2Yam"
    }),
    okText: c.fbt._("Cancel", null, {
      hk: "H0gNq"
    }),
    cancelText: c.fbt._("Open link", null, {
      hk: "1yYoWm"
    }),
    onOK: y,
    onCancel: () => {
      const {
        href: e
      } = t;
      (0, o.openExternalLink)(e);
      u.ModalManager.close();
      i.Cmd.closeLongLinkModal(true);
    },
    type: l.ModalTheme.LinkPopup
  }, d.default.createElement("div", {
    className: (0, p.default)(m)
  }, c.fbt._("This link contains unusual characters. It may be trying to appear as another site.", null, {
    hk: "4ybh1b"
  }), " ", d.default.createElement(o.ExternalLink, {
    href: (0, s.getSuspiciousLinkFaqUrl)()
  }, c.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }))), d.default.createElement("div", {
    className: (0, p.default)(h)
  }, v, S, T));
};
var i = require("./780549.js");
var a = require("./103440.js");
var o = require("./753233.js");
var s = require("./258105.js");
var l = require("./118612.js");
var u = require("./114850.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var p = r(require("./156720.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
  color: "o2sglzf9"
};
const g = {
  fontWeight: "nbipi2bn"
};
const m = {
  marginBottom: "brac1wpa"
};
const h = {
  display: "c32ccnay",
  maxHeight: "ih8khgda",
  marginTop: "opp68qpq",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  lineHeight: "r5qsrrlp",
  textOverflow: "lhj4utae",
  overflowWrap: "fd365im1",
  WebkitLineClamp: "s7u03v8d",
  WebkitBoxOrient: "aoi073rw"
};
const y = () => {
  u.ModalManager.close();
  i.Cmd.closeLongLinkModal(true);
};