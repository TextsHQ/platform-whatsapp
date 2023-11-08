var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinMessageModal = undefined;
var r = require("../app/632157.js");
var o = require("../app/287461.js");
var l = require("../app/103440.js");
var i = require("./807078.js");
var u = a(require("../app/395767.js"));
var s = require("../app/163755.js");
a(require("../app/97359.js"));
var c = require("../app/114850.js");
var d = require("../app/61113.js");
var f = require("../app/96374.js");
var p = require("../app/533494.js");
var m = require("./695431.js");
var h = require("./923743.js");
var g = require("../app/180519.js");
var E = require("../app/676345.js");
var v = require("../vendor/548360.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var y = a(require("./37446.js"));
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = [f.PinExpiryDurationOption.FiveSeconds, f.PinExpiryDurationOption.FifteenSeconds, f.PinExpiryDurationOption.OneMinute];
const M = [f.PinExpiryDurationOption.OneDay, f.PinExpiryDurationOption.SevenDays, f.PinExpiryDurationOption.ThirtyDays];
const S = e => {
  var t;
  let {
    msg: n,
    replacing: a = false
  } = e;
  const [r, i] = (0, _.useState)(f.PinExpiryDurationOption.SevenDays);
  const C = (0, s.getChat)(n);
  const A = (0, y.default)(C);
  const P = A.length >= (0, o.getABPropConfigValue)("pinned_messages_m2_pin_max");
  if (P && !a) {
    return _.default.createElement(l.ConfirmPopup, {
      title: v.fbt._("Replace current pin?", null, {
        hk: "3FY8kP"
      }),
      cancelText: (0, u.default)("Cancel"),
      onCancel: () => c.ModalManager.close(),
      okText: (0, u.default)("Continue"),
      onOK: () => {
        c.ModalManager.open(_.default.createElement(S, {
          msg: n,
          replacing: true
        }));
      },
      testid: "replace-pin-message-modal"
    }, _.default.createElement(g.TextDiv, {
      size: "16",
      xstyle: E.uiPadding.bottom12
    }, v.fbt._("Your new pin will replace the current one.", null, {
      hk: "489JRb"
    })));
  }
  const O = [...M];
  if (((t = undefined) === null || t === undefined ? undefined : t()) || (0, o.getABPropConfigValue)("pinned_messages_sender_short_expiry_durations_enabled")) {
    O.unshift(...b);
  }
  return _.default.createElement(l.ConfirmPopup, {
    title: a ? v.fbt._("Choose how long your new pin lasts", null, {
      hk: "UlMtd"
    }) : v.fbt._("Choose how long your pin lasts", null, {
      hk: "p2dp3"
    }),
    okText: v.fbt._("Pin", null, {
      hk: "12dLWO"
    }),
    onOK: () => {
      if (P && a) {
        const e = d.MsgCollection.get(A[0].parentMsgKey);
        if (e != null) {
          (0, h.sendPinInChatMsg)(e, p.Message$PinInChatMessage$Type.UNPIN_FOR_ALL).then(() => (0, h.sendPinInChatMsg)(n, p.Message$PinInChatMessage$Type.PIN_FOR_ALL, T(r))).catch(() => {
            __LOG__(3)`[PinMessageModal] Could not replace pin`;
          });
        }
      } else {
        (0, h.sendPinInChatMsg)(n, p.Message$PinInChatMessage$Type.PIN_FOR_ALL, T(r)).catch(() => {
          __LOG__(3)`[PinMessageModal] Could not send pin message`;
        });
      }
      c.ModalManager.close();
    },
    onCancel: () => c.ModalManager.close(),
    testid: "pin-message-modal"
  }, _.default.createElement(g.TextDiv, {
    size: "16",
    xstyle: E.uiPadding.bottom12,
    ariaLabel: v.fbt._("You can unpin at any time", null, {
      hk: "3YsWtr"
    })
  }, v.fbt._("You can unpin at any time.", null, {
    hk: "2TkRqk"
  })), _.default.createElement("form", null, _.default.createElement("ol", null, O.map((e, t) => _.default.createElement("li", {
    key: e,
    tabIndex: t
  }, _.default.createElement(m.RadioWithLabel, {
    name: "duration",
    value: e,
    label: w(e),
    checked: r === e,
    onChange: () => i(e),
    testid: e
  }))))));
};
function T(e) {
  switch (e) {
    case f.PinExpiryDurationOption.FiveSeconds:
      return 5;
    case f.PinExpiryDurationOption.FifteenSeconds:
      return 15;
    case f.PinExpiryDurationOption.OneMinute:
      return r.MINUTE_SECONDS;
    case f.PinExpiryDurationOption.OneDay:
      return r.DAY_SECONDS;
    case f.PinExpiryDurationOption.SevenDays:
      return r.DAY_SECONDS * 7;
    case f.PinExpiryDurationOption.ThirtyDays:
      return r.DAY_SECONDS * 30;
  }
}
function w(e) {
  switch (e) {
    case f.PinExpiryDurationOption.FiveSeconds:
      return _.default.createElement(i.DevOnlyBadge, {
        label: v.fbt._("", null, {
          hk: "3v0hyV"
        })
      });
    case f.PinExpiryDurationOption.FifteenSeconds:
      return _.default.createElement(i.DevOnlyBadge, {
        label: v.fbt._("", null, {
          hk: "4uzK8E"
        })
      });
    case f.PinExpiryDurationOption.OneMinute:
      return _.default.createElement(i.DevOnlyBadge, {
        label: v.fbt._("", null, {
          hk: "1h7G8x"
        })
      });
    case f.PinExpiryDurationOption.OneDay:
      return v.fbt._("24 hours", null, {
        hk: "3S7X4g"
      });
    case f.PinExpiryDurationOption.SevenDays:
      return v.fbt._("7 days", null, {
        hk: "39njQG"
      });
    case f.PinExpiryDurationOption.ThirtyDays:
      return v.fbt._("30 days", null, {
        hk: "9tyAi"
      });
  }
}
exports.PinMessageModal = S;