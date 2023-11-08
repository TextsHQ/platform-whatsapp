var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t
  } = e;
  const n = (0, c.useCallback)(() => {
    r.DrawerManager.openDrawerRight(c.default.createElement(l.default, {
      chat: t,
      onCancel: () => r.DrawerManager.closeDrawerRight()
    }));
  }, [t]);
  const a = c.default.createElement(u.WDSButtonSimplified, {
    onClick: n,
    testid: "suspended-channel-delete-btn"
  }, s.fbt._("Delete channel", null, {
    hk: "4ETOwk"
  }));
  if ((0, i.isNewsletterSuspendEnabled)()) {
    return c.default.createElement(o.FlexColumn, {
      align: "center"
    }, a);
  } else {
    return null;
  }
};
var r = require("../app/900316.js");
var o = require("../app/690495.js");
var l = a(require("./58880.js"));
var i = require("../app/73225.js");
var u = require("../app/617425.js");
var s = require("../vendor/548360.js");
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