var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendBotFeedback = function () {
  return g.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("../app/632157.js");
var i = require("../app/402994.js");
var u = require("../app/941712.js");
var s = require("../app/169437.js");
var c = require("../app/787742.js");
var d = a(require("../app/565754.js"));
var f = require("../app/772358.js");
var p = require("../app/373070.js");
var m = require("../app/899137.js");
var h = require("../app/459857.js");
function g() {
  return (g = (0, r.default)(function* (e, t, a) {
    var g;
    var E;
    if (!(0, c.getIsBotResponse)(e)) {
      __LOG__(4, undefined, new Error(), true)`sendBotFeedback: sending bot feedback for non-bot responses`;
      return void SEND_LOGS("send-bot-feedback");
    }
    const v = (0, h.assertGetMeUser)();
    const _ = e.id.remote;
    const y = (g = e.id.participant) !== null && g !== undefined ? g : e.id.remote;
    const C = y.isBot() ? y : undefined;
    const b = new d.default({
      id: yield d.default.newId(),
      remote: _,
      fromMe: true
    });
    const M = self.crypto.getRandomValues(new Uint8Array(32));
    const S = yield (0, u.genBotMsgSecretFromMsgSecret)(M);
    const T = C != null ? (E = s.BotProfileCollection.get(C)) === null || E === undefined ? undefined : E.personaId : undefined;
    const w = {
      type: p.MSG_TYPE.PROTOCOL,
      subtype: "bot_feedback",
      ack: i.ACK.CLOCK,
      from: v,
      to: _,
      id: b,
      local: true,
      isNewMsg: true,
      self: "out",
      t: (0, l.unixTime)(),
      protocolMessageKey: e.id,
      bizBotType: e.bizBotType,
      messageSecret: M,
      botMessageSecret: new Uint8Array(S),
      botPersonaId: T,
      botFeedbackKind: t,
      botFeedbackText: a
    };
    const A = new f.Msg(w);
    const {
      sendMsgRecord: P
    } = require("../app/387183.js");
    yield (0, m.createNonPersistedJob)("sendMessage", (0, r.default)(function* () {
      return P(A);
    }), {
      priority: o.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}