var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactCellType = exports.Contact = undefined;
exports.ContactFactory = function () {
  return (0, D.forwardRef)(G);
};
exports.FREQUENT_PREFIX = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/670983.js"));
var l = a(require("./991370.js"));
var i = require("../app/351053.js");
var u = a(require("./621076.js"));
var s = a(require("./203528.js"));
var c = a(require("./717304.js"));
var d = require("../app/396574.js");
var f = require("./949359.js");
var p = require("../app/174834.js");
var m = require("../app/660666.js");
var h = require("./270457.js");
var g = a(require("../app/102130.js"));
var E = require("../main-chunk/465113.js");
var v = require("../app/305521.js");
var _ = a(require("../app/335540.js"));
var y = require("../app/714574.js");
var C = require("../app/862159.js");
var b = require("../app/81644.js");
var M = require("../app/21645.js");
var S = require("../app/163139.js");
var T = require("./533426.js");
var w = require("../app/491805.js");
var A = a(require("../app/124928.js"));
var P = require("../app/813133.js");
var O = require("./268929.js");
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
  var n = j(t);
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
var I = require("../app/379811.js");
var R = a(require("../app/969651.js"));
var N = require("../app/808446.js");
var x = a(require("../app/38085.js"));
var L = require("./388364.js");
function j(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (j = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const B = require("../vendor/76672.js").Mirrored(["SMALL", "DEFAULT", "REACTION_TRAY"]);
exports.ContactCellType = B;
const F = "freq_";
function G(e, t) {
  var n;
  const [a, j, G, U, W, H, V, q, Y] = (0, I.useContactValues)(e.contact.id, [m.getId, y.getPendingAction, m.getNotifyName, m.getName, m.getShowBusinessCheckmarkAsPrimary, m.getIsGroup, y.getFormattedPhone, m.getVerifiedName, m.getVerifiedLevel]);
  const {
    contact: z,
    secondary: K,
    onDelete: Q,
    onClick: X,
    contextEnabled: Z,
    contextMenu: J,
    admin: $ = false,
    showNotifyName: ee,
    elevatedPushNamesEnabled: te = false,
    waitIdle: ne,
    theme: ae,
    useShortName: re,
    detail: oe,
    isPendingParticipant: le = false,
    newsletterMembershipType: ie,
    ephemeralIcon: ue,
    listenForAdminChange: se = false,
    participantCollection: ce,
    searchQuery: de,
    frequent: fe = false,
    hideStatus: pe = false,
    showMessageYourselfName: me = false,
    loadPicture: he = true,
    isSearchResult: ge = false,
    chatOrigin: Ee,
    tabIndex: ve,
    role: _e
  } = e;
  const ye = (0, D.useRef)(null);
  const Ce = (0, D.useRef)(null);
  const be = (0, x.default)(t, Ce);
  const Me = (0, R.default)();
  const [Se, Te] = (0, D.useState)(false);
  const we = (0, L.useSearchText)(de);
  const Ae = !!e.active && e.active.value instanceof g.default && e.active.value.id.equals(z.id);
  if (Se !== Ae) {
    Te(Ae);
  }
  const Pe = (fe ? F : "") + a.toString();
  (0, N.useListener)(e.active, Pe, (e, t) => {
    if (e === "focus") {
      const e = Ce.current;
      if (e) {
        _.default.focus(e);
        if (t) {
          (0, E.scrollIntoViewIfNeeded)(e);
        }
      }
    }
    Te(!!e);
  });
  (0, N.useListener)(se && ce ? ce : null, ["change:isAdmin", "change:isSuperAdmin"], e => {
    if (A.default.equals(e.id, a)) {
      Me();
    }
  });
  const Oe = t => {
    t.stopPropagation();
    if (Q) {
      Q(t, (0, S.unproxy)(e.contact));
    }
  };
  const ke = e => {
    if (X) {
      X(e, (0, S.unproxy)(z), ge, Ee);
    }
  };
  const De = e => {
    e.preventDefault();
    e.stopPropagation();
    ke(e);
  };
  const Ie = (0, d.classnamesConvertMeToStylexPlease)({
    [u.default.contactSmall]: e.type === B.SMALL
  });
  let Re;
  let Ne;
  let xe;
  if (!(U != null && U !== "" || q != null && q !== "" && Y !== 0 || ee !== true || G == null || G === "")) {
    xe = te ? D.default.createElement("span", {
      className: u.default.phoneNumber
    }, D.default.createElement(v.EmojiText, {
      direction: "auto",
      text: V
    })) : D.default.createElement("span", {
      className: u.default.screenName
    }, D.default.createElement(v.EmojiText, {
      direction: "auto",
      text: G
    }));
  }
  const Le = Boolean($ || se && (ce == null || (n = ce.get(a)) === null || n === undefined ? undefined : n.isAdmin));
  const je = D.default.createElement(T.Tag, {
    testid: "community-admin-marker"
  }, k.fbt._("Community Admin", null, {
    hk: "3ikZTf"
  }));
  let Be;
  var Fe;
  var Ge;
  var Ue;
  if ((0, p.communitiesEnabled)()) {
    Be = (Fe = ce == null || (Ge = ce.getChat()) === null || Ge === undefined || (Ue = Ge.groupMetadata) === null || Ue === undefined ? undefined : Ue.groupType) !== null && Fe !== undefined ? Fe : C.GroupType.DEFAULT;
  } else {
    Be = C.GroupType.DEFAULT;
  }
  switch (Be) {
    case C.GroupType.COMMUNITY:
      var We;
      if (Boolean(se && (ce == null || (We = ce.get(a)) === null || We === undefined ? undefined : We.isSuperAdmin))) {
        Ne = D.default.createElement(T.Tag, {
          testid: "community-creator-marker"
        }, k.fbt._("Community Creator", null, {
          hk: "2CfYOt"
        }));
      } else if (Le) {
        Ne = je;
      }
      break;
    case C.GroupType.LINKED_ANNOUNCEMENT_GROUP:
      if (Le) {
        Ne = je;
      }
      break;
    default:
      if (Le) {
        Ne = D.default.createElement(T.Tag, {
          testid: "group-admin-marker"
        }, k.fbt._("Group Admin", null, {
          hk: "49cDew"
        }));
      }
  }
  if (le) {
    Ne = D.default.createElement(T.Tag, {
      testid: "invited-marker"
    }, k.fbt._("Invited", null, {
      hk: "4yZipP"
    }));
  }
  if (ie != null) {
    const e = (0, f.getNewsletterMembershipRoleTag)(ie);
    if (e != null) {
      Ne = D.default.createElement(T.Tag, {
        testid: "newsletter-admin-marker",
        theme: T.TagTheme.Primary
      }, e);
    }
  }
  if (oe != null) {
    Re = oe;
  } else if (Q) {
    const t = e.type === B.SMALL ? D.default.createElement(O.XAltSmallIcon, null) : D.default.createElement(P.XAltIcon, null);
    Re = D.default.createElement("div", {
      className: u.default.chatControls,
      role: "button",
      onClick: Oe,
      "aria-label": k.fbt._("Delete", null, {
        hk: "OCnBv"
      })
    }, t);
  }
  let He = K;
  if (!(He != null || pe)) {
    He = (0, w.receiveTextStatusEnabled)() ? D.default.createElement(c.default, {
      contactId: z.id,
      waitIdle: ne
    }) : D.default.createElement(s.default, {
      id: a,
      waitIdle: ne
    });
  }
  let Ve = e.type === B.SMALL ? 26 : e.photoSize;
  if (ae === "chat-info") {
    Ve = 40;
  }
  const qe = e.mouseDownAsClick;
  let Ye;
  if (H) {
    const e = (0, o.default)(i.ChatCollection.get(a.toString()), "ChatCollection.get(id.toString())");
    Ye = D.default.createElement(M.Name, {
      chat: e,
      useShortName: re,
      highlightText: we,
      showBusinessCheckmark: W,
      showLabel: true,
      titlify: true,
      ellipsify: true
    });
  } else {
    Ye = D.default.createElement(M.Name, {
      contact: z,
      useShortName: re,
      highlightText: we,
      showBusinessCheckmark: W,
      showLabel: true,
      showNotifyName: te && ee,
      useVerifiedName: te && Y > 0,
      elevatedPushNamesEnabled: te,
      titlify: true,
      ellipsify: true,
      you: true,
      showMessageYourselfName: me
    });
  }
  const ze = ae !== "list-names" || Q ? ae : "list-names-no-delete";
  const Ke = D.default.createElement(h.ContactImage, {
    contact: z,
    size: Ve,
    theme: ae,
    waitIdle: ne,
    ephemeralIcon: ue,
    searchQuery: de,
    showStatusRingAroundProfilePhoto: e.showStatusRingAroundProfilePhoto,
    loadPicture: he
  });
  return D.default.createElement(b.HotKeys, (0, r.default)({
    ref: be,
    handlers: {
      enter: De,
      space: De
    },
    onFocus: t => {
      var n;
      if (e.allowFocusEventPropagation !== true) {
        t.stopPropagation();
      }
      t.preventDefault();
      if (!((n = ye.current) === null || n === undefined)) {
        n.indicateFocus();
      }
    },
    className: Ie
  }, X && {
    role: "button"
  }), D.default.createElement(l.default, (0, r.default)({
    ref: ye,
    theme: ze,
    active: Se,
    contextEnabled: Z || (() => false),
    contextMenu: J,
    pendingAction: j,
    detail: Re,
    image: Ke,
    primary: Ye,
    primaryDetail: Ne,
    secondary: He,
    secondaryDetail: xe,
    onClick: qe ? null : ke,
    onMouseDown: qe ? e => {
      if (e.button === 0) {
        ke(e);
      }
    } : null,
    onContext: t => {
      var n;
      if (!((n = e.onContext) === null || n === undefined)) {
        n.call(e, t, z);
      }
    },
    tabIndex: ve,
    containerRole: _e
  }, me && {
    testid: "message-yourself-row",
    extendSecondaryEllipsis: true
  })));
}
exports.FREQUENT_PREFIX = F;
const U = (0, D.forwardRef)(G);
exports.Contact = U;
U.displayName = "Contact";