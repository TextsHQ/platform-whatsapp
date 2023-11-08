var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateKeepInChatSystemMessage = function () {
  return y.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/632157.js");
var l = require("../app/351053.js");
var i = require("../app/738501.js");
var u = require("../app/698867.js");
var s = require("../app/257845.js");
var c = require("./31815.js");
var d = require("../app/700846.js");
var f = a(require("../app/565754.js"));
var p = require("../app/373070.js");
var m = require("../app/95589.js");
var h = require("../app/763219.js");
var g = require("../app/459857.js");
var E = require("../app/377773.js");
var v = require("./567572.js");
var _ = require("./280511.js");
function y() {
  return (y = (0, r.default)(function* () {
    if (!(0, E.shouldShowNUX)(m.NUX.KEEP_IN_CHAT_SYSTEM_MESSAGE)) {
      return;
    }
    const e = l.ChatCollection.filter(e => (0, i.isEphemeralSettingOn)(e));
    (0, h.viewNux)(m.NUX.KEEP_IN_CHAT_SYSTEM_MESSAGE);
    yield Promise.all(e.map(function () {
      var e = (0, r.default)(function* (e) {
        const t = {
          id: new f.default({
            id: yield f.default.newId(),
            remote: e.id,
            fromMe: false
          }),
          from: e.id,
          to: (0, g.assertGetMe)(),
          t: (0, o.unixTime)(),
          type: p.MSG_TYPE.GP2,
          subtype: "ephemeral_keep_in_chat",
          isNewMsg: true
        };
        yield (0, d.handleSingleMsg)(e.id, t, "generateKicSystemMsg", s.MessageOverwriteOption.NO_OVERWRITE, false);
        const n = new c.KeepInChatNuxWamEvent();
        n.set({
          chatEphemeralityDuration: e.ephemeralDuration,
          kicNuxActionName: v.KIC_NUX_ACTION_NAME_TYPE.KIC_SYSTEM_MESSAGE_GENERATE,
          threadId: yield (0, u.getChatThreadID)(e.id.toJid()),
          trigger: _.TRIGGER_TYPE.SYSTEM_MESSAGE
        });
        yield n.commitAndWaitForFlush();
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  })).apply(this, arguments);
}