var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnencryptedMediaEntry = exports.MediaEntryList = exports.EncryptedMediaEntry = exports.AbstractMediaEntry = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./867624.js");
var s = require("./234628.js");
var l = require("./632157.js");
var u = require("./643235.js");
var c = r(require("./126655.js"));
var d = r(require("./166034.js"));
var p = r(require("./887927.js"));
var f = r(require("./556869.js"));
const _ = ["filehash", "handle"];
const g = ["mediaKey", "mediaKeyTimestamp", "encFilehash"];
const m = "PROBABLY_ON_SERVER";
const h = "PROBABLY_OFF_SERVER";
const y = "UNKNOWN";
class E {
  constructor(e) {
    this.useBackupUrl = false;
    if (this.constructor === E) {
      throw (0, f.default)("AbstractMediaEntry is an abstract class");
    }
    this.deprecatedMms3Url = e.deprecatedMms3Url;
    this.serverStatus = y;
    this.sidecar = e.sidecar;
    this.directPath = e.directPath;
    this.firstFrameSidecar = e.firstFrameSidecar;
    this.type = e.type;
    this.scansSidecar = e.scansSidecar;
    this.scanLengths = e.scanLengths;
    this.staticUrl = e.staticUrl;
  }
  markWhetherOnServer(e) {
    this.serverStatus = e ? m : h;
  }
  getMediaKey() {
    return null;
  }
  getMediaKeyTimestamp() {
    return null;
  }
  getEncfilehash() {
    return null;
  }
  getFilehash() {
    return null;
  }
  validateForUploads() {
    throw (0, f.default)("You must implement this method in a subclass");
  }
  validateForDownloads() {
    return this.serverStatus !== h;
  }
}
exports.AbstractMediaEntry = E;
class S extends E {
  constructor(e) {
    const {
      filehash: t,
      handle: n
    } = e;
    super((0, a.default)(e, _));
    this.filehash = t;
    this.handle = n;
  }
  getFilehash() {
    return this.filehash;
  }
  validateForUploads() {
    return true;
  }
}
exports.UnencryptedMediaEntry = S;
class v extends E {
  constructor(e) {
    const {
      mediaKey: t,
      mediaKeyTimestamp: n,
      encFilehash: r
    } = e;
    super((0, a.default)(e, g));
    this._isMediaKeyValidForUploads = true;
    this.mediaKey = t;
    this.mediaKeyTimestamp = n;
    this.encFilehash = r;
  }
  canReuseMediaKey() {
    if (this.directPath == null) {
      return false;
    }
    const e = (0, l.castToUnixTime)(this.mediaKeyTimestamp);
    return (0, s.isMediaKeyReusable)(e);
  }
  getMediaKey() {
    return this.mediaKey;
  }
  getMediaKeyTimestamp() {
    return this.mediaKeyTimestamp;
  }
  getEncfilehash() {
    return this.encFilehash;
  }
  url(e) {
    var t = this;
    return (0, i.default)(function* () {
      const {
        useFallback: n,
        forceHashUrl: r
      } = e || {};
      const {
        encFilehash: i
      } = t;
      if (i == null || i === "") {
        return Promise.reject((0, f.default)("media_entry: encFilehash does not exist"));
      }
      const {
        selectedHost: a,
        fallbackHost: o
      } = yield u.mediaHosts.getHostsInfo({
        operation: d.default.DOWNLOAD,
        encFilehash: i,
        type: t.type
      });
      const s = Boolean(n) && o ? o : a;
      return (0, c.default)({
        directPath: r ? null : t.directPath,
        encFilehash: i,
        hostname: s.hostname,
        type: t.type
      });
    })();
  }
  validateForUploads() {
    return !!this._isMediaKeyValidForUploads && (!!(0, p.default)(this.mediaKeyTimestamp) || (this._isMediaKeyValidForUploads = false, false));
  }
}
exports.EncryptedMediaEntry = v;
function T(e) {
  e.entries.sort((e, t) => {
    const n = M(t) - M(e);
    if (n !== 0) {
      return n;
    }
    const r = e.getMediaKeyTimestamp();
    const i = t.getMediaKeyTimestamp();
    if (r == null || i == null) {
      return n;
    } else {
      return i - r;
    }
  });
}
function M(e) {
  let t = 0;
  switch (e.serverStatus) {
    case m:
      t += 200;
      break;
    case h:
      break;
    case y:
      t += 100;
  }
  if (e.getEncfilehash() != null) {
    t += 20;
  }
  return t;
}
exports.MediaEntryList = class {
  constructor() {
    this.entries = [];
  }
  _updateEntry(e) {
    let {
      foundEntry: t,
      mediaKey: n,
      mediaKeyTimestamp: r,
      encFilehash: i,
      sidecar: a,
      directPath: s,
      firstFrameSidecar: l,
      scansSidecar: u,
      scanLengths: c,
      deprecatedMms3Url: d,
      staticUrl: p
    } = e;
    if (t instanceof v && n != null && n !== "" && !(0, o.b64Equal)(t.mediaKey, n)) {
      const e = t.mediaKey.replace("=", "").split("\n")[0];
      const r = n.replace("=", "").split("\n")[0];
      __LOG__(4, undefined, new Error(), true)`media-fault: mediaKey changed for the same MMS3 url. type:${t.type}. equal?:${e === r}. Debug:\n${JSON.stringify({
        before: {
          hasDirectPath: Boolean(t.directPath),
          hasEncFilehash: Boolean(t.encFilehash),
          hasMediaKey: Boolean(t.mediaKey),
          hasDeprecatedMms3Url: Boolean(t.deprecatedMms3Url)
        },
        after: {
          hasDirectPath: Boolean(s),
          hasEncFilehash: Boolean(i),
          hasDeprecatedMms3Url: Boolean(d)
        }
      }, null, 2)}`;
      SEND_LOGS("media-key-mismatch-same-mms3-url");
      return null;
    }
    if (t instanceof v && r != null) {
      t.mediaKeyTimestamp = r;
    }
    if (a) {
      t.sidecar = a;
    }
    if (l) {
      t.firstFrameSidecar = l;
    }
    if (u) {
      t.scansSidecar = u;
    }
    if (c == null ? undefined : c.length) {
      t.scanLengths = c;
    }
    if (p) {
      t.staticUrl = p;
    }
    t.directPath = s;
    return t;
  }
  updateEntry(e) {
    let {
      deprecatedMms3Url: t,
      mediaKey: n,
      mediaKeyTimestamp: r,
      encFilehash: i,
      type: a,
      sidecar: o,
      directPath: s,
      firstFrameSidecar: l,
      scansSidecar: u,
      scanLengths: c,
      staticUrl: d
    } = e;
    const p = this.getEntryByEncFilehash({
      encFilehash: i,
      deprecatedMms3Url: t
    });
    if (p) {
      return this._updateEntry({
        foundEntry: p,
        mediaKey: n,
        mediaKeyTimestamp: r,
        encFilehash: i,
        sidecar: o,
        directPath: s,
        firstFrameSidecar: l,
        scansSidecar: u,
        scanLengths: c,
        deprecatedMms3Url: t,
        staticUrl: d
      });
    }
  }
  addUnencryptedEntry(e) {
    const t = this.updateUnencryptedEntry({
      filehash: e.filehash,
      directPath: e.directPath
    });
    if (t) {
      return t;
    }
    const n = new S({
      deprecatedMms3Url: e.directPath,
      filehash: e.filehash,
      type: e.type,
      directPath: e.directPath,
      handle: e.handle
    });
    this.entries.push(n);
    return n;
  }
  updateUnencryptedEntry(e) {
    const t = e.directPath != null ? this.getUnencryptedEntry(e.filehash, e.directPath) : null;
    if (t && t instanceof S) {
      if (e.directPath != null) {
        t.directPath = e.directPath;
      }
      return t;
    } else {
      return null;
    }
  }
  addEntry(e) {
    const {
      deprecatedMms3Url: t,
      mediaKey: n,
      mediaKeyTimestamp: r,
      encFilehash: i,
      type: a,
      sidecar: o,
      directPath: s,
      firstFrameSidecar: l,
      scansSidecar: u,
      scanLengths: c,
      staticUrl: d,
      debugHint: p
    } = e;
    if (i == null) {
      __LOG__(4, undefined, new Error(), true)`Media type ${a} from ${p} is missing encFilehash`;
      SEND_LOGS(`media-entry-missing-upload-hash-${a}-${p}`);
    }
    const f = this.entries;
    const _ = this.getEntryByEncFilehash({
      encFilehash: i,
      deprecatedMms3Url: t
    });
    const g = _ ? this._updateEntry({
      foundEntry: _,
      mediaKey: n,
      mediaKeyTimestamp: r,
      encFilehash: i,
      sidecar: o,
      directPath: s,
      firstFrameSidecar: l,
      scansSidecar: u,
      scanLengths: c,
      deprecatedMms3Url: t,
      staticUrl: d
    }) : null;
    if (g instanceof v) {
      return g;
    }
    if (!n) {
      return null;
    }
    const m = new v({
      deprecatedMms3Url: t,
      mediaKey: n,
      mediaKeyTimestamp: r,
      encFilehash: i,
      type: a,
      sidecar: o,
      directPath: s,
      firstFrameSidecar: l,
      scansSidecar: u,
      scanLengths: c,
      staticUrl: d
    });
    f.push(m);
    return m;
  }
  _getKey(e) {
    let {
      encFilehash: t,
      deprecatedMms3Url: n
    } = e;
    if (t == null) {
      return `mms3:${n}`;
    } else {
      return t;
    }
  }
  has(e) {
    return this.getEntryByEncFilehash(e) instanceof v;
  }
  hasUnencryptedEntry(e) {
    return e.filehash != null && e.directPath != null && this.getUnencryptedEntry(e.filehash, e.directPath) instanceof S;
  }
  getEntryByEncFilehash(e) {
    const t = this._getKey(e);
    return this.entries.find(e => e instanceof v && this._getKey({
      encFilehash: e.encFilehash,
      deprecatedMms3Url: e.deprecatedMms3Url
    }) === t);
  }
  getUnencryptedEntry(e, t) {
    return this.entries.find(n => n instanceof S && n.filehash === e && n.directPath === t);
  }
  _getEntries(e) {
    return this.entries.filter(t => e ? t instanceof v : t instanceof S);
  }
  getUploadEntry(e) {
    T(this);
    return this._getEntries(e).find(e => e.validateForUploads());
  }
  getDownloadEntry(e) {
    T(this);
    return this._getEntries(e).find(e => e.validateForDownloads());
  }
  clearEntries() {
    this.entries = [];
  }
};