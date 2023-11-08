var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = function (e) {
  var t;
  let {
    msg: n,
    theme: a,
    displayType: f,
    isAlbum: A
  } = e;
  const [P, I, L, F, H, V, q, Y, z, K, Q, X, Z, J, $, ee, te, ne] = (0, x.useMsgValues)(n.id, [E.getId, E.getBroadcast, E.getCaption, E.getIsLive, p.getAsRevoked, E.getIsSentByMe, E.getIsViewOnce, E.getLabels, E.getLoc, E.getStar, E.getT, E.getType, E.getSubtype, E.getIsSendFailure, E.getIsKept, E.getIsEdited, E.getIsBotResponse, E.getIsBizBot1pResponse]);
  const ae = (0, y.useWAWebLocalizedViewCount)(n.id);
  const re = (0, R.default)(P);
  const [oe, le] = (0, k.useState)(false);
  (0, N.useListener)(s.Clock, s.HOUR24_FORMAT_CHANGE_EVENT, () => {
    le(!oe);
  });
  const ie = [];
  const ue = (X === j.IMAGE || X === j.VIDEO) && !L && !q || X === j.LOCATION && !F && !z;
  if (K && !H) {
    ie.push(k.default.createElement(T.StarIcon, {
      "aria-label": ` ${O.fbt._("Starred messages", null, {
        hk: "uqtIq"
      }).toString()} `
    }));
  }
  if ($ && !H) {
    ie.push(k.default.createElement(m.KeepInChatIcon, {
      width: 15.64,
      height: 14.67,
      "aria-label": ` ${O.fbt._("Kept message", null, {
        hk: "4p3B3Z"
      }).toString()} `
    }));
  }
  if (I) {
    ie.push(k.default.createElement(u.BroadcastIcon, null));
  }
  if (re && !H && (0, b.isPinnedMessagesM1ReceiverEnabled)()) {
    ie.push(k.default.createElement(M.PinnedSmallIcon, {
      width: 15,
      "aria-label": ` ${O.fbt._("Pinned message", null, {
        hk: "28mPJl"
      }).toString()} `
    }));
  }
  let se = null;
  if (V && !H) {
    se = k.default.createElement(g.default, {
      msg: n.unsafe()
    });
  }
  if (X === j.CIPHERTEXT && Z === "fanout" || J === true) {
    se = null;
  }
  const ce = (0, p.getChat)(n.unsafe());
  const de = (0, C.isNewsletterViewCountEnabled)(ce == null || (t = ce.newsletterMetadata) === null || t === undefined ? undefined : t.membershipType) && A !== true && ae != null && n.type !== _.MSG_TYPE.REVOKED ? k.default.createElement("span", null, ae) : null;
  const fe = Y && Y.length > 0 ? k.default.createElement(h.Labels, {
    labels: Y,
    showName: false
  }) : null;
  const pe = !ee || H || te ? null : k.default.createElement("span", {
    className: (0, D.default)(B.editedLabel)
  }, U());
  let me;
  let he;
  let ge;
  if ((0, l.isBizBot1pEnabled)() && ne && !H) {
    me = k.default.createElement("span", {
      className: (0, D.default)(B.editedLabel)
    }, W());
    ie.push(k.default.createElement(o.AiSignalIcon, {
      width: 14,
      height: 14
    }));
  }
  if ((0, l.isBotReceiveEnabled)() && (0, E.getIsBotSearchResponse)(n) && n.type !== _.MSG_TYPE.REVOKED) {
    he = k.default.createElement(k.default.Fragment, null, k.default.createElement(i.BotPluginSearchDetailToggle, {
      botResponseTargetId: (0, E.getBotResponseTargetId)(n)
    }), k.default.createElement(i.BotPluginSearchProviderLink, {
      t: Q,
      botPluginSearchUrl: (0, E.getBotPluginSearchUrl)(n),
      botPluginSearchProvider: (0, E.getBotPluginSearchProvider)(n)
    }));
  }
  if ((0, E.getIsCAPISupport)(n) && (0, r.getIsSagaEnabled)()) {
    ge = k.default.createElement(S.default, {
      width: 11,
      height: 11,
      marginRight: true
    });
  }
  const Ee = (0, v.canOpenInfoDrawer)(n.unsafe()) && f !== d.DISPLAY_TYPE.EDITING;
  const ve = a !== "date" ? Q ? s.Clock.timestampStr(Q) : null : Q ? s.Clock.relativeStr(Q) : null;
  return k.default.createElement(G, {
    icons: ie,
    labels: fe,
    light: ue,
    viewCount: de,
    includeBotSearchPluginDetailToggleEl: he != null,
    onClick: Ee ? () => {
      c.Cmd.msgInfoDrawer((0, w.unproxy)(n.unsafe()));
    } : null,
    status: se
  }, pe, ge, me, he, he == null && ve);
};
exports.MetaBullet = F;
exports.MetaFrame = G;
exports.MetaWrapper = undefined;
exports.getBizBotLabel = W;
exports.getEditedLabel = U;
var r = require("../app/174662.js");
var o = require("./321545.js");
var l = require("../app/354458.js");
var i = require("./762122.js");
var u = require("./622917.js");
var s = require("../app/63014.js");
var c = require("../app/780549.js");
var d = require("../app/356097.js");
var f = require("../app/690495.js");
var p = require("../app/163755.js");
var m = require("./769153.js");
var h = require("../app/129363.js");
var g = a(require("./381317.js"));
var E = require("../app/787742.js");
var v = require("./376458.js");
var _ = require("../app/373070.js");
var y = require("./905797.js");
var C = require("../app/73225.js");
var b = require("../app/591800.js");
var M = require("./36944.js");
var S = a(require("./61476.js"));
var T = require("./407024.js");
var w = require("../app/163139.js");
var A = require("../app/368170.js");
var P = require("../app/676345.js");
var O = require("../vendor/548360.js");
var k = function (e, t) {
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
var D = a(require("../app/156720.js"));
var I = require("../app/140455.js");
var R = a(require("./135179.js"));
var N = require("../app/808446.js");
var x = require("./871210.js");
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
const j = _.MSG_TYPE;
const B = {
  meta: {
    color: "gq1t1y46",
    fontSize: "lak21jic",
    height: "e4p1bexh",
    lineHeight: "cr2cog7z",
    whiteSpace: "le5p0ye3",
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  },
  metaLight: {
    color: "pp8r7oc8"
  },
  chromeFix: {
    lineHeight: "sid27bd6"
  },
  labels: {
    alignItems: "gndfcl4n",
    display: "i86elurf",
    height: "e4p1bexh",
    marginStart: "akljc1zx",
    marginEnd: "om6y7gxh",
    verticalAlign: "fewfhwl7"
  },
  icon: {
    color: "do8e0lj9",
    display: "l7jjieqr",
    marginEnd: "om6y7gxh"
  },
  iconLight: {
    color: "k17s6i4e"
  },
  status: {
    color: "do8e0lj9",
    display: "l7jjieqr",
    marginStart: "k6y3xtnu"
  },
  timestamp: {
    display: "l7jjieqr",
    verticalAlign: "fewfhwl7"
  },
  botPluginMeta: {
    display: "p357zi0d",
    justifyContent: "o4u7okr9",
    width: "ln8gz9je"
  },
  bullet: {
    display: "p357zi0d"
  },
  editedLabel: {
    marginEnd: "mw4yctpw",
    marginStart: "gj5xqxfh"
  }
};
function F() {
  return k.default.createElement(f.FlexColumn, {
    xstyle: [B.bullet, P.uiMargin.horiz4],
    justify: "center"
  }, "•");
}
function G(e) {
  const t = e.icons && e.icons.length > 0 ? e.icons.map((t, n) => k.default.createElement("div", {
    className: (0, D.default)(B.icon, e.light && B.iconLight),
    key: `icon-${n}`
  }, t)) : null;
  const n = e.labels ? k.default.createElement("div", {
    className: (0, D.default)(B.labels)
  }, e.labels) : null;
  const a = e.status ? k.default.createElement("div", {
    className: (0, D.default)(B.status)
  }, e.status) : null;
  const r = e.viewCount != null ? k.default.createElement(f.FlexRow, null, e.viewCount, k.default.createElement(F, null)) : null;
  const o = (0, I.useElectronCompatibleStyles)().metaTextStyles;
  const l = (0, D.default)(B.meta, e.light && B.metaLight, A.UA.os === A.OS_TYPE.MAC && A.UA.browser === A.BROWSER_TYPE.CHROME && A.UA.osVersion.includes("10.15") && B.chromeFix, o);
  return k.default.createElement("div", {
    className: l,
    onClick: e.onClick,
    role: e.onClick ? "button" : null
  }, t, n, r, k.default.createElement("span", {
    className: (0, D.default)(e.includeBotSearchPluginDetailToggleEl === true ? B.botPluginMeta : B.timestamp),
    dir: "auto"
  }, e.children), a);
}
function U() {
  return O.fbt._("Edited", null, {
    hk: "3zo6HQ"
  });
}
function W() {
  return O.fbt._("AI", null, {
    hk: "3RFtHh"
  });
}
const H = {
  authorIsMe: {
    backgroundColor: "bntscc16"
  },
  authorIsNotMe: {
    backgroundColor: "jht8oeb6"
  },
  transparentStyles: {
    width: "ltyqj8pj",
    borderTopStartRadius: "rq6dtfpq",
    borderTopEndRadius: "aokg6g0y",
    borderBottomEndRadius: "nqm9sais",
    borderBottomStartRadius: "lrpjbpgm",
    boxShadow: "k6sbqduh"
  }
};
function V(e, t) {
  let {
    isSentByMe: n,
    isTransparent: a,
    children: r
  } = e;
  return k.default.createElement("div", {
    ref: t,
    className: (0, D.default)(P.uiMargin.startAuto, a && (n ? H.authorIsMe : H.authorIsNotMe), a && [P.uiPadding.vert3, P.uiPadding.start6, P.uiPadding.end7], a && H.transparentStyles)
  }, r);
}
const q = (0, k.forwardRef)(V);
exports.MetaWrapper = q;
q.displayName = "MetaWrapper";