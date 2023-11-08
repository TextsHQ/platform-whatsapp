var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WamBuffer = undefined;
exports.canWriteEvent = function (e) {
  const t = d(e);
  for (let n = 0; n <= t; n += 3) {
    const t = e[n + 2];
    if (t != null) {
      if (e[n + 1] === o.TYPES.INT && isNaN(t)) {
        return false;
      }
    }
  }
  return true;
};
exports.canWriteGlobal = function (e) {
  if (typeof e == "number") {
    return !isNaN(e);
  }
  return true;
};
var i = require("./904704.js");
var a = r(require("./415227.js"));
var o = require("./3549.js");
function s(e, t, n, r) {
  if (r === 0) {
    c(e, t, n | 16);
  } else if (r === 1) {
    c(e, t, n | 32);
  } else if (r >= -128 && r < 128) {
    c(e, t, n | 48);
    e.writeInt8(r);
  } else if (r >= -32768 && r < 32768) {
    c(e, t, n | 64);
    e.writeInt16(r);
  } else if (r >= -2147483648 && r < 2147483648) {
    c(e, t, n | 80);
    e.writeInt32(r);
  } else {
    c(e, t, n | 96);
    e.writeInt64(r);
  }
}
function l(e, t, n, r) {
  c(e, t, n | 112);
  e.writeFloat64(r);
}
function u(e, t, n, r) {
  const a = (0, i.numUtf8Bytes)(r);
  if (a < 256) {
    c(e, t, n | 128);
    e.writeUint8(a);
  } else if (a < 65536) {
    c(e, t, n | 144);
    e.writeUint16(a);
  } else {
    c(e, t, n | 160);
    e.writeUint32(a);
  }
  e.writeString(r);
}
function c(e, t, n) {
  if (t < 256) {
    e.writeUint8(n);
    e.writeUint8(t);
  } else {
    e.writeUint8(n | 8);
    e.writeUint16(t);
  }
}
function d(e) {
  let t = -1;
  for (let n = 0; n < e.length; n += 3) {
    if (e[n + 2] != null) {
      t = n;
    }
  }
  return t;
}
exports.WamBuffer = class {
  constructor(e, t, n, r) {
    this._finalized = false;
    this._hasEvents = false;
    const a = new i.Binary(undefined, true);
    a.writeString("WAM");
    a.writeUint8(5);
    a.writeUint8(t);
    a.writeUint16(n);
    switch (e) {
      case "regular":
        a.writeUint8(0);
        break;
      default:
        a.writeUint8(2);
    }
    this._channel = e;
    this._buffer = a;
    this._sequenceNumber = n;
    this._streamId = t;
    r.forEach((e, t) => {
      this.writeGlobal(t, e);
    });
  }
  writeGlobal(e, t) {
    if (t != null) {
      if (typeof t == "string") {
        u(this._buffer, e, 0, t);
      } else if (typeof t == "number") {
        s(this._buffer, e, 0, t);
      } else {
        if (typeof t != "boolean") {
          throw (0, a.default)("Incorrect value type " + typeof t);
        }
        s(this._buffer, e, 0, t ? 1 : 0);
      }
    } else {
      c(this._buffer, e, 0);
    }
  }
  writeEvent(e, t, n, r) {
    const i = this._buffer;
    s(i, 47, 0, Math.floor(e / 1000));
    const a = d(n);
    s(i, t, a === -1 ? 5 : 1, r);
    for (let e = 0; e <= a; e += 3) {
      const t = n[e + 2];
      if (t != null) {
        const r = n[e];
        const c = n[e + 1];
        const d = e === a ? 6 : 2;
        if (c === o.TYPES.INT) {
          s(i, r, d, t);
        } else if (c === o.TYPES.BOOL) {
          s(i, r, d, t ? 1 : 0);
        } else if (c === o.TYPES.STRING) {
          u(i, r, d, t);
        } else {
          l(i, r, d, t);
        }
      }
    }
    this._hasEvents = true;
  }
  getKey() {
    return {
      streamId: this._streamId,
      sequenceNumber: this._sequenceNumber,
      channel: this._channel
    };
  }
  getSize() {
    return this._buffer.size();
  }
  peek() {
    return this._buffer.peek(e => e.readByteArray());
  }
  getBuffer__INTERNAL() {
    return this._buffer;
  }
  isFinalized() {
    return this._finalized;
  }
  finalize() {
    this._finalized = true;
  }
  hasEvents() {
    return this._hasEvents;
  }
};