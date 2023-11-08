var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousMsgNotUpdatableError = exports.DuplicateMessageError = undefined;
exports.processGroupInviteMessages = function () {
  return A.apply(this, arguments);
};
exports.starMessages = function (e) {
  return (0, y.getMessageTable)().bulkGet(e).then(e => {
    const t = e.filter(Boolean).map(e => ({
      id: e.id,
      isStarred: (0, E.shouldPopulateStarMessageWithTimestamp)() ? e.t : e.rowId
    }));
    return (0, y.getMessageTable)().bulkCreateOrMerge(t);
  });
};
exports.storeMessages = function () {
  return M.apply(this, arguments);
};
exports.unstarMessages = function (e) {
  return (0, y.getMessageTable)().bulkCreateOrMerge(e.map(e => ({
    id: e,
    isStarred: undefined
  })));
};
exports.updateExistingMessages = function (e, t) {
  var n;
  const r = t == null ? (n = e[0]) === null || n === undefined ? undefined : n.id.remote : t;
  if (r) {
    const t = e.map(e => {
      const t = (0, f.dbRowFromMessage)(e);
      return (0, _.addMsgMetadataToMsgRow)({
        msg: t,
        chatId: r.toString(),
        hasLink: (0, m.hasHttpLink)(e)
      });
    });
    return Promise.resolve((0, y.getMessageTable)().bulkCreateOrMerge(t)).then(() => {
      g.ftsLightClient.index().catch(() => {});
    }).catch(e => {
      __LOG__(3)`Error storing messages`;
      throw e;
    });
  }
  return Promise.resolve();
};
exports.updateMessage = function (e) {
  if ((0, d.isPlaceholderMsg)(e.type)) {
    return Promise.resolve(e);
  }
  return (0, h.getStorage)().lock(["message"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      const r = yield n.get(e.id.toString());
      if (!r) {
        throw (0, S.default)(`[messaging] updateMessage: msgId::${e.id.toString()}, Failed to find previous message row in message table`);
      }
      if (!(0, d.isPlaceholderMsg)(r.type) && !(0, d.isFutureproofMsg)(r.type)) {
        __LOG__(2, undefined, undefined, undefined, ["messaging"])`updateMessage: msgId::${e.id.toString()}, Previous row in message table is not a placeholder or futureproof`;
        throw new T();
      }
      const a = (0, o.default)(e.from, "msg.from");
      const s = (0, i.default)({}, e);
      if (r.t != null) {
        s.t = r.t;
      }
      if (r.ack > e.ack) {
        s.ack = r.ack;
      }
      const l = (0, _.addMsgMetadataToMsgRow)({
        msg: (0, f.dbRowFromMessage)(s),
        chatId: a.toString(),
        hasLink: (0, m.hasHttpLink)(s),
        rowId: undefined,
        inChatMsgId: undefined,
        pendingReadReceipt: r.pendingReadReceipt
      });
      l.rowId = r.rowId;
      l.internalId = r.internalId;
      if (l.rowId == null || l.internalId == null) {
        throw (0, S.default)(`[messaging] updateMessage: msgId::${e.id.toString()}, missing rowId or internalId`);
      }
      yield n.createOrReplace(l);
      if ((0, d.isPlaceholderMsg)(r.type)) {
        (0, c.frontendFireAndForget)("populatePlaceholderWamActions", {
          msgs: [(0, f.messageFromDbRow)(r)]
        });
      }
      g.ftsLightClient.index().catch(() => {});
      return s;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./632157.js");
var l = r(require("./721698.js"));
var u = require("./144818.js");
var c = require("./359987.js");
var d = require("./147980.js");
var p = require("./659102.js");
var f = require("./907539.js");
var _ = require("./906360.js");
var g = require("./271368.js");
var m = require("./446303.js");
var h = require("./732011.js");
var y = require("./851698.js");
var E = require("./142601.js");
var S = r(require("./556869.js"));
class v extends Error {
  constructor() {
    super(...arguments);
    this.name = "DuplicateMessageError";
  }
}
exports.DuplicateMessageError = v;
class T extends Error {
  constructor() {
    super(...arguments);
    this.name = "PreviousMsgNotUpdatableError";
  }
}
function M() {
  return (M = (0, a.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    yield p.DbEncKeyStore.waitForFinalDbMsgEncKey();
    return Promise.resolve((0, _.storeMessageInTransaction)(e, t, n)).then(() => {
      g.ftsLightClient.index().catch(() => {});
    }).catch(e => {
      throw e instanceof l.default.BulkError || e instanceof l.default.ConstraintError ? new v() : (__LOG__(3)`Error storing messages`, e);
    });
  })).apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e) {
    yield Promise.all(e.map(e => (0, u.persistGroupInviteV4Msg)(e.id.toString(), {
      id: e.id.toString(),
      from: e.from.toString(),
      to: e.to.toString(),
      groupId: e.inviteGrp,
      expiration: parseInt(e.inviteCodeExp, 10),
      expired: (0, s.unixTime)() >= parseInt(e.inviteCodeExp, 10)
    })));
    return Promise.resolve();
  })).apply(this, arguments);
}
exports.PreviousMsgNotUpdatableError = T;