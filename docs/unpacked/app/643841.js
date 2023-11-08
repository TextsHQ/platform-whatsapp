var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebCollectionVersionStore = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./599125.js");
class o {
  get(e) {
    return (0, a.getCollectionVersionTable)().get(e);
  }
  bulkGet(e) {
    return (0, a.getCollectionVersionTable)().bulkGet(e);
  }
  getAll() {
    return (0, a.getCollectionVersionTable)().all();
  }
  update(e, t) {
    return (0, a.getCollectionVersionTable)().createOrMerge(e, (0, i.default)({
      collection: e
    }, t));
  }
  bulkUpdate(e) {
    return (0, a.getCollectionVersionTable)().bulkCreateOrMerge(e);
  }
  clear() {
    return (0, a.getCollectionVersionTable)().clear();
  }
}
exports.WAWebCollectionVersionStore = o;
o.locks = ["collection-version"];