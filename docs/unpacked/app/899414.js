var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToMBToString = function (e) {
  if (e != null && e !== 0) {
    return Math.round(e / 1000000).toString();
  }
  return "0";
};
exports.getAllDatabases = function () {
  return o.apply(this, arguments);
};
exports.getDatabase = function () {
  return s.apply(this, arguments);
};
exports.objectStoreIterator = function (e, t) {
  return new Promise((n, r) => {
    const i = e.openCursor(null, "prev");
    i.onsuccess = e => {
      const r = e.target.result;
      if (r && t(r.value)) {
        r.continue();
      } else {
        n();
      }
    };
    i.onerror = e => {
      r(e.target.result);
    };
  });
};
exports.promisifyRequest = a;
var i = r(require("../vendor/348926.js"));
function a(e) {
  return new Promise((t, n) => {
    e.onsuccess = e => {
      t(e.target.result);
    };
    e.onerror = e => {
      n(e.target.result);
    };
  });
}
function o() {
  return (o = (0, i.default)(function* (e) {
    const t = yield a(e.open("__dbnames"));
    const n = t.transaction(t.objectStoreNames, "readonly");
    const r = n.objectStore(n.objectStoreNames[0]);
    return yield a(r.getAll());
  })).apply(this, arguments);
}
function s() {
  return (s = (0, i.default)(function* (e, t) {
    return yield a(e.open(t));
  })).apply(this, arguments);
}