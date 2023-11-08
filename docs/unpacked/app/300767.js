var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./986753.js");
var o = r(require("./160719.js"));
var s = require("./280015.js");
var l = require("./122393.js");
function u() {
  return (u = (0, i.default)(function* () {
    const e = yield o.default.getSentinelMutations();
    yield (0, a.bulkCreateSyncPendingMutationsInTransaction)(e);
    return (0, s.markCollectionsForSync)(Array.from(l.CollectionName.members()));
  })).apply(this, arguments);
}