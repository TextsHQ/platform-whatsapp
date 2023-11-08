var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t,
    onMenuComplete: n
  } = e;
  const a = (0, A.default)();
  (0, M.useBusinessProfile)(t.id, ["isBizBot3p"]);
  const P = (0, T.useRef)(null);
  const O = (0, w.default)();
  (0, T.useEffect)(() => () => {
    var e;
    if (!((e = P.current) === null || e === undefined)) {
      e.call(P);
    }
    p.DrawerManager.closeDrawerMid();
  }, []);
  const k = () => {
    (() => {
      const {
        asyncStream: e,
        disposeStream: i
      } = h.start("camera", undefined, 3000);
      P.current = i;
      (0, o.default)(e, a).then(e => {
        if (e) {
          p.DrawerManager.openDrawerMid(T.default.createElement(d.CaptureMediaDrawerLoadable, {
            chat: (0, y.unproxy)(t),
            stream: e,
            disposeStream: P.current,
            onCaptureSent: () => {
              n(true, {
                initCaptionUsed: false
              });
              l.AttachmentMenuLogger.logAttachmentSend(t, l.AttachmentMenuTarget.CAMERA);
            },
            onCancel: () => {
              l.AttachmentMenuLogger.logAttachmentCancel(t, l.AttachmentMenuTarget.CAMERA);
            },
            onClose: () => p.DrawerManager.closeDrawerMid()
          }), {
            transition: "slide-up",
            uim: O,
            noFocus: true
          });
        }
      }).catch((0, r.filteredCatch)(E.GetUserMedia.NotAllowedError, () => {
        v.ModalManager.open(T.default.createElement(m.GuidePopup, {
          messaging: m.Messaging.CAMERA_FAIL,
          type: m.TYPE.GUIDE_UNBLOCK
        }));
      })).catch((0, r.filteredCatch)(E.GetUserMedia.GetUserMediaError, () => {
        v.ModalManager.open(T.default.createElement(m.GuidePopup, {
          messaging: m.Messaging.CAMERA_MISSING,
          type: m.TYPE.GUIDE_NONE
        }));
      }));
    })();
    (0, _.prepareChatForMessageSending)(t);
  };
  return T.default.createElement(g.MenuBarItem, {
    testid: "conversation-clip",
    theme: (0, u.isAttachMenuRedesignEnabled)() ? "attach-menu-redesign" : undefined,
    icon: (0, u.isAttachMenuRedesignEnabled)() ? T.default.createElement(s.AttachMenuPlusIcon, null) : T.default.createElement(f.ClipIcon, null),
    tabOrder: C.TAB_ORDER.COMPOSE_BOX_ATTACH_BUTTON,
    title: S.fbt._("Attach", null, {
      hk: "3hO9B3"
    }),
    transitionName: (0, u.isAttachMenuRedesignEnabled)() ? "dropdown" : "menu",
    onClick: e => {
      (e => {
        p.DrawerManager.existsDrawerMid(t => {
          if (t) {
            e.preventDefault();
          }
        });
      })(e);
    },
    onOpen: () => {
      l.AttachmentMenuLogger.logAttachmentMenuOpen(t);
    },
    onClose: e => {
      if (e === b.DismissReason.UIM_INTERACTION) {
        l.AttachmentMenuLogger.logAttachmentMenuClose(t);
      }
    }
  }, (0, u.isAttachMenuRedesignEnabled)() ? T.default.createElement(c.AttachMenuPopup, {
    chat: e.chat,
    onCaptureClick: k,
    getComposeContents: e.getComposeContents,
    getComposeBoxEditorRef: e.getComposeBoxEditorRef,
    onMenuComplete: e.onMenuComplete
  }) : T.default.createElement(i.default, {
    chat: e.chat,
    onCaptureClick: k,
    getComposeContents: e.getComposeContents,
    getComposeBoxEditorRef: e.getComposeBoxEditorRef,
    onMenuComplete: e.onMenuComplete
  }));
};
var r = require("../app/122583.js");
var o = a(require("../app/229922.js"));
var l = require("./855637.js");
var i = a(require("./517492.js"));
var u = require("../app/763614.js");
var s = require("./292363.js");
var c = require("./169410.js");
var d = require("./537751.js");
var f = require("./604471.js");
var p = require("../app/900316.js");
var m = require("./858770.js");
var h = O(require("./213462.js"));
var g = require("./526795.js");
var E = O(require("../app/288057.js"));
var v = require("../app/114850.js");
var _ = require("./179268.js");
var y = require("../app/163139.js");
var C = require("../main-chunk/931109.js");
var b = require("../app/238669.js");
var M = require("./508228.js");
var S = require("../vendor/548360.js");
var T = O(require("../vendor/667294.js"));
var w = a(require("../app/321201.js"));
var A = a(require("../app/895851.js"));
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function O(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
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
}