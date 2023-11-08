var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeEncryptedDBMessages = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  return (0, d.getStorage)().lock(["message"], function () {
    var r = (0, i.default)(function* (r) {
      let [c] = r;
      const d = yield (0, u.getLastRowId)(c, n);
      const g = new Map();
      yield Promise.all(t.map(e => {
        const t = (0, _.createWid)(e);
        const r = (0, s.beginningOfChat)(t);
        const i = (0, s.endOfChat)(t);
        return c.between(["internalId"], r, i, {
          limit: 1,
          reverse: !n,
          returnKeyType: "keys"
        }).then(e => {
          const n = e.length === 0 ? u.INLINE_MESSAGE_STARTING_INDEX : (0, s.getInChatMsgId)(e[0]);
          g.set(t.toString(), n);
        });
      }));
      const m = n ? -1 : 1;
      const h = (yield (0, a.promiseMap)(e, function () {
        var e = (0, i.default)(function* (e, t) {
          let [r, i] = e;
          if (n) {
            r.isMdHistoryMsg = true;
          }
          const a = p.default.fromString(r.id);
          const o = a.remote.toString();
          const s = g.get(o);
          if (s == null || Number.isNaN(s)) {
            return;
          }
          const u = s + m * 1;
          g.set(o, u);
          const c = !n && (yield (0, l.isPendingUnreadReceipt)(a, r));
          return (0, l.addMsgMetadataToMsgRow)({
            msg: r,
            chatId: o,
            hasLink: i,
            rowId: d + m * (t + 1),
            inChatMsgId: u,
            pendingReadReceipt: c
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      }())).filter(Boolean);
      try {
        yield c.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(h);
      } catch (e) {
        if (!(n && e instanceof o.default.BulkError)) {
          __LOG__(3)`storeEncryptedDBMessages: dropping ${h.length} message(s): ${h.map(e => {
            let {
              id: t
            } = e;
            return t;
          })}, due to DB error: ${e}`;
          (0, f.postIncomingMessageDropDBOperationFailedForMsgRows)(h);
          throw e;
        }
        __LOG__(4, undefined, new Error())`storeEncryptedDBMessages: BulkError in bulkCreate for history sync msgs, retrying with bulk create or replace`;
        yield c.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(h);
      }
      return h;
    });
    return function () {
      return r.apply(this, arguments);
    };
  }()).then(e => {
    o.default.ignoreTransaction((0, i.default)(function* () {
      yield c.ftsLightClient.addToIndexingTable(e.map(e => e.rowId != null ? String(e.rowId) : null).filter(Boolean));
      c.ftsLightClient.index().catch(() => {});
    }));
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./498199.js");
var o = r(require("./721698.js"));
var s = require("./878685.js");
var l = require("./906360.js");
var u = require("./298619.js");
var c = require("./271368.js");
var d = require("./732011.js");
var p = r(require("./565754.js"));
var f = require("./126249.js");
var _ = require("./669050.js");