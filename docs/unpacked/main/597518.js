var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExternalBetaOptIn = function () {
  const [e, t] = (0, f.useState)(false);
  const n = function () {
    var e = (0, r.default)(function* () {
      const e = yield (0, c.getWhatsAppWebExternalBetaJoinedIdb)();
      t(e);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  (0, p.default)(n, []);
  (0, m.useListener)(i.WAWebExternalBetaEvents, "external_beta_events:opt_in_status_changed", n);
  return [e, function () {
    var n = (0, r.default)(function* () {
      t(!e);
      try {
        yield (0, u.setOptInBetaAction)(!e);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`Web Beta: Error while opting in: ${e}`;
        SEND_LOGS("web beta failed to change opt-in status");
        (0, s.openSingleActionModal)({
          body: d.fbt._("Something went wrong while joining the beta. Please try again.", null, {
            hk: "4kQkH1"
          })
        });
      }
    });
    return function () {
      return n.apply(this, arguments);
    };
  }()];
};
exports.useExternalBetaValidator = function () {
  (0, m.useListener)(l.Cmd, "on_ab_props_update", (0, r.default)(function* () {
    const e = yield (0, c.getWhatsAppWebExternalBetaJoinedIdb)();
    const t = (0, o.getABPropConfigValue)("external_beta_can_join");
    if (e && !t) {
      __LOG__(2)`useExternalBetaOptIn: AB prop does not allow user to join beta. Leaving beta...`;
      yield (0, u.setOptInBetaAction)(false);
    }
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = require("../app/780549.js");
var i = require("./128969.js");
var u = require("./52768.js");
var s = require("../app/82263.js");
var c = require("../app/757453.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var p = a(require("../app/802145.js"));
var m = require("../app/808446.js");
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}