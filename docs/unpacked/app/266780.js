var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, I.useState)(M.Socket.state === T.SOCKET_STATE.UNPAIRED_IDLE);
  const [r, i] = (0, I.useState)(!y.default.online);
  const [a, o] = (0, I.useState)(M.Socket.state === T.SOCKET_STATE.UNPAIRED);
  (0, N.useListener)(M.Socket, "change:state change:online", () => {
    n(M.Socket.state === T.SOCKET_STATE.UNPAIRED_IDLE);
    i(!y.default.online);
    o(M.Socket.state === T.SOCKET_STATE.UNPAIRED);
  });
  const s = () => {
    u.Cmd.refreshQR();
  };
  let c;
  c = r ? I.default.createElement(L, null, I.default.createElement("div", {
    className: m.default.qrButton,
    key: "expiry"
  }, I.default.createElement("div", {
    className: m.default.qrButtonIcon
  }, I.default.createElement(d.ConnectionIcon, null)), O.fbt._("No Internet connection", null, {
    hk: "3BHkby"
  }))) : t ? I.default.createElement(L, null, I.default.createElement("button", {
    className: m.default.qrButton,
    key: "expiry",
    onClick: s
  }, I.default.createElement("div", {
    className: m.default.qrButtonIcon
  }, I.default.createElement(S.RefreshLargeIcon, null)), O.fbt._("Click to reload QR code", null, {
    hk: "pEkpW"
  }))) : a ? I.default.createElement(L, null) : I.default.createElement("div", {
    className: m.default.qrcode
  }, I.default.createElement(A.Spinner, null));
  const p = I.default.createElement(I.default.Fragment, null, I.default.createElement(h.default, null), I.default.createElement(w, null));
  return I.default.createElement(_.LinkDeviceCodeView, {
    codeType: _.LinkDeviceCodeViewCodeType.QR,
    apiCmd: e.apiCmd,
    banners: p,
    title: O.fbt._("Use WhatsApp on your computer", null, {
      hk: "3GyDDC"
    }),
    screenreaderOnlySubtitle: e.showAlternateDeviceLinkingNux ? {
      onClick: e.onClickLinkWithPhoneNumber,
      node: I.default.createElement("div", {
        className: m.default.hintText
      }, O.fbt._("Link with phone number instead.", null, {
        hk: "210y2p"
      }))
    } : null,
    instructionsKey: "qrcode",
    instructions: [I.default.createElement(g.LinkDeviceInstructionOpenWhatsAppOnPhone, {
      key: "step1"
    }), I.default.createElement(g.LinkDeviceInstructionNavigateToSettings, {
      key: "step2"
    }), I.default.createElement(g.LinkDeviceInstructionsTapLinkedDevices, {
      key: "step3"
    }), I.default.createElement("span", {
      key: "step4"
    }, O.fbt._("Point your phone to this screen to capture the QR code", null, {
      hk: "bhyTN"
    }))],
    alternativeLinkDeviceMethodHint: e.showAlternateDeviceLinkingNux ? I.default.createElement(l.Clickable, {
      as: "span",
      dataTestId: "link-device-qrcode-alt-linking-hint",
      className: m.default.hintText,
      onClick: e.onClickLinkWithPhoneNumber
    }, O.fbt._("Link with phone number", null, {
      hk: "3oGumE"
    })) : null
  }, c);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./678002.js");
var s = require("./396574.js");
var l = require("./950987.js");
var u = require("./780549.js");
var c = require("./842636.js");
require("./103440.js");
var d = require("./177863.js");
var p = require("./445729.js");
require("./306703.js");
var f = require("./914368.js");
var _ = require("./516058.js");
var g = require("./894912.js");
var m = r(require("./267986.js"));
var h = r(require("./181064.js"));
require("./114850.js");
var y = r(require("./99398.js"));
var E = require("./647781.js");
var S = require("./905077.js");
var v = require("./326314.js");
var T = require("./226562.js");
var M = require("./38878.js");
var A = require("./956113.js");
var b = require("./65410.js");
var C = r(require("./844453.js"));
var P = r(require("./256695.js"));
var O = require("../vendor/548360.js");
var I = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = D(t);
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
var R = r(require("./710629.js"));
var N = require("./808446.js");
function D(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (D = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function w() {
  return null;
}
function L(e) {
  const t = e.children;
  const [n, r] = (0, I.useState)(false);
  const [l, d] = (0, I.useState)(null);
  const _ = (0, R.default)(() => {
    r(true);
  }, 100);
  const g = () => {
    if (p.Conn.connected) {
      return Promise.resolve(undefined);
    }
    const e = p.Conn.ref;
    return v.waSignalStore.getRegistrationInfo().then(function () {
      var t = (0, i.default)(function* (t) {
        const n = yield b.waNoiseInfo.get();
        if (!n || !n.staticKeyPair || !t) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("Empty noiseInfo or empty regInfo");
          return null;
        }
        const r = (0, a.encodeB64)(n.staticKeyPair.pubKey);
        const i = (0, a.encodeB64)(t.identityKeyPair.pubKey);
        const s = yield (0, o.getADVSecretKey)();
        return e + "," + r + "," + i + "," + s + "," + c.DEVICE_PLATFORM;
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
  };
  const h = (0, I.useCallback)(() => {
    g().then(e => {
      if (e != null && e !== "") {
        d(e);
        P.default.inc();
      }
    });
  }, [d]);
  const y = (0, I.useCallback)(e => {
    if (l != null && e != null) {
      e.removeAttribute("title");
    }
  }, [l]);
  (0, N.useListener)(p.Conn, "change:ref", h);
  (0, I.useEffect)(() => {
    h();
    u.Cmd.initialLoadReady();
    return () => {
      P.default.reset();
    };
  }, []);
  const S = () => {
    if (n) {
      r(false);
    }
    _();
  };
  const T = () => {
    _.cancel();
    r(false);
  };
  const M = (0, s.classnamesConvertMeToStylexPlease)({
    [m.default.idle]: !!t,
    [m.default.qrcode]: true
  });
  const A = n && t == null ? {
    cursor: "none"
  } : null;
  return l != null && I.default.createElement(E.WAWebQRCode, {
    data: l,
    size: f.QR_EDGE,
    colorDark: "#122e31",
    onChange: y
  }, e => I.default.createElement("div", {
    ref: e,
    className: M,
    "data-ref": l,
    onContextMenu: null,
    style: A,
    onMouseMove: S,
    onMouseLeave: T
  }, I.default.createElement(C.default, {
    transitionName: "scale"
  }, t), I.default.createElement("div", {
    className: m.default.codeLogo
  }, I.default.createElement(k, null))));
}
const k = () => I.default.createElement("span", {
  className: m.default.icon
}, I.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "64",
  height: "64",
  viewBox: "0 0 64 64"
}, I.default.createElement("path", {
  fill: "#FFF",
  d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z"
}), I.default.createElement("path", {
  fill: "#123033",
  d: "M50.801 13.135c-4.739-4.742-11.039-7.354-17.752-7.357-13.837 0-25.094 11.253-25.099 25.085a25.039 25.039 0 0 0 3.349 12.541l-3.56 12.999 13.304-3.488a25.084 25.084 0 0 0 11.996 3.054h.011c13.83 0 25.088-11.256 25.095-25.087.002-6.703-2.607-13.005-7.344-17.747zM33.05 51.733h-.008a20.866 20.866 0 0 1-10.62-2.906l-.762-.452-7.894 2.07 2.108-7.694-.497-.789a20.802 20.802 0 0 1-3.189-11.097c.004-11.496 9.361-20.85 20.87-20.85a20.73 20.73 0 0 1 14.746 6.115 20.733 20.733 0 0 1 6.104 14.752c-.006 11.497-9.363 20.851-20.858 20.851z"
}), I.default.createElement("path", {
  fill: "#123033",
  d: "M25.429 19.26a8.65 8.65 0 0 0-1.028.011 2.352 2.352 0 0 0-.95.255c-.221.114-.427.277-.75.582-.305.288-.481.54-.668.782a6.974 6.974 0 0 0-1.443 4.291l.001.003a8.243 8.243 0 0 0 .844 3.607c1.043 2.307 2.763 4.746 5.035 7.008a24.676 24.676 0 0 0 1.657 1.6 24.145 24.145 0 0 0 9.814 5.229s.751.179 1.391.218c.021.001.04.003.061.003a9.207 9.207 0 0 0 1.422-.033 5.086 5.086 0 0 0 2.129-.59c.423-.225.623-.337.978-.561 0 0 .11-.072.319-.23.345-.257.558-.438.845-.736.211-.22.394-.479.534-.772.2-.417.401-1.213.481-1.874.061-.505.042-.781.036-.952-.011-.275-.238-.558-.487-.678l-1.486-.668s-2.222-.967-3.581-1.587a1.278 1.278 0 0 0-.452-.104c-.341-.021-.723.068-.966.324v-.004c-.013-.001-.182.145-2.031 2.385-.102.122-.341.387-.754.362a1.086 1.086 0 0 1-.185-.029 3.402 3.402 0 0 1-.49-.17c-.316-.134-.427-.185-.643-.278l-.013-.006a15.361 15.361 0 0 1-4.013-2.556 15.88 15.88 0 0 1-.927-.885c-1.074-1.041-1.953-2.148-2.607-3.24-.035-.06-.09-.146-.15-.242-.107-.174-.225-.381-.262-.523-.095-.376.157-.678.157-.678s.622-.68.911-1.05c.278-.356.518-.704.671-.952.301-.484.39-.982.238-1.37a216.767 216.767 0 0 0-2.219-5.215c-.156-.339-.598-.589-1.005-.636a6.284 6.284 0 0 0-.414-.041"
})));