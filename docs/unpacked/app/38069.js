var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLocalStorage = function () {
  return (0, a.getTable)().clear();
};
exports.getLocalStorage = function () {
  return (0, a.getTable)().all().then(e => e.map(e => ({
    key: e.key,
    value: e.value
  })));
};
exports.getLocalStorageValue = function (e) {
  return (0, a.getTable)().get(e).then(e => e == null ? undefined : e.value);
};
exports.updateLocalStorage = function (e) {
  const t = e.map(e => ({
    key: e.key,
    value: e.value
  }));
  return (0, o.getStorage)().lock(["local_storage"], function () {
    var e = (0, i.default)(function* (e) {
      let [n] = e;
      yield n.clear();
      yield n.bulkCreateOrReplace(t);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./807241.js");
var o = require("./722136.js");
(0, r(require("../vendor/441143.js")).default)(true, "only for use in worker");