var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./971114.js");
var o = require("./918720.js");
var s = r(require("../vendor/441143.js"));
function l(e) {
  return e;
}
exports.default = class {
  constructor(e, t, n) {
    this.maxVersion = -1;
    this.versions = new Map();
    this.upgraders = new Map();
    this.shouldEnablePropFilter = true;
    this.shouldUseDbMsgEncKeyForEncryptedCol = true;
    this.name = e;
    this.versionManager = t;
    this.maxVersionAllowedRollout = n;
  }
  version(e, t, n) {
    if (!this.versionManager.claim(e, this.maxVersionAllowedRollout, this.name)) {
      return this;
    }
    (0, s.default)(!this.versions.has(e), `Table "${this.name}" already has version #${+e} defined!`);
    (0, s.default)(e > this.maxVersion, `Versions for table ${this.name} must be defined in order`);
    this.maxVersion = e;
    const r = this.schema(e) || (0, o.emptySchema)(this.name);
    const i = (0, a.sortMutations)(t).reduce((e, t) => {
      t.validate(e);
      return t.apply(e);
    }, (0, o.cloneSchema)(r));
    this.versions.set(e, (0, o.freezeSchema)(i));
    this.upgraders.set(e, n);
    return this;
  }
  devOnlyDoNotUseInitWithMaxVersion(e, t) {
    const n = this.versionManager.getMax() + 1;
    return this.version(n, e, t);
  }
  delete(e) {
    if (!this.versionManager.claim(e, this.maxVersionAllowedRollout, this.name)) {
      return this;
    }
    (0, s.default)(!this.versions.has(e), `Table "${this.name}" already has version #${+e} defined!`);
    (0, s.default)(e > this.maxVersion, `Versions for table ${this.name} must be defined in order`);
    this.maxVersion = e;
    const t = this.schema(e) || (0, o.emptySchema)(this.name);
    const n = (0, i.default)((0, i.default)({}, t), {}, {
      deleted: true
    });
    this.versions.set(e, (0, o.freezeSchema)(n));
    return this;
  }
  view(e) {
    this.rowview = e;
    return this;
  }
  enablePropFilter(e) {
    this.shouldEnablePropFilter = e;
    return this;
  }
  useDbMsgEncKeyForEncryptedCol(e) {
    this.shouldUseDbMsgEncKeyForEncryptedCol = e;
    return this;
  }
  schema(e) {
    const t = this.versions.get(e);
    if (t) {
      return t;
    }
    const n = Array.from(this.versions.keys()).map(l).sort((e, t) => e - t).filter(t => t < e).pop();
    if (n || n === 0) {
      return this.versions.get(n) || (0, o.emptySchema)(this.name);
    } else {
      return null;
    }
  }
  tableExists() {
    return this.maxVersion !== -1;
  }
};