var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningKeepExpiredModal = function (e) {
  let {
    expiredMessage: t
  } = e;
  (0, d.useEffect)(() => {
    (0, r.default)(function* () {
      const e = yield (0, l.getBaseErrorLog)(t, u.KeepType.KEEP_FOR_ALL);
      e.set({
        kicErrorCode: s.KIC_ERROR_CODE_TYPE.MESSAGE_EXPIRED
      });
      e.commit();
    })();
  }, []);
  return d.default.createElement(o.ConfirmPopup, {
    onCancel: p
  }, c.fbt._("This message can't be kept because the message timer has expired.", null, {
    hk: "2TO7zE"
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/103440.js");
var l = require("./469151.js");
var i = require("../app/114850.js");
var u = require("../app/533494.js");
var s = require("./483618.js");
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
const p = () => {
  i.ModalManager.close();
};