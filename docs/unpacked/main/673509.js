var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2eInfoModalV2 = exports.E2eInfoModalStatus = undefined;
var r = require("../app/103440.js");
var o = require("../app/660666.js");
var l = require("../app/510337.js");
var i = require("./961004.js");
var u = require("./390719.js");
var s = require("../app/753233.js");
var c = a(require("../app/395767.js"));
var d = require("../app/114850.js");
var f = require("./24578.js");
var p = require("./401929.js");
var m = require("./63798.js");
var h = require("../vendor/548360.js");
var g = function (e, t) {
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
const v = {
  containerE2eInfoModal: {
    marginTop: "opp68qpq",
    marginEnd: "mg7w9a8q",
    marginBottom: "brac1wpa",
    marginStart: "a6gmrtb7"
  },
  textAlignCenter: {
    textAlign: "qfejxiq4"
  }
};
const _ = (0, m.isVCFCopyBuildEnabled)();
const y = (0, m.isVCFUIBuildEnabled)();
const C = e => {
  (0, g.useEffect)(() => {
    if (e.highlightSurface != null) {
      (0, f.incrementPrinaDailyCount)(e.highlightSurface, l.PrinaDailyActionType.DIALOG_APPEAR);
    }
  }, []);
  const t = (0, c.default)("OK");
  const n = h.fbt._("Learn More", null, {
    hk: "eSqcw"
  });
  return g.default.createElement(r.ConfirmPopup, {
    testid: "highlight-e2e-message-modal",
    onOK: () => {
      (0, s.openExternalLink)(e.url);
      if (e.highlightSurface != null) {
        (0, f.incrementPrinaDailyCount)(e.highlightSurface, l.PrinaDailyActionType.DIALOG_SELECT);
      }
      d.ModalManager.close();
    },
    okText: n,
    onCancel: () => d.ModalManager.close(),
    cancelText: t
  }, e.children);
};
exports.E2eInfoModalStatus = e => {
  const t = h.fbt._("Your status and chats are private", null, {
    hk: "4lIt9q"
  });
  const n = h.fbt._("End-to-end encryption keeps your status updates and personal messages between you and the people you choose. Not even WhatsApp can see them. This includes your:", null, {
    hk: "1U4atl"
  });
  return g.default.createElement(C, {
    url: e.url,
    highlightSurface: e.highlightSurface
  }, g.default.createElement(p.E2eSummary, {
    xstyle: v.containerE2eInfoModal,
    icon: y ? g.default.createElement(u.E2EIllustrationV2Icon, {
      width: 220
    }) : g.default.createElement(i.E2EIllustrationIcon, {
      width: 220
    }),
    title: t,
    subTitle: n,
    textAlignment: v.textAlignCenter
  }));
};
exports.E2eInfoModalV2 = e => {
  let {
    url: t,
    highlightSurface: n,
    chat: a
  } = e;
  const r = a != null && (0, o.getIsMe)(a.contact);
  let l;
  l = r ? h.fbt._("Your chat is private", null, {
    hk: "31Kovh"
  }) : _ ? h.fbt._("WhatsApp protects your privacy", null, {
    hk: "2Vq5Et"
  }) : h.fbt._("Your chats and calls are private", null, {
    hk: "2ZLoAl"
  });
  const s = r ? h.fbt._("End-to-end encryption keeps personal messages that you send to yourself private. Not even WhatsApp can read or listen to them. This includes your:", null, {
    hk: "1r0aY0"
  }) : h.fbt._("End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:", null, {
    hk: "2wWXme"
  });
  return g.default.createElement(C, {
    url: t,
    highlightSurface: n
  }, g.default.createElement(p.E2eSummary, {
    icon: y ? g.default.createElement(u.E2EIllustrationV2Icon, {
      width: 220
    }) : g.default.createElement(i.E2EIllustrationIcon, {
      width: 220
    }),
    xstyle: v.containerE2eInfoModal,
    title: l,
    subTitle: s,
    textAlignment: v.textAlignCenter,
    isMessageYourselfChat: r
  }));
};