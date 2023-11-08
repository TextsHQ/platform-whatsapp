var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genSystemMessage = b;
exports.groupAndProcessPinMessages = function () {
  return T.apply(this, arguments);
};
exports.processPinMessages = M;
var i = r(require("../vendor/348926.js"));
var a = require("./140822.js");
var o = r(require("./670983.js"));
var s = require("./359987.js");
var l = require("./183381.js");
var u = require("./817690.js");
var c = require("./428261.js");
var d = require("./787742.js");
var p = r(require("./565754.js"));
var f = require("./373070.js");
var _ = require("./509672.js");
var g = require("./533494.js");
var m = require("./459857.js");
var h = require("./669050.js");
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    const t = e.map(e => e.pinParentKey).filter(Boolean).map(e => e.toString());
    const n = yield (0, u.getMsgsByMsgKey)(t);
    return new Map(n.map(e => [e.id.toString(), e]));
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    const {
      storeMessageOrphans: t
    } = require("./522794.js");
    yield t(e, e => (0, o.default)(e.pinParentKey, "pin.pinParentKey"));
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = (0, a.groupBy)(e, e => e.id.remote.toString());
    yield Promise.all(t.map(e => {
      let [t, n] = e;
      return M((0, h.createWid)(t), n);
    }));
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    const r = yield y(t);
    const a = [];
    const u = [];
    for (const e of t) {
      if (r.get((0, o.default)(e.pinParentKey, "pin.pinParentKey").toString())) {
        u.push(e);
      } else {
        a.push(e);
      }
    }
    yield Promise.all([(0, i.default)(function* () {
      if (a.length === 0) {
        return;
      }
      yield S(a);
      const {
        markFutureproofMessagesReparsed: e
      } = require("./486193.js");
      yield e(a.map(e => e.id.toString()));
    })(), (0, i.default)(function* () {
      if (u.length === 0) {
        return;
      }
      const t = yield (0, s.frontendSendAndReceive)("updatePinCollection", {
        chatId: e,
        msgs: u
      });
      if (t) {
        yield (0, l.createOrUpdatePinInChat)(e, t.map(e => (0, _.serializePinInChat)(e)));
        const {
          markFutureproofMessagesReparsed: r
        } = require("./486193.js");
        yield r(t.map(e => e.msgKey.toString()));
      }
      const r = yield Promise.all(u.map(t => t.pinMessageType === g.Message$PinInChatMessage$Type.PIN_FOR_ALL ? b(e, (0, o.default)(t.t, "msg.t"), (0, o.default)((0, d.getSender)(t), "getSender(msg)")) : null).filter(Boolean));
      if (yield (0, s.frontendSendAndReceive)("processMultipleMessages", {
        chatId: e,
        msgObjs: r,
        meta: {
          add: "after",
          isHistory: false
        },
        processMessagesOrigin: "pinMessage"
      })) {
        yield (0, c.storeMessages)(r, e);
      }
    })()]);
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t, n) {
    const r = (0, m.getMeUser)();
    const i = n.equals(r);
    return {
      id: new p.default({
        id: yield p.default.newId(),
        fromMe: i,
        remote: e,
        participant: n
      }),
      author: n,
      from: e,
      recipients: [],
      self: i ? "out" : "in",
      t,
      type: f.MSG_TYPE.PINNED_MESSAGE,
      templateParams: [n]
    };
  })).apply(this, arguments);
}