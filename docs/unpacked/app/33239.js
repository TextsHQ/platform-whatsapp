Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlocklist = function () {
  return (0, i.getBlocklistTable)().all().then(e => e.map(e => (0, a.createUserWid)(e.id)));
};
exports.updateBlocklist = function (e) {
  if (!e) {
    return Promise.resolve(false);
  }
  const t = e.map(e => ({
    id: e.toString()
  }));
  return (0, r.getStorage)().lock(["blocklist"], e => {
    let [n] = e;
    return n.clear().then(() => n.bulkCreate(t).then(() => true));
  });
};
var r = require("./732011.js");
var i = require("./467750.js");
var a = require("./669050.js");