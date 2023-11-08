var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebPendingMutationStore = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./394102.js");
var o = require("./610876.js");
class s {
  getByCollection(e) {
    return (0, i.default)(function* () {
      return (yield (0, o.getPendingMutationsRows)(["collection"], e)).map(a.convertToPendingMutationFromRow);
    })();
  }
  getAll() {
    return (0, o.getAllPendingMutationsRows)();
  }
  bulkCreate(e) {
    return (0, o.appendPendingMutationsRows)(e).then(() => {});
  }
  bulkRemove(e) {
    return (0, o.bulkRemovePendingMutations)(e);
  }
  clear() {
    return (0, a.getPendingMutationsTable)().clear();
  }
}
exports.WAWebPendingMutationStore = s;
s.locks = ["pending-mutations"];