Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityActivity = exports.ActivityTypeType = undefined;
var r = require("./481173.js");
var i = require("./382849.js");
const a = require("../vendor/76672.js").Mirrored(["SUB_GROUP_LINK", "NEW_COMMUNITY"]);
exports.ActivityTypeType = a;
class o extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.communityId = (0, i.prop)();
    this.type = (0, i.prop)();
    this.timestamp = (0, i.prop)();
    this.subgroupName = (0, i.prop)();
    this.subgroupId = (0, i.prop)();
  }
}
o.Proxy = "communityActivity";
const s = (0, r.defineModel)(o);
exports.CommunityActivity = s;