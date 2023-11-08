var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreBotProfilesFromDb = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./169437.js");
var o = require("./72548.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* () {
    (yield (0, o.getBotProfileTable)().all()).forEach(e => {
      let t;
      try {
        t = (0, s.createUserWid)(e.id);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`restore-bot-profiles: invalid id`;
        return void SEND_LOGS("restore-bot-profiles: invalid id");
      }
      let n = [];
      if (e.prompts != null) {
        try {
          n = JSON.parse(e.prompts);
          if (!Array.isArray(n)) {
            n = [];
            __LOG__(4, undefined, new Error(), true)`restore-bot-profiles: prompts are not an array`;
            SEND_LOGS("restore-bot-profiles: prompts are not an array");
          }
        } catch (e) {
          __LOG__(4, undefined, new Error(), true)`restore-bot-profiles: prompts parsing failed`;
          SEND_LOGS("restore-bot-profiles: prompts parsing failed");
        }
      }
      let r = [];
      if (e.commands != null) {
        try {
          r = JSON.parse(e.commands);
          if (!Array.isArray(r)) {
            r = [];
            __LOG__(4, undefined, new Error(), true)`restore-bot-profiles: commands are not an array`;
            SEND_LOGS("restore-bot-profiles: commands are not an array");
          }
        } catch (e) {
          __LOG__(4, undefined, new Error(), true)`restore-bot-profiles: commands parsing failed`;
          SEND_LOGS("restore-bot-profiles: commands parsing failed");
        }
      }
      a.BotProfileCollection.gadd({
        id: t,
        name: e.name,
        attrs: e.attrs,
        description: e.description,
        category: e.category,
        isDefault: e.isDefault,
        prompts: n,
        personaId: e.personaId,
        commands: r
      });
    });
  })).apply(this, arguments);
}