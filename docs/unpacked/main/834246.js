var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldShowOrderExpansionBanner = exports.OrderExpansionBanner = undefined;
var r = require("../app/72696.js");
var o = require("./382137.js");
var l = a(require("./760932.js"));
var i = require("../app/95589.js");
var u = require("./182908.js");
var s = require("./316488.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = i.NuxKeyTypes.COOL_OFF_NUX.ORDER_EXPANSION;
const m = {
  COOL_OFF_START_STORAGE_KEY: i.CoolOffPeriodKeys.ORDER_EXPANSION,
  MAX_DISMISSES: 1,
  MAX_CLICKS: 1
};
const h = () => (0, r.isOrderExpansionBannerEnabled)() && (0, s.shouldShowNUX)(p, m);
exports.shouldShowOrderExpansionBanner = h;
class g extends u.NuxBanner {
  constructor() {
    super(...arguments);
    this._refContainer = (0, d.createRef)();
    this.getElement = () => this._refContainer.current;
  }
  render() {
    const {
      onInteract: e
    } = this.props;
    const t = new s.CoolOffNux(p, m);
    return d.default.createElement(l.default, {
      ref: this._refContainer,
      title: c.fbt._("Build trust and track sales", null, {
        hk: "3o68Eu"
      }),
      subtitle: (0, r.isOrderContentOptimizationEnabled)() ? c.fbt._("Use orders to confirm purchases and manage charges.", null, {
        hk: "1vyY7T"
      }) : c.fbt._("Use orders to create customer receipts and manage sales.", null, {
        hk: "2wUvsQ"
      }),
      actionText: c.fbt._("See details", null, {
        hk: "2gyWqq"
      }),
      onDismiss: e,
      onClick: () => {
        if (!(e == null)) {
          e();
        }
        (0, o.openOrderExpansionModal)(() => t.dismiss());
      },
      nuxManager: t,
      theme: "orderExpansion"
    });
  }
  static shouldShow() {
    return h();
  }
}
exports.OrderExpansionBanner = g;
g.displayName = "OrderExpansionBanner";