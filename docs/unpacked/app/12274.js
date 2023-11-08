var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    selectable: t,
    phoneNumber: n,
    fromMe: r
  } = e;
  const [h, E] = (0, m.useState)(null);
  const [S, v] = (0, m.useState)(null);
  const [T, M] = (0, m.useState)(null);
  const [A, b] = (0, m.useState)(null);
  function C(e, t) {
    const i = [];
    if (e == null ? undefined : e.wid) {
      const t = (0, a.formatPhone)(e.wid.user);
      i.push(m.default.createElement(s.DropdownItem, {
        testid: "mi-message-on-whatsapp",
        key: "message-on-whatsapp",
        xstyle: y.menuItem,
        action: t => (0, c.handleOpenChat)(t, e.wid, r)
      }, g.fbt._("Chat with {chat-with-phoneNumber}", [g.fbt._param("chat-with-phoneNumber", m.default.createElement("span", {
        dir: "ltr"
      }, t))], {
        hk: "mGRb7"
      })));
    }
    i.push(m.default.createElement(s.DropdownItem, {
      testid: "mi-copy-phone-number",
      key: "copy-phone-number",
      xstyle: y.menuItem,
      action: () => (0, c.handleCopyPhoneNumber)(n, e == null ? undefined : e.wid, r)
    }, g.fbt._("Copy phone number", null, {
      hk: "CCcUf"
    })));
    v(null);
    E({
      menu: i,
      event: t
    });
    b(e == null ? undefined : e.wid);
    (0, c.logClickOnPhoneNumber)(e == null ? undefined : e.wid, r);
  }
  let P = null;
  let O = null;
  if (h) {
    P = m.default.createElement(f.UIE, {
      displayName: "ContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: () => {
        E(null);
        (0, c.logCloseDialog)(A, r);
      }
    }, m.default.createElement(_.default, {
      contextMenu: h
    }));
  }
  if (S) {
    O = m.default.createElement(f.UIE, {
      displayName: "ContextSpinner",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: () => {
        v(null);
      }
    }, m.default.createElement(_.default, {
      contextMenu: S
    }));
  }
  return m.default.createElement(m.default.Fragment, null, m.default.createElement(o.SelectableLink, {
    onClick: function (e) {
      let t;
      function r() {
        return (r = (0, i.default)(function* (e, n) {
          try {
            C(yield t.getOrRun(e), n);
          } catch (e) {
            C(null, n);
            b(null);
            __LOG__(4, undefined, new Error(), true)`handlePhoneClick getUsync failed with exceptions ${e}`;
            SEND_LOGS("handlePhoneClick-getUsync");
          }
        })).apply(this, arguments);
      }
      if (T && T.isCached(n)) {
        t = T;
      } else {
        t = (0, u.usyncContactCached)();
        M(t);
      }
      if (!t.isCached(n)) {
        (function (e) {
          const t = m.default.createElement(l.FlexColumn, {
            xstyle: y.spinnerContainer,
            align: "center",
            justify: "center"
          }, m.default.createElement(d.Spinner, {
            size: 50,
            stroke: 4,
            color: "highlight"
          }), m.default.createElement(p.TextSpan, {
            xstyle: y.spinnerText,
            theme: "small",
            key: "phone_number_wrapper_loading_text"
          }, g.fbt._("Checking phone number...", null, {
            hk: "2cfR2e"
          })));
          v({
            menu: t,
            event: e
          });
          E(null);
        })(e);
      }
      (function () {
        r.apply(this, arguments);
      })(n, e);
    },
    selectable: t,
    style: {
      cursor: "pointer"
    }
  }, n), P, O);
};
var i = r(require("../vendor/348926.js"));
var a = require("./986120.js");
var o = require("./306703.js");
var s = require("./675085.js");
var l = require("./690495.js");
var u = require("./834301.js");
var c = require("./978916.js");
var d = require("./956113.js");
var p = require("./180519.js");
var f = require("./392632.js");
var _ = r(require("./37875.js"));
var g = require("../vendor/548360.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
r(require("./156720.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  spinnerContainer: {
    width: "snzbljq1",
    height: "ra71746h"
  },
  spinnerText: {
    marginTop: "eg3lofc5",
    paddingStart: "f78eapp6",
    paddingEnd: "kyc7k6mt",
    textAlign: "qfejxiq4"
  },
  menuItem: {
    paddingStart: "nqtxkp62",
    paddingEnd: "btzf6ewn"
  }
};