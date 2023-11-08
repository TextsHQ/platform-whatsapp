var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldDeprecateLidThread = p;
exports.updateDuplicatedLidThreadBulk = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = require("./12643.js");
var s = require("./525119.js");
var l = require("./61229.js");
var u = r(require("./124928.js"));
var c = require("./669050.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    if (!(0, s.isMatFullyEnabled)()) {
      return;
    }
    const t = [];
    const n = e.filter(e => e != null && u.default.isLid(e.id) && !e.isDeprecated);
    const r = (0, o.getAlternateWidBulkForLids)(n.map(e => e.id.toString()));
    n.forEach(n => {
      var i;
      if (p(n, (i = r.get(n.id.toString())) !== null && i !== undefined ? i : [], e)) {
        t.push({
          id: n.id.toString(),
          isDeprecated: true
        });
      }
    });
    if (t.length !== 0) {
      yield (0, l.getChatTable)().bulkCreateOrMerge(t).then(() => {
        if ((0, s.isMatCrashLogEnabled)()) {
          __LOG__(2)`updateChatIsDeprecatedBulk - true: deprecated ${t.length} chats during offline resume`;
          __LOG__(3, undefined, undefined, true)`updateChatIsDeprecatedBulk: deprecating lid chats `;
          SEND_LOGS("deprecating-lid-chat-pnh-ctwa-mat");
        }
      });
    }
  })).apply(this, arguments);
}
function p(e, t, n) {
  if (!u.default.isLid(e.id) || t.length === 0) {
    return false;
  }
  if (e.isDeprecated === true) {
    __LOG__(3, undefined, undefined, true)`shouldDeprecateLidThread: called with deprecated chatid`;
    SEND_LOGS("deprecating-lid-chat-pnh-ctwa-mat");
    return true;
  }
  const r = t.some(e => n.some(t => (t == null ? undefined : t.id) === e));
  if (r) {
    (0, a.updateDeprecatedChatMatCache)((0, c.createWid)(e.id), r);
  }
  return r;
}