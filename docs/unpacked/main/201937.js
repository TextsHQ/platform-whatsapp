var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/441609.js"));
var l = a(require("../app/415227.js"));
var i = a(require("./640395.js"));
var u = require("../app/354458.js");
var s = a(require("./581900.js"));
var c = require("../app/292167.js");
var d = require("../app/778945.js");
var f = require("../app/338042.js");
var p = require("../app/738501.js");
var m = a(require("../app/659177.js"));
var h = require("../app/780549.js");
var g = a(require("./143408.js"));
var E = require("./814223.js");
var v = require("../app/163755.js");
var _ = require("../app/834301.js");
var y = a(require("./748374.js"));
var C = require("../app/48343.js");
var b = require("../app/114850.js");
var M = require("../app/61113.js");
var S = require("./461018.js");
var T = require("../app/973981.js");
var w = require("../app/452935.js");
var A = a(require("../app/124928.js"));
var P = function (e, t) {
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
var O = require("../app/808446.js");
var k = a(require("../app/49710.js"));
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
function I(e, t) {
  const n = (0, P.useRef)();
  const a = (0, P.useRef)();
  const D = (0, P.useRef)(0);
  const I = (0, P.useRef)(() => {});
  const R = I.current;
  const N = (0, P.useRef)(() => {});
  const x = N.current;
  const L = (0, P.useRef)(f.ChatEntryPoint.Unknown);
  const [j, B] = (0, P.useState)();
  const [F, G] = (0, P.useState)();
  const [U, W] = (0, P.useState)();
  const [H, V] = (0, P.useState)(false);
  const [q, Y] = (0, P.useState)(e.animate);
  if ((0, k.default)(q) !== false && q !== false) {
    Y(false);
  }
  (0, P.useImperativeHandle)(t, () => ({
    containsDOMNode: e => !!n.current && n.current.containsDOMNode(e),
    animatePanel: (e, t, a, r) => !!n.current && n.current.animatePanel(e, t, a, r)
  }));
  const z = function () {
    var e = (0, r.default)(function* (e, t, n, r) {
      var d;
      if (!(e.contact.isEnterprise != null || !e.isUser || A.default.isPSA(e.contact.id) || e.id.isBot())) {
        __LOG__(2)`[usync] Getting usync info for contact while opening the chat`;
        (0, _.queryUsyncBusiness)(e.id);
      }
      if (e.id.isBot()) {
        if (!(0, u.isBotEnabled)()) {
          return void b.ModalManager.open(P.default.createElement(i.default, null));
        }
        if (!(0, c.hasSeenAgentTos)()) {
          try {
            yield new Promise((e, t) => {
              b.ModalManager.open(P.default.createElement(s.default, {
                fromInvoke: false,
                onOK: () => {
                  e();
                },
                onCancel: () => {
                  t((0, l.default)());
                }
              }));
            });
          } catch (e) {
            return;
          }
        }
      }
      h.Cmd.updateChatlistSelection(e);
      const f = a.current;
      const m = {};
      a.current = m;
      N.current = e => {
        Object.assign(m, e);
      };
      const g = t ? t.collection : e.msgs;
      D.current++;
      const E = D.current;
      const y = () => E === D.current;
      L.current = n;
      let C = false;
      const S = () => {
        if (y()) {
          C = true;
          r(((e, t) => {
            const n = t ? t.msg || M.MsgCollection.get(t.key) : undefined;
            if (t && n && e) {
              const {
                chat: t,
                renderedMsgsInfo: a,
                visibleMsgOrder: r
              } = e;
              if (t && a && r && !(0, o.default)(a) && !(0, o.default)(r)) {
                const e = a[r[0].toString()];
                const o = Object.keys(a).find(e => e === n.id.toString());
                const l = o ? a[o] : null;
                if (l) {
                  return {
                    wasVisible: true,
                    offset: l.offset
                  };
                }
                if (t === (0, v.getChat)(n)) {
                  if (e && n.t < e.t) {
                    return {
                      wasVisible: false,
                      alignAt: "top"
                    };
                  } else {
                    return {
                      wasVisible: false,
                      alignAt: "bottom"
                    };
                  }
                }
              }
            }
            return {
              wasVisible: false,
              alignAt: "center"
            };
          })(f, t));
        }
      };
      const T = (t == null || (d = t.msg) === null || d === undefined ? undefined : d.id) || (t == null ? undefined : t.key);
      I.current = e => {
        if (C || !y()) {
          return;
        }
        if (!T) {
          return void S();
        }
        if (e.some(e => e.id.equals(T))) {
          S();
        }
      };
      B(e);
      G(g);
      W(t);
      if (e.contact.isEnterprise && (0, p.isEphemeralSettingOn)(e)) {
        __LOG__(2)`[DM] auto-disabling DM due to chat being with CAPI account`;
        (0, w.setChatAsEphemeralityUnsupported)(e);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  (0, O.useListener)(h.Cmd, "open_chat", z);
  (0, O.useListener)(h.Cmd, "close_chat", e => {
    if (e === j) {
      B(undefined);
      G(undefined);
      W(undefined);
    }
  });
  (0, O.useListener)(window, "focus", () => {
    T.Stream.markAvailable();
    if (j == null ? undefined : j.isUser) {
      j.presence.subscribe();
    }
  });
  (0, O.useListener)(window, "blur", () => {
    T.Stream.markUnavailable(15000);
  });
  (0, O.useListener)(m.default, "wallpaper_drawer_open", () => {
    V(true);
  });
  (0, O.useListener)(m.default, "wallpaper_drawer_close", () => {
    V(false);
  });
  (0, O.useListener)(j, "change:cmc:merge", (e, t, n, a) => {
    if (!(F !== e && F !== t)) {
      G(n);
      W(a && (a.msg || a.collection) ? a : U);
    }
  });
  (0, P.useEffect)(() => {
    if (j) {
      if (j.contact.isBusiness && !j.id.isBot()) {
        d.BusinessProfileCollection.find(j.id);
      }
      if (j.groupMetadata) {
        (0, S.maybeQueryGroupDevice)(j.groupMetadata);
      }
    }
  }, [j]);
  const K = j && F || H;
  (0, P.useEffect)(() => {
    E.WAWebDesktopUpsellEvents.trigger("conversation_panel_ui_change", {
      conversationPanelVisible: !!K
    });
  }, [K]);
  if (K) {
    return P.default.createElement(C.MaybeStrictMode, null, P.default.createElement(g.default, {
      chat: j,
      chatEntryPoint: L.current,
      groupMetadata: j == null ? undefined : j.groupMetadata,
      chatPreference: m.default.assertGet("defaultPreference"),
      focusCtx: U,
      msgCollection: F,
      notifyChatRendered: R,
      updateOpenedChatInfo: x,
      key: j == null ? undefined : j.id.toString(),
      ref: n,
      showPreview: H
    }));
  } else {
    return P.default.createElement(y.default, {
      animate: q,
      ref: n
    });
  }
}
var R = (0, P.forwardRef)(I);
exports.default = R;