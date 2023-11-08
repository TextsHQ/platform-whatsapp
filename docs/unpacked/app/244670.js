var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageRetryRequest = function (e) {
  const t = _.default.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  const n = t.success;
  const {
    from: r,
    participant: a,
    recipient: s,
    retryCount: u,
    stanzaId: c
  } = n;
  if (c == null) {
    __LOG__(3)`Received null stanzaID when handling message retry request`;
    return Promise.reject((0, T.default)("Received null stanzaID when handling message retry request"));
  }
  const p = (0, o.wap)("ack", {
    id: (0, o.CUSTOM_STRING)(c),
    to: (0, l.JID)(r),
    participant: a ? (0, l.DEVICE_JID)(a) : o.DROP_ATTR,
    class: "receipt",
    type: "retry"
  });
  const g = C(r, s);
  if (!g) {
    return Promise.resolve(p);
  }
  return (0, d.handleMessage)(String(g), false, (0, i.default)(function* () {
    const e = yield A(n);
    if (e == null) {
      return p;
    }
    const {
      originalMsgId: t,
      chat: i,
      requester: o,
      identity: l
    } = e;
    try {
      const e = yield (0, f.getMsgIfAuthorized)(t, i, o, u, l);
      if (!e) {
        __LOG__(3)`handleMessageRetryRequest ${e == null ? undefined : e.type} retry not authorized`;
        return p;
      }
      yield (0, m.sendRetry)(r, a, s, e, u);
    } catch (e) {
      __LOG__(3)`handleMessageRetryRequest error: ${e}`;
    }
    return p;
  }));
};
exports.handleVoipRetryRequest = function () {
  return M.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./716358.js");
var s = require("./275909.js");
var l = require("./355813.js");
var u = require("./917504.js");
var c = require("./163006.js");
var d = require("./412985.js");
var p = require("./967762.js");
var f = require("./929096.js");
var _ = r(require("./514209.js"));
var g = require("./739172.js");
var m = require("./723406.js");
var h = require("./999821.js");
var y = require("./76256.js");
var E = require("./459857.js");
var S = require("./622195.js");
var v = require("./669050.js");
var T = r(require("./556869.js"));
function M() {
  return (M = (0, i.default)(function* (e) {
    return (yield A(e)) != null;
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    const {
      originalMsgId: t,
      from: n,
      participant: r,
      recipient: o,
      retryCount: l,
      offline: d
    } = e;
    if (l >= p.MAX_RETRY) {
      return void __LOG__(2)`handleRetryRequest refusing retry attempt #${l}`;
    }
    const _ = C(n, o);
    if (!_) {
      return void __LOG__(3)`handleRetryRequest: no chat found for incoming retry request.`;
    }
    const m = _.isUser() ? n : r;
    if (!m) {
      return void __LOG__(3)`handleRetryRequest: no requester found for incoming retry request.`;
    }
    const E = m.device || 0;
    try {
      if (yield (0, s.hasDevice)(m, E)) {
        return yield g.sendMsgQueueMap.enqueue(_.toString(), (0, i.default)(function* () {
          yield (0, f.updateLocalSession)(_, e);
          yield (0, u.ensureE2ESessions)([m]);
          const n = yield (0, y.getPersistSignalProtocolStore)().getIdentityWithRowId((0, h.createSignalAddress)(m).toString());
          return {
            originalMsgId: t,
            chat: _,
            requester: m,
            identity: n
          };
        }));
      } else {
        __LOG__(3)`handleRetryRequest: no device ${E} found for ${m.user} for incoming retry request .`;
        return void new c.MdRetryFromUnknownDeviceWamEvent({
          offline: d,
          senderType: E === a.DEFAULT_DEVICE_ID ? S.DEVICE_TYPE.PRIMARY : S.DEVICE_TYPE.COMPANION
        }).commit();
      }
    } catch (e) {
      __LOG__(3)`handleRetryRequest error: ${e}`;
    }
  })).apply(this, arguments);
}
function C(e, t) {
  if (e.isUser()) {
    if ((0, v.toUserWid)(e).equals((0, E.getMeUser)())) {
      return t || (__LOG__(3)`getActualChatId: from is a peer device, but without recipient`, null);
    } else {
      return (0, v.toUserWid)(e);
    }
  } else {
    return e;
  }
}