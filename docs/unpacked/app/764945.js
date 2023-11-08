var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePrivacyModeChangeAndCreateChat = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = require("./782049.js");
var s = require("./359987.js");
var l = require("./768798.js");
var u = require("./817649.js");
var c = require("./293056.js");
var d = require("./485225.js");
var p = require("./97858.js");
var f = require("./525119.js");
var _ = require("./35109.js");
var g = require("./755985.js");
var m = require("./459857.js");
var h = require("./766187.js");
function y() {
  return (y = (0, i.default)(function* (e, t, n, r) {
    let o = t.chat;
    if (!o.isUser()) {
      return;
    }
    if ((0, f.isMatFullyEnabled)()) {
      o = yield (0, a.getMatChat)(o);
    }
    const s = yield A(o);
    const g = (0, _.getLatestPrivacyMode)(n.privacyMode, s.privacyMode);
    const y = function () {
      var t = (0, i.default)(function* () {
        const t = e[0];
        try {
          yield (0, c.createChat)(o, "createChatOnNewMsg", {
            createdLocally: false,
            lidOriginType: o.isLid() && (r == null ? undefined : r.origin) != null ? r == null ? undefined : r.origin : undefined
          }, {
            firstIncomingMsg: t,
            nextPrivacyMode: g
          });
        } catch (e) {
          __LOG__(4, undefined, new Error(), true, ["messaging"])`handlePrivacyModeChange for ${o.toLogString()}, failed with error: ${e}`;
          SEND_LOGS("handlePrivacyModeChange failed", 0.001, "messaging");
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    const E = yield T(o, y);
    const S = E !== true || (0, p.queryVerifiedNameWhenMsgDiffers)() && s.verifiedLevel !== (0, u.convertLevel)(n.verifiedLevel);
    try {
      if (E && g != null) {
        yield (0, d.handlePrivacyModeTransition)(o, g);
      }
      return () => {
        if (S) {
          (0, l.queryAndUpdateContactPropertiesOnNewChat)(o).catch(() => {
            __LOG__(3)`query contact info on new chat failed`;
          });
        }
        if (!((0, m.isMeAccount)(t.author) || g == null)) {
          (0, h.workerSafeSendAndReceive)("updateBizPrivacyStatus", {
            msgIds: e.map(e => e.id),
            privacyMode: g
          }).catch(e => {
            __LOG__(4, undefined, new Error())`handlePrivacyModeChange: failed to update biz privacy status with error ${e}`;
          });
        }
      };
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["messaging", "non-sad"])`handlePrivacyModeChange for ${o.toLogString()}, failed with error: ${e}`;
      SEND_LOGS("handlePrivacyModeChange failed", 0.001, "messaging", "non-sad");
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    if ((0, g.isWorker)()) {
      return (yield (0, a.getChatRecord)(e)) != null;
    } else {
      return (0, s.frontendSendAndReceive)("hasChat", {
        chatId: e
      });
    }
  })).apply(this, arguments);
}
const v = new Map();
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t) {
    const n = e.toString();
    const r = v.get(n);
    if (r != null) {
      yield r;
    }
    const a = (0, i.default)(function* () {
      const r = yield E(e);
      if (r !== true) {
        yield t();
      }
      v.delete(n);
      return r;
    })();
    v.set(n, a);
    return a;
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    if (!(0, g.isWorker)()) {
      return (0, h.workerSafeSendAndReceive)("getChatPrivacyInfoOnNewMsg", {
        chatId: e
      });
    }
    const t = yield (0, o.getVerifiedBusinessNameRecord)(e);
    return {
      privacyMode: (t == null ? undefined : t.privacyMode) != null ? (0, o.convertPrivacyModeFromStorageType)(t.privacyMode) : null,
      verifiedLevel: (0, u.convertLevel)(t == null ? undefined : t.level)
    };
  })).apply(this, arguments);
}