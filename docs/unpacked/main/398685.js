var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  var a;
  const {
    msg: b
  } = e;
  const [M, S, T, w, A] = (0, y.useMsgValues)(e.msg.id, [m.getIsGroupMsg, m.getIsPSA, m.getIsSentByMe, i.getSenderObj, m.getType]);
  const P = s.default.isRTL();
  const O = (0, i.getChat)(b.unsafe());
  const k = (0, l.elevatedPushNamesEnabled)(O);
  const D = (0, o.isWideDisplay)(e.displayType);
  let I;
  I = A === g.MSG_TYPE.POLL_CREATION ? C.pollCreation : k ? C.elevatedPushNames : C.regular;
  const R = (0, _.default)(C.bubble, (0, m.getIsPSA)(b) && C.isPSA, e.theme === "portrait" && !D && C.portrait, e.theme === "landscape" && !D && C.landscape, D && C.announcement, e.useFixedWidth === true && C.fixedWidth, I);
  const N = e.displayAuthor ? v.default.createElement(c.default, {
    msg: b,
    contact: w,
    displayType: e.displayType,
    disableClick: ((t = b.author) === null || t === undefined ? undefined : t.isLid()) && ((n = O.groupMetadata) === null || n === undefined ? undefined : n.groupType) === u.GroupType.LINKED_ANNOUNCEMENT_GROUP
  }) : null;
  const x = (0, h.showForwarded)(b) ? v.default.createElement(f.default, {
    msg: b.unsafe()
  }) : null;
  let L;
  if ((0, r.isBotReceiveEnabled)() && (0, m.getActiveBotMsgStreamingInProgress)(b) === true && A === g.MSG_TYPE.CHAT) {
    L = v.default.createElement(d.default, {
      isBotMsgStreaming: true
    });
  } else if (!(e.displayType === o.DISPLAY_TYPE.GALLERY || e.hideMeta)) {
    L = v.default.createElement("div", {
      className: (0, _.default)(C.meta, (0, m.getIsPSA)(b) && E.uiMargin.top4, P && C.metaForRTLMsg)
    }, v.default.createElement(p.Meta, {
      msg: b,
      displayType: e.displayType
    }));
  }
  return v.default.createElement("div", {
    "aria-label": (a = e.ariaLabel) !== null && a !== undefined ? a : undefined,
    className: R
  }, N, x, e.children, L);
};
var r = require("../app/354458.js");
var o = require("../app/356097.js");
var l = require("../app/235630.js");
var i = require("../app/163755.js");
var u = require("../app/862159.js");
var s = a(require("../app/932325.js"));
var c = a(require("./599664.js"));
var d = a(require("./387876.js"));
var f = a(require("./428759.js"));
var p = require("./789955.js");
var m = require("../app/787742.js");
var h = require("./192071.js");
var g = require("../app/373070.js");
var E = require("../app/676345.js");
var v = a(require("../vendor/667294.js"));
var _ = a(require("../app/156720.js"));
var y = require("./871210.js");
const C = {
  bubble: {
    boxSizing: "cm280p3y",
    userSelect: "to2l77zo"
  },
  portrait: {
    maxWidth: "soyzglys"
  },
  landscape: {
    maxWidth: "hbm07cg7"
  },
  announcement: {
    width: "shnl0xtb"
  },
  fixedWidth: {
    width: "m3h9lho3",
    maxWidth: "laorhtua"
  },
  meta: {
    position: "g0rxnol2",
    zIndex: "g2bpp9au",
    float: "faxx4fbg",
    marginTop: "aja0i6dq",
    marginEnd: "jnwc1y2a",
    marginBottom: "bn7x0pqn",
    marginStart: "qnz2jpws"
  },
  metaForRTLMsg: {
    float: "ivui8b66"
  },
  isPSA: {
    paddingBottom: "l5xxxszt"
  },
  elevatedPushNames: {
    paddingTop: "n1yiu2zv",
    paddingEnd: "ft2m32mm",
    paddingBottom: "oq31bsqd",
    paddingStart: "e1yunedv"
  },
  pollCreation: {
    paddingTop: "n1yiu2zv",
    paddingEnd: "su0yom3z",
    paddingBottom: "przvwfww",
    paddingStart: "j60xts7z"
  },
  regular: {
    paddingTop: "n1yiu2zv",
    paddingEnd: "c6f98ldp",
    paddingStart: "ooty25bp",
    paddingBottom: "oq31bsqd"
  }
};