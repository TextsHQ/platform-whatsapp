var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onBlock: t,
    onCancel: n,
    onReportSpamBlock: a,
    contact: p
  } = e;
  const [h, g] = (0, d.useState)(false);
  const E = d.default.createElement(i.Name, {
    contact: e.contact
  });
  const v = c.fbt._("Block {contact}?", [c.fbt._param("contact", E)], {
    hk: "1GHUHV"
  });
  let _;
  _ = p.isBusiness ? c.fbt._("Blocked contacts will no longer be able to call you or send you messages. This business will not be notified.", null, {
    hk: "22RfAG"
  }) : c.fbt._("Blocked contacts will no longer be able to call you or send you messages. This contact will not be notified.", null, {
    hk: "2ArDCf"
  });
  const y = c.fbt._("The last 5 messages from this user will be forwarded to WhatsApp.", null, {
    hk: "4Fe5xk"
  });
  const C = c.fbt._("Report contact", null, {
    hk: "1FgSSj"
  });
  return d.default.createElement(o.ConfirmPopup, {
    onOK: h ? a : t,
    okText: (0, l.default)("Block"),
    onCancel: n,
    title: v
  }, d.default.createElement("div", {
    className: (0, f.default)(s.uiMargin.vert12, m.border)
  }, d.default.createElement(r.CheckBox, {
    onChange: () => g(e => !e),
    checked: h,
    id: "menu-icon-block"
  }), d.default.createElement(u.TextLabel, {
    xstyle: m.checkboxLabel,
    htmlFor: "menu-icon-block"
  }, C), d.default.createElement(u.TextParagraph, {
    xstyle: m.reportSubText
  }, y)), d.default.createElement(u.TextParagraph, {
    xstyle: s.uiMargin.bottom12,
    color: "muted"
  }, _));
};
var r = require("./468926.js");
var o = require("../app/103440.js");
var l = a(require("../app/395767.js"));
var i = require("../app/21645.js");
var u = require("../app/180519.js");
var s = require("../app/676345.js");
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
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = {
  checkboxLabel: {
    marginStart: "fooq7fky"
  },
  border: {
    paddingBottom: "dledyozo",
    borderBottom: "j4zbmt6h",
    marginEnd: "jnwc1y2a"
  },
  reportSubText: {
    marginStart: "mavwm6a7",
    marginTop: "iin4x6c7"
  }
};