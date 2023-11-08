var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistBotProfiles = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./169437.js");
var o = require("./72548.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    yield (0, o.getBotProfileTable)().bulkCreateOrMerge(e.map(e => ({
      id: e.id.toString(),
      name: e.name,
      attrs: e.attrs,
      description: e.description,
      category: e.category,
      isDefault: e.isDefault,
      prompts: JSON.stringify(e.prompts),
      personaId: e.personaId,
      commands: JSON.stringify(e.commands),
      commandsDescription: e.commandsDescription
    })));
    e.forEach(e => a.BotProfileCollection.gadd({
      id: e.id,
      name: e.name,
      attrs: e.attrs,
      description: e.description,
      category: e.category,
      isDefault: e.isDefault,
      prompts: e.prompts,
      personaId: e.personaId,
      commands: e.commands,
      commandsDescription: e.commandsDescription
    }));
  })).apply(this, arguments);
}