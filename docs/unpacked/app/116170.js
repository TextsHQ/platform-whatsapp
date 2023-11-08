var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populateICDCMeta = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./564065.js");
var o = require("./21838.js");
var s = require("./358891.js");
var l = require("./459857.js");
function u() {
  return (u = (0, i.default)(function* (e, t) {
    const n = (0, l.getMeUser)();
    let r;
    let i;
    try {
      r = yield (0, s.getICDCMeta)(n);
    } catch (e) {
      new a.AdvMetadataCreationFailureWamEvent({
        advMetadataIsMe: true
      }).commit();
      throw e;
    }
    try {
      i = e.equals(n) ? null : yield (0, s.getICDCMeta)(e);
    } catch (e) {
      new a.AdvMetadataCreationFailureWamEvent({
        advMetadataIsMe: false
      }).commit();
      throw e;
    }
    (0, o.populateMessageContextInfo)(t, r, i);
  })).apply(this, arguments);
}