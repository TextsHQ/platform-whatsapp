var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgentId = function (e) {
  if (e.agentId != null || !(0, l.canUserSeeMessageAttribution)()) {
    return e.agentId;
  }
  const t = (0, m.getMe)();
  if (t != null) {
    const e = s.AgentCollection.getByDeviceId(t.getDeviceId());
    if (e != null) {
      return e.id;
    }
  }
};
exports.initializeAgentLog = function () {
  if (!(0, u.isMultiDeviceAgentsLoggingEnabled)()) {
    return;
  }
  const e = (0, m.assertGetMe)().getDeviceId();
  const t = p.default.persistentExpiringId();
  c.Cmd.on("logout", () => {
    T({
      browserId: t,
      companionMdId: e,
      logoutTimestamp: (0, o.unixTimeWithoutClockSkewCorrection)(),
      multideviceAction: h.MULTIDEVICE_ACTION_TYPE.LOGOUT
    }, true);
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      T({
        browserId: t,
        companionMdId: e,
        multideviceAction: h.MULTIDEVICE_ACTION_TYPE.ACTIVE
      });
    }
  });
  const n = s.AgentCollection.getByDeviceId(e);
  if (n != null) {
    S = n.id;
    M({
      browserId: t,
      companionMdId: e
    });
  } else {
    c.Cmd.on(c.APP_STATE_SYNC_COMPLETED, () => {
      const n = s.AgentCollection.getByDeviceId(e);
      if ((n == null ? undefined : n.id) != null && S == null) {
        S = n.id;
        M({
          browserId: t,
          companionMdId: e
        });
      }
    });
  }
};
exports.logMessageInfo = function (e) {
  const t = e != null ? s.AgentCollection.get(e) : undefined;
  T({
    browserId: p.default.persistentExpiringId(),
    agentId: t == null ? undefined : t.id,
    companionMdId: t == null ? undefined : t.deviceId,
    multideviceAction: h.MULTIDEVICE_ACTION_TYPE.MESSAGE_INFO
  });
};
exports.setShouldLogAgentLogin = function (e) {
  v = e;
};
exports.updateUnattributedMessages = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./919833.js");
var l = require("./86417.js");
var u = require("./72696.js");
var c = require("./780549.js");
var d = require("./447714.js");
var p = r(require("./524173.js"));
var f = require("./61113.js");
var _ = require("./851698.js");
var g = require("./645485.js");
var m = require("./459857.js");
var h = require("./926723.js");
function y(e) {
  var t;
  return e.author.user !== ((t = (0, m.getMaybeMeUser)()) === null || t === undefined ? undefined : t.user);
}
function E() {
  return (E = (0, a.default)(function* (e, t) {
    if (y(e) || !(0, l.canUserSeeMessageAttribution)()) {
      return;
    }
    const n = e.author.getDeviceId();
    const r = s.AgentCollection.getByDeviceId(n);
    if (r == null) {
      const e = t.map(e => ({
        id: e.id.toString(),
        deviceId: n
      }));
      g.UnattributedMessageCollection.add(e);
      return void e.forEach(() => {});
    }
    const i = t.map(e => f.MsgCollection.get(e.id)).filter(Boolean).filter(e => e.agentId == null);
    const a = String(r.id);
    i.forEach(e => {
      e.agentId = a;
    });
    const o = i.map(e => ({
      id: e.id.toString(),
      agentId: a
    }));
    yield (0, _.getMessageTable)().bulkCreateOrMerge(o);
  })).apply(this, arguments);
}
let S;
let v;
function T(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if ((0, u.isMultiDeviceAgentsLoggingEnabled)()) {
    new d.MdExpansionAgentBrowserMdIdWamEvent((0, i.default)({
      agentId: S
    }, e)).commitAndWaitForFlush(t);
  }
}
function M(e) {
  if (v != null) {
    T((0, i.default)((0, i.default)((0, i.default)({}, e), v), {}, {
      multideviceAction: h.MULTIDEVICE_ACTION_TYPE.LOGIN
    }));
  }
}