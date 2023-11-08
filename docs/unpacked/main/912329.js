var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/287461.js");
var o = require("../app/778945.js");
var l = require("../app/542358.js");
var i = require("../app/713464.js");
var u = require("./581442.js");
var s = require("../app/445729.js");
var c = a(require("./760932.js"));
var d = require("../app/95589.js");
var f = require("./182908.js");
var p = require("./316488.js");
var m = require("../app/459857.js");
var h = require("./403602.js");
var g = require("../app/455915.js");
var E = require("../vendor/548360.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = d.NuxKeyTypes.COOL_OFF_NUX.PRODUCT_CATALOG_BANNER;
class C extends f.NuxBanner {
  constructor() {
    super(...arguments);
    this._refContainer = (0, v.createRef)();
    this.getElement = () => this._refContainer.current;
  }
  render() {
    const {
      onInteract: e
    } = this.props;
    const t = new p.CoolOffNux(y, {
      metricField: h.BANNER_TYPES.SMB_CATALOG
    });
    return v.default.createElement(c.default, {
      ref: this._refContainer,
      title: E.fbt._("Showcase your products", null, {
        hk: "1lP9kd"
      }),
      actionText: E.fbt._("Click to get started", null, {
        hk: "31Psjq"
      }),
      onDismiss: e,
      onClick: () => {
        (0, u.openCatalogManagementFlow)(null, g.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_NUX);
        if (!(e == null)) {
          e();
        }
      },
      nuxManager: t,
      theme: "nuxGreen"
    });
  }
  static shouldShow() {
    return (0, r.getABPropConfigValue)("web_abprop_product_catalog_nux_banner") && s.Conn.isSMB && !function () {
      if (!s.Conn.isSMB) {
        return false;
      }
      const e = o.BusinessProfileCollection.get((0, m.getMaybeMeUser)());
      return (0, l.hasShop)(e);
    }() && !function () {
      const e = (0, m.getMaybeMeUser)();
      if (!e) {
        return false;
      }
      const t = i.CatalogCollection.get(e);
      if (!t) {
        return false;
      }
      const n = t.productCollection.getProductModels(true);
      return (n == null ? undefined : n.length) > 0;
    }() && (0, p.shouldShowNUX)(y);
  }
}
exports.default = C;
C.displayName = "ProductCatalogBanner";