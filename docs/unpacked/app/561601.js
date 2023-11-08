var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearInitializePromise = function () {
  g = null;
};
exports.destroy = function () {
  return (0, l.destroyStorage)().catch(() => (0, s.dexieCastToPromise)(new a.default(l.DATABASE_NAME).delete())).finally(() => {
    g = null;
    return (0, s.dexieCastToPromise)(new a.default("fts-storage-dogfooding").delete());
  });
};
Object.defineProperty(exports, "getIndexV3Table", {
  enumerable: true,
  get: function () {
    return f.getTable;
  }
});
Object.defineProperty(exports, "getManifestTable", {
  enumerable: true,
  get: function () {
    return _.getTable;
  }
});
Object.defineProperty(exports, "getPurgeRangeQueueTable", {
  enumerable: true,
  get: function () {
    return u.getTable;
  }
});
exports.initialize = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./721698.js"));
var o = require("./476443.js");
var s = require("./691935.js");
var l = require("./965363.js");
var u = require("./926212.js");
var c = require("./900237.js");
var d = require("./691824.js");
var p = require("./823377.js");
var f = require("./921629.js");
var _ = require("./816502.js");
let g;
function m() {
  return (m = (0, i.default)(function* () {
    if (g == null) {
      yield (0, o.loadSchemaVersions)();
      (0, l.createStorage)();
      (0, _.addTable)();
      (0, c.deprecateTable)();
      (0, d.addTable)();
      (0, p.addTable)();
      (0, u.addTable)();
      (0, f.addTable)();
      g = (0, l.getStorage)().initialize().catch(e => {
        __LOG__(4, true, new Error(), true, ["sad"])`Assertion failed!`;
        SEND_LOGS("Failed to initialize fts storage", 1, "sad");
        throw e;
      });
    }
    return g;
  })).apply(this, arguments);
}