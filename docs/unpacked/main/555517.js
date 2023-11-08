var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = C.fbt._("click here for contact info", null, {
    hk: "3SoCN"
  });
  const n = C.fbt._("Business Account", null, {
    hk: "3UVemK"
  });
  const a = C.fbt._("Official WhatsApp Account", null, {
    hk: "25Z4kc"
  });
  const w = C.fbt._("Message yourself", null, {
    hk: "3F8qPx"
  });
  const D = C.fbt._("AI", null, {
    hk: "3lCBym"
  });
  const [I, R, N, x, L, j, B, F] = (0, S.useContactValues)(e.contact.id, [u.getName, u.getVerifiedName, u.getId, u.getIsMe, c.getTextStatusString, c.getTextStatusEmoji, c.getTextStatusLastUpdateTime, c.getTextStatusExpiryTs]);
  const G = (0, E.shouldDisplayTextStatus)(L, j, B, F);
  const U = (0, T.useModelValues)(e.presence, ["chatstate", "withholdDisplayStage", "forceDisplay", "hasData"]);
  const {
    location: W,
    showBusinessCheckmark: H,
    assignmentSubtitle: V,
    chatId: q
  } = e;
  (0, T.useModelValues)(e.chatstate, ["type", "deny", "t"]);
  const Y = (0, _.useBusinessProfile)((0, o.isBizBot3pEnabled)() ? q : null, ["isBizBot3p"]);
  const z = (Y == null ? undefined : Y.isBizBot3p) === true;
  let K;
  let Q;
  let X;
  (0, b.useEffect)(() => {
    if (V != null && U.withholdDisplayStage === f.WithholdDisplayStage.ChatAssignment) {
      (0, l.logChatStatusTickerShown)(q);
    }
  }, [q, U.withholdDisplayStage, V]);
  if (y.default.isPSA(N)) {
    K = a;
  } else if (y.default.isCAPISupportAccount(N)) {
    K = (0, h.SupportChatSubtitle)();
  } else if (N.isBot() || z) {
    K = D;
  } else if (x) {
    K = w;
  } else if (W === "list" || W === "info") {
    K = U.getUserSubtitleText();
  } else if (U.withholdDisplayStage === f.WithholdDisplayStage.Info) {
    K = t;
  } else if (U.withholdDisplayStage === f.WithholdDisplayStage.Business) {
    K = n;
  } else if (V != null && U.withholdDisplayStage === f.WithholdDisplayStage.ChatAssignment) {
    K = V;
  } else if (U.withholdDisplayStage === f.WithholdDisplayStage.LastSeen) {
    K = U.getUserSubtitleText();
  } else if (U.chatstate.type === "unavailable" && G && (0, g.receiveTextStatusForNewSurfacesEnabled)()) {
    K = L;
    X = j;
  } else {
    K = U.getUserSubtitleText() || (U.forceDisplay ? "" : t);
  }
  if (K != null) {
    Q = b.default.createElement(i.default, {
      text: K,
      textStatusEmoji: X,
      location: W
    });
  }
  if (W === "title" && K !== t && K !== n && H) {
    return b.default.createElement("div", {
      className: (0, M.default)(A)
    }, b.default.createElement(s.EmojiText, {
      text: R,
      className: (0, M.default)(O),
      direction: "auto",
      titlify: true
    }), b.default.createElement("div", {
      className: (0, M.default)(P, v.uiMargin.top2, v.uiMargin.start2)
    }, (0, d.isBlueEnabled)() ? b.default.createElement(p.PsaVerifiedBlueIcon, {
      width: 16,
      height: 16
    }) : b.default.createElement(m.PsaVerifiedIcon, {
      width: 16,
      height: 16
    })), Q && b.default.createElement("span", {
      className: (0, M.default)(k, v.uiMargin.start1, v.uiMargin.end3)
    }, "·"), Q);
  }
  if (N.isBot() || z) {
    return b.default.createElement("div", {
      className: (0, M.default)(A)
    }, Q, b.default.createElement("div", {
      className: (0, M.default)(P, v.uiMargin.top4, v.uiMargin.start2)
    }, b.default.createElement(r.AiSignalIcon, {
      width: 12,
      height: 12
    })));
  }
  return Q || null;
};
var r = require("./321545.js");
var o = require("../app/354458.js");
var l = require("../app/2772.js");
var i = a(require("./753884.js"));
var u = require("../app/660666.js");
var s = require("../app/305521.js");
var c = require("../app/714574.js");
var d = require("../app/97858.js");
var f = require("../app/576965.js");
var p = require("../app/82422.js");
var m = require("../app/250820.js");
var h = require("../app/666836.js");
var g = require("../app/491805.js");
var E = require("../app/596328.js");
var v = require("../app/676345.js");
var _ = require("./508228.js");
var y = a(require("../app/124928.js"));
var C = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var M = a(require("../app/156720.js"));
var S = require("../app/379811.js");
var T = require("../app/655241.js");
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = {
  display: "p357zi0d",
  flexDirection: "sap93d0t"
};
const P = {
  display: "l7jjieqr",
  flexGrow: "tvf2evcx",
  flexShrink: "oq44ahr5",
  flexBasis: "lb5m6g5c"
};
const O = {
  flexGrow: "tvf2evcx",
  minHeight: "g4oj0cdv",
  fontSize: "ovllcyds",
  lineHeight: "r5qsrrlp",
  color: "pm5hny62"
};
const k = {
  fontWeight: "nbipi2bn"
};