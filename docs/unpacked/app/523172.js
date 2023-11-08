var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkCreateOrUpdateMyVotes = function (e) {
  return (0, o.getStorage)().lock(["newsletter-my-votes"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      const r = new Map();
      const i = e.map(e => {
        if (u.default.isNewsletter(e.chatJid)) {
          r.set(`${e.chatJid}-${e.msgServerId}`, e);
          return [e.chatJid, e.msgServerId];
        }
      }).filter(Boolean);
      (yield n.anyOf(["chatJid", "msgServerId"], i)).forEach(e => {
        const t = `${e.chatJid}-${e.msgServerId}`;
        const n = r.get(t);
        if (n != null && n.serverTimestampMs < e.serverTimestampMs) {
          r.delete(t);
        }
      });
      yield n.bulkCreateOrReplace(Array.from(r.values()));
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.createOrUpdateMyVote = c;
exports.deleteMyVote = function (e, t) {
  return (0, l.getTable)().remove([e, t]);
};
exports.getMyVote = d;
exports.updateMyVote = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./732011.js");
var s = require("./727615.js");
var l = require("./223515.js");
var u = r(require("./124928.js"));
function c(e) {
  return (0, o.getStorage)().lock(["newsletter-my-votes"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      if (!u.default.isNewsletter(e.chatJid)) {
        return void __LOG__(3)`[createOrUpdateMyVote] Invalid newsletter jid ${e.chatJid}`;
      }
      const r = yield d(e.chatJid, e.msgServerId);
      if (!(r != null && r.serverTimestampMs > e.serverTimestampMs)) {
        yield n.createOrReplace(e);
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
}
function d(e, t) {
  if (!Number.isSafeInteger(t) || t < 100 || t >= s.TEMPORARY_SERVER_ID_LOWER_BOUND) {
    return Promise.resolve(null);
  } else {
    return (0, l.getTable)().get([e, t]);
  }
}
function p() {
  return (p = (0, a.default)(function* (e) {
    const t = yield d(e.chatJid, e.msgServerId);
    if (t != null) {
      yield c((0, i.default)((0, i.default)({}, t), e));
    }
  })).apply(this, arguments);
}