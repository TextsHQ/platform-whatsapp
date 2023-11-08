var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeEncryptedNewsletterMessages = function (e) {
  return (0, l.getStorage)().lock(["message", "chat"], function () {
    var t = (0, i.default)(function* (t) {
      let [n] = t;
      const r = yield (0, s.getLastRowId)(n);
      const l = (yield (0, a.promiseMap)(e, function () {
        var e = (0, i.default)(function* (e, t) {
          var n;
          let [i, a] = e;
          const s = (n = i.serverId) !== null && n !== undefined ? n : yield (0, c.getTemporaryServerId)(i.to);
          if (s == null) {
            __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][storage] serverId is missing from message`;
            SEND_LOGS("newsletter-missing-serverId", 1, "newsletter");
            return null;
          }
          const l = u.default.fromString(i.id);
          const d = yield (0, o.isPendingUnreadReceipt)(l, i);
          const p = (0, o.addMsgMetadataToMsgRow)({
            msg: i,
            chatId: l.remote.toString(),
            hasLink: a,
            inChatMsgId: s,
            rowId: r + t + 1,
            pendingReadReceipt: d
          });
          delete p.serverId;
          return p;
        });
        return function () {
          return e.apply(this, arguments);
        };
      }())).filter(Boolean);
      try {
        yield n.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(l);
      } catch (e) {
        __LOG__(4, undefined, new Error(), undefined, ["newsletter"])`[newsletter-store] Failed to store messages`;
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./498199.js");
var o = require("./906360.js");
var s = require("./298619.js");
var l = require("./732011.js");
var u = r(require("./565754.js"));
var c = require("./727615.js");