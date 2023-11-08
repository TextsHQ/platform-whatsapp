var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkGenerateDeviceAndAdvAccountTypeChangeNotifications = function () {
  return S.apply(this, arguments);
};
exports.bulkGenerateDeviceNotifications = function () {
  return E.apply(this, arguments);
};
exports.createAndStoreDeviceNotifications = function () {
  return y.apply(this, arguments);
};
exports.generateAdvAccountTypeChangeNotifications = function () {
  return h.apply(this, arguments);
};
exports.generateDeviceNotifications = g;
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./287461.js");
require("./556635.js");
var s = require("./389293.js");
var l = require("./906360.js");
var u = require("./61229.js");
var c = require("./918475.js");
var d = require("./459857.js");
var p = require("./117429.js");
var f = require("./669050.js");
var _ = r(require("./556869.js"));
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    const r = {
      notifications: [],
      chatIds: []
    };
    if (!(0, p.getGlobalSecurityNotifications)()) {
      return r;
    }
    if ((0, o.getABPropConfigValue)("adv_v2_m6")) {
      return r;
    }
    if (!(t.length > 0 || n.length > 0)) {
      return r;
    }
    let i = [];
    if (e.equals((0, d.getMeUser)())) {
      try {
        (yield (0, u.getChatTable)().all()).forEach(e => {
          if (e.id !== a.STATUS_JID) {
            i.push((0, f.createWid)(e.id));
          }
        });
      } catch (e) {
        __LOG__(4, true, new Error(), true)`get all from chat table failed`;
        SEND_LOGS("get all from chat table failed when creating device notification");
        throw (0, _.default)("get all from chat table failed");
      }
    } else {
      try {
        const t = yield (0, u.getChatTable)().get(String(e), false);
        const n = yield (0, c.getParticipantTable)().equals(["participants"], String(e));
        i = n.map(e => (0, f.createWid)(e.groupId));
        if (t) {
          i.push((0, f.createWid)(t.id));
        }
      } catch (e) {
        __LOG__(4, true, new Error(), true)`get chats failed`;
        SEND_LOGS("get chats failed when creating device notification");
        throw (0, _.default)("get chays failed");
      }
    }
    const l = i.map(r => (0, s.genDeviceNotificationMsg)(r, e, t, n));
    r.notifications = l;
    r.chatIds = i.map(String);
    return r;
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    return {
      notifications: [],
      chatIds: []
    };
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t, n) {
    const {
      notifications: r
    } = yield g(e, t, n);
    yield Promise.all(r.map(e => (0, l.storeMessageInTransaction)([e])));
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    let t = [];
    const n = new Set();
    if ((0, p.getGlobalSecurityNotifications)()) {
      (yield Promise.all(e.map(e => {
        let {
          wid: t,
          added: n,
          removed: r,
          isNewRecord: i
        } = e;
        if (i) {
          return Promise.resolve(null);
        } else {
          return g(t, n, r);
        }
      }))).forEach(e => {
        if (e) {
          t = t.concat(e.notifications);
          e.chatIds.forEach(e => n.add(e));
        }
      });
    }
    if (t.length > 0) {
      return {
        notifications: t,
        chatIds: Array.from(n)
      };
    } else {
      return {
        notifications: [],
        chatIds: []
      };
    }
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    throw (0, _.default)("hosted system msg gen: unexpected env");
  })).apply(this, arguments);
}