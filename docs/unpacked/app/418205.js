var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestBotList = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./548497.js");
var o = require("./669050.js");
function s() {
  return (s = (0, i.default)(function* () {
    const e = yield (0, a.sendBotListRPC)({
      botV: "2"
    });
    switch (e.name) {
      case "BotListResponseSuccessV1":
        {
          const {
            botBot: t
          } = e.value;
          const n = t.map(e => ({
            id: (0, o.createWid)(e.jid),
            isDefault: e.default === "true"
          }));
          if (n.filter(e => e.isDefault === true).length !== 1) {
            __LOG__(4, undefined, new Error())`[bot] requestBotList failed`;
            return [];
          } else {
            return n;
          }
        }
      case "BotListResponseSuccessV2":
        {
          const {
            botDefaultJid: t,
            botSection: n
          } = e.value;
          const r = [];
          n.forEach(e => {
            e.bot.forEach(e => {
              const n = e.jid;
              const i = e.personaId;
              r.push({
                id: (0, o.createWid)(n),
                isDefault: n === t,
                personaId: i
              });
            });
          });
          return r;
        }
      case "BotListResponseError":
        {
          const {
            code: t,
            text: n
          } = e.value.errorIQErrorInternalServerErrorOrForbiddenOrBadRequestOrNotAllowedMixinGroup.value;
          __LOG__(4, undefined, new Error())`[bot] requestBotList failed`;
          return [];
        }
    }
  })).apply(this, arguments);
}