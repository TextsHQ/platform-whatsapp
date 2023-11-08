var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/393386.js"));
var a = r(require("../vendor/907287.js"));
var o = r(require("./983254.js"));
var s = require("./176705.js");
var l = r(require("./236642.js"));
var u = r(require("./737065.js"));
var c = require("./102461.js");
var d = require("./94872.js");
var p = require("./128378.js");
class f extends c.UserPreferencesStoreBase {
  getMe() {
    return require("./459857.js").getMaybeMeUser();
  }
  getKeys(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    return (0, a.default)(t, t.map(t => e.getItem(t, n)));
  }
  updatePreservedUserKeys() {
    const e = this.getMe();
    if (e == null) {
      return;
    }
    const t = e.toString();
    const n = super.get(d.KEYS.PRESERVED_USER_KEYS, {
      storage: l.default
    });
    const r = n instanceof Array ? n : [];
    const a = p.LS_PRESERVE_USER_KEYS.map(e => (0, o.default)(this._concatenateKey(t, e)));
    super.set(d.KEYS.PRESERVED_USER_KEYS, (0, i.default)(r, a), {
      storage: l.default
    });
  }
  getPSIgnoringCache(e) {
    return super.get(e, {
      storage: l.default,
      ignoreCache: true
    });
  }
  getTS(e) {
    return super.get(e, {
      storage: u.default
    });
  }
  setTS(e, t) {
    super.set(e, t, {
      storage: u.default
    });
  }
  setUserSession(e, t) {
    const n = this._getHashedDataWithMeUser(e);
    if (n != null) {
      super.set(n, (0, s.asSerialisableComposeContentsType)(t), {
        storage: u.default
      });
    }
  }
  getUserSession(e) {
    const t = this._getHashedDataWithMeUser(e);
    if (t != null) {
      return super.get(t, {
        storage: u.default
      });
    } else {
      return null;
    }
  }
  clearUserSessionItem(e) {
    const t = this._getHashedDataWithMeUser(e);
    if (t != null) {
      u.default.removeItem(t);
    }
  }
  getCollection(e) {
    return this.getUser(e);
  }
  setCollection(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    if (!(this.getMe() == null || n)) {
      this.setUser(e, t);
    }
  }
  getUser(e) {
    const t = this._getHashedDataWithMeUser(e);
    if (t != null) {
      return super.get(t);
    } else {
      return null;
    }
  }
  setUser(e, t, n) {
    const r = this._getHashedDataWithMeUser(e);
    if (r != null) {
      super.set(r, t, n);
    }
  }
  _getHashedDataWithMeUser(e) {
    const t = this.getMe();
    if (!t) {
      __LOG__(3)`userPrefs: Me has not loaded yet.`;
      return null;
    }
    return (0, o.default)(this._concatenateKey(t.toString(), e));
  }
  _concatenateKey(e, t) {
    return [e, t].join(":");
  }
}
var _ = new f();
exports.default = _;