var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t,
    disableClick: n,
    displaySelf: a,
    quotedRemoteJid: l,
    albumId: B,
    displayType: F,
    msg: G
  } = e;
  const [U, W, H, V, q, Y] = (0, x.useMsgValues)(e.msg.id, [M.getSender, M.getType, M.getIsLive, M.getIsStatusV3, M.getId, M.getQuotedMsg]);
  const z = (0, v.getMaybeChat)(e.msg.unsafe());
  const [K, Q, X, Z, J, $, ee, te, ne] = (0, N.useContactValues)(e.contact.id, [f.getId, E.getFormattedName, f.getIsSupportAccount, f.getName, f.getNotifyName, f.getPushname, f.getVerifiedLevel, f.getVerifiedName, E.getUserDisplayNameForLid]);
  const ae = (0, m.elevatedPushNamesEnabled)(z);
  const re = F === p.DISPLAY_TYPE.ANNOUNCEMENT || F === p.DISPLAY_TYPE.BOT_INVOKE_RESPONSE;
  const oe = t || z;
  if (!oe) {
    __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
    SEND_LOGS("author-with-no-chat");
  }
  const le = oe ? (0, u.getAssignedColor)(oe, U) : 1;
  const ie = Boolean(n) || (0, M.getIsBotFutureproofPlaceholder)(G) ? null : () => {
    let e = U;
    if ((z == null ? undefined : z.isGroup) && e != null) {
      e = (0, i.getOneToOneContactFromGroupContact)(e);
    }
    (0, g.findChat)(e, "messageAuthor").then(e => {
      if ((0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
        c.Cmd.chatInfoDrawer(e);
      } else {
        c.Cmd.openChatFromUnread(e).then(t => {
          if (t) {
            d.ComposeBoxActions.focus(e);
          }
        });
      }
    });
  };
  const ue = (0, s.classnamesConvertMeToStylexPlease)(y.default.author, `color-${le}`, {
    [y.default.hoverable]: ie
  }, (0, R.default)(ae && j.authorElevatedPushNames, W === S.MSG_TYPE.POLL_CREATION && A.uiPadding.start4, re && j.picInBubble));
  let se;
  if (a) {
    se = I.default.createElement(h.EmojiText, {
      text: L(k.default._("You", null, {
        hk: "LtuSj"
      }).toString(), V, l, G)
    });
  } else if (Z || te && ee !== 0 || X) {
    se = [I.default.createElement(h.EmojiText, {
      text: L(X ? Q : Z != null ? Z : te, V, l, G),
      className: y.default.name,
      key: "author",
      testid: "author",
      onClick: ie
    })];
  } else if (P.default.isPSA(K)) {
    const e = (0, s.classnamesConvertMeToStylexPlease)(y.default.name, y.default.psa_name);
    se = [I.default.createElement(h.EmojiText, {
      text: L("WhatsApp", V, l, G),
      className: e,
      key: "author",
      testid: "author",
      onClick: ie
    }), I.default.createElement("div", {
      className: y.default.icon,
      key: "authorCheckMark"
    }, (0, b.isBlueEnabled)() ? I.default.createElement(T.PsaVerifiedBlueIcon, null) : I.default.createElement(w.PsaVerifiedIcon, null))];
  } else if (ae) {
    se = [];
    if (!V) {
      const e = B ? `${B}-push-name` : `${q.toString()}-push-name`;
      const t = J != null ? J : $;
      se = [I.default.createElement(h.EmojiText, {
        className: y.default.screenNameElevatedPushNames,
        key: e,
        testid: "author",
        onClick: ie,
        direction: "auto",
        ellipsify: true,
        text: t,
        ariaLabel: (0, C.getAriaLabelForMaybeName)(t)
      })];
    }
    const e = (K == null ? undefined : K.isLid()) ? ne : L((0, O.widToFormattedUser)(K), V, l, G);
    const t = I.default.createElement("span", {
      className: y.default.numberElevatedPushNames,
      key: `${q.toString()}-number`,
      testid: "author",
      role: ie ? "button" : null,
      onClick: ie
    }, e);
    se.push(t);
  } else {
    const e = (K == null ? undefined : K.isLid()) ? ne : L((0, O.widToFormattedUser)(K), V, l, G);
    se = [I.default.createElement("span", {
      className: y.default.number,
      role: ie ? "button" : null,
      key: `${q.toString()}-number`,
      testid: "author",
      onClick: ie
    }, e)];
    const t = se;
    if (!V) {
      const e = B ? `${B}-push-name` : `${q.toString()}-push-name`;
      let n;
      n = J || $;
      t.push(I.default.createElement(h.EmojiText, {
        className: y.default.screenName,
        key: e,
        testid: "author",
        onClick: ie,
        direction: "auto",
        ellipsify: true,
        text: n
      }));
    }
  }
  if (re) {
    var ce;
    var de;
    var fe;
    let t;
    const a = F === p.DISPLAY_TYPE.ANNOUNCEMENT && U != null && Boolean(oe == null || (ce = oe.groupMetadata) === null || ce === undefined || (de = ce.participants) === null || de === undefined || (fe = de.get(U)) === null || fe === undefined ? undefined : fe.isAdmin);
    if (a) {
      t = D.fbt._("Community admin", null, {
        hk: "Yi0GJ"
      });
    }
    return I.default.createElement("div", {
      className: ue,
      role: e.role || ""
    }, I.default.createElement("div", {
      className: (0, R.default)(A.uiMargin.end9, a && A.uiMargin.vert6)
    }, I.default.createElement(_.GroupChatProfilePicture, {
      userContact: e.contact,
      chatWid: (0, r.default)(oe, "targetChat").id,
      disableClick: n,
      usePicInBubbleLayout: true
    })), I.default.createElement("div", {
      className: (0, R.default)(j.nameContainer)
    }, I.default.createElement("div", {
      className: (0, R.default)(j.authorLabel, ae && j.authorElevatedPushNames, A.uiMargin.top4, A.uiMargin.bottom2)
    }, se), t && I.default.createElement("div", {
      className: (0, R.default)(j.label, A.uiMargin.top2, A.uiMargin.bottom4)
    }, t)));
  }
  return I.default.createElement("div", {
    className: ue,
    role: e.role || ""
  }, se);
};
var r = a(require("../app/670983.js"));
var o = require("../app/287461.js");
var l = require("../app/351053.js");
var i = require("../app/374660.js");
var u = require("../app/760797.js");
var s = require("../app/396574.js");
var c = require("../app/780549.js");
var d = require("../app/877171.js");
var f = require("../app/660666.js");
var p = require("../app/356097.js");
var m = require("../app/235630.js");
var h = require("../app/305521.js");
var g = require("../app/581354.js");
var E = require("../app/714574.js");
var v = require("../app/163755.js");
var _ = require("./911842.js");
var y = a(require("./67875.js"));
var C = require("./115900.js");
var b = require("../app/97858.js");
var M = require("../app/787742.js");
var S = require("../app/373070.js");
var T = require("../app/82422.js");
var w = require("../app/250820.js");
var A = require("../app/676345.js");
var P = a(require("../app/124928.js"));
var O = require("../app/931019.js");
var k = a(require("../app/286816.js"));
var D = require("../vendor/548360.js");
var I = a(require("../vendor/667294.js"));
var R = a(require("../app/156720.js"));
var N = require("../app/379811.js");
var x = require("./871210.js");
function L(e, t, n, a) {
  if ((0, M.getIsBotFutureproofPlaceholder)(a)) {
    return D.fbt._("Meta AI", null, {
      hk: "4vJDE2"
    }).toString();
  }
  let r;
  if (n) {
    const e = l.ChatCollection.get(n);
    r = e ? e.formattedTitle : D.fbt._("Group", null, {
      hk: "DNiv2"
    }).toString();
  }
  if (t) {
    return `${e} · ${D.fbt._("Status", null, {
      hk: "4gjFRX"
    }).toString()}`;
  } else if (r) {
    return `${e} · ${r}`;
  } else {
    return e;
  }
}
const j = {
  picInBubble: {
    position: "g0rxnol2"
  },
  authorElevatedPushNames: {
    display: "p357zi0d"
  },
  authorLabel: {
    lineHeight: "r5qsrrlp"
  },
  label: {
    color: "gq1t1y46",
    lineHeight: "q5jc98e4",
    fontWeight: "e1gr2w1z"
  },
  nameContainer: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "r15c9g6i",
    justifyContent: "ac2vgrno",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  }
};