Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onMute: t,
    children: n
  } = e;
  const m = (0, p.useModelValues)(e.mute, ["id", "expiration", "callExpiration"]);
  const [g, E] = (0, f.useState)(null);
  const v = () => g != null && g !== 0 ? g : (0, c.getLastChatMuteDuration)() || (0, l.getDefaultMuteDuration)();
  (0, f.useEffect)(() => {
    if (m.expiration != null && m.expiration !== 0 && m.callExpiration != null && m.callExpiration !== 0) {
      h();
    }
  }, [m.callExpiration, m.expiration, e]);
  const _ = e.onCancel || h;
  const y = v();
  const C = f.default.createElement(i.RadioGroup, {
    name: "ractionMuteDuration",
    theme: i.RadioWithLabelThemeEnum.LARGE,
    checkedValue: y,
    options: l.ALL_MUTE_DURATIONS.map(e => {
      let {
        label: t,
        duration: n,
        radioId: a
      } = e;
      return {
        value: n,
        label: t,
        testid: a,
        onChange: () => {
          E(n);
        }
      };
    })
  });
  return f.default.createElement(a.ConfirmPopup, {
    title: f.default.createElement(r.EmojiText, {
      text: e.title
    }),
    okText: d.fbt._("Mute", null, {
      hk: "1LXamv"
    }),
    onOK: () => {
      o.ModalManager.close();
      const n = v();
      (0, c.setLastChatMuteDuration)(n);
      t((0, l.calculateMuteExpiration)(n), n, e.entryPoint == null ? 0 : e.entryPoint);
    },
    onCancel: _,
    testid: "mute-popup"
  }, n != null && f.default.createElement(u.TextDiv, {
    theme: "muted",
    size: "16",
    xstyle: s.uiPadding.bottom12
  }, n), C);
};
var a = require("../app/103440.js");
var r = require("../app/305521.js");
var o = require("../app/114850.js");
var l = require("./304792.js");
var i = require("./695431.js");
var u = require("../app/180519.js");
var s = require("../app/676345.js");
var c = require("../app/757453.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var p = require("../app/655241.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function h() {
  o.ModalManager.close();
}