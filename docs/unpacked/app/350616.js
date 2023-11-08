Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebSyncKeyStore = undefined;
var r = require("./512666.js");
var i = require("./610876.js");
class a {
  get(e) {
    return (0, i.getSyncKey)(e);
  }
  getAll() {
    return (0, i.getAllSyncKeys)();
  }
  set(e) {
    return (0, i.createSyncKey)(e).then(() => {});
  }
  expire(e) {
    return (0, i.expireSyncKey)(e);
  }
  clear() {
    return (0, r.getSyncKeysTable)().clear();
  }
}
exports.WAWebSyncKeyStore = a;
a.locks = ["sync-keys"];