var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningUnkeepExpiredModal = function (e) {
  let {
    onConfirm: t,
    onCancel: n,
    expiredMessage: a
  } = e;
  const p = d.default.createElement("div", {
    className: (0, f.default)(h)
  }, c.fbt._("This message will disappear from the chat", null, {
    hk: "2OVh1f"
  }));
  (0, d.useEffect)(() => {
    (0, r.default)(function* () {
      const e = yield (0, l.getBaseErrorLog)(a, u.KeepType.UNDO_KEEP_FOR_ALL);
      e.set({
        kicErrorCode: s.KIC_ERROR_CODE_TYPE.MESSAGE_EXPIRED
      });
      e.commit();
    })();
  }, []);
  return d.default.createElement(o.ConfirmPopup, {
    title: p,
    onOK: () => {
      t();
      i.ModalManager.close();
    },
    onCancel: () => {
      n();
      i.ModalManager.close();
    },
    okText: c.fbt._("LET IT DISAPPEAR", null, {
      hk: "1pk0L0"
    }),
    okButtonType: "secondary"
  }, d.default.createElement("div", {
    className: (0, f.default)(m)
  }, c.fbt._("The timer for this message has expired so it will disappear from the chat.", null, {
    hk: "2o6bJq"
  })));
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
  var n = p(t);
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
var f = a(require("../app/156720.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = {
  fontSize: "enbbiyaj",
  lineHeight: "l85iiqla",
  color: "tviruh8d"
};
const h = {
  fontSize: "p9fp32ui",
  lineHeight: "tkq7s68q",
  color: "tviruh8d"
};