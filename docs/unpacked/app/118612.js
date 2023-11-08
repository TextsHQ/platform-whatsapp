var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTheme = exports.Modal = undefined;
var i = r(require("../vendor/441609.js"));
var a = r(require("./152583.js"));
var o = r(require("./825545.js"));
var s = require("./317259.js");
var l = require("./114850.js");
var u = require("./717089.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var d = r(require("./156720.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = require("../vendor/76672.js").Mirrored(["Box", "BoxLarge", "Flex", "Guide", "Tower", "Auto", "Invite", "InviteNew", "ColumnButtons", "Multiline", "Upgrade", "Promote", "CommandPalette", "QuickReplies", "StatusV3ViewerList", "LinkPopup", "StatusV3Report", "ChatAssignment", "TowerLarge", "HistorySyncProgress", "MessageEdit", "ForwardMediaWithCaption", "MessageActionsModal", "DataSharing", "DeleteNewsletter", "Small", "LabelList", "EditLabel"]);
exports.ModalTheme = f;
const _ = {
  overlay: {
    position: "snyj76hw",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    boxSizing: "cm280p3y",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  backdrop: {
    zIndex: "bgigc5s4",
    overflowX: "i44ccddp",
    overflowY: "ag5g9lrv",
    backgroundColor: "p1zdgkh6"
  },
  popupContainer: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    minWidth: "s4r5ooj2",
    height: "lffynu9d",
    minHeight: "sdfuwbjb"
  },
  popup: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    flexDirection: "f8m0rgwh",
    width: "hblzrxh7",
    paddingTop: "s7fqlky6",
    paddingEnd: "h1a80dm5",
    paddingBottom: "r219jyu0",
    paddingStart: "sta02ykp",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "b19fvycv",
    borderTopStartRadius: "fe61fa5g",
    borderTopEndRadius: "qj4wrk6p",
    borderBottomEndRadius: "cphhpnv8",
    borderBottomStartRadius: "tfm3omh7",
    boxShadow: "paav9g0k"
  },
  popupSmall: {
    width: "tcisnlar"
  },
  popupBody: {
    position: "g0rxnol2",
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "r6au09pb",
    overflowWrap: "fd365im1",
    whiteSpace: "hmy10g0s"
  },
  popupTitle: {
    marginBottom: "du8bjn1j",
    fontSize: "p9fp32ui",
    fontWeight: "m1e7cby3",
    lineHeight: "htjsae3x",
    textAlign: "ljrqcn24"
  },
  backdropCover: {
    backgroundColor: "eqo3w032"
  },
  showOverStatusV3: {
    zIndex: "pglj95m3"
  },
  popupContents: {
    fontSize: "f8jlpxt4",
    lineHeight: "iuhl9who"
  },
  popupBox: {
    position: "g0rxnol2",
    width: "hblzrxh7",
    height: "cctpw5f5",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  popupBoxLarge: {
    position: "g0rxnol2",
    width: "q6jn18b9",
    height: "fhk02qni",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  popupFlex: {
    width: "gofbmt1g",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    backgroundColor: "ronsgs3n"
  },
  popupAuto: {
    width: "gofbmt1g",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    transform: "jvslfpcx"
  },
  popupAutoTitle: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  popupAutoBody: {
    position: "gire0wgi"
  },
  popupAutoContents: {
    backgroundColor: "ihvf49ua"
  },
  popupAutoControls: {
    paddingTop: "emrlamx0",
    paddingEnd: "lnjlmjd6",
    paddingBottom: "bxcbqipq",
    paddingStart: "mc6o24uu",
    backgroundColor: "ihvf49ua"
  },
  popupFlexInvite: {
    height: "n3gni4gr",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    backgroundColor: "ronsgs3n"
  },
  popupFlexInviteNew: {
    width: "enheoddn",
    paddingTop: "a4bywxmn",
    paddingEnd: "f881ul5n",
    paddingBottom: "q1tx93la",
    paddingStart: "qquthbrt"
  },
  popupFlexInviteNewControls: {
    paddingTop: "tvsr5v2h",
    justifyContent: "ac2vgrno"
  },
  popupFlexUpgradeControls: {
    paddingTop: "nda8hbbf",
    paddingEnd: "lnjlmjd6",
    paddingBottom: "przvwfww",
    paddingStart: "mc6o24uu"
  },
  popupFlexControls: {
    paddingTop: "qomlamqu",
    paddingEnd: "afwve8vw",
    paddingBottom: "assy5li8",
    paddingStart: "g5jvwtx7"
  },
  popupTower: {
    position: "g0rxnol2",
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "r6au09pb",
    width: "nhajnb67",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    marginTop: "kpwy2cir",
    marginEnd: "jnwc1y2a",
    marginBottom: "e2xccmyv",
    marginStart: "svoq16ka",
    "@media screen and (min-height: 1000px)": {
      marginTop: "agj3xlbq",
      marginEnd: "mtp0skmj",
      marginBottom: "h1tnk6gg",
      marginStart: "ap935ont"
    },
    "@media screen and (max-height: 700px)": {
      marginTop: "q1g5yed3",
      marginEnd: "ciu2hny1",
      marginBottom: "sz0fn9sj",
      marginStart: "s7u82e91"
    }
  },
  popupTowerLarge: {
    width: "q6jn18b9"
  },
  popupControls: {
    display: "p357zi0d",
    flexWrap: "ns59xd2u",
    justifyContent: "kcgo1i74",
    paddingTop: "gq7nj7y3",
    paddingEnd: "lnjlmjd6",
    paddingBottom: "przvwfww",
    paddingStart: "mc6o24uu",
    textAlign: "e65innqk",
    whiteSpace: "le5p0ye3"
  },
  popupGuideBackdrop: {
    backgroundColor: "j9fb8bew"
  },
  popupGuidePopup: {
    width: "gofbmt1g",
    maxWidth: "culzvsue",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    backgroundColor: "thr4l2wc",
    boxShadow: "a27i2aag"
  },
  popupColumnButtonsControls: {
    flexDirection: "f8m0rgwh",
    flexWrap: "lkhkxwyq",
    alignItems: "r6jd426a"
  },
  popupMultilineContents: {
    whiteSpace: "i033jvx7"
  },
  popupStatusV3ViewerList: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  popupPromote: {
    width: "nwg1e4mw"
  },
  popupPromoteControls: {
    justifyContent: "ac2vgrno",
    textAlign: "qfejxiq4",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  popupForwardMediaWithCaption: {
    width: "oc5zjnaz"
  },
  popupForwardMediaWithCaptionControls: {
    textAlign: "qfejxiq4",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  popupMessageActionsModal: {
    width: "tcisnlar"
  },
  popupMessageActionsModalControls: {
    textAlign: "qfejxiq4",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  popupCommandPalette: {
    position: "snyj76hw",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    width: "nwg1e4mw",
    maxHeight: "jue23zaq",
    top: "n4sj4qlz",
    borderTopStartRadius: "s5zjn0bc",
    borderTopEndRadius: "jwkvlveg",
    borderBottomEndRadius: "krvaa198",
    borderBottomStartRadius: "g65i921c",
    overflowX: "ora14ekb",
    overflowY: "nv3qcefw",
    backgroundColor: "sjyhwr5o"
  },
  popupQuickReplies: {
    width: "hblzrxh7",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    transform: "jvslfpcx"
  },
  popupQuickRepliesTitle: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  popupQuickRepliesBody: {
    position: "gire0wgi"
  },
  popupQuickRepliesContents: {
    paddingTop: "i5tg98hk",
    paddingEnd: "iffbo4e8",
    paddingBottom: "przvwfww",
    paddingStart: "khscay3k",
    backgroundColor: "ihvf49ua"
  },
  popupQuickRepliesControls: {
    paddingTop: "emrlamx0",
    paddingEnd: "lnjlmjd6",
    paddingBottom: "bxcbqipq",
    paddingStart: "mc6o24uu",
    backgroundColor: "ihvf49ua"
  },
  popupChatAssignment: {
    width: "tcisnlar"
  },
  popupHistorySyncProgress: {
    width: "tcisnlar"
  },
  popupDataSharing: {
    paddingTop: "a4bywxmn",
    paddingEnd: "h1a80dm5",
    paddingBottom: "lzi2pvmc",
    paddingStart: "sta02ykp",
    width: "tcisnlar"
  },
  popupMessageEdit: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    position: "g0rxnol2",
    width: "gpw48i3y",
    maxHeight: "jue23zaq"
  },
  popupMessageEditBody: {
    minHeight: "nu7pwgvd"
  },
  popupMessageEditContents: {
    height: "ppled2lx"
  },
  popupDeleteNewsletter: {
    height: "b2mitle9",
    width: "tcisnlar",
    paddingTop: "a4bywxmn",
    paddingEnd: "h1a80dm5",
    paddingBottom: "lzi2pvmc",
    paddingStart: "sta02ykp"
  },
  popupDeleteNewsletterBody: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh"
  },
  popupDeleteNewsletterContents: {
    flexGrow: "ggj6brxn"
  },
  popupLabelList: {
    width: "tcisnlar",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    backgroundColor: "ihvf49ua"
  },
  popupLabelListControls: {
    paddingTop: "a4bywxmn",
    paddingBottom: "lzi2pvmc",
    paddingEnd: "l9g3jx6n"
  },
  popupLabelListContents: {
    maxHeight: "nfnc8vpt",
    overflowY: "ag5g9lrv"
  },
  popupEditLabel: {
    width: "hblzrxh7",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    transform: "jvslfpcx"
  },
  popupEditLabelTitle: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  popupEditLabelControls: {
    paddingTop: "nlnf8xo7",
    paddingEnd: "bcymb0na",
    paddingBottom: "slgfab0f",
    paddingStart: "e8k79tju"
  }
};
const g = {
  hidden: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  visible: {
    overflowX: "ora14ekb",
    overflowY: "nv3qcefw"
  }
};
const m = (0, c.forwardRef)((e, t) => {
  var n;
  var r;
  const {
    overflow: p = "hidden"
  } = e;
  const m = (0, c.useRef)(null);
  const h = (0, c.useRef)(null);
  const y = (0, c.useRef)();
  const E = e.type === f.StatusV3ViewerList && e.dimensions ? {
    height: `${e.dimensions.height}px`,
    width: `${e.dimensions.width}px`
  } : null;
  const S = [_.popup, g[p]];
  const v = [_.overlay, _.backdrop];
  let T;
  let M;
  let A;
  let b;
  if (e.cover === true) {
    v.push(_.backdropCover);
  }
  (0, u.useTsNavigation)((n = e.tsNavigationData) !== null && n !== undefined ? n : {
    surface: "unknown"
  });
  if (e.type != null) {
    switch (e.type) {
      case f.Invite:
        S.push(_.popupFlexInvite);
        break;
      case f.InviteNew:
        S.push(_.popupFlexInviteNew);
        b = _.popupFlexInviteNewControls;
        break;
      case f.Upgrade:
        b = _.popupFlexUpgradeControls;
        break;
      case f.Box:
        S.push(_.popupBox);
        break;
      case f.BoxLarge:
        S.push(_.popupBoxLarge);
        break;
      case f.Flex:
        S.push(_.popupFlex);
        b = _.popupFlexControls;
        break;
      case f.Tower:
        S.push(_.popupTower);
        break;
      case f.TowerLarge:
        S.push(_.popupTower, _.popupTowerLarge);
        break;
      case f.Auto:
        S.push(_.popupAuto);
        T = _.popupAutoTitle;
        M = _.popupAutoBody;
        A = _.popupAutoContents;
        b = _.popupAutoControls;
        break;
      case f.ColumnButtons:
        b = _.popupColumnButtonsControls;
        break;
      case f.Multiline:
        A = _.popupMultilineContents;
        break;
      case f.StatusV3ViewerList:
        S.push(_.popupStatusV3ViewerList);
        v.push(_.showOverStatusV3);
        break;
      case f.Promote:
        S.push(_.popupPromote);
        b = _.popupPromoteControls;
        break;
      case f.CommandPalette:
        S.push(_.popupCommandPalette);
        break;
      case f.QuickReplies:
        S.push(_.popupQuickReplies);
        T = _.popupQuickRepliesTitle;
        M = _.popupQuickRepliesBody;
        A = _.popupQuickRepliesContents;
        b = _.popupQuickRepliesControls;
        break;
      case f.ChatAssignment:
        S.push(_.popupChatAssignment);
        break;
      case f.HistorySyncProgress:
        S.push(_.popupHistorySyncProgress);
        break;
      case f.DataSharing:
        S.push(_.popupDataSharing);
        break;
      case f.MessageEdit:
        S.push(_.popupMessageEdit);
        M = _.popupMessageEditBody;
        A = _.popupMessageEditContents;
        break;
      case f.Guide:
        S.push(_.popupGuidePopup);
        v.push(_.popupGuideBackdrop);
        break;
      case f.StatusV3Report:
      case f.LinkPopup:
        v.push(_.showOverStatusV3);
        break;
      case f.LabelList:
        S.push(_.popupLabelList);
        A = _.popupLabelListContents;
        b = _.popupLabelListControls;
        break;
      case f.EditLabel:
        S.push(_.popupEditLabel);
        T = _.popupEditLabelTitle;
        b = _.popupEditLabelControls;
        break;
      case f.ForwardMediaWithCaption:
        S.push(_.popupForwardMediaWithCaption);
        b = _.popupForwardMediaWithCaptionControls;
        break;
      case f.MessageActionsModal:
        S.push(_.popupMessageActionsModal);
        b = _.popupMessageActionsModalControls;
        break;
      case f.DeleteNewsletter:
        S.push(_.popupDeleteNewsletter);
        M = _.popupDeleteNewsletterBody;
        A = _.popupDeleteNewsletterContents;
        break;
      case f.Small:
        S.push(_.popupSmall);
    }
  }
  const C = (0, i.default)(e.actions) ? null : c.default.createElement("div", {
    className: (0, d.default)(_.popupControls, b, e.controlsStyle)
  }, e.actions);
  const P = e.title != null ? c.default.createElement("div", {
    className: (0, d.default)(_.popupTitle, T)
  }, e.title) : null;
  const O = (0, s.isStringOrFbt)(e.title) ? e.title : undefined;
  const I = c.default.createElement("div", {
    ref: h,
    onClick: t => {
      var n;
      if (t.target === h.current && y.current === h.current) {
        if (e.onOverlayClick) {
          if (!((n = e.onOverlayClick) === null || n === undefined)) {
            n.call(e, t);
          }
        } else {
          l.ModalManager.getRef(e => {
            if (e == null ? undefined : e.contains(h.current)) {
              l.ModalManager.close();
            }
          });
        }
      }
    },
    onMouseDown: e => {
      y.current = e.target;
    },
    className: (0, d.default)(_.popupContainer),
    "aria-label": (r = e.ariaLabel) !== null && r !== undefined ? r : O,
    role: "dialog"
  }, c.default.createElement("div", {
    className: (0, d.default)(S),
    "data-animate-modal-popup": true,
    style: E
  }, c.default.createElement("div", {
    className: (0, d.default)(_.popupBody, M),
    "data-animate-modal-body": true
  }, P, c.default.createElement("div", {
    className: (0, d.default)(_.popupContents, A)
  }, e.children), C)));
  return c.default.createElement(a.default, {
    className: (0, d.default)(v),
    onDragOver: e => {
      var t;
      if (!((t = m.current) === null || t === undefined)) {
        t.onDragOver(e);
      }
    },
    onDragStart: e => {
      var t;
      if (!((t = m.current) === null || t === undefined)) {
        t.onDragStart(e);
      }
    },
    onDragEnd: e => {
      var t;
      if (!((t = m.current) === null || t === undefined)) {
        t.onDragEnd(e);
      }
    },
    ref: t,
    "data-animate-modal-backdrop": true
  }, e.onDrop && c.default.createElement(o.default, {
    ref: m,
    disableFromWithin: true,
    onDragChange: e.onDragChange,
    onDrop: e.onDrop
  }), I);
});
exports.Modal = m;
m.displayName = "Modal";