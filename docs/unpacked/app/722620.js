Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
var i = require("./921264.js");
var a = require("./177938.js");
class o extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.groupId = (0, r.prop)();
    this.parentGroupId = (0, r.prop)();
    this.subject = (0, r.prop)();
    this.desc = (0, r.prop)();
    this.owner = (0, r.prop)();
    this.t = (0, r.prop)();
    this.isExistingGroup = (0, r.prop)();
    this.participantCount = (0, r.prop)();
    this.ownerContact = (0, r.session)();
    this.currentState = (0, r.session)();
    this.error = (0, r.session)();
  }
  initialize() {
    super.initialize();
    this.addChild("ownerContact", a.ContactCollection.gadd(this.owner));
    this.resetState();
  }
  resetState() {
    this.currentState = i.State.Pending;
    this.error = undefined;
  }
}
o.Proxy = "subgroup_suggestion";
var s = (0, r.defineModel)(o);
exports.default = s;