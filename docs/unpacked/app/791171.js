var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBizBotAutomatedTypeTransition = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./588613.js");
var o = require("./354458.js");
var s = require("./821732.js");
var l = require("./292167.js");
var u = require("./37237.js");
var c = r(require("./579696.js"));
var d = require("./351053.js");
var p = require("./389293.js");
var f = require("./428261.js");
var _ = require("./692544.js");
var g = require("./35109.js");
var m = require("./480313.js");
var h = r(require("./556869.js"));
function y() {
  return (y = (0, i.default)(function* (e, t, n) {
    const r = d.ChatCollection.get(e);
    if (!r) {
      return;
    }
    let i = t;
    if (!i) {
      var o;
      const t = yield (0, a.getBusinessProfileRow)(e.toString());
      i = (o = u.BizBotAutomatedType.cast(t == null ? undefined : t.automatedType)) !== null && o !== undefined ? o : u.BizBotAutomatedType.UNKNOWN;
    }
    const s = n != null ? n : u.BizBotAutomatedType.UNKNOWN;
    if (i !== s) {
      if (i === u.BizBotAutomatedType.UNKNOWN && s === u.BizBotAutomatedType.PARTIAL_1P) {
        yield E(r);
        yield b(r);
      } else if (i === u.BizBotAutomatedType.UNKNOWN && s === u.BizBotAutomatedType.FULL_3P) {
        yield v(r);
        yield b(r);
      } else if (i === u.BizBotAutomatedType.FULL_3P && s === u.BizBotAutomatedType.UNKNOWN) {
        yield M(r);
        yield b(r);
      }
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    if (!(0, l.hasAcceptedBizBotTos)() || e.bizBotSystemMsgType === u.BizBotType.BIZ_1P) {
      return;
    }
    const t = (0, s.genBizBot1pDisclosureMessage)(e.id);
    yield (0, f.storeMessages)([t], t.id.remote);
    if ((0, o.isBizBot1pEnabled)()) {
      const n = (0, _.msgModelFromMsgData)(t);
      e.msgs.add(n);
    }
    yield e.updateBizBotSysMsgCreated(u.BizBotType.BIZ_1P);
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    if (!(0, l.hasAcceptedBizBotTos)() || e.bizBotSystemMsgType === u.BizBotType.BIZ_3P) {
      return;
    }
    const t = (0, s.genBizBot3pDisclosureMessage)(e.id);
    yield (0, f.storeMessages)([t], t.id.remote);
    const n = (0, _.msgModelFromMsgData)(t);
    e.msgs.add(n);
    yield e.updateBizBotSysMsgCreated(u.BizBotType.BIZ_3P);
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e) {
    if (e.bizBotSystemMsgType == null) {
      return;
    }
    const t = e.id;
    let n;
    switch ((0, g.getReducedPrivacyMode)(e.contact.privacyMode)) {
      case g.ReducedPrivacyMode.E2EE:
        n = (0, p.genEncryptNotificationMsg)(t, "encrypt_now");
        break;
      case g.ReducedPrivacyMode.BSP:
        n = (0, p.genNonE2ENotificationMsg)(t, "biz_privacy_mode_to_bsp");
        break;
      case g.ReducedPrivacyMode.FB:
        n = (0, p.genNonE2ENotificationMsg)(t, "biz_privacy_mode_to_fb");
    }
    if (!n) {
      throw (0, h.default)("Unhandled privacy mode");
    }
    yield (0, f.storeMessages)([n], n.id.remote);
    const r = (0, _.msgModelFromMsgData)(n);
    e.msgs.add(r);
    yield e.updateBizBotSysMsgCreated(null);
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    e.hasRequestedWelcomeMsg = false;
    const t = c.default.getBotWelcomeRequestSetMutation(e.id, false);
    yield (0, m.lockForSync)(["chat"], [t], function () {
      var t = (0, i.default)(function* (t) {
        let [n] = t;
        return n.merge(e.id.toString(), {
          hasRequestedWelcomeMsg: false
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}