var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewsletterMsgsRecords = function (e) {
  return _(e).waitUntilCompleted();
};
exports.addNewsletterMsgsRecordsJob = _;
exports.updateNewsletterMsgRecord = function (e) {
  return (0, p.createNonPersistedJob)("updateNewsletterMsgRecord", (0, i.default)(function* () {
    if (!(0, d.getIsNewsletterMsg)(e)) {
      return void __LOG__(4, undefined, new Error())`[updateNewsletterMsgRecord] Called on a non-newsletter msg`;
    }
    if ((yield (0, f.getMessageTable)().get(e.id.toString())) == null) {
      return void __LOG__(3)`[updateNewsletterMsgRecord] Msg not found, skipping`;
    }
    const {
      serverId: t
    } = e;
    const n = (0, l.getChat)(e);
    const r = (0, c.msgDataFromMsgModel)(e);
    delete r.serverId;
    const i = (0, o.dbRowFromMessage)(r);
    if (t != null) {
      i.internalId = (0, s.craftInternalId)(n.id.toJid(), t);
    }
    yield (0, f.getMessageTable)().merge(e.id.toString(), i);
  }), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./907539.js");
var s = require("./878685.js");
var l = require("./163755.js");
var u = require("./390053.js");
var c = require("./678794.js");
var d = require("./787742.js");
var p = require("./899137.js");
var f = require("./851698.js");
function _(e) {
  return (0, p.createNonPersistedJob)("addNewsletterMsgsRecords", () => e.length === 0 ? Promise.resolve() : u.messageProcessorCache.addMessages(e.map(e => ({
    msg: e
  })), true), {
    priority: a.JOB_PRIORITY.UI_ACTION
  });
}