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
    this.t = (0, i.prop)();
    this.addedBy = (0, i.prop)();
    this.requestMethod = (0, i.prop)();
    this.parentGroupId = (0, i.prop)();
    this.contact = (0, i.session)();
    this.addedByContact = (0, i.session)();
  }
  initialize() {
    super.initialize();
    this.addChild("contact", a.ContactCollection.gadd(this.id));
    this.addChild("addedByContact", a.ContactCollection.gadd(this.addedBy));
  }
}
s.Proxy = "membership_approval_request";
s.idClass = o.default;
var l = (0, i.defineModel)(s);
exports.default = l;