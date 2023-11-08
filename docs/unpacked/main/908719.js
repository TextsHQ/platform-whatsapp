var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../main-chunk/170206.js"));
var o = require("../app/642838.js");
var l = require("../app/374660.js");
var i = require("../app/780549.js");
var u = require("../app/177938.js");
var s = require("../app/660666.js");
var c = require("../app/23641.js");
var d = require("../app/235630.js");
var f = require("../app/305521.js");
var p = require("../app/581354.js");
var m = require("../app/702206.js");
var h = require("../app/690495.js");
var g = a(require("../app/469733.js"));
var E = a(require("../app/335540.js"));
var v = require("../app/714574.js");
var _ = require("../app/163755.js");
var y = require("../app/81644.js");
var C = a(require("./650199.js"));
var b = require("../app/61113.js");
var M = require("../app/787742.js");
var S = require("./488015.js");
var T = require("./900894.js");
var w = require("../app/911600.js");
var A = require("./474474.js");
var P = require("./594149.js");
var O = a(require("../app/625903.js"));
var k = require("../vendor/548360.js");
var D = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = L(t);
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
var I = a(require("../app/156720.js"));
var R = require("../app/379811.js");
var N = require("../app/655241.js");
var x = a(require("../app/321201.js"));
function L(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (L = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const j = {
  tilded: {
    "::before": {
      content: "f76rftwh"
    }
  },
  reactionAndMediaThumbContainer: {
    paddingTop: "fbgy3m38",
    paddingEnd: "ft2m32mm",
    paddingBottom: "oq31bsqd",
    paddingStart: "nu34rnf1",
    marginEnd: "q471nw87"
  }
};
function B(e, t) {
  let {
    reaction: n,
    onCloseDetailsPane: a,
    isAggregated: L = false
  } = e;
  const B = (0, D.useRef)(null);
  const [F, G] = (0, D.useState)(false);
  const U = () => {
    E.default.focus(B.current);
    G(true);
  };
  const {
    parentMsgKey: W,
    reactionText: H,
    senderUserJid: V
  } = n;
  let {
    senderObj: q
  } = n;
  if ((0, m.isFlattenedReactionsEnabled)()) {
    q = u.ContactCollection.assertGet(V);
  }
  const Y = b.MsgCollection.assertGet(W);
  const z = (0, N.useModelValues)((0, _.getChat)(Y), ["groupMetadata", "isGroup"]);
  const K = !(0, A.isReactionsEnabledInCAG)(z);
  (0, D.useImperativeHandle)(t, () => ({
    focus: U
  }));
  const Q = (0, N.useModelValues)(q, ["id", "phoneNumber"]);
  let X = q;
  if (Q.id.isLid() && Q.phoneNumber) {
    const e = u.ContactCollection.get(Q.phoneNumber);
    if (e) {
      X = e;
    }
  }
  const [Z, J, $, ee, te, ne] = (0, R.useContactValues)(X.id, [s.getId, s.getIsMe, s.getName, v.getFormattedName, v.getFormattedPhone, s.getNotifyName]);
  const ae = (0, x.default)();
  const re = e => {
    e.preventDefault();
    e.stopPropagation();
    if (J) {
      (0, P.sendReactionToMsg)(Y, w.REVOKED_REACTION_TEXT).catch(() => {
        if (ae) {
          ae.requestDismiss();
        }
      });
    }
  };
  const oe = (0, d.elevatedPushNamesM2Enabled)(z);
  let le = null;
  if (!$ && ne) {
    le = D.default.createElement(f.EmojiText, {
      className: (0, I.default)(!oe && j.tilded),
      direction: "auto",
      text: (0, d.pushNameCanBeUsed)(X) && oe ? te : ne
    });
  }
  const ie = (0, d.pushNameCanBeUsed)(X) && oe ? (0, o.getAccessibleNotifyName)(ne).toString() : ee;
  let ue = (0, A.reactionBubbleAriaLabelOneReaction)(ie, H);
  if (J) {
    ue = `${ue.toString()} ${k.fbt._("Click to remove", null, {
      hk: "oSIOf"
    }).toString()}`;
  }
  const se = L && (0, M.getIsMedia)(Y);
  const ce = se ? D.default.createElement(g.default, {
    xstyle: j.reactionAndMediaThumbContainer,
    testid: "reaction-and-media-thumb"
  }, D.default.createElement(S.ReactionCellDetailThumb, {
    msg: Y,
    reactionText: H,
    onCloseDetailsPane: a
  })) : null;
  const de = K ? e => {
    e.preventDefault();
    e.stopPropagation();
    if (J) {
      return;
    }
    a();
    let t = Z;
    if (Y.from.isGroup()) {
      t = (0, l.getOneToOneContactFromGroupContact)(Z);
    }
    (0, p.findChat)(t, "reactionDetailsPane").then(e => {
      i.Cmd.chatInfoDrawer(e);
    });
  } : null;
  const fe = J ? ee : D.default.createElement(O.default, {
    disabled: !K,
    onClick: de,
    title: k.fbt._("Contact Info", null, {
      hk: "4otajD"
    }),
    "aria-label": k.fbt._("Click to open profile details", null, {
      hk: "qLfC"
    })
  }, D.default.createElement(f.EmojiText, {
    direction: "auto",
    text: (0, d.pushNameCanBeUsed)(X) && oe ? (0, o.getFormattedNotifyName)(ne) : ee
  }));
  const pe = D.default.createElement(O.default, {
    onClick: re
  }, k.fbt._("Click to remove", null, {
    hk: "oSIOf"
  }));
  return D.default.createElement(C.default, null, D.default.createElement(y.HotKeys, {
    role: J ? "button" : "listitem",
    "aria-label": ue,
    handlers: {
      enter: re,
      space: re
    },
    ref: B,
    onBlur: () => {
      G(false);
    },
    onFocus: () => {
      if (J) {
        G(true);
      }
    }
  }, D.default.createElement(h.FlexRow, {
    align: "center"
  }, D.default.createElement(g.default, {
    grow: 2
  }, D.default.createElement(r.default, {
    idle: !J && !F,
    testid: J ? "reactions-details-cell-me" : "reactions-details-cell-not-me",
    image: D.default.createElement(c.DetailImage, {
      onClick: de,
      id: Z,
      size: 40,
      loadAnimation: false
    }),
    primary: fe,
    onClick: re,
    secondary: J ? pe : le,
    detail: se ? ce : D.default.createElement(T.ReactionEmoji, {
      scale: "list",
      size: "large",
      reaction: H
    }),
    theme: J ? "reaction-by-me" : "reaction-by-others",
    active: F
  })))));
}
var F = (0, D.forwardRef)(B);
exports.default = F;