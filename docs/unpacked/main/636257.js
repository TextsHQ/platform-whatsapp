var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebDesktopCallingMenuButton = function () {
  const e = (0, u.getUserDesktopOs)();
  const t = (0, b.useRef)(null);
  const {
    popover: n,
    popoverIsVisible: a
  } = (0, s.useDropdown)({
    target: t,
    alignment: d.PopoverAlignment.End,
    position: d.PopoverPosition.Bottom,
    buffer: 6,
    children: b.default.createElement(O, {
      userDesktopOs: (0, r.default)(e, "userDesktopOs")
    })
  });
  const l = !!g.default.get(h.KEYS.DESKTOP_UPSELL_USER_HAS_CLICKED_CALL_MODAL);
  (0, b.useEffect)(() => {
    if (a) {
      g.default.set(h.KEYS.DESKTOP_UPSELL_USER_HAS_CLICKED_CALL_MODAL, true);
    }
  }, [a]);
  const i = C.fbt._("Get the app for calling", null, {
    hk: "1WfCdG"
  });
  return b.default.createElement("div", {
    className: (0, M.default)(P.menuBarBtnContainer, p.uiMargin.start10, p.uiPadding.horiz10, p.uiPadding.top5, p.uiPadding.bottom3, !a && !l && P.videoCallBtnOutlined, a && P.videoCallBtnShaded),
    ref: t
  }, b.default.createElement(m.default, {
    title: i,
    "aria-label": i,
    dataTab: f.TAB_ORDER.CHAT_HEADER_BUTTON
  }, b.default.createElement(c.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: P.videoCallIconGroup
  }, b.default.createElement(E.VideoCallIcon, {
    xstyle: p.uiMargin.end6
  }), b.default.createElement(o.ChevronDownAltIcon, {
    height: 10
  })), n));
};
var r = a(require("../app/670983.js"));
var o = require("./62388.js");
var l = require("./154215.js");
var i = require("../app/29054.js");
var u = require("../app/787827.js");
var s = require("./585110.js");
var c = require("../app/690495.js");
var d = require("../app/411342.js");
var f = require("../main-chunk/931109.js");
var p = require("../app/676345.js");
var m = a(require("../app/625903.js"));
var h = require("../app/94872.js");
var g = a(require("../app/53575.js"));
var E = require("./743005.js");
var v = require("../app/23892.js");
var _ = require("../app/239097.js");
var y = require("../app/543696.js");
var C = require("../vendor/548360.js");
var b = function (e, t) {
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
var M = a(require("../app/156720.js"));
var S = require("../app/325390.js");
var T = require("../app/505046.js");
var w = a(require("../app/558532.js"));
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
const P = {
  menuBarBtnContainer: {
    position: "g0rxnol2",
    height: "ppled2lx",
    borderTopStartRadius: "lqxn65m8",
    borderTopEndRadius: "aqkazoap",
    borderBottomEndRadius: "o0zo6k6a",
    borderBottomStartRadius: "pcwnqdp4",
    transitionProperty: "ariinwu3",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "pu4k07i0",
    "@media screen and (max-width: 720px)": {
      paddingTop: "dciaqwlg",
      paddingEnd: "jc5r8rrh",
      paddingBottom: "n2rn87hu",
      paddingStart: "frw6cidt",
      marginTop: "tboxp40l",
      marginEnd: "now7levk",
      marginBottom: "q9zfbx75",
      marginStart: "shq4gd5h"
    }
  },
  videoCallIconGroup: {
    color: "k41sb3ws"
  },
  videoCallBtnShaded: {
    backgroundColor: "ll2o05za"
  },
  videoCallBtnOutlined: {
    borderTop: "neyzb4f4",
    borderEnd: "cyhhvqf0",
    borderBottom: "kgq50qsy",
    borderStart: "q0zge5a5"
  }
};
function O(e) {
  let {
    userDesktopOs: t
  } = e;
  const n = (0, S.useABPropConfigValue)("desktop_upsell_win_cta_call_btn_variation_2");
  const a = n ? _.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL_2 : _.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL;
  (0, T.useWAWebDesktopUpsellWamImpression)({
    isCtaVisible: true,
    source: a
  });
  (0, w.default)(() => {
    new y.WebcNativeUpsellCtaWamEvent({
      webcNativeUpsellCtaEventType: v.WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
      webcNativeUpsellCtaSource: a
    }).commit();
  });
  return b.default.createElement(l.WAWebDesktopUpsellCallingPopover, {
    title: k(n, t),
    body: t === u.UserDesktopOs.WINDOWS ? C.fbt._("Download WhatsApp for Windows to start making calls.", null, {
      hk: "VdtYO"
    }) : C.fbt._("Download WhatsApp for Mac to start making calls.", null, {
      hk: "3QsF5j"
    }),
    onClick: () => {
      (0, i.openExternalWhatsAppDesktopDownloadUrl)(a);
    }
  });
}
function k(e, t) {
  if (e) {
    if (t === u.UserDesktopOs.WINDOWS) {
      return C.fbt._("Make calls with the Windows app", null, {
        hk: "1Glhqo"
      });
    } else {
      return C.fbt._("Make calls with the Mac app", null, {
        hk: "1wc63e"
      });
    }
  } else {
    return C.fbt._("Calling is only available on the app", null, {
      hk: "13C0uv"
    });
  }
}