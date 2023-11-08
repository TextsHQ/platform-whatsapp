var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBizBotMsgs = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./821732.js");
var o = require("./37237.js");
var s = require("./732011.js");
var l = require("./755985.js");
var u = require("./61229.js");
var c = require("./669050.js");
var d = require("./766187.js");
function p() {
  return (p = (0, i.default)(function* (e) {
    const t = new Map();
    e.forEach(e => {
      var n;
      const r = (n = e.from) === null || n === undefined ? undefined : n.toJid();
      if (r != null && !t.has(r) && e.bizBotType) {
        t.set(r, e.bizBotType);
      }
    });
    const n = Array.from(t.keys());
    const r = yield f(n);
    const l = [];
    const u = [];
    for (const [e, n] of t.entries()) {
      var d;
      const t = (d = r.get(e)) === null || d === undefined ? undefined : d.bizBotSystemMsgType;
      if (n === o.BizBotType.BIZ_1P && t !== o.BizBotType.BIZ_1P) {
        l.push((0, a.genBizBot1pDisclosureMessage)((0, c.createWid)(e)));
        u.push({
          id: e,
          bizBotSystemMsgType: o.BizBotType.BIZ_1P
        });
      } else if (n === o.BizBotType.BIZ_3P && t !== o.BizBotType.BIZ_3P) {
        l.push((0, a.genBizBot3pDisclosureMessage)((0, c.createWid)(e)));
        u.push({
          id: e,
          bizBotSystemMsgType: o.BizBotType.BIZ_3P
        });
      }
    }
    if (l.length) {
      yield (0, s.getStorage)().lock(["chat"], function () {
        var e = (0, i.default)(function* (e) {
          let [t] = e;
          yield Promise.all([t.bulkCreateOrMerge(u)]);
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
      return l;
    } else {
      return [];
    }
  })).apply(this, arguments);
}
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    if (!(0, l.isWorker)()) {
      return (0, d.workerSafeSendAndReceive)("getBizBotData", {
        chatIds: e.map(c.createWid)
      });
    }
    const t = new Map();
    (yield (0, u.getChatTable)().bulkGet(e)).map(e => {
      if (e) {
        t.set(e.id, {
          bizBotSystemMsgType: e.bizBotSystemMsgType
        });
      }
    });
    return t;
  })).apply(this, arguments);
}