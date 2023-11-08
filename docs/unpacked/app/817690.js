var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterReceivedMessagesInRange = function () {
  return _.apply(this, arguments);
};
exports.getMsgByMsgKey = p;
exports.getMsgByMsgKeyMat = function () {
  return f.apply(this, arguments);
};
exports.getMsgsByMsgIdsAndChatId = function (e, t) {
  const n = [];
  e.forEach(e => {
    const r = new u.default({
      fromMe: true,
      remote: t,
      id: e
    });
    n.push(r.toString());
    const i = new u.default({
      fromMe: false,
      remote: t,
      id: e
    });
    n.push(i.toString());
  });
  return (0, c.getMessageTable)().startsWithAnyOf(["id"], n);
};
exports.getMsgsByMsgKey = function (e, t) {
  return (0, c.getMessageTable)().bulkGet(e).then(e => e.filter(Boolean).map(e => (0, s.messageFromDbRow)(e, t)));
};
exports.getMsgsExistByMsgKey = function (e) {
  return (0, c.getMessageTable)().bulkGet(e, false).then(e => e.map(Boolean));
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./35234.js");
var s = require("./907539.js");
var l = require("./974637.js");
var u = r(require("./565754.js"));
var c = require("./851698.js");
var d = require("./766187.js");
function p(e, t) {
  let n;
  n = e instanceof u.default ? e.toString() : e;
  return (0, c.getMessageTable)().get(n).then(e => e ? (0, s.messageFromDbRow)(e, t) : null);
}
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = yield p(e, t);
    if (n) {
      return n;
    }
    const r = e instanceof u.default ? e : u.default.from(e);
    if (r.remote.isUser()) {
      const e = yield (0, o.getMatChat)(r.remote);
      const n = new u.default({
        fromMe: r.fromMe,
        remote: e,
        id: r.id
      });
      (0, d.workerSafeFireAndForget)("incrementPnhCtwaDailyCount", {
        chatId: e
      });
      return p(n, t);
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e, t) {
    if (t.length === 0) {
      return t;
    }
    const n = t.map(e => (0, l.protobufToMsgKey)((0, a.default)(e.key, "syncActionMessage.key")).toString());
    const r = yield (0, c.getMessageTable)().bulkGet(n, false);
    return t.filter((e, t) => r[t] != null);
  })).apply(this, arguments);
}