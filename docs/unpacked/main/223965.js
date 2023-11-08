var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onAction: t,
    actionDisabled: n = false,
    actionText: a,
    onCancel: r,
    cancelText: o,
    contacts: l,
    image: u,
    description: s,
    title: c,
    subtitle: d,
    finePrint: f,
    loading: p = false,
    participantsCount: m,
    groupType: h,
    textInput: g,
    source: E
  } = e;
  return A.default.createElement(i.ConfirmPopup, {
    onOK: t,
    okText: p === true ? "" : a,
    cancelText: o,
    onCancel: r,
    type: y.ModalTheme.InviteNew,
    okSpinner: p,
    okDisabled: p || n,
    buttonAlign: "center"
  }, A.default.createElement(N, {
    contacts: l,
    image: u,
    description: s,
    title: c,
    subtitle: d,
    finePrint: f,
    textInput: g,
    participantsCount: m,
    groupType: h,
    source: E
  }));
};
var r = require("../app/174834.js");
var o = require("../app/359198.js");
var l = require("../app/146281.js");
var i = require("../app/103440.js");
var u = require("../app/192562.js");
var s = require("../app/23641.js");
var c = require("../app/305521.js");
var d = require("./999649.js");
var f = require("../app/690495.js");
var p = k(require("../app/675886.js"));
var m = require("../app/714574.js");
var h = require("./148999.js");
var g = a(require("../app/667845.js"));
var E = require("../app/862159.js");
var v = require("../app/118914.js");
var _ = k(require("../app/446303.js"));
var y = require("../app/118612.js");
var C = require("../app/180519.js");
var b = a(require("./858327.js"));
var M = require("../app/676345.js");
var S = a(require("../app/625903.js"));
var T = require("../app/571444.js");
var w = require("../vendor/548360.js");
var A = k(require("../vendor/667294.js"));
var P = a(require("../app/156720.js"));
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function k(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = O(t);
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
const D = {
  title: {
    fontSize: "iqrewfee",
    color: "tl2vja3b",
    letterSpacing: "d53dy967",
    textAlign: "qfejxiq4"
  },
  description: {
    marginTop: "c46o30wg",
    overflowX: "gfz4du6o",
    overflowY: "ag5g9lrv",
    fontSize: "f8jlpxt4",
    color: "tl2vja3b",
    textAlign: "ljrqcn24",
    wordBreak: "cw3vfol9"
  },
  expandedDescription: {
    backgroundColor: "i16jpgpt",
    paddingEnd: "l9g3jx6n",
    paddingStart: "lyvj5e2u",
    paddingTop: "b7n2qyd4",
    paddingBottom: "ekpn4oxx",
    maxHeight: "fgslzg21",
    overflowY: "rpvcun8f",
    textAlign: "ljrqcn24",
    animationName: "bfvdtf1u",
    animationDuration: "eb9g83lr"
  },
  finePrint: {
    textAlign: "qfejxiq4"
  },
  avatars: {
    display: "i86elurf",
    flexDirection: "sap93d0t",
    marginTop: "fgtikrv0"
  },
  avatar: {
    position: "g0rxnol2",
    width: "ln8gz9je",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  avatarNext: {
    marginStart: "mykz8fp3"
  },
  avatarCount: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    fontSize: "f8jlpxt4",
    backgroundColor: "fr2082sw",
    borderTopStartRadius: "jv1ikj1l",
    borderTopEndRadius: "ohzpzhf7",
    borderBottomEndRadius: "jyk8994j",
    borderBottomStartRadius: "bj4p3wqc",
    color: "tl2vja3b",
    zIndex: "jnl3jror",
    width: "ln8gz9je",
    borderTop: "er60nxep",
    borderEnd: "ppgl3mp3",
    borderBottom: "g4g5yoif",
    borderStart: "f3pti8mu"
  },
  communitySquircle: {
    color: "bk9ojlrj"
  },
  contactsScrollableContainer: {
    width: "ln8gz9je",
    backgroundColor: "i16jpgpt",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9",
    marginTop: "fgtikrv0",
    textAlign: "ljrqcn24",
    animationName: "osz0hll6",
    animationDuration: "ef2byrub"
  },
  contactsScrollable: {
    display: "p357zi0d",
    overflowX: "i44ccddp"
  },
  contactWrapper: {
    width: "fcdez9h5",
    marginEnd: "bugiwsl0",
    marginStart: "fooq7fky",
    marginTop: "iy2cu22y",
    marginBottom: "t4zgqcuo",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n"
  },
  contactText: {
    marginTop: "qt60bha0",
    fontSize: "dsh4tgtl",
    lineHeight: "q6wg26sa",
    textAlign: "qfejxiq4",
    wordBreak: "cw3vfol9",
    color: "k2bacm8l"
  }
};
function I(e) {
  const {
    contacts: t,
    participantsCount: n
  } = e;
  const {
    sortedContacts: a,
    hiddenPileCount: r
  } = (0, A.useMemo)(() => (0, h.sortFacePileContacts)(t, n), [t, n]);
  const [o, l] = (0, A.useState)(false);
  const i = w.fbt._({
    "*": "{number_of_contacts} contacts",
    _1: "1 contact"
  }, [w.fbt._plural(t.length, "number_of_contacts")], {
    hk: "1jIbZu"
  });
  const u = A.default.createElement("div", {
    className: (0, P.default)(D.contactsScrollableContainer)
  }, n != null ? A.default.createElement(C.Text, {
    as: "div",
    size: "12",
    xstyle: [M.uiPadding.top12, M.uiPadding.horiz12]
  }, w.fbt._({
    "*": "{number_of_participants} participants · {contacts}",
    _1: "1 participant · {contacts}"
  }, [w.fbt._plural(n, "number_of_participants"), w.fbt._param("contacts", i)], {
    hk: "gcDCL"
  })) : null, A.default.createElement("div", {
    className: (0, P.default)(D.contactsScrollable)
  }, t.map(e => A.default.createElement("div", {
    key: e.id,
    className: (0, P.default)(D.contactWrapper)
  }, A.default.createElement(s.DetailImage, {
    id: e.id
  }), A.default.createElement("span", {
    className: (0, P.default)(D.contactText)
  }, A.default.createElement(b.default, {
    maxLines: 2
  }, A.default.createElement(c.EmojiText, {
    text: (0, m.getFormattedName)(e.contact)
  })))))));
  if (o) {
    return u;
  } else {
    return A.default.createElement("div", {
      className: (0, P.default)(D.avatars)
    }, a.map((e, n) => A.default.createElement("span", {
      key: `${n}-${e.id.toString()}`,
      id: e.id,
      className: (0, P.default)(D.avatar, t.length > 1 && D.avatarNext)
    }, A.default.createElement(s.DetailImage, {
      theme: "invite_modal",
      size: 40,
      id: e.id,
      onClick: () => l(true)
    }))), r > 0 ? A.default.createElement(S.default, {
      onClick: () => l(true),
      xstyle: [D.avatarNext, D.avatarCount, M.uiPadding.horiz6]
    }, w.fbt._("+{number}", [w.fbt._param("number", r)], {
      hk: "44RMJ3"
    })) : null);
  }
}
function R(e) {
  const {
    src: t,
    groupId: n,
    groupType: a
  } = e;
  if (n && a === E.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    var r;
    const e = (r = g.default.get(n)) === null || r === undefined ? undefined : r.parentGroup;
    if (e != null) {
      return A.default.createElement(s.DetailImage, {
        size: 104,
        id: e,
        shape: s.DetailImageShape.Squircle
      });
    }
  }
  if (n && t === undefined) {
    return A.default.createElement(s.DetailImage, {
      size: 104,
      id: n
    });
  }
  const o = a === E.GroupType.COMMUNITY;
  return A.default.createElement(v.ImgWithFallback, {
    fallbackSVG: o ? A.default.createElement(l.CommunitySquircleIcon, {
      iconXstyle: D.communitySquircle
    }) : A.default.createElement(u.DefaultGroupIcon, null),
    size: 104,
    imgProps: {
      src: t || ""
    },
    shape: o ? s.DetailImageShape.Squircle : s.DetailImageShape.Circle
  });
}
function N(e) {
  var t;
  const {
    contacts: n,
    description: a,
    title: l,
    subtitle: i,
    image: u,
    finePrint: s,
    participantsCount: m,
    groupType: h,
    textInput: g,
    source: E
  } = e;
  const [v, y] = (0, A.useState)(false);
  const b = n && ((t = n.length) !== null && t !== undefined ? t : 0) >= 1 ? A.default.createElement(I, {
    contacts: n,
    participantsCount: m
  }) : null;
  const S = (0, A.useCallback)(e => {
    if (e) {
      y(e.isExpanded);
    }
  }, []);
  const w = a != null ? A.default.createElement("div", {
    className: (0, P.default)(D.description, v && D.expandedDescription)
  }, A.default.createElement(d.ExpandableText, {
    ref: S,
    text: a.toString(),
    textLimit: 100
  }, e => {
    let {
      textLimit: t
    } = e;
    return A.default.createElement(c.EmojiText, {
      text: a,
      textLimit: t,
      inferLinesDirection: true,
      multiline: true,
      formatters: p.TrustedGroupDesc({
        links: _.findLinks(a.toString()),
        bulletPointsEnabled: (0, r.richCommunityDescriptionEnabled)()
      })
    });
  })) : null;
  const O = A.default.createElement(R, {
    groupType: h,
    src: u.src,
    groupId: u.groupId
  });
  const k = A.default.createElement(f.FlexColumn, {
    align: "center",
    xstyle: M.uiMargin.top16
  }, A.default.createElement(c.EmojiText, {
    className: (0, P.default)(D.title),
    text: l,
    testid: "group-join-modal-group-name"
  }), A.default.createElement(C.TextDiv, {
    size: "14",
    weight: "light",
    color: "secondary",
    xstyle: M.uiMargin.top5
  }, i));
  const N = (s == null ? undefined : s.text) != null ? A.default.createElement(f.FlexRow, {
    xstyle: [M.uiMargin.top20, D.finePrint]
  }, A.default.createElement(C.TextParagraph, {
    color: s.isError ? "danger" : "secondary",
    size: "13",
    testid: "group-join-modal-fine-print"
  }, s.text)) : null;
  (0, A.useEffect)(() => {
    const e = o.CommunityGroupJourneyEvent.inviteModalSourceToSurface(E);
    if (e) {
      new o.CommunityGroupJourneyEvent({
        action: T.CHAT_FILTER_ACTION_TYPES.GROUP_DISCOVERY,
        surface: e
      }).commit();
    }
  }, []);
  return A.default.createElement(f.FlexColumn, {
    align: "center"
  }, O, k, b, w, g, N);
}