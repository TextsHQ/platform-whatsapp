var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendBotRequestWelcome = function () {
  return C.apply(this, arguments);
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/775593.js");
var i = r(require("../app/66836.js"));
var u = require("../app/632157.js");
var s = require("../app/402994.js");
var c = require("../app/941712.js");
var d = r(require("../app/579696.js"));
var f = require("../app/428261.js");
var p = r(require("../app/565754.js"));
var m = require("../app/772358.js");
var h = require("../app/373070.js");
var g = require("../app/899137.js");
var E = require("../app/387183.js");
var v = require("../app/693741.js");
var _ = require("../app/480313.js");
var y = require("../app/459857.js");
function C() {
  return (C = (0, o.default)(function* (e) {
    return b({
      chat: e,
      signal: new a().signal
    });
  })).apply(this, arguments);
}
const b = (0, i.default)(e => {
  let {
    chat: t
  } = e;
  return t.id.toString();
}, function () {
  var e = (0, o.default)(function* (e) {
    let {
      chat: t
    } = e;
    return function () {
      return M.apply(this, arguments);
    }(t);
  });
  return function () {
    return e.apply(this, arguments);
  };
}());
function M() {
  return (M = (0, o.default)(function* (e) {
    const t = e.id;
    const n = (0, y.assertGetMeUser)();
    const a = new p.default({
      id: yield p.default.newId(),
      remote: t,
      fromMe: true
    });
    const r = self.crypto.getRandomValues(new Uint8Array(32));
    const i = yield (0, c.genBotMsgSecretFromMsgSecret)(r);
    const C = {
      type: h.MSG_TYPE.PROTOCOL,
      subtype: "bot_request_welcome",
      ack: s.ACK.CLOCK,
      from: n,
      to: t,
      id: a,
      local: true,
      isNewMsg: true,
      self: "out",
      t: (0, u.unixTime)(),
      messageSecret: r,
      botMessageSecret: new Uint8Array(i)
    };
    const b = new m.Msg(C);
    e.hasRequestedWelcomeMsg = true;
    yield (0, g.createNonPersistedJob)("sendMessage", (0, o.default)(function* () {
      yield (0, f.storeMessages)([C], t);
      const e = yield (0, E.sendMsgRecord)(b);
      if (e.messageSendResult === v.SendMsgResult.OK) {
        const e = d.default.getBotWelcomeRequestSetMutation(t, true);
        yield (0, _.lockForSync)(["chat"], [e], function () {
          var e = (0, o.default)(function* (e) {
            let [n] = e;
            return n.merge(t.toString(), {
              hasRequestedWelcomeMsg: true
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        }());
      }
      return e;
    }), {
      priority: l.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}