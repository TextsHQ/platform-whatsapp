var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestBotProfiles = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./984330.js");
var o = require("./294673.js");
var s = require("./692269.js");
var l = require("./328606.js");
var u = r(require("./556869.js"));
function c() {
  return (c = (0, i.default)(function* (e) {
    if (e.length === 0) {
      return Promise.resolve([]);
    }
    const t = new s.USyncQuery().withContext("interactive").withMode("query").withBotProfileProtocol();
    e.forEach(e => {
      let {
        id: n,
        personaId: r
      } = e;
      t.withUser(new l.USyncUser().withId(n).withPersonaId(r));
    });
    const n = yield t.execute();
    const r = n.error.all || n.error.status;
    if (r) {
      throw new a.ServerStatusCodeError(r.errorCode, r.errorText);
    }
    const i = n.list;
    if (i.length) {
      return i.map(e => {
        var t;
        let {
          bot: n,
          id: r
        } = e;
        return {
          id: r,
          name: n.name,
          attrs: n.attributes,
          description: n.description,
          category: (t = o.BotProfileCategory.cast(n.category)) !== null && t !== undefined ? t : o.BotProfileCategory.SYNTHETIC,
          isDefault: n.isDefault,
          prompts: n.prompts,
          personaId: n.personaId,
          commands: n.commands,
          commandsDescription: n.commandsDescription
        };
      });
    } else {
      return Promise.reject((0, u.default)("no status data returned for user"));
    }
  })).apply(this, arguments);
}