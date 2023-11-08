var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/287461.js");
var o = require("../app/542358.js");
var l = require("../app/445729.js");
var i = require("../app/177938.js");
var u = a(require("./760932.js"));
var s = require("../app/900316.js");
var c = require("../app/95589.js");
var d = require("./182908.js");
var f = require("./316488.js");
var p = require("./937445.js");
var m = require("../app/446474.js");
var h = require("../app/476473.js");
var g = require("../app/459857.js");
var E = require("./403602.js");
var v = require("../vendor/548360.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const C = c.NuxKeyTypes.COOL_OFF_NUX.INCOMPLETE_BUSINESS_PROFILE_BANNER;
class b extends d.NuxBanner {
  constructor() {
    super(...arguments);
    this._refContainer = (0, _.createRef)();
    this.getElement = () => this._refContainer.current;
  }
  render() {
    const {
      onInteract: e
    } = this.props;
    const t = new f.CoolOffNux(C, {
      metricField: E.BANNER_TYPES.SMB_EDIT_PROFILE
    });
    return _.default.createElement(u.default, {
      ref: this._refContainer,
      title: v.fbt._("Set up your profile", null, {
        hk: "3LUf0d"
      }),
      actionText: v.fbt._("Click to get started", null, {
        hk: "1oTaUx"
      }),
      onDismiss: e,
      onClick: () => {
        !function () {
          const e = (0, g.getMaybeMeUser)();
          const t = h.StatusCollection.assertGet(e);
          const n = m.ProfilePicThumbCollection.assertGet(e);
          const a = i.ContactCollection.assertGet(e);
          s.DrawerManager.openDrawerLeft(_.default.createElement(p.ProfileDrawerFlowLoadable, {
            status: t,
            profilePicThumb: n,
            contact: a,
            conn: l.Conn
          }));
        }();
        if (!(e == null)) {
          e();
        }
      },
      nuxManager: t,
      theme: "nuxGreen"
    });
  }
  static shouldShow() {
    const e = (0, g.getMaybeMeUser)();
    const t = i.ContactCollection.assertGet(e).businessProfile;
    return !!t && (0, r.getABPropConfigValue)("web_abprop_business_profile_incomplete_nux_banner") && l.Conn.isSMB && !(0, o.isCompleteBizProfile)(t) && (0, f.shouldShowNUX)(C);
  }
}
exports.default = b;
b.displayName = "BusinessProfileBanner";