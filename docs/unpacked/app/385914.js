Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeErrorInfo = function () {
  if (u !== undefined) {
    return `Last encoded value for ${u}`;
  } else {
    return "No information known";
  }
};
exports.encodeProtobuf = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new r.Binary();
  (0, l.checkValid)(e, t);
  g(n, t, e);
  u = undefined;
  return n;
};
var r = require("./904704.js");
var i = require("./390934.js");
var a = require("./194612.js");
var o = require("./751206.js");
var s = require("./736566.js");
var l = require("./779385.js");
let u;
function c(e, t) {
  e.writeVarInt(t);
}
function d(e, t) {
  if (typeof t == "number" && t < 4503599627370496 && t >= -4503599627370496) {
    e.writeVarInt(t >= 0 ? t * 2 : -t * 2 - 1);
  } else {
    const n = new r.Binary();
    let a;
    if (typeof t == "number") {
      a = t < 0;
      n.writeVarInt(a ? -t : t);
    } else {
      a = (0, i.hexLongIsNegative)(t);
      n.writeVarIntFromHexLong(a ? (0, i.negateHexLong)(t) : t);
    }
    const o = n.peek(() => n.readByteArray());
    const s = o.byteLength;
    if (a) {
      let e;
      let t = 0;
      do {
        e = o[t];
        o[t] = e & 128 | (e & 127) - 1 & 127;
        t++;
      } while (o[t - 1] === 255);
    }
    let l = a ? 1 : 0;
    for (let e = 0; e < s; e++) {
      const t = o[e];
      const n = t & 128 | (t & 63) << 1 | l;
      l = (t & 64) >> 6;
      o[e] = n;
    }
    if (l === 1) {
      o[s - 1] |= 128;
      n.writeInt8(1);
    }
    e.writeBinary(n);
  }
}
function p(e, t) {
  if (typeof t == "number") {
    e.writeVarInt(t);
  } else {
    e.writeVarIntFromHexLong(t);
  }
}
const f = [undefined, c, p, c, p, d, d, (e, t) => {
  e.writeVarInt(t ? 1 : 0);
}, c, (e, t) => {
  if (typeof t == "number") {
    e.writeUint64(t, true);
  } else {
    e.writeHexLong(t, true);
  }
}, (e, t) => {
  if (typeof t == "number") {
    e.writeInt64(t, true);
  } else {
    e.writeHexLong(t, true);
  }
}, (e, t) => {
  e.writeFloat64(t, true);
}, function (e, t) {
  e.writeVarInt((0, r.numUtf8Bytes)(t));
  e.writeString(t);
}, function (e, t) {
  e.writeVarInt(t.byteLength);
  e.writeBuffer(t);
}, function (e, t, n) {
  e.writeWithVarIntLength((e, t) => g(e, t, n), t);
}, (e, t) => {
  e.writeUint32(t, true);
}, (e, t) => {
  e.writeInt32(t, true);
}, (e, t) => {
  e.writeFloat32(t, true);
}];
const _ = f.map(e => {
  if (e != null) {
    return (e, n) => {
      e.writeWithVarIntLength(t, n);
    };
  }
  function t(t, n) {
    for (let r = 0; r < n.length; r++) {
      e(t, n[r]);
    }
  }
});
function g(e, t, n) {
  const {
    names: r,
    fields: i,
    types: l,
    meta: c
  } = (0, a.compileSpec)(n);
  const {
    internalDefaults: d
  } = n;
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    let p = t[a];
    if (p == null && d) {
      p = d[a];
    }
    if (p != null) {
      u = a;
      const t = i[n];
      const r = l[n];
      const d = r & o.TYPE_MASK;
      const g = c[n];
      const m = t * 8 | (0, s.typeToEncType)(r);
      if (r & o.FLAGS.PACKED) {
        if (p.length > 0) {
          e.writeVarInt(m);
          (0, _[d])(e, p, g);
        }
      } else if (r & o.FLAGS.REPEATED) {
        for (let t = 0; t < p.length; t++) {
          e.writeVarInt(m);
          (0, f[d])(e, p[t], g);
        }
      } else {
        e.writeVarInt(m);
        (0, f[d])(e, p, g);
      }
    }
  }
}