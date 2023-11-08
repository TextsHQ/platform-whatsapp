var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_NAME = undefined;
exports.createStorage = d;
exports.destroyStorage = function () {
  return p.apply(this, arguments);
};
exports.getStorage = function () {
  (0, l.default)(c != null, "[lru-media-storage-idb] Storage should be created first before being accessed");
  return c;
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./53993.js"));
var o = require("./964978.js");
var s = r(require("./556869.js"));
var l = r(require("../vendor/441143.js"));
const u = "lru-media-storage-idb";
exports.DATABASE_NAME = u;
let c = null;
function d() {
  const e = new a.default(u);
  c = new o.Storage(e);
}
function p() {
  return (p = (0, i.default)(function* () {
    if (c == null) {
      throw (0, s.default)("[lru-media-storage-idb] Storage should be created first before being destroyed");
    }
    try {
      yield c.purge();
    } finally {
      c = null;
    }
  })).apply(this, arguments);
}
d();