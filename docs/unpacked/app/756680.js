var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./417405.js");
var a = r(require("./670983.js"));
var o = require("./685639.js");
var s = require("./698210.js");
var l = r(require("./556869.js"));
let u = [];
const c = new o.ShiftTimer(function () {
  const e = u;
  u = [];
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    n._inAutoreleasePool = false;
    if (!(n._retainCount !== 0 || n.released)) {
      n.released = true;
      n._releaseImpl();
    }
  }
});
class d {
  constructor() {
    this._retainCount = 1;
    this._inAutoreleasePool = false;
    this.released = false;
    this._b64 = undefined;
    this._blob = undefined;
    this._url = undefined;
    this._mimetype = undefined;
    this._released = undefined;
  }
  retain() {
    if (this.released) {
      __LOG__(3)`OpaqueData:retain called on released OpaqueData`;
      throw (0, l.default)("OpaqueData:retain called on released OpaqueData");
    }
    this._retainCount++;
  }
  autorelease() {
    if (this.released) {
      __LOG__(3)`OpaqueData:autorelease called on released object`;
    } else if (this._retainCount === 0) {
      __LOG__(3)`OpaqueData:autorelease too many release calls`;
    } else if (this._retainCount === 1) {
      this._retainCount = 0;
      if (!this._inAutoreleasePool) {
        this._inAutoreleasePool = true;
        u.push(this);
        c.onOrBefore(1000);
      }
    } else {
      this._retainCount--;
    }
  }
  autoreleaseWhenPromiseCompletes(e) {
    const t = () => {
      this.autorelease();
    };
    e.then(t, t);
  }
  throwIfReleased(e) {
    if (this.released) {
      __LOG__(4, undefined, new Error())`${e} called on released OpaqueData`;
      throw (0, l.default)(`${e} called on released OpaqueData`);
    }
    if (this._retainCount === 0) {
      __LOG__(4, undefined, new Error())`${e} called on unretained OpaqueData`;
    }
  }
  url() {
    this.throwIfReleased("OpaqueData:url");
    if (this._url != null && this._url !== "") {
      return this._url;
    } else if (this._b64 != null && this._b64 !== "") {
      this._url = `data:image/jpeg;base64,${this._b64}`;
      return this._url;
    } else {
      this._url = window.URL.createObjectURL((0, a.default)(this._blob, "this._blob"));
      return this._url;
    }
  }
  getBlob() {
    return this._blob;
  }
  getBase64() {
    return this._b64;
  }
  validate() {
    if (this._released === true) {
      return Promise.resolve(false);
    } else if (this._blob) {
      return (0, s.validateBlob)(this._blob);
    } else {
      return Promise.resolve(true);
    }
  }
  size() {
    this.throwIfReleased("OpaqueData:size");
    if (this._blob) {
      return this._blob.size;
    } else if (this._b64 != null) {
      return (0, i.sizeWhenB64Decoded)(this._b64);
    } else {
      __LOG__(4, undefined, new Error(), true)`OpaqueData:size returned 0`;
      SEND_LOGS("opaque-data-size-0");
      return 0;
    }
  }
  formData() {
    this.throwIfReleased("OpaqueData:formData");
    return this.forceToBlob();
  }
  type() {
    this.throwIfReleased("OpaqueData:type");
    if (this._mimetype != null && this._mimetype !== "") {
      return this._mimetype;
    } else {
      return "undefined";
    }
  }
  forceToBlob() {
    this.throwIfReleased("OpaqueData:forceToBlob");
    const e = this._blob;
    if (e) {
      return e;
    }
    const t = this._b64;
    if (t != null && t !== "") {
      this._b64 = undefined;
      this._url = undefined;
      const e = this._mimetype;
      return this._blob = new Blob([(0, i.decodeB64)(t)], e != null && e !== "" ? {
        type: e
      } : undefined);
    }
    throw (0, l.default)("OpaqueData:forceToBlob no b64 or blob");
  }
  _releaseImpl() {
    this._mimetype = undefined;
    if (this._blob) {
      this._blob = undefined;
      if (this._url != null && this._url !== "") {
        window.URL.revokeObjectURL(this._url);
        this._url = undefined;
      }
    } else {
      this._b64 = undefined;
      this._url = undefined;
    }
  }
  isBlobEqual(e) {
    if (e) {
      return this._blob === e._blob;
    } else {
      return !this._blob;
    }
  }
}
exports.default = d;
d.createFromBase64Jpeg = e => new Promise(t => {
  const n = new d();
  n._b64 = e;
  n._mimetype = "image/jpeg";
  return t(n);
});
d.createFromData = (e, t) => new Promise(n => {
  const r = new d();
  r._blob = e instanceof Blob && e.type === t ? e : new Blob([e], {
    type: t
  });
  r._mimetype = t;
  return n(r);
});