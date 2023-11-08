var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkApplyDeviceUpdate = function () {
  return M.apply(this, arguments);
};
exports.clearDeviceRecord = function () {
  return T.apply(this, arguments);
};
exports.getAdvAccountTypeIfChanged = v;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/291966.js"));
var o = require("./418987.js");
var s = require("./2893.js");
var l = require("./52866.js");
var u = require("./308772.js");
require("./12643.js");
var c = require("./275909.js");
var d = require("./720196.js");
var p = require("./359987.js");
var f = require("./890490.js");
var _ = require("./6007.js");
var g = require("./459387.js");
var m = require("./800321.js");
var h = require("./962559.js");
var y = require("./459857.js");
var E = require("./669050.js");
var S = r(require("./556869.js"));
function v(e, t) {
  if (t === h.ADVEncryptionType.HOSTED) {
    throw (0, S.default)("Unexpected account type");
  }
  return null;
}
function T() {
  return (T = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let r = arguments.length > 4 ? arguments[4] : undefined;
    yield Promise.all(t.filter(e => e.id !== o.DEFAULT_DEVICE_ID).map(t => C((0, E.createDeviceWidFromUserAndDevice)(e.user, e.server, t.id))));
    const a = [];
    const s = t.map(e => e.id).filter(e => e !== o.DEFAULT_DEVICE_ID);
    const l = v(0, r);
    const {
      encryptedNotifications: p,
      chatIds: f
    } = yield A([{
      wid: e,
      added: a,
      removed: s,
      isNewRecord: false,
      newAdvAccountType: l
    }], n);
    yield (0, d.getDeviceUpdateLock)((0, i.default)(function* () {
      const t = p.length > 0 ? (0, _.storeEncryptedDBMessages)(p, f, false) : Promise.resolve();
      const n = (0, u.updateGroupParticipantsInTransaction)(e, a, s);
      const r = (0, c.createOrReplaceDeviceRecord)({
        id: (0, g.createDeviceListPK)(e),
        deleted: true
      }).catch(() => {
        __LOG__(4, true, new Error(), true)`remove from device list table failed`;
        SEND_LOGS("remove from device list table failed when clearing device record");
        throw (0, S.default)("remove from device list table failed");
      });
      let i = Promise.resolve();
      yield Promise.all([t, n, r, i]);
    }), p.length > 0, false, l != null);
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const n = [];
    const r = [];
    let l = false;
    e.forEach(e => {
      let {
        wid: t,
        update: i,
        currentRecord: s
      } = e;
      const {
        devices: u
      } = i;
      const c = u.map(e => e.id);
      const d = s && !s.deleted ? s.devices.map(e => e.id) : [];
      const p = (0, a.default)(c, d).filter(e => e !== o.DEFAULT_DEVICE_ID);
      const f = (0, a.default)(d, c).filter(e => e !== o.DEFAULT_DEVICE_ID);
      n.push({
        wid: t,
        added: p,
        removed: f,
        isNewRecord: s == null,
        newAdvAccountType: null
      });
      f.forEach(e => {
        r.push((0, E.createDeviceWidFromUserAndDevice)(t.user, t.server, e));
      });
      if ((0, g.createDeviceListPK)(t) === (0, g.createDeviceListPK)((0, y.getMeUser)()) && f.length > 0) {
        l = true;
      }
    });
    const {
      encryptedNotifications: p,
      chatIds: f
    } = yield A(n, t);
    Promise.all(r.map(e => C(e)));
    yield (0, d.getDeviceUpdateLock)((0, i.default)(function* () {
      const t = p.length > 0 ? (0, _.storeEncryptedDBMessages)(p, f, false) : Promise.resolve();
      const r = (0, u.bulkUpdateGroupParticipantsInTransaction)(n);
      const i = (0, c.bulkCreateOrReplaceDeviceRecord)(e.map(e => e.update)).catch(() => {
        __LOG__(4, true, new Error(), true)`bulkCreateOrReplace into device list table failed`;
        SEND_LOGS("bulkCreateOrReplace into device list table failed when applying device update");
        throw (0, S.default)("bulkCreateOrReplace into device list table failed");
      });
      const a = l ? i.then(() => (0, s.updateMissingKeyDevices)().catch(e => {
        __LOG__(3)`syncd: updateMissingKeyDevices failed with error:
${e}`;
      })) : Promise.resolve();
      yield Promise.all([t, r, i, a]);
    }), p.length > 0, l);
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    const {
      notifications: n,
      chatIds: r
    } = yield (0, l.bulkGenerateDeviceNotifications)(e);
    if (!t) {
      const e = yield (0, f.encryptMultipleDBMsgs)(n);
      O(n);
      return {
        chatIds: r,
        encryptedNotifications: e
      };
    }
    (0, m.getMessageCache)().addMessages(n.map(e => ({
      msg: e
    })), false);
    return {
      chatIds: [],
      encryptedNotifications: []
    };
  })).apply(this, arguments);
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e) {
    const {
      deleteDeviceSenderKey: t,
      deleteRemoteInfo: r
    } = require("./743275.js");
    try {
      yield Promise.all([r(e), t(e)]);
    } catch (t) {
      __LOG__(2)`handleDevicesNotification: failed to clean the signal info for ${e.user}`;
    }
  })).apply(this, arguments);
}
function O(e) {
  return Promise.all(e.map(e => {
    e.recvFresh = true;
    e.isNewMsg = true;
    return (0, p.frontendSendAndReceive)("processMultipleMessages", {
      chatId: e.from,
      msgObjs: [e],
      meta: {
        add: "after",
        isHistory: false
      },
      processMessagesOrigin: "updateDeviceTableApi"
    });
  }));
}