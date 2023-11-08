Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
const i = {
  classic: false,
  enabled: false
};
class a extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.archive = (0, r.prop)();
    this.disappearingMode = (0, r.prop)();
    this.showArchiveV2 = (0, r.derived)(function () {
      return !!this.archive.enabled && !this.archive.classic;
    }, ["archive", "enabled"]);
  }
  delete() {
    this.set({
      archive: i,
      disappearingMode: i
    });
    super.delete();
  }
}
a.Proxy = "settings";
var o = new ((0, r.defineModel)(a))({
  id: "default_settings_id",
  archive: i,
  disappearingMode: {
    duration: 0,
    settingTimestamp: 0
  }
});
exports.default = o;