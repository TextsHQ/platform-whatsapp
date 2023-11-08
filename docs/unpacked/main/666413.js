var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    displayType: a,
    chat: V,
    rootMsg: q,
    composeQuotedMsgRemoteJid: Y,
    t: z
  } = e;
  const K = (0, H.default)();
  const [Q] = (0, W.useMsgValues)(t.id, [E.getSenderObj]);
  const X = (0, U.default)(() => new T.ProductCatalogSession());
  const [Z, J] = (0, G.useState)(false);
  const $ = !Z && !!q;
  const ee = (0, g.elevatedPushNamesEnabled)(V);
  (0, G.useEffect)(() => {
    const e = (0, E.getAsProductInquiry)(t);
    if (e == null) {
      return;
    }
    if (e.businessOwnerJid && (0, B.createWid)(e.businessOwnerJid)) {
      if (z != null) {
        e.t = z;
      }
      i.CatalogCollection.addMsgAsProduct((0, k.unproxy)(e.unsafe()));
    }
  }, []);
  const te = () => {
    if ((0, b.getIsStatusV3)(t)) {
      return void (q && q.isQuotedMsgAvailable ? D.StatusV3Collection.find((0, b.getSender)(t)).then(e => {
        const {
          QuotedStatusV3FlowLoadable: a
        } = require("./494459.js");
        y.ModalManager.openMedia(G.default.createElement(a, {
          statusV3: e,
          msgKey: t.id,
          onMsgNotFound: () => {
            if (q) {
              q.isQuotedMsgAvailable = false;
            }
          },
          onClose: () => y.ModalManager.closeMedia()
        }), {
          transition: "quoted-status-v3-modal"
        });
      }) : R.ToastManager.open(G.default.createElement(I.Toast, {
        msg: F.fbt._("Status update not found", null, {
          hk: "1KSfSo"
        })
      })));
    }
    if ((0, E.getAsProductInquiry)(t) != null) {
      return (e => {
        const t = e.businessOwnerJid && (0, B.createWid)(e.businessOwnerJid);
        if (!t) {
          return;
        }
        const n = i.CatalogCollection.get(t);
        if (!n) {
          return;
        }
        const a = e.productId && n.productCollection.get(e.productId);
        const r = e.productId && n.msgProductCollection.get(e.productId);
        if (!a && !r) {
          return;
        }
        let o = r;
        if (a && z != null && a.t >= z) {
          o = a;
          if (r) {
            n.productCollection.remove(r);
          }
        }
        if (!o) {
          return;
        }
        const l = (0, M.buildProductCatalogContext)(X.current, (0, f.getMaybeBizPlatformForLogging)(e.businessOwnerJid), j.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_MESSAGE);
        (0, S.logProductInquiryClick)({
          product: (0, k.unproxy)(o),
          catalogContext: l
        });
        (0, x.qplStartProductView)("Message");
        return h.DrawerManager.openDrawerRight(G.default.createElement(w.ProductDetailsFlowLoadable, {
          product: o,
          chat: (0, E.getChat)(e),
          refreshCarousel: true
        }), {
          transition: "slide-left",
          uim: K,
          newDrawerContext: l
        });
      })((0, E.getAsProductInquiry)(t));
    }
    if (q && !q.isQuotedMsgAvailable) {
      return void R.ToastManager.open(G.default.createElement(I.Toast, {
        msg: F.fbt._("Couldn't find message", null, {
          hk: "2en5Pr"
        })
      }));
    }
    const e = t.id;
    const a = (0, E.getChat)(t);
    const s = C.MsgCollection.get(e);
    const c = (0, u.getSearchContext)(a, s || e, q == null ? undefined : q.unsafe());
    if (c) {
      c.slideToMsg = true;
    }
    d.Cmd.openChatAt(a, c).then(e => {
      if (!e) {
        return;
      }
      const n = C.MsgCollection.get(t.id);
      if (n) {
        (0, o.delayMs)(500).then(() => {
          d.Cmd.openMediaViewerForAlbumMedia((0, k.unproxy)(n));
        });
      }
    });
    if (!s) {
      c.collection.loadAroundPromise.catch((0, r.filteredCatch)(l.E404, () => {
        const e = q == null ? undefined : q.unsafe();
        const t = e != null ? (0, E.getChat)(e) : null;
        if (e != null && t != null) {
          d.Cmd.openChatAt(t, (0, u.getSearchContext)(t, e));
        }
      }));
    }
  };
  const ne = (0, s.getAssignedColor)(V, (0, b.getSender)(t));
  const ae = [m.DISPLAY_TYPE.CONVERSATION, m.DISPLAY_TYPE.ANNOUNCEMENT, m.DISPLAY_TYPE.STARRED_MSGS].includes(a);
  const re = Y || (q == null ? undefined : q.quotedRemoteJid);
  const oe = ae ? "button" : null;
  const le = G.default.createElement(_.default, {
    msg: t,
    contact: t.senderObj,
    chat: V,
    displaySelf: (0, N.isMeAccount)((0, b.getSender)(t)),
    quotedRemoteJid: re,
    disableClick: true
  });
  const ie = (0, c.classnamesConvertMeToStylexPlease)({
    [A.default.statusV3QuotedMsg]: e.theme === "statusV3",
    [A.default.composeBoxQuotedMsg]: e.theme === "composeBox",
    [A.default.viewAllRepliesQuotedMsg]: e.theme === "viewAllReplies",
    [A.default.hover]: Z,
    [A.default.quotedMsg]: true
  });
  const ue = (0, c.classnamesConvertMeToStylexPlease)({
    [A.default.elevatedPushNames]: ee,
    [A.default.msgBody]: true
  });
  const se = (0, c.classnamesConvertMeToStylexPlease)({
    [A.default.elevatedPushNames]: ee,
    [A.default.msgText]: true
  });
  const ce = G.default.createElement("div", {
    className: se
  }, le, G.default.createElement(P.default, {
    msg: t,
    rootMsg: q,
    theme: e.theme
  }));
  const de = a === m.DISPLAY_TYPE.STARRED_MSGS ? "starred" : e.theme;
  const fe = F.fbt._("Quoted Message", null, {
    hk: "4r20Bx"
  });
  const pe = (0, L.viewAllRepliesEnabled)() && e.theme === "viewAllReplies" ? G.default.createElement("div", {
    className: A.default.profilePicture
  }, G.default.createElement(p.DetailImage, {
    testId: "quoted-message-author-profile-picture",
    id: Q.id,
    size: p.DetailImageSize.ExtraSmall,
    loadAnimation: false,
    authorColor: ne,
    tabIndex: 0,
    theme: "view_all_replies"
  })) : null;
  return G.default.createElement("div", {
    className: A.default.container,
    onMouseOver: ae ? () => {
      if ($) {
        J(true);
      }
    } : null,
    onMouseEnter: ae ? () => {
      if ($) {
        J(true);
      }
    } : null,
    onMouseLeave: ae ? () => {
      if (Z) {
        J(false);
      }
    } : null
  }, G.default.createElement("div", {
    className: ie,
    role: oe,
    "aria-label": fe,
    tabIndex: ae ? 0 : null,
    onKeyDown: e => {
      if ((0, v.default)(e) && ae) {
        te();
      }
    },
    onClick: ae ? te : null
  }, G.default.createElement("span", {
    className: (0, c.classnamesConvertMeToStylexPlease)(`bg-color-${ne}`, A.default.colorBar)
  }), pe, G.default.createElement("div", {
    className: ue,
    dir: ae ? null : (0, E.getDir)(t)
  }, ce), G.default.createElement(O.default, {
    msg: t.unsafe(),
    theme: de
  })));
};
var r = require("../app/122583.js");
var o = require("../app/8304.js");
var l = require("../app/984330.js");
var i = require("../app/713464.js");
var u = require("../app/713105.js");
var s = require("../app/760797.js");
var c = require("../app/396574.js");
var d = require("../app/780549.js");
var f = require("./834110.js");
var p = require("../app/23641.js");
var m = require("../app/356097.js");
var h = require("../app/900316.js");
var g = require("../app/235630.js");
var E = require("../app/163755.js");
var v = a(require("../app/83162.js"));
var _ = a(require("./599664.js"));
var y = require("../app/114850.js");
var C = require("../app/61113.js");
var b = require("../app/787742.js");
var M = require("../app/932523.js");
var S = require("../app/77548.js");
var T = require("../app/242677.js");
var w = require("./639793.js");
var A = a(require("./942549.js"));
var P = a(require("./493282.js"));
var O = a(require("./110695.js"));
var k = require("../app/163139.js");
var D = require("../app/657694.js");
var I = require("../app/625786.js");
var R = require("../app/390737.js");
var N = require("../app/459857.js");
var x = require("./887222.js");
var L = require("./577844.js");
var j = require("../app/455915.js");
var B = require("../app/669050.js");
var F = require("../vendor/548360.js");
var G = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = V(t);
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
var U = a(require("../app/637660.js"));
var W = require("./871210.js");
var H = a(require("../app/321201.js"));
function V(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (V = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}