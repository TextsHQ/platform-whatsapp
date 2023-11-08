var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeBots = g;
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./354458.js");
var l = require("./780549.js");
var u = require("./49667.js");
var c = require("./418205.js");
var d = require("./538504.js");
var p = require("./149542.js");
var f = require("./755985.js");
var _ = require("./819539.js");
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    if ((0, f.isWorker)()) {
      return void __LOG__(2)`[bot] skipping bot initialization in worker`;
    }
    if (!(0, s.isBotEnabled)()) {
      return void __LOG__(2)`[bot] not initializing bots due to feature being disabled`;
    }
    const e = (0, _.getBotListLastRequestedTimestamp)();
    const t = (0, a.unixTime)();
    const n = (0, o.getABPropConfigValue)("bonsai_update_interval");
    let r;
    if (e + n < t) {
      __LOG__(2)`[bot] requesting bots from server`;
      yield h();
      r = n;
    } else {
      __LOG__(2)`[bot] restoring bots from DB`;
      yield (0, p.restoreBotProfilesFromDb)();
      r = e + n - t;
    }
    self.setTimeout((0, i.default)(function* () {
      yield g();
    }), r * 1000);
    __LOG__(2)`[bot] initializing bots complete, next fetch at ${t + r}`;
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* () {
    const e = yield (0, c.requestBotList)();
    const t = yield (0, d.requestBotProfiles)(e);
    yield (0, u.persistBotProfiles)(t);
    (0, _.setBotListLastRequestedTimestamp)((0, a.unixTime)());
  })).apply(this, arguments);
}
l.Cmd.on("bot_waitlist_state_updated", () => {
  g();
});
l.Cmd.on("on_ab_props_update", () => {
  g();
});
l.Cmd.on("ab_props_loaded", () => {
  g();
});