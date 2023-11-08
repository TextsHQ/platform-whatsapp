var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroy = function () {
  return (0, l.destroyStorage)().catch(() => (0, s.dexieCastToPromise)(new a.default(l.DATABASE_NAME).delete())).finally(() => {
    c = null;
  });
};
Object.defineProperty(exports, "getQplEventsTable", {
  enumerable: true,
  get: function () {
    return u.getTable;
  }
});
exports.initialize = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./721698.js"));
var o = require("./476443.js");
var s = require("./691935.js");
var l = require("./729195.js");
var u = require("./592019.js");
let c;
function d() {
  return (d = (0, i.default)(function* () {
    yield (0, o.loadSchemaVersions)();
    if (c == null) {
      (0, l.createStorage)();
      (0, u.addTable)();
      c = (0, l.getStorage)().initialize().catch(e => {
        __LOG__(4, true, new Error(), true, ["sad"])`Assertion failed!`;
        SEND_LOGS("Failed to initialize qpl storage", 1, "sad");
        throw e;
      });
    }
    return c;
  })).apply(this, arguments);
}