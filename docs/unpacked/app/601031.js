var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryBotWaitlistState = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./632157.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./354458.js");
var c = require("./780549.js");
var d = r(require("./797137.js"));
var p = require("./60370.js");
var f = require("./755985.js");
var _ = require("./819539.js");
let g = true;
let m = null;
const h = o.HOUR_SECONDS * 1000;
const y = new l.WapParser("botWaitlistStateQueryParser", e => {
  let t = false;
  const n = e.maybeChild("user");
  if (n) {
    if (n.maybeAttrString("state") === "AI available") {
      t = true;
    }
  }
  return {
    isBotAvailable: t
  };
});
function E() {
  return (E = (0, i.default)(function* () {
    var e;
    var t;
    let n = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if (g === false && !n) {
      return void __LOG__(2)`Ad hoc Bot Available skipped, interval less than threshold`;
    }
    g = false;
    m = self.setTimeout(() => {
      g = true;
    }, h);
    if ((0, _.getBotWaitlistState)() === p.HistorySync$BotAIWaitListState.AI_AVAILABLE) {
      __LOG__(2)`Ad hoc Bot Available skipped, state is already available`;
      return void self.clearTimeout(m);
    }
    yield (0, d.default)();
    const r = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      xmlns: "bot",
      type: "get",
      id: (0, s.generateId)()
    }, (0, s.wap)("user_state", null));
    const i = yield (0, a.deprecatedSendIq)(r, y);
    if (i.success) {
      __LOG__(2)`Ad hoc Bot Available state query returned result : ${(e = i.result) === null || e === undefined ? undefined : e.isBotAvailable}`;
      if (((t = i.result) === null || t === undefined ? undefined : t.isBotAvailable) === true) {
        yield (0, _.setBotWaitlistState)(p.HistorySync$BotAIWaitListState.AI_AVAILABLE);
        if (!(0, f.isWorker)() && (0, u.isBotEnabled)()) {
          c.Cmd.botWaitlistStateUpdated();
        }
      }
    } else {
      __LOG__(4, undefined, new Error())`Could not send IQ in queryBotWaitlistState`;
    }
  })).apply(this, arguments);
}