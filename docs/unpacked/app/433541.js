var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroy = function () {
  return (0, l.destroyStorage)().catch(() => (0, s.dexieCastToPromise)(new a.default(l.DATABASE_NAME).delete())).finally(() => {
    f = null;
  });
};
exports.initialize = function () {
  return _.apply(this, arguments);
};
exports.versionToRollout = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./721698.js"));
var o = require("./476443.js");
var s = require("./691935.js");
var l = require("./242794.js");
var u = require("./850794.js");
var c = require("./499972.js");
var d = require("./286714.js");
var p = require("./134233.js");
let f;
function _() {
  return (_ = (0, i.default)(function* () {
    if (f == null) {
      yield (0, o.loadSchemaVersions)();
      (0, l.createStorage)();
      (0, p.addTable)();
      (0, u.addTable)();
      (0, c.addTable)();
      (0, d.addTable)();
      f = (0, l.getStorage)().initialize().catch(e => {
        __LOG__(4, true, new Error(), true, ["sad"])`Assertion failed!`;
        SEND_LOGS("Failed to initialize offd storage", 1, "sad");
        throw e;
      });
    }
    return f;
  })).apply(this, arguments);
}
exports.versionToRollout = 4;