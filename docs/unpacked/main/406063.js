var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, E.getMaybeMeUser)();
  if (!i.Conn.isSMB || e == null) {
    return null;
  }
  return v.default.createElement(M, {
    meUser: e
  });
};
var r = require("../app/72696.js");
var o = require("../app/778945.js");
var l = require("../app/817649.js");
var i = require("../app/445729.js");
var u = require("../app/312158.js");
var s = require("./353556.js");
var c = a(require("./838536.js"));
var d = a(require("./512495.js"));
var f = require("./740820.js");
var p = require("./834246.js");
var m = a(require("./912329.js"));
var h = require("./717940.js");
var g = require("./352224.js");
var E = require("../app/459857.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var _ = a(require("../app/969651.js"));
var y = require("../app/808446.js");
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = e => {
  var t;
  return (e == null || (t = e.profileOptions) === null || t === undefined ? undefined : t.commerceExperience) === l.COMMERCE_EXPERIENCE_TYPES.NONE;
};
function M(e) {
  let {
    meUser: t
  } = e;
  const n = (0, _.default)();
  const a = (0, v.useMemo)(() => o.BusinessProfileCollection.get(t), [t]);
  const [l, i] = (0, v.useState)(() => b(a));
  const [E, C] = (0, v.useState)(() => o.BusinessProfileCollection.getValid(t) != null);
  (0, y.useListener)(a, "change", () => {
    C(true);
    i(b(a));
  });
  const M = () => {
    var e;
    if ((e = s.CTWASuggestionCollection.findFirstNotExpired()) === null || e === undefined) {
      return undefined;
    } else {
      return e.suggestion;
    }
  };
  const [S, T] = (0, v.useState)(M);
  (0, y.useListener)(s.CTWASuggestionCollection, "add", () => {
    T(M());
  });
  const w = () => {
    var e;
    if ((0, r.qpCampaignsEnabled)()) {
      if ((e = g.QuickPromotionCollection.bestPromotionForSurface({
        surfaceId: u.QP_SURFACE_ID_CHAT_LIST_TOP
      })) === null || e === undefined) {
        return undefined;
      } else {
        return e.promotion;
      }
    } else {
      return null;
    }
  };
  const [A, P] = (0, v.useState)(w);
  (0, y.useListener)(g.QuickPromotionCollection, "add", () => {
    P(w());
  });
  const O = [];
  if (E) {
    O.push(v.default.createElement(d.default, {
      onInteract: n,
      key: "business"
    }));
  }
  if (l) {
    O.push(v.default.createElement(m.default, {
      onInteract: n,
      key: "catalog"
    }));
  }
  if (S != null) {
    O.push(v.default.createElement(f.CTWASuggestionBanner, {
      onInteract: n,
      suggestion: S,
      key: "ctwa_suggestion"
    }));
  }
  if (A != null) {
    O.push(v.default.createElement(h.QuickPromotionChatListBanner, {
      onInteract: n,
      promotion: A,
      key: "quick_promotion"
    }));
  }
  if ((0, p.shouldShowOrderExpansionBanner)()) {
    O.push(v.default.createElement(p.OrderExpansionBanner, {
      onInteract: n,
      key: "order_expansion_banner"
    }));
  }
  if (O.length) {
    return v.default.createElement(c.default, null, O);
  } else {
    return null;
  }
}