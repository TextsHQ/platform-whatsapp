var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./481173.js");
var a = require("./177938.js");
var o = r(require("./124928.js"));
class s extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.name = (0, i.prop)();
    this.attrs = (0, i.prop)(() => []);
    this.description = (0, i.prop)();
    this.category = (0, i.prop)();
    this.isDefault = (0, i.prop)();
    this.prompts = (0, i.prop)(() => []);
    this.personaId = (0, i.prop)();
    this.commands = (0, i.prop)(() => []);
    this.commandsDescription = (0, i.prop)();
    this.contact = (0, i.session)();
  }
  initialize() {
    super.initialize();
    this.addChild("contact", a.ContactCollection.gadd({
      id: this.id,
      name: this.name,
      verifiedName: this.name,
      shortName: this.name,
      pushName: this.name,
      isBusiness: true
    }));
  }
}
s.Proxy = "botProfile";
s.idClass = o.default;
var l = (0, i.defineModel)(s);
exports.default = l;