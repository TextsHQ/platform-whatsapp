Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
var i = require("./975880.js");
var a = require("./174619.js");
class o extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.shortcut = (0, r.prop)();
    this.message = (0, r.prop)();
    this.count = (0, r.prop)();
    this.keywords = (0, r.prop)();
    this.pendingCount = (0, r.session)(0);
    this.totalCount = (0, r.derived)(function () {
      return this.count + this.pendingCount;
    }, ["count", "pendingCount"]);
    this.type = (0, r.derived)(function () {
      var e;
      switch ((e = a.QuickReplyTypes.cast(this.id)) !== null && e !== undefined ? e : a.QuickReplyTypes.TEXT) {
        case a.QuickReplyTypes.ADDRESS_SMART_DEFAULT:
          return a.QuickReplyTypes.ADDRESS_SMART_DEFAULT;
        case a.QuickReplyTypes.HOURS_SMART_DEFAULT:
          return a.QuickReplyTypes.HOURS_SMART_DEFAULT;
        case a.QuickReplyTypes.PROFILE_SMART_DEFAULT:
          return a.QuickReplyTypes.PROFILE_SMART_DEFAULT;
        default:
          return a.QuickReplyTypes.TEXT;
      }
    }, ["id"]);
  }
  useOnce() {
    if (this.isSmartDefault()) {
      this.count += 1;
      (0, i.updateQuickReply)(this);
    } else {
      this.pendingCount += 1;
    }
  }
  isSmartDefault() {
    switch (this.type) {
      case a.QuickReplyTypes.PROFILE_SMART_DEFAULT:
      case a.QuickReplyTypes.HOURS_SMART_DEFAULT:
      case a.QuickReplyTypes.ADDRESS_SMART_DEFAULT:
        return true;
      default:
        return false;
    }
  }
}
o.Proxy = "quickReply";
var s = (0, r.defineModel)(o);
exports.default = s;