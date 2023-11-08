var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickPromotionChatListBanner = undefined;
var r = a(require("../app/786566.js"));
var o = require("../app/694209.js");
var l = require("./182908.js");
var i = require("./633668.js");
var u = require("./352224.js");
var s = a(require("../app/556869.js"));
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
class f extends l.ExtendableNuxBanner {
  constructor() {
    super(...arguments);
    this._refContainer = (0, c.createRef)();
    this.getElement = () => this._refContainer.current;
  }
  render() {
    var e;
    var t;
    const {
      onInteract: n,
      promotion: a
    } = this.props;
    const {
      titleElementValue: l,
      textElementValue: s,
      primaryAction: d,
      colors: f,
      image: p
    } = a.data;
    if (d == null) {
      __LOG__(4, undefined, new Error(), true)`QuickPromotionChatListBanner: missing primary action`;
      SEND_LOGS("quick-promotion-missing-banner-action");
      return null;
    }
    const {
      text: m,
      universalLink: h,
      deepLink: g
    } = d;
    const E = g != null ? g : h;
    if (E == null || E === "") {
      __LOG__(4, undefined, new Error(), true)`QuickPromotionChatListBanner: missing link`;
      SEND_LOGS("quick-promotion-missing-action-link");
      return null;
    }
    const v = c.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: (0, o.sanitizeQuickPromotionText)(s)
      }
    });
    const _ = c.default.createElement(i.NuxBannerText, {
      subtitle: v,
      actionText: m
    });
    const y = p != null ? {
      description: p.description,
      iconLight: (e = p.light) === null || e === undefined ? undefined : e.elementValue,
      iconDark: (t = p.dark) === null || t === undefined ? undefined : t.elementValue
    } : null;
    u.QuickPromotionCollection.promotionShown(a.id);
    return c.default.createElement(r.default, {
      ref: this._refContainer,
      type: "quickPromotion",
      title: l,
      text: _,
      onDismiss: e => {
        e.preventDefault();
        e.stopPropagation();
        if (!(n == null)) {
          n();
        }
        u.QuickPromotionCollection.promotionDismissed(a.id);
      },
      action: () => {
        if (!(n == null)) {
          n();
        }
        u.QuickPromotionCollection.promotionPrimaryActionClicked(a.id);
      },
      customColours: f,
      customIcons: y
    });
  }
  static shouldShow() {
    throw (0, s.default)("QuickPromotionChatListBanner#shouldShow should not be called");
  }
}
exports.QuickPromotionChatListBanner = f;
f.displayName = "QuickPromotionChatListBanner";