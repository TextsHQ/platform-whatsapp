var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSysMsgForIncomingBotInvoke = function () {
  return p.apply(this, arguments);
};
exports.genBizBot1pDisclosureMessage = function (e) {
  return (0, l.genNotificationMsg)(e, {
    type: u.MSG_TYPE.NOTIFICATION_TEMPLATE,
    subtype: "biz_bot_1p_disclosure",
    templateParams: []
  });
};
exports.genBizBot3pDisclosureMessage = function (e) {
  return (0, l.genNotificationMsg)(e, {
    type: u.MSG_TYPE.NOTIFICATION_TEMPLATE,
    subtype: "biz_bot_3p_disclosure",
    templateParams: []
  });
};
exports.genBotInitSystemMsg = function (e) {
  return (0, l.genNotificationMsg)(e, {
    type: "notification_template",
    subtype: "bot_init",
    templateParams: []
  });
};
exports.getMaybeSysMsgForBotInvoke = function (e, t) {
  var n;
  if ((0, o.isBotEnabled)() && !t.id.isBot() && e.botMessageSecret != null && t.hasCreatedBotInvokeSystemMsg !== true && ((n = e.invokedBotWid) === null || n === undefined ? undefined : n.isBot())) {
    return f(t.id);
  }
  return null;
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./354458.js");
var s = require("./780549.js");
var l = require("./389293.js");
var u = require("./373070.js");
var c = require("./61229.js");
let d = new Map();
function p() {
  return (p = (0, i.default)(function* (e) {
    if ((0, o.isBotReceiveEnabled)() && (yield _(e)) !== true && !e.isBot()) {
      const t = f(e);
      d.set(e.toJid(), true);
      return t;
    }
    return null;
  })).apply(this, arguments);
}
function f(e) {
  return (0, l.genNotificationMsg)(e, {
    type: u.MSG_TYPE.NOTIFICATION_TEMPLATE,
    subtype: "bot_invoke_disclaimer",
    templateParams: []
  });
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    let t = null;
    if (s.Cmd.isMainStreamReadyMd) {
      const n = yield (0, a.frontendSendAndReceive)("getChat", {
        chatId: e
      });
      if (n) {
        t = n.hasCreatedBotInvokeSystemMsg;
      }
      return t;
    }
    const n = yield (0, c.getChatTable)().get(e.toString());
    t = n == null ? undefined : n.hasCreatedBotInvokeSystemMsg;
    d.set(e.toJid(), t);
    return t;
  })).apply(this, arguments);
}
s.Cmd.on("logout", () => {
  d = new Map();
});