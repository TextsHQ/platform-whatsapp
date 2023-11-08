Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageVersionManager = exports.MissingVersionError = exports.InvalidVersionError = exports.DuplicateVersionError = undefined;
class n extends Error {
  constructor() {
    super(...arguments);
    this.name = "DuplicateVersionError";
  }
}
exports.DuplicateVersionError = n;
class r extends Error {
  constructor() {
    super(...arguments);
    this.name = "InvalidVersionError";
  }
}
exports.InvalidVersionError = r;
class i extends Error {
  constructor() {
    super(...arguments);
    this.name = "MissingVersionError";
  }
}
exports.MissingVersionError = i;
exports.StorageVersionManager = class {
  constructor() {
    this.versions = new Set();
    this._max = -1;
  }
  claim(e, t, i) {
    if (e < 0) {
      throw new r("Versions must by greater than or equal to zero!");
    }
    if (this.versions.has(e)) {
      throw new n(`Version #${e} has already been claimed!`);
    }
    if (t != null && t < e) {
      __LOG__(2)`db: skipping version ${e} for table ${i} since it is higher than max version to rollout ${t}`;
      return false;
    } else {
      this.versions.add(e);
      this._max = Math.max(this.getMax(), e);
      return true;
    }
  }
  version(e) {
    if (e < 0) {
      throw new r("Versions must by greater than or equal to zero!");
    }
    return e;
  }
  validate() {
    for (let e = 0; e <= this.getMax(); ++e) {
      if (!this.versions.has(e)) {
        throw new i(`Schema version #${e} is missing!`);
      }
    }
  }
  getMax() {
    return this._max;
  }
};