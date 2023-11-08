var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = require("../app/778945.js");
var i = require("../app/817649.js");
var u = a(require("../app/786566.js"));
var s = require("../app/445729.js");
var c = require("../app/753233.js");
var d = require("../app/258105.js");
var f = require("../app/94872.js");
var p = require("../app/459857.js");
var m = a(require("../app/53575.js"));
var h = require("../vendor/548360.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function v(e, t) {
  const [n, a] = (0, g.useState)(false);
  (0, g.useEffect)(() => {
    (0, r.default)(function* () {
      if (s.Conn.isSMB && !function () {
        const e = Date.now();
        const t = m.default.get(f.KEYS.FB_SHOPS_SUNSET_BB_STATUS);
        return t != null && e - 2419200000 < Number(t);
      }() && (0, o.getABPropConfigValue)("show_shops_sunset_banner")) {
        var e;
        const t = yield l.BusinessProfileCollection.find((0, p.getMeUser)());
        a(((e = t.profileOptions) === null || e === undefined ? undefined : e.commerceExperience) === i.COMMERCE_EXPERIENCE_TYPES.SHOP);
      }
    })();
  }, []);
  if (n) {
    return g.default.createElement(u.default, {
      ref: t,
      type: "announcement",
      key: "FBShopsSunsetButterBar",
      title: h.fbt._("Your shop requires action", null, {
        hk: "1oSNe1"
      }),
      text: g.default.createElement("div", null, h.fbt._("To keep a store on WhatsApp, switch to a catalog.", null, {
        hk: "1BPvof"
      }), " ", g.default.createElement(c.ExternalLink, {
        href: (0, d.getFbShopsSunsetFaqUrl)()
      }, h.fbt._("Learn more", null, {
        hk: "4nrF4T"
      }))),
      onDismiss: () => {
        a(false);
        m.default.set(f.KEYS.FB_SHOPS_SUNSET_BB_STATUS, Date.now());
      }
    });
  } else {
    return null;
  }
}
var _ = (0, g.forwardRef)(v);
exports.default = _;