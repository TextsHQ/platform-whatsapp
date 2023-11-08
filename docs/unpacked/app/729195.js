var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_NAME = undefined;
exports.createStorage = function () {
  const e = new i.default(l);
  u = new a.Storage(e);
};
exports.destroyStorage = function () {
  if (u == null) {
    return Promise.reject((0, o.default)("[qpl-storage] Storage should be created first before being destroyed"));
  }
  return u.purge().then(() => {
    u = null;
  }).catch(e => {
    u = null;
    throw e;
  });
};
exports.getStorage = function () {
  (0, s.default)(u != null, "[qpl-storage] Storage should be created first before being accessed");
  return u;
};
var i = r(require("./53993.js"));
var a = require("./964978.js");
var o = r(require("./556869.js"));
var s = r(require("../vendor/441143.js"));
const l = "qpl-storage";
exports.DATABASE_NAME = l;
let u = null;