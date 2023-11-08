var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdatePinInChat = f;
exports.getPinInChatByChatId = function () {
  return g.apply(this, arguments);
};
exports.getPinInChatByParentKey = function () {
  return _.apply(this, arguments);
};
exports.removePinInChatByParentMsgKeys = function (e) {
  return (0, l.getStorage)().lock(["pinned-messages"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      yield n.bulkRemove(e);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.storePinInChatMsgBulk = function (e) {
  const t = e.map(d.serializePinInChat);
  t.map(e => `${e.msgKey.toString()} to ${e.parentMsgKey}`).toString();
  const n = (0, o.groupBy)(t, e => e.chatId);
  return Promise.all(n.map(e => {
    let [t, n] = e;
    return f((0, p.createWid)(t), n);
  })).then(e => Array.prototype.concat(...e));
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./140822.js");
var s = require("./287461.js");
var l = require("./732011.js");
var u = require("./954226.js");
var c = require("./96374.js");
var d = require("./509672.js");
var p = require("./669050.js");
function f(e, t) {
  const n = new Map();
  t.forEach(e => {
    const {
      parentMsgKey: t
    } = e;
    const r = t;
    const i = n.get(r);
    if (!i || (i == null ? undefined : i.senderTimestampMs) <= e.senderTimestampMs) {
      n.set(r, e);
    }
  });
  return (0, l.getStorage)().lock(["pinned-messages"], function () {
    var t = (0, a.default)(function* (t) {
      let [r] = t;
      const a = yield r.anyOf(["chatId"], [e.toString()]);
      a.forEach(e => {
        const t = e.parentMsgKey;
        const r = n.get(t);
        if (r && r.senderTimestampMs <= e.senderTimestampMs) {
          n.delete(t);
        }
      });
      const o = new Map(a.map(e => [e.parentMsgKey, e]));
      n.forEach((e, t) => {
        o.set(t, e);
      });
      Array.from(o.values()).filter(e => e.pinType === c.PIN_STATE.PIN).sort((e, t) => t.senderTimestampMs - e.senderTimestampMs).slice((0, s.getABPropConfigValue)("pinned_messages_m2_pin_max")).forEach(e => {
        n.set(e.parentMsgKey, (0, i.default)((0, i.default)({}, e), {}, {
          pinType: c.PIN_STATE.UNPIN
        }));
      });
      const l = Array.from(n.values());
      yield r.bulkCreateOrReplace(l);
      return l;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
}
function _() {
  return (_ = (0, a.default)(function* (e) {
    const t = yield (0, u.getTable)().get(e.toString());
    if (t == null) {
      return null;
    } else {
      return (0, d.deserializePinInChat)(t);
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, a.default)(function* (e) {
    return (yield (0, u.getTable)().equals(["chatId"], e.toString())).map(d.deserializePinInChat);
  })).apply(this, arguments);
}