var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/196554.js"));
var o = a(require("./222437.js"));
var l = require("./54589.js");
var i = require("../app/180519.js");
var u = require("../app/392632.js");
var s = require("../app/366320.js");
var c = require("../app/757453.js");
var d = require("./144509.js");
var f = require("../vendor/548360.js");
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
const h = (e, t) => {
  let {
    onClose: n
  } = e;
  (0, p.useEffect)(() => {
    new l.PnhCagFutureProofBannerActionWamEvent({
      pnhCagBannerAction: d.PNH_CAG_BANNER_ACTION_TYPE.VIEW
    }).commit();
  }, []);
  return p.default.createElement(u.UIE, {
    displayName: "PnhCagFutureproofBanner",
    escapable: true,
    requestDismiss: n
  }, p.default.createElement(o.default, {
    ref: t,
    onClose: () => {
      n();
      (0, c.setPnhCagFutureproofBannerClosed)();
      new l.PnhCagFutureProofBannerActionWamEvent({
        pnhCagBannerAction: d.PNH_CAG_BANNER_ACTION_TYPE.CLOSE
      }).commit();
    }
  }, p.default.createElement(i.TextDiv, {
    theme: "small"
  }, f.fbt._("To view and send reactions in this chat, {=m1}", [f.fbt._implicitParam("=m1", p.default.createElement(r.default, {
    onClick: () => {
      s.Updater.update(null, true, 0);
      new l.PnhCagFutureProofBannerActionWamEvent({
        pnhCagBannerAction: d.PNH_CAG_BANNER_ACTION_TYPE.UPGRADE
      }).commit();
    }
  }, f.fbt._("update WhatsApp", null, {
    hk: "4abMhF"
  })))], {
    hk: "Gf872"
  }))));
};
var g = (0, p.forwardRef)(h);
exports.default = g;