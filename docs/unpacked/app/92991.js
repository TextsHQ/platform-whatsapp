Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebMissingKeyStore = undefined;
var r = require("./628718.js");
var i = require("./610876.js");
class a {
  getAll() {
    return (0, i.getAllMissingKeys)();
  }
  bulkGet(e) {
    return (0, i.bulkGetMissingKeys)(e);
  }
  count() {
    return (0, i.getMissingKeyCount)();
  }
  bulkUpdate(e) {
    return (0, i.createOrUpdateMissingKeys)(e);
  }
  bulkRemove(e) {
    return (0, i.bulkRemoveMissingKeys)(e);
  }
  clear() {
    return (0, r.getMissingKeysTable)().clear();
  }
}
exports.WAWebMissingKeyStore = a;
a.locks = ["missing-keys"];