var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithPhoneNumberCodeScreen = function (e) {
  const {
    code: t
  } = e;
  const [n, r] = (0, y.useState)(0);
  const [A, P] = (0, y.useState)(true);
  const [O, I] = (0, y.useState)(false);
  (0, y.useEffect)(() => {
    P(false);
    u.Cmd.initialLoadReady();
  }, []);
  const R = t == null || n > 5;
  const N = (0, T.default)(e => {
    let t = n + 1;
    t = (e == null ? undefined : e.resetRefreshCount) ? 0 : n + 1;
    r(t);
    I(false);
    if (t <= 5) {
      __LOG__(2)`alt pairing: regenerating link code...`;
      (0, c.refreshAltLinkingCode)();
    }
  });
  const [D, w] = (0, M.useTimeout)(() => {
    var e;
    if (!((e = (0, s.getCurrentMarker)()) === null || e === undefined)) {
      e.addPoint("primary_hello_expire");
    }
    N();
  }, o.MINUTE_MILLISECONDS * 1);
  (0, S.useListener)(f.WAWebLinkDeviceEvents, "link_device_events:primary_hello_received", () => {
    __LOG__(2)`alt pairing: primary hello received, starting 1 minute timer for link code regeneration`;
    D();
  });
  (0, S.useListener)(f.WAWebLinkDeviceEvents, "link_device_events:force_manual_refresh", () => {
    var e;
    __LOG__(2)`alt pairing: force manual refresh received`;
    if (!((e = (0, s.getCurrentMarker)()) === null || e === undefined)) {
      e.addPoint("force_manual_refresh");
    }
    I(true);
    (0, s.initializeAltDeviceLinking)();
  });
  const [L, k] = (0, M.useTimeout)(() => {
    var e;
    __LOG__(2)`alt pairing: regenerating link code because 6-minute-TTL expired`;
    if (!((e = (0, s.getCurrentMarker)()) === null || e === undefined)) {
      e.addPoint("code_ttl_expire");
    }
    N();
  }, o.MINUTE_MILLISECONDS * 3.25);
  (0, y.useEffect)(() => {
    if (!R) {
      L();
    }
  }, [L, R]);
  const G = (0, T.default)(() => {
    w();
    k();
  });
  (0, y.useEffect)(() => {
    if (n > 5 || O) {
      G();
      (0, g.openSingleActionModal)({
        title: h.fbt._("Code expired", null, {
          hk: "35RyYy"
        }),
        body: h.fbt._("The code has expired, please generate a new one and enter it on your phone.", null, {
          hk: "3WNzAB"
        }),
        buttonText: h.fbt._("Generate new code", null, {
          hk: "1GxDXz"
        }),
        onDismiss: () => N({
          resetRefreshCount: true
        }),
        cover: true,
        shouldDismissWithoutButtonInteraction: false
      });
    }
  }, [n, O, N, G]);
  (0, v.default)(() => {
    __LOG__(2)`alt pairing: canceling link code timers`;
    G();
  });
  return y.default.createElement(d.LinkDeviceCodeView, {
    codeType: d.LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE,
    testid: "link-device-phone-number-code-view",
    apiCmd: e.apiCmd,
    title: h.fbt._("Enter code on phone", null, {
      hk: "PnfkR"
    }),
    subtitle: h.fbt._("Linking WhatsApp account {=m2} ({=m5})", [h.fbt._implicitParam("=m2", y.default.createElement("strong", {
      dir: "ltr"
    }, h.fbt._("{phone-number}", [h.fbt._param("phone-number", (0, a.formatPhone)(e.phoneNumber))], {
      hk: "4wGlLg"
    }))), h.fbt._implicitParam("=m5", y.default.createElement(l.default, {
      className: (0, E.default)(C.hintText),
      onClick: e.onClickEditPhoneNumber
    }, h.fbt._("edit", null, {
      hk: "Iweln"
    })))], {
      hk: "2e5gwT"
    }),
    instructionsKey: "qrcode",
    instructions: [y.default.createElement(p.LinkDeviceInstructionOpenWhatsAppOnPhone, {
      key: "step1"
    }), y.default.createElement(p.LinkDeviceInstructionNavigateToSettings, {
      key: "step2"
    }), y.default.createElement(p.LinkDeviceInstructionsTapLinkedDevices, {
      key: "step3"
    }), y.default.createElement("span", {
      key: "step4"
    }, h.fbt._("Tap {=m1} and enter this code on your phone", [h.fbt._implicitParam("=m1", y.default.createElement("strong", null, h.fbt._("Link with phone number instead", null, {
      hk: "2Rrf04"
    })))], {
      hk: "1hI2p0"
    }))],
    a11yInstructionsDomId: b,
    alternativeLinkDeviceMethodHint: y.default.createElement(l.default, {
      className: (0, E.default)(C.hintText),
      onClick: e.onClickLinkWithQr
    }, h.fbt._("Link with QR code", null, {
      hk: "2GkqaK"
    }))
  }, y.default.createElement("div", {
    className: (0, E.default)(C.codeContainer, !R && C.code),
    dir: "ltr",
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-label": h.fbt._("Enter code on phone:", null, {
      hk: "UTUJ7"
    })
  }, A || R ? y.default.createElement("div", {
    className: (0, E.default)(C.spinner)
  }, y.default.createElement(m.Spinner, null)) : y.default.createElement(_.LinkDevicePhoneNumberCodeCells, {
    code: (0, i.default)(e.code, "props.code"),
    "aria-details": b
  })));
};
var i = r(require("./670983.js"));
var a = require("./986120.js");
var o = require("./632157.js");
var s = require("./518043.js");
var l = r(require("./196554.js"));
var u = require("./780549.js");
var c = require("./61777.js");
var d = require("./516058.js");
var p = require("./894912.js");
var f = require("./12940.js");
var _ = require("./827181.js");
var g = require("./82263.js");
var m = require("./956113.js");
var h = require("../vendor/548360.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var E = r(require("./156720.js"));
var S = require("./808446.js");
var v = r(require("./558532.js"));
var T = r(require("./17533.js"));
var M = require("./441673.js");
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = "link-device-phone-number-code-screen-instructions";
const C = {
  hintText: {
    color: "jq3rn4u7"
  },
  codeContainer: {
    position: "g0rxnol2",
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno"
  },
  spinner: {
    width: "llchcwiw",
    height: "fpk0oxsw",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno"
  },
  code: {
    width: "gofbmt1g",
    height: "hgcm32um",
    "@media only screen and (max-width : 900px)": {
      height: "l0q610ad"
    }
  }
};