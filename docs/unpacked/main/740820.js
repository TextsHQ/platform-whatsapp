var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTWASuggestionBanner = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/72696.js");
var l = a(require("./760932.js"));
var i = require("./750271.js");
var u = require("./182908.js");
var s = require("./316488.js");
var c = require("./917716.js");
var d = require("./403602.js");
var f = a(require("../app/556869.js"));
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
class h extends u.ExtendableNuxBanner {
  constructor() {
    super(...arguments);
    this._refContainer = (0, p.createRef)();
    this.getElement = () => this._refContainer.current;
  }
  render() {
    const {
      onInteract: e,
      suggestion: t
    } = this.props;
    const {
      id: n,
      heading: a,
      body: u,
      highlight: f,
      display: m
    } = t;
    const h = (0, r.default)((0, r.default)({}, c.BANNER_CONFIG), {}, {
      storageAccessors: (0, c.getStorageAccessors)(n),
      bannerId: n,
      logImpression: () => {
        (0, i.ctwaSuggestionShown)(t);
      }
    });
    if ((0, o.adsActionBannersLoggingEnabled)()) {
      h.metricField = d.BANNER_TYPES.SMB_CTWA_AD_ACTION_BANNER;
    }
    const g = new s.CoolOffNux(c.BANNER_TYPE, h);
    let E;
    E = m === "info" ? "adActionInfo" : "adActionWarning";
    return p.default.createElement(l.default, {
      ref: this._refContainer,
      title: a,
      subtitle: u,
      actionText: f,
      onDismiss: () => {
        if (!(e == null)) {
          e();
        }
        (0, i.ctwaSuggestionInteracted)(t);
      },
      onClick: () => {
        if (!(e == null)) {
          e();
        }
        (0, i.ctwaSuggestionInteracted)(t, true);
      },
      nuxManager: g,
      theme: E
    });
  }
  static shouldShow() {
    throw (0, f.default)("CTWASuggestionBanner#shouldShow should not be called");
  }
}
exports.CTWASuggestionBanner = h;
h.displayName = "CTWASuggestionBanner";