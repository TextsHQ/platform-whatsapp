var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDuplicatedLidThread = function () {
  return d.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/35234.js");
var l = require("../app/12643.js");
var i = require("../app/351053.js");
var u = require("../app/525119.js");
var s = require("../app/61229.js");
var c = a(require("../app/124928.js"));
function d() {
  return (d = (0, r.default)(function* (e) {
    let t = false;
    let n = false;
    const a = e.contact.phoneNumber;
    if (a != null) {
      t = i.ChatCollection.get(a) != null;
      const r = (0, l.getCurrentLid)(a);
      if (r != null) {
        n = !c.default.equals(e.id, r);
      }
    }
    const r = t || n;
    if (r !== e.isDeprecated) {
      yield f(e.id, r);
    }
  })).apply(this, arguments);
}
function f() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e, t) {
    if (e.isLid()) {
      const n = i.ChatCollection.get(e);
      if (n == null || n.isDeprecated === t) {
        return;
      }
      const a = {
        isDeprecated: t
      };
      n.set(a);
      (0, o.updateDeprecatedChatMatCache)(e, t);
      if ((0, u.isMatCrashLogEnabled)()) {
        if (t) {
          __LOG__(2)`updateChatIsDeprecated - true: chatId is ${e.toLogString()}`;
          __LOG__(3, undefined, undefined, true)`updateChatIsDeprecated: deprecating a lid chat`;
          SEND_LOGS("deprecating-lid-chat-pnh-ctwa-mat");
        } else {
          __LOG__(2)`updateChatIsDeprecated - false: chatId is ${e.toLogString()}`;
          __LOG__(3, undefined, undefined, true)`updateChatIsDeprecated: reactivating a lid chat`;
          SEND_LOGS("reactivating-lid-chat-pnh-ctwa-mat");
        }
      }
      yield (0, s.getChatTable)().merge(n.id.toString(), a);
    }
  })).apply(this, arguments);
}