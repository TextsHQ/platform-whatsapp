var r = require("../vendor/595318.js");
exports.ob = function () {
  return (0, c.destroyStorage)().catch(() => (0, s.dexieCastToPromise)(new a.default(c.DATABASE_NAME).delete())).finally(() => {
    p = null;
  });
};
exports.j2 = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./721698.js"));
var o = require("./476443.js");
var s = require("./691935.js");
var l = require("./431820.js");
var u = require("./807241.js");
var c = require("./722136.js");
var d = r(require("../vendor/441143.js"));
let p;
function f() {
  return (f = (0, i.default)(function* () {
    if (p == null) {
      yield (0, o.loadSchemaVersions)();
      (0, c.createStorage)();
      (0, u.addTable)();
      (0, l.addTable)();
      p = (0, c.getStorage)().initialize().catch(e => {
        __LOG__(4, true, new Error(), true, ["sad"])`Assertion failed!`;
        SEND_LOGS("Failed to initialize worker storage", 1, "sad");
        throw e;
      });
    }
    return p;
  })).apply(this, arguments);
}
a.default.Promise.PSD.onunhandled = () => {};
a.default.Promise.PSD.txRelaxedDurabilityEnabled = true;
(0, d.default)(true, "only for use in worker");