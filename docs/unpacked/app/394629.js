var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeProtobuf = function (e, t) {
  const n = new a.Binary(t);
  const r = y(e, n, undefined, false);
  (0, d.checkRequirements)(e, r);
  return r;
};
exports.decodeProtobufWithUnknowns = function (e, t) {
  const n = new a.Binary(t);
  const r = y(e, n, undefined, true);
  (0, d.checkRequirements)(e, r);
  return r;
};
exports.getUnknownFields = function (e) {
  if ((0, o.default)(e, "$$unsafeUnknownFields")) {
    return e.$$unsafeUnknownFields;
  } else {
    return null;
  }
};
var i = r(require("../vendor/73982.js"));
var a = require("./904704.js");
var o = r(require("./380815.js"));
var s = require("./390934.js");
var l = require("./194612.js");
var u = require("./751206.js");
var c = require("./736566.js");
var d = require("./779385.js");
function p(e, t, n) {
  if (e !== (0, c.typeToEncType)(t)) {
    throw new Error(`FormatError: ${n} encoded with wire type ${e}`);
  }
}
function f(e, t, n) {
  switch (t) {
    case u.TYPES.INT32:
      return _(n, -2147483648, 2147483648, e, a.parseInt64OrThrow);
    case u.TYPES.INT64:
      return n.readVarInt(g);
    case u.TYPES.UINT32:
      return _(n, 0, 4294967296, e, a.parseUint64OrThrow);
    case u.TYPES.UINT64:
      return n.readVarInt(m);
    case u.TYPES.SINT32:
      {
        const t = _(n, 0, 4294967296, e, a.parseInt64OrThrow);
        if (t & 1) {
          return ~(t >>> 1);
        } else {
          return t >>> 1;
        }
      }
    case u.TYPES.SINT64:
      return n.readVarInt(h);
    case u.TYPES.BOOL:
      return !!_(n, 0, 2, e, a.parseUint64OrThrow);
    case u.TYPES.ENUM:
      return n.readVarInt(a.parseInt64OrThrow);
    case u.TYPES.FIXED64:
      return n.readLong(m, true);
    case u.TYPES.SFIXED64:
      return n.readLong(g, true);
    case u.TYPES.DOUBLE:
      return n.readFloat64(true);
    case u.TYPES.STRING:
      return n.readString(n.readVarInt(a.parseUint64OrThrow));
    case u.TYPES.BYTES:
      return n.readBuffer(n.readVarInt(a.parseUint64OrThrow));
    case u.TYPES.FIXED32:
      return n.readUint32(true);
    case u.TYPES.SFIXED32:
      return n.readInt32(true);
    case u.TYPES.FLOAT:
      return n.readFloat32(true);
  }
}
function _(e, t, n, r, i) {
  const a = e.readVarInt(i);
  if (a < t || a >= n) {
    throw new Error(`FormatError: ${r} encoded with out-of-range value ${a}`);
  }
  return a;
}
function g(e, t) {
  if ((0, a.longFitsInDouble)(true, e, t)) {
    return e * 4294967296 + E(t);
  }
  {
    const n = e < 0;
    let r;
    r = n ? t === 0 ? -e : ~e : e;
    const i = n ? -t : t;
    return (0, s.createHexLongFrom32Bits)(r, i, n);
  }
}
function m(e, t) {
  if ((0, a.longFitsInDouble)(false, e, t)) {
    return E(e) * 4294967296 + E(t);
  }
  return (0, s.createHexLongFrom32Bits)(e, t);
}
function h(e, t) {
  let n = e >>> 1;
  let r = e << 31 | t >>> 1;
  if (t & 1) {
    n = ~n;
    r = ~r;
  }
  return g(n, r);
}
function y(e, t, n, r) {
  var o;
  const {
    names: s,
    fields: c,
    types: d,
    meta: g,
    oneofToFields: m,
    fieldToOneof: h,
    reservedTags: E,
    reservedFields: S
  } = (0, l.compileSpec)(e);
  const {
    internalDefaults: v
  } = e;
  const T = n || (0, i.default)({}, v) || {};
  T.$$unknownFieldCount = (o = n == null ? undefined : n.$$unknownFieldCount) !== null && o !== undefined ? o : 0;
  for (let e = 0; e < s.length; e++) {
    if (d[e] & u.FLAGS.REPEATED) {
      T[s[e]] = [];
    }
  }
  let M = 0;
  const A = c.length > 0;
  let b = c[0];
  for (; t.size();) {
    const e = _(t, 0, 4294967296, "field and enc type", a.parseInt64OrThrow);
    const n = e & 7;
    const i = e >>> 3;
    if (A && i !== b) {
      const e = M;
      do {
        if (++M === c.length) {
          M = 0;
        }
        b = c[M];
      } while (i !== b && M !== e);
    }
    if (A && i === b) {
      const e = s[M];
      const o = d[M];
      p(n, o, e);
      const l = o & u.TYPE_MASK;
      const c = g[M];
      if (o & u.FLAGS.PACKED) {
        const n = t.readVarInt(a.parseUint64OrThrow);
        const r = t.readBinary(n);
        for (; r.size();) {
          var C;
          const t = f(e, l, r);
          if (l !== u.TYPES.ENUM || c[t] || ((C = c.cast) === null || C === undefined ? undefined : C.call(c, t)) !== undefined) {
            T[e].push(t);
          }
        }
      } else if (l === u.TYPES.MESSAGE) {
        const n = t.readVarInt(a.parseUint64OrThrow);
        const i = t.readBinary(n);
        if (o & u.FLAGS.REPEATED) {
          T[e].push(y(c, i, undefined, r));
        } else {
          const t = T[e];
          T[e] = y(c, i, t, r);
        }
      } else {
        var P;
        const n = f(e, l, t);
        if (l !== u.TYPES.ENUM || c[n] || ((P = c.cast) === null || P === undefined ? undefined : P.call(c, n)) !== undefined) {
          if (o & u.FLAGS.REPEATED) {
            T[e].push(n);
          } else {
            T[e] = n;
          }
        }
      }
      const _ = h[e];
      if (_ && T[e] !== undefined) {
        _.forEach(t => {
          m[t].filter(t => t !== e).forEach(e => {
            delete T[e];
          });
        });
      }
      if (E[i] || S[e]) {
        delete T[e];
      }
    } else {
      T.$$unknownFieldCount++;
      if (r) {
        let e;
        if (!T.$$unsafeUnknownFields) {
          T.$$unsafeUnknownFields = {};
        }
        switch (n) {
          case u.ENC.VARINT:
            e = t.readVarInt(a.parseInt64OrThrow);
            break;
          case u.ENC.BIT64:
            e = t.readBinary(8);
            break;
          case u.ENC.BINARY:
            e = t.readBinary(t.readVarInt(a.parseUint64OrThrow));
            break;
          case u.ENC.BIT32:
            e = t.readBinary(4);
        }
        T.$$unsafeUnknownFields[i] = e;
      } else if (n === u.ENC.VARINT) {
        t.readVarInt(a.parseInt64OrThrow);
      } else if (n === u.ENC.BIT64) {
        t.advance(8);
      } else if (n === u.ENC.BINARY) {
        t.advance(t.readVarInt(a.parseUint64OrThrow));
      } else if (n === u.ENC.BIT32) {
        t.advance(4);
      }
    }
  }
  return T;
}
function E(e) {
  if (e >= 0) {
    return e;
  } else {
    return 4294967296 + e;
  }
}