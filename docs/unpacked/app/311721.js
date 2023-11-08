var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroy = function () {
  return (0, g.destroyStorage)().catch(() => (0, s.dexieCastToPromise)(new a.default(g.DATABASE_NAME).delete())).finally(() => {
    m = null;
  });
};
Object.defineProperty(exports, "getBaseKeyTable", {
  enumerable: true,
  get: function () {
    return l.getTable;
  }
});
Object.defineProperty(exports, "getIdentityTable", {
  enumerable: true,
  get: function () {
    return u.getTable;
  }
});
Object.defineProperty(exports, "getMetaTable", {
  enumerable: true,
  get: function () {
    return c.getTable;
  }
});
Object.defineProperty(exports, "getPreKeyTable", {
  enumerable: true,
  get: function () {
    return d.getTable;
  }
});
Object.defineProperty(exports, "getSenderKeyTable", {
  enumerable: true,
  get: function () {
    return p.getTable;
  }
});
Object.defineProperty(exports, "getSessionTable", {
  enumerable: true,
  get: function () {
    return f.getTable;
  }
});
Object.defineProperty(exports, "getSignedPreKeyTable", {
  enumerable: true,
  get: function () {
    return _.getTable;
  }
});
exports.initialize = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./721698.js"));
var o = require("./476443.js");
var s = require("./691935.js");
var l = require("./391555.js");
var u = require("./995555.js");
var c = require("./896551.js");
var d = require("./35760.js");
var p = require("./171843.js");
var f = require("./362802.js");
var _ = require("./152962.js");
var g = require("./22399.js");
let m;
function h() {
  return (h = (0, i.default)(function* () {
    if (m == null) {
      yield (0, o.loadSchemaVersions)();
      (0, g.createStorage)();
      (0, l.addTable)();
      (0, u.addTable)();
      (0, c.addTable)();
      (0, d.addTable)();
      (0, p.addTable)();
      (0, f.addTable)();
      (0, _.addTable)();
      m = (0, g.getStorage)().initialize().catch(e => {
        __LOG__(4, true, new Error(), true, ["sad"])`Assertion failed!`;
        SEND_LOGS("Failed to initialize signal storage", 1, "sad");
        throw e;
      });
    }
    return m;
  })).apply(this, arguments);
}