var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldTriggerQueryGroupInfo = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./377474.js");
var o = require("./645716.js");
var s = require("./98742.js");
function l() {
  return (l = (0, i.default)(function* (e, t) {
    const n = yield (0, s.getGroupMetadataTable)().get(e.toString());
    return n != null && (Boolean(n.defaultSubgroup) === false ? (0, a.isAddressingModeMismatch)(n, t) : (0, o.isPnhCagInLimboState)(n, t.participants));
  })).apply(this, arguments);
}