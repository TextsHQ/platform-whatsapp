var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/287461.js");
var o = a(require("./46650.js"));
var l = a(require("./908081.js"));
var i = a(require("./324093.js"));
var u = require("./626194.js");
var s = a(require("./674905.js"));
var c = a(require("./969358.js"));
var d = require("../app/753233.js");
var f = require("../app/258105.js");
var p = require("../app/114850.js");
var m = a(require("./306148.js"));
var h = a(require("./887105.js"));
var g = require("./290363.js");
var E = require("./177385.js");
var v = require("../app/731344.js");
var _ = require("../app/180519.js");
var y = require("../app/454905.js");
var C = require("../app/676345.js");
var b = require("../app/499264.js");
var M = require("../vendor/548360.js");
var S = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
a(require("../app/156720.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  textHeight: {
    lineHeight: "a4ywakfo"
  }
};
function A(e, t) {
  const [n, a] = (0, S.useState)(() => (0, b.getScreenLockDurationInSeconds)());
  const [T, A] = (0, S.useState)(() => (0, b.getScreenLockEnabled)());
  const P = e => {
    (0, b.setScreenLockDurationInSeconds)(e);
    a(e);
    A(e !== 0);
    (0, v.updatePushManager)();
  };
  const O = M.fbt._("Use Screen lock for privacy", null, {
    hk: "32lbxi"
  });
  const k = M.fbt._("Screen lock", null, {
    hk: "38Cd7H"
  });
  const D = T && (0, g.getScreenLockTimerOptions)().map(e => {
    let {
      value: t,
      label: a
    } = e;
    return S.default.createElement(s.default, {
      key: t,
      title: a,
      tabIndex: -1,
      icon: S.default.createElement("div", null, S.default.createElement(o.default, {
        testid: `screen-lock-timer-radio-button-${t}`,
        key: t,
        checked: t === n,
        radio: true,
        hover: false,
        systemUncheckedColor: true,
        onChange: () => {
          e = t;
          return void (n > 0 && e > 0 ? P(e) : e === 0 ? p.ModalManager.open(S.default.createElement(m.default, {
            onSubmit: () => P(e)
          })) : p.ModalManager.open(S.default.createElement(h.default, {
            onSubmit: () => P(e)
          })));
          var e;
        }
      })),
      isLastItem: true,
      testid: "screenLockTimerOption"
    });
  });
  const I = (0, r.getABPropConfigValue)("web_abprop_screen_lock_show_learn_more_link") && S.default.createElement(S.default.Fragment, null, " ", S.default.createElement(d.ExternalLink, {
    href: (0, f.getScreenLockLearnMoreUrl)()
  }, M.fbt._("Learn more", null, {
    hk: "1hgUNd"
  })), " ");
  return S.default.createElement(l.default, {
    ref: t,
    testid: "screen-lock-drawer"
  }, S.default.createElement(u.DrawerHeader, {
    testid: "drawer-title-screen-lock",
    title: M.fbt._("Screen lock", null, {
      hk: "3420G0"
    }),
    onBack: e.onBack,
    onCancel: e.onCancel,
    focusBackOrCancel: true,
    type: (0, y.topMenuRedesignEnabled)() ? u.DRAWER_HEADER_TYPE.SMALL : u.DRAWER_HEADER_TYPE.LARGE
  }), S.default.createElement(i.default, null, S.default.createElement(c.default, {
    theme: "padding",
    animation: false
  }, S.default.createElement(_.TextHeader, {
    level: "2",
    color: "accent",
    xstyle: [w.textHeight, C.uiMargin.top6, C.uiMargin.bottom30]
  }, O), S.default.createElement(_.TextParagraph, {
    color: "secondary",
    xstyle: [w.textHeight, C.uiMargin.bottom24]
  }, M.fbt._("When enabled, you'll need to enter your password to unlock WhatsApp Web. Notifications will not appear when your screen is locked. Screen lock will be turned off when you log out.", null, {
    hk: "4or9pI"
  }), I), S.default.createElement(E.SettingsCheckListItem, {
    testid: "screen-lock-setting-checkbox",
    id: "screen-lock-setting-checkbox",
    checked: T,
    checkboxRightAligned: true,
    onChange: () => {
      if (T) {
        p.ModalManager.open(S.default.createElement(m.default, {
          onSubmit: () => P(0)
        }));
      } else {
        p.ModalManager.open(S.default.createElement(h.default, {
          onSubmit: () => P(g.DEFAULT_SCREEN_LOCK_DURATION_SECONDS)
        }));
      }
    }
  }, k), D)));
}
var P = (0, S.forwardRef)(A);
exports.default = P;