var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMsgMetadataToMsgRow = b;
exports.isPendingUnreadReceipt = M;
exports.storeMessageInTransaction = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const r = t == null ? e[0].id.remote : t;
  const i = (0, d.beginningOfChat)(r);
  const o = (0, d.endOfChat)(r);
  const u = C(`storeMessageInTransaction: ${e.length} message(s), chat ${(r == null ? undefined : r.toString()) || "-"}`);
  return (0, f.getStorage)().lock(["chat", "message"], function () {
    var t = (0, a.default)(function* (t) {
      let [l, f] = t;
      u.addStage("got table lock");
      const _ = yield l.get(r.toString());
      u.addStage("got chat");
      if (!r.isStatusV3() && (_ != null || T(e))) {
        const t = A(_, e, r);
        yield l.createOrMerge(r.toString(), t);
      }
      u.addStage("got messages meta");
      const m = f.all({
        reverse: !n,
        limit: 1,
        index: ["rowId"],
        returnKeyType: "keys"
      }).then(e => {
        u.addStage("got boundary row id");
        if (e.length === 0) {
          return v;
        } else {
          return e[0];
        }
      });
      const h = f.between(["internalId"], i, o, {
        limit: 1,
        reverse: !n,
        returnKeyType: "keys"
      }).then(e => {
        u.addStage("got chat msg boundary id");
        if (e.length === 0) {
          return v;
        } else {
          return (0, d.getInChatMsgId)(e[0]);
        }
      });
      const [E, S] = yield Promise.all([m, h]);
      u.addStage("got boundaries");
      const C = n ? E - e.length : E + 1;
      const P = n ? S - e.length : S + 1;
      const O = yield (0, s.promiseMap)(e, function () {
        var e = (0, a.default)(function* (e, t) {
          var i;
          const a = (0, c.dbRowFromMessage)(e);
          const o = !n && (yield M(e.id, e));
          return b({
            msg: a,
            chatId: r.toString(),
            hasLink: (0, p.hasHttpLink)(e),
            rowId: C + t,
            inChatMsgId: (0, g.getIsNewsletterMsg)(e) ? (i = e.serverId) !== null && i !== undefined ? i : yield (0, y.getTemporaryServerId)(r) : P + t,
            pendingReadReceipt: o
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
      u.addStage("messages ready for storing in db");
      return f.bulkCreate(O).then(() => O);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }()).then(e => {
    u.done();
    l.default.ignoreTransaction(() => {
      (0, E.getFtsIndexingQueueTable)().bulkCreateOrReplace(e.map(e => ({
        id: String(e.rowId)
      })));
    });
  });
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./498199.js");
var l = r(require("./721698.js"));
var u = require("./147980.js");
var c = require("./907539.js");
var d = require("./878685.js");
var p = require("./446303.js");
var f = require("./732011.js");
var _ = require("./767961.js");
var g = require("./787742.js");
var m = r(require("./565754.js"));
var h = require("./373070.js");
var y = require("./727615.js");
var E = require("./965767.js");
var S = require("./142601.js");
const v = 1000000000;
function T(e) {
  return e.some(e => e.type !== h.MSG_TYPE.NOTIFICATION_TEMPLATE);
}
function M(e, t) {
  if (e.fromMe || e.remote.isStatusV3()) {
    return false;
  }
  const n = (0, _.eventTypeFromMsgType)(t);
  return n === u.EventType.AMBIENT || n === u.EventType.DEFAULT;
}
function A(e, t, n) {
  var r;
  var i;
  let a;
  let o = Math.max(0, (r = e == null ? undefined : e.unreadCount) !== null && r !== undefined ? r : 0);
  const s = (i = e == null ? undefined : e.unreadMentionsOfMe) !== null && i !== undefined ? i : [];
  t.forEach(e => {
    const t = (0, _.eventTypeFromMsgType)(e);
    if (t === u.EventType.IGNORE) {
      return;
    }
    if (e && e.t != null && (a == null || e.t > a)) {
      a = e.t;
    }
    if (!(t !== u.EventType.AMBIENT && t !== u.EventType.DEFAULT || e.id.fromMe)) {
      o += 1;
    }
    if (M(e.id, e) && (0, g.getIsImportantMessage)(e)) {
      const t = {
        id: e.id.toString(),
        timestamp: e.t
      };
      s.push(t);
    }
  });
  if (e && e.t != null && (a == null || e.t > a)) {
    a = e.t;
  }
  return {
    id: n.toString(),
    unreadCount: o,
    t: a,
    unreadMentionsOfMe: s
  };
}
function b(e) {
  var t;
  const {
    msg: n,
    chatId: r,
    hasLink: a,
    rowId: s,
    inChatMsgId: l,
    pendingReadReceipt: u
  } = e;
  const c = [h.MSG_TYPE.IMAGE, h.MSG_TYPE.VIDEO, h.MSG_TYPE.AUDIO].includes(n.type);
  const p = (0, S.shouldPopulateStarMessageWithTimestamp)() ? n.t : s;
  const f = (0, i.default)((0, i.default)({}, n), {}, {
    vcardWAids: n.vcardWAids || (0, d.getVcardWids)(n),
    id: n.id.toString(),
    isStarred: n.star ? p : undefined,
    hasLink: n.type === "chat" && a ? s : undefined,
    isMediaMsg: c ? s : undefined,
    isDocMsg: n.type === h.MSG_TYPE.DOCUMENT ? s : undefined,
    expiredTimestamp: (t = (0, g.getEphemeralExpirationTimestamp)(n)) !== null && t !== undefined ? t : undefined
  });
  if (s != null) {
    f.rowId = s;
  }
  if (l != null) {
    f.internalId = (0, d.craftInternalId)(r, l);
  }
  if (u && r !== o.STATUS_JID) {
    f.pendingReadReceipt = 1;
  }
  let _ = n.c2sTimestamp;
  var y;
  if (n.id.fromMe) {
    _ = (y = n.c2sTimestamp) !== null && y !== undefined ? y : n.t;
  } else {
    _ = n.t;
  }
  try {
    if (n.type !== h.MSG_TYPE.REACTION) {
      f.messageRangeIndex = (0, d.craftMessageRangeIndex)(r, !m.default.fromString(n.id).fromMe, h.SYSTEM_MESSAGE_TYPES.includes(n.type), _);
    }
  } catch (e) {
    __LOG__(4, undefined, new Error())`[process-msg] craftMessageRangeIndex failed with error ${e}`;
  }
  return f;
}
function C(e) {
  const t = Date.now();
  const n = [];
  return {
    addStage(e) {
      n.push([e, Date.now() - t]);
    },
    done() {
      if (Date.now() - t > 5000) {
        for (const [e, t] of n);
        __LOG__(3)`${e}: completed in ${Date.now() - t}ms`;
      }
    }
  };
}