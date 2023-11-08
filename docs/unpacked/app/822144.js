Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkGetMissingKeysInTransaction = function (e) {
  return (0, r.runInTransaction)({
    MissingKeyStore: true
  }, t => {
    let {
      MissingKeyStore: n
    } = t;
    return n.bulkGet(e);
  });
};
exports.bulkUpdateMissingKeysInTransaction = function (e) {
  return (0, r.runInTransaction)({
    MissingKeyStore: true
  }, t => {
    let {
      MissingKeyStore: n
    } = t;
    return n.bulkUpdate(e);
  });
};
exports.getAllMissingKeysInTransaction = function () {
  return (0, r.runInTransaction)({
    MissingKeyStore: true
  }, e => {
    let {
      MissingKeyStore: t
    } = e;
    return t.getAll();
  });
};
exports.getMissingKeyCountTransaction = function () {
  return (0, r.runInTransaction)({
    MissingKeyStore: true
  }, e => {
    let {
      MissingKeyStore: t
    } = e;
    return t.count();
  });
};
var r = require("./819416.js");