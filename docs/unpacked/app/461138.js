var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithPhoneNumber = function (e) {
  const [t, n] = (0, m.useState)(S.STEP1_PHONE_NUMBER_ENTRY);
  const [r, E] = (0, m.useState)(null);
  const [v, T] = (0, m.useState)(null);
  const [M, A] = (0, m.useState)(false);
  const b = () => (0, f.openSingleActionModal)({
    title: g.fbt._("Something went wrong", null, {
      hk: "1eNgoD"
    }),
    body: g.fbt._("Please try again or link with the QR code.", null, {
      hk: "2kFSV3"
    }),
    onDismiss: () => {
      n(S.STEP1_PHONE_NUMBER_ENTRY);
    }
  });
  const C = (0, y.default)(function () {
    var t = (0, a.default)(function* (t, r) {
      var i;
      E(t);
      A(false);
      n(S.STEP2_DISPLAY_CODE);
      try {
        if (_.default.online) {
          const e = yield (0, u.genLinkDeviceCodeForPhoneNumber)(t, r);
          T(e);
        }
      } catch (t) {
        var a;
        if (!((a = (0, s.getCurrentMarker)()) === null || a === undefined)) {
          a.addPoint("gen_code_exception");
        }
        yield (0, u.resetLinkDeviceState)({
          linkDeviceMethod: u.LinkDeviceMethodType.ALT_DEVICE_LINKING
        });
        if (t instanceof l.CompanionHelloError) {
          __LOG__(3)`alt pairing: a companion-hello error happened while starting flow: ${t}`;
          switch ((i = t.type) === null || i === undefined ? undefined : i.name) {
            case "IQErrorNonSupportedPrimary":
              n(S.STEP1_PHONE_NUMBER_ENTRY);
              return void A(true);
            case "IQErrorFeatureNotAvailable":
              n(S.STEP1_PHONE_NUMBER_ENTRY);
              return void (0, f.openSingleActionModal)({
                title: g.fbt._("Limited availability", null, {
                  hk: "2W7TMO"
                }),
                body: g.fbt._("This feature is not available to you yet, it's coming soon. Link with QR Code instead.", null, {
                  hk: "1QlshR"
                }),
                buttonText: g.fbt._("Link with QR code", null, {
                  hk: "1C9HGe"
                }),
                onDismiss: () => e.onClickLinkWithQr()
              });
            case "IQErrorRateOverlimit":
              n(S.STEP1_PHONE_NUMBER_ENTRY);
              return void (0, f.openSingleActionModal)({
                title: g.fbt._("Too many attempts", null, {
                  hk: "30anj2"
                }),
                body: g.fbt._("There were too many attempts to link a device. Please try again later.", null, {
                  hk: "2MxcG3"
                }),
                onDismiss: () => e.onClickLinkWithQr()
              });
          }
        }
        __LOG__(4, undefined, new Error(), true)`alt pairing: unexpected error happened while starting flow: ${t}`;
        SEND_LOGS("alt pairing: unexpected error happened while starting flow");
        b();
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
  const P = function () {
    var e = (0, a.default)(function* () {
      var e;
      if (t === S.STEP2_DISPLAY_CODE && r != null) {
        T(null);
        if (!((e = (0, s.getCurrentMarker)()) === null || e === undefined)) {
          e.addPoint("refresh_code");
        }
        yield (0, u.resetLinkDeviceState)({
          linkDeviceMethod: u.LinkDeviceMethodType.ALT_DEVICE_LINKING
        });
        yield C(r, false);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  (0, h.useListener)(c.WAWebLinkDeviceEvents, "link_device_events:refresh_alt_linking_code", P);
  (0, h.useListener)(_.default, "change:online", () => {
    if (_.default.online) {
      P();
    } else {
      T(null);
    }
  });
  (0, h.useListener)(c.WAWebLinkDeviceEvents, "link_device_events:error_alt_linking", b);
  if (r == null && t !== S.STEP1_PHONE_NUMBER_ENTRY) {
    __LOG__(4, undefined, new Error(), true)`alt pairing: Invalid state while linking phone number, phone number was null but tried to display code screen`;
    SEND_LOGS("alt pairing: invalid ui state: null phone number in code screen");
    n(S.STEP1_PHONE_NUMBER_ENTRY);
  }
  switch (t) {
    case S.STEP1_PHONE_NUMBER_ENTRY:
      return m.default.createElement(p.LinkWithPhoneNumberEntryScreen, (0, i.default)({
        initialPhoneNumber: r,
        showUpdatePrimaryAppBanner: M,
        onSubmitPhoneNumber: e => C(e, true)
      }, e));
    case S.STEP2_DISPLAY_CODE:
      return m.default.createElement(d.LinkWithPhoneNumberCodeScreen, {
        code: v,
        phoneNumber: (0, o.default)(r, "phoneNumber"),
        onClickEditPhoneNumber: (0, a.default)(function* () {
          yield (0, u.resetLinkDeviceState)({
            linkDeviceMethod: u.LinkDeviceMethodType.ALT_DEVICE_LINKING
          });
          n(S.STEP1_PHONE_NUMBER_ENTRY);
          T(null);
        }),
        onClickLinkWithQr: e.onClickLinkWithQr,
        apiCmd: e.apiCmd
      });
  }
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./518043.js");
var l = require("./511761.js");
var u = require("./61777.js");
var c = require("./12940.js");
var d = require("./355939.js");
var p = require("./678193.js");
var f = require("./82263.js");
var _ = r(require("./99398.js"));
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
  var n = E(t);
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
var h = require("./808446.js");
var y = r(require("./17533.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const S = require("../vendor/76672.js").Mirrored(["STEP1_PHONE_NUMBER_ENTRY", "STEP2_DISPLAY_CODE"]);