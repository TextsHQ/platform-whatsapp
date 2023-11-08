var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./481173.js");
var a = r(require("./492006.js"));
var o = require("./862159.js");
var s = r(require("./124928.js"));
var l = require("../vendor/548360.js");
class u extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.subject = (0, i.prop)();
    this.subjectTime = (0, i.prop)();
    this.parentGroupId = (0, i.prop)();
    this.defaultSubgroup = (0, i.prop)();
    this.generalSubgroup = (0, i.prop)();
    this.desc = (0, i.prop)();
    this.creation = (0, i.prop)();
    this.owner = (0, i.prop)();
    this.size = (0, i.prop)();
    this.adminRequestRequired = (0, i.prop)();
    this.membershipApprovalMode = (0, i.prop)();
    this.membershipApprovalRequest = (0, i.prop)();
    this.participants = (0, i.collection)(a.default);
    this.groupType = (0, i.derived)(function () {
      if (this.defaultSubgroup === true) {
        return o.GroupType.LINKED_ANNOUNCEMENT_GROUP;
      } else if (this.generalSubgroup === true) {
        return o.GroupType.LINKED_GENERAL_GROUP;
      } else {
        return o.GroupType.LINKED_SUBGROUP;
      }
    }, ["defaultSubgroup", "generalSubgroup"]);
    this.displayedDesc = (0, i.derived)(function () {
      if (this.groupType !== o.GroupType.LINKED_ANNOUNCEMENT_GROUP || this.desc != null && this.desc !== "") {
        return this.desc;
      } else {
        return l.fbt._("", null, {
          hk: "2CDZai"
        }).toString();
      }
    }, ["desc", "groupType"]);
  }
}
u.Proxy = "unjoinedSubgroupMetadata";
u.idClass = s.default;
var c = (0, i.defineModel)(u);
exports.default = c;