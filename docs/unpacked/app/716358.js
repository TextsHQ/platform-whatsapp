var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BIG_ENDIAN_CONTENT = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  let n = e;
  const r = new Uint8Array(t);
  for (let e = t - 1; e >= 0; e--) {
    r[e] = n & 255;
    n >>>= 8;
  }
  return r;
};
exports.BROADCAST_JID = function (e) {
  return X(e);
};
exports.CALL_JID = function (e) {
  return X(e);
};
exports.CUSTOM_STRING = function (e) {
  return e;
};
exports.DEVICE_JID = function (e) {
  return X(e);
};
exports.DOMAIN_JID = Z;
exports.DROP_ATTR = undefined;
exports.GROUP_JID = function (e) {
  return X(e);
};
exports.HOSTED = exports.G_US = undefined;
exports.INT = function (e) {
  return e.toString();
};
exports.JID = X;
exports.LONG_INT = function (e) {
  return (0, l.longIntToDecimalString)(e);
};
exports.MAYBE_CUSTOM_STRING = function (e) {
  if (e == null) {
    return b;
  }
  return e;
};
exports.NEWSLETTER = undefined;
exports.NEWSLETTER_JID = function (e) {
  return X(e);
};
exports.PARTICIPANT_JID = function (e) {
  if (e.type === "status" || e.type === "group" || e.type === "broadcast") {
    return X(e.author);
  } else {
    return b;
  }
};
exports.STANZA_ID = function (e) {
  return e;
};
exports.S_WHATSAPP_NET = exports.STATUS_BROADCAST = undefined;
exports.TO_JID = function (e) {
  return X(Q(e));
};
exports.TO_WAP_JID = function (e) {
  if (e.jidType === "phoneDevice" || e.jidType === "msgrDevice" || e.jidType === "lidDevice") {
    return X(e.deviceJid);
  } else if (e.jidType === "phoneUser" || e.jidType === "msgrUser" || e.jidType === "lidUser") {
    return X(e.userJid);
  } else if (e.jidType === "group") {
    return X(e.groupJid);
  } else if (e.jidType === "status") {
    return X(e.statusJid);
  } else if (e.jidType === "call") {
    return X(e.callJid);
  } else if (e.jidType === "interopDevice") {
    return X(e.deviceJid);
  } else if (e.jidType === "interopUser") {
    return X(e.userJid);
  } else if (e.jidType === "newsletter") {
    return X(e.newsletterJid);
  } else if (e.jidType === "hosted") {
    return X(e.hostedDeviceJid);
  } else {
    e.jidType;
    return X(e.broadcastJid);
  }
};
exports.USER_JID = function (e) {
  return X(e);
};
exports.WapNode = undefined;
exports.decodeAsString = function (e) {
  if (e instanceof c.WapJid) {
    return e.toString();
  }
  return e;
};
exports.decodeStanza = function (e, t) {
  const n = new a.Binary(e);
  if (n.readUint8() & 2) {
    __LOG__(2)`Decoding compressed stanza`;
    return t(n.readByteArray()).then(e => $(new a.Binary(e)));
  }
  return Promise.resolve($(n));
};
exports.decodeStanzaDebug = function (e) {
  const t = new a.Binary(e);
  if (t.readUint8() & 2) {
    throw (0, o.default)("Cannot pass compressed stanza to decodeStanzaDebug");
  }
  return $(t);
};
exports.enableXMLFormat = function () {
  D = true;
};
exports.encodeStanza = function (e) {
  const t = e instanceof w ? e : G(e);
  const n = new a.Binary();
  U(t, n);
  const r = n.readByteArray();
  const i = new Uint8Array(1 + r.length);
  i[0] = 0;
  i.set(r, 1);
  return i;
};
exports.extractParticipantJid = function (e) {
  switch (e.type) {
    case "group":
    case "status":
    case "broadcast":
      return e.author;
    default:
      e.type;
      return null;
  }
};
exports.extractToJid = Q;
exports.generateId = function () {
  if (!M) {
    const e = new Uint16Array(2);
    self.crypto.getRandomValues(e);
    M = `${String(e[0])}.${String(e[1])}-`;
  }
  return `${M}${A++}`;
};
exports.makeStanza = G;
exports.makeWapNode = L;
exports.wap = undefined;
var i = r(require("./367420.js"));
var a = require("./904704.js");
var o = r(require("./415227.js"));
var s = require("./418987.js");
var l = require("./229079.js");
var u = require("./969726.js");
var c = require("./718682.js");
var d = r(require("./361592.js"));
var p = require("./747614.js");
const f = s.MSGR_USER_DOMAIN.replace("@", "");
const _ = s.WA_USER_DOMAIN.replace("@", "");
const g = s.LID_DOMAIN.replace("@", "");
const m = s.INTEROP_DOMAIN.replace("@", "");
const h = s.HOSTED_DOMAIN.replace("@", "");
const y = [236, 237, 238, 239];
const E = 248;
const S = 249;
const v = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", ".", "�", "�", "�", "�"];
const T = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let M = "";
let A = 1;
const b = {
  sentinel: "DROP_ATTR"
};
exports.DROP_ATTR = b;
const C = c.WapJid.create(null, "g.us");
exports.G_US = C;
const P = c.WapJid.create(null, s.WA_SERVER_JID_SUFFIX);
exports.S_WHATSAPP_NET = P;
const O = c.WapJid.create("status", "broadcast");
exports.STATUS_BROADCAST = O;
const I = c.WapJid.create(null, "newsletter");
exports.NEWSLETTER = I;
const R = c.WapJid.create(null, "hosted");
exports.HOSTED = R;
const N = {};
let D = false;
class w {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : N;
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    this.tag = e;
    this.attrs = t;
    this.content = n;
  }
  toString() {
    let e = "<" + this.tag;
    e += (0, p.attrsToString)(this.attrs);
    const t = this.content;
    if (Array.isArray(t)) {
      e += `>${t.map(String).join("")}</${this.tag}>`;
    } else {
      e += t ? `>${(0, p.uint8ArrayToDebugString)(t)}</${this.tag}>` : " />";
    }
    if (D) {
      e = (0, d.default)(e);
    }
    return e;
  }
}
function L(e, t, n) {
  let r = null;
  if (t && t.children != null) {
    throw (0, o.default)("Children should not be passed via props (see eslint check \"react/no-children-props\")");
  }
  if (Array.isArray(n)) {
    r = n.filter(Boolean);
  } else if (typeof n == "string") {
    r = a.Binary.build(n).readByteArray();
  } else if (n instanceof ArrayBuffer) {
    r = new Uint8Array(n);
  } else if (n instanceof Uint8Array) {
    r = n;
  } else {
    const e = [];
    for (let t = 2; t < arguments.length; t++) {
      const n = arguments[t];
      if (n) {
        e.push(n);
      }
    }
    r = e;
  }
  if (Array.isArray(r) && r.length === 0) {
    r = null;
  }
  const i = {};
  if (t) {
    const n = t;
    Object.keys(n).forEach(t => {
      if (["__self", "__source"].includes(t)) {
        return;
      }
      const r = n[t];
      if (r == null) {
        throw (0, o.default)(`Attr ${t} in <${e}> is null`);
      }
      if (r !== b) {
        i[t] = r;
      }
    });
  }
  return new w(e, i, r);
}
exports.WapNode = w;
const k = L;
function G(e) {
  let t = e.content;
  if (Array.isArray(t)) {
    t = t.map(G);
  } else if (typeof t == "string") {
    t = a.Binary.build(t).readByteArray();
  }
  return new w(e.tag, e.attrs || N, t);
}
function U(e, t) {
  if (e == null) {
    t.writeUint8(0);
  } else if (e instanceof w) {
    x(e, t);
  } else if (e instanceof c.WapJid) {
    !function (e, t) {
      const n = e.getInnerJid();
      if (n.type === c.WAP_JID_SUBTYPE.JID_U) {
        const {
          user: e,
          device: r,
          domainType: i
        } = n;
        t.writeUint8(247);
        t.writeUint8(i);
        t.writeUint8(r);
        U(e, t);
      } else if (n.type === c.WAP_JID_SUBTYPE.JID_FB) {
        const {
          user: e,
          device: r
        } = n;
        t.writeUint8(246);
        U(e, t);
        t.writeUint16(r);
        U(f, t);
      } else if (n.type === c.WAP_JID_SUBTYPE.JID_INTEROP) {
        const {
          user: e,
          device: r,
          integrator: i
        } = n;
        t.writeUint8(245);
        U(e, t);
        t.writeUint16(r);
        t.writeUint16(i);
      } else {
        const {
          user: e,
          server: r
        } = n;
        t.writeUint8(250);
        if (e != null) {
          U(e, t);
        } else {
          t.writeUint8(0);
        }
        U(r, t);
      }
    }(e, t);
  } else if (typeof e == "string") {
    Y(e, t);
  } else {
    if (!(e instanceof Uint8Array)) {
      throw (0, o.default)("Invalid payload type " + typeof e);
    }
    !function (e, t) {
      W(e.length, t);
      t.writeByteArray(e);
    }(e, t);
  }
}
function x(e, t) {
  if (e.tag === undefined) {
    t.writeUint8(E);
    return void t.writeUint8(0);
  }
  let n = 1;
  if (e.attrs) {
    n += Object.keys(e.attrs).length * 2;
  }
  if (e.content) {
    n++;
  }
  if (n < 256) {
    t.writeUint8(E);
    t.writeUint8(n);
  } else if (n < 65536) {
    t.writeUint8(S);
    t.writeUint16(n);
  }
  U(e.tag, t);
  if (e.attrs) {
    Object.keys(e.attrs).forEach(n => {
      Y(n, t);
      U(e.attrs[n], t);
    });
  }
  const r = e.content;
  if (Array.isArray(r)) {
    if (r.length < 256) {
      t.writeUint8(E);
      t.writeUint8(r.length);
    } else if (r.length < 65536) {
      t.writeUint8(S);
      t.writeUint16(r.length);
    }
    for (let e = 0; e < r.length; e++) {
      x(r[e], t);
    }
  } else if (r) {
    U(r, t);
  }
}
let B;
let F;
function j(e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    t.set(e[n], n);
  }
  return t;
}
function Y(e, t) {
  if (e === "") {
    t.writeUint8(252);
    return void t.writeUint8(0);
  }
  if (B == null) {
    B = j(u.SINGLE_BYTE_TOKEN);
  }
  const n = B.get(e);
  if (n != null) {
    return void t.writeUint8(n + 1);
  }
  if (F == null) {
    F = [];
    for (let e = 0; e < u.DICTIONARIES.length; ++e) {
      F.push(j(u.DICTIONARIES[e]));
    }
  }
  for (let n = 0; n < F.length; ++n) {
    const r = F[n].get(e);
    if (r != null) {
      t.writeUint8(y[n]);
      return void t.writeUint8(r);
    }
  }
  const r = (0, a.numUtf8Bytes)(e);
  if (r < 128) {
    if (!/[^0-9.-]+?/.exec(e)) {
      return void K(e, 255, t);
    }
    if (!/[^0-9A-F]+?/.exec(e)) {
      return void K(e, 251, t);
    }
  }
  W(r, t);
  t.writeString(e);
}
function K(e, t, n) {
  const r = e.length % 2 == 1;
  n.writeUint8(t);
  let i = Math.ceil(e.length / 2);
  if (r) {
    i |= 128;
  }
  n.writeUint8(i);
  let a = 0;
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    let s = null;
    if (i >= 48 && i <= 57) {
      s = i - 48;
    } else if (t === 255) {
      if (i === 45) {
        s = 10;
      } else if (i === 46) {
        s = 11;
      }
    } else if (t === 251 && i >= 65 && i <= 70) {
      s = i - 55;
    }
    if (s == null) {
      throw (0, o.default)(`Cannot nibble encode ${i}`);
    }
    if (r % 2 == 0) {
      a = s << 4;
      if (r === e.length - 1) {
        a |= 15;
        n.writeUint8(a);
      }
    } else {
      a |= s;
      n.writeUint8(a);
    }
  }
}
function W(e, t) {
  if (e < 256) {
    t.writeUint8(252);
    t.writeUint8(e);
  } else if (e < 1048576) {
    t.writeUint8(253);
    t.writeUint8(e >>> 16 & 255);
    t.writeUint8(e >>> 8 & 255);
    t.writeUint8(e & 255);
  } else {
    if (!(e < 4294967296)) {
      throw (0, o.default)(`Binary with length ${e} is too big for WAP protocol`);
    }
    t.writeUint8(254);
    t.writeUint32(e);
  }
}
function V(e, t) {
  const n = e.readUint8();
  if (n === 0) {
    return null;
  }
  if (n === E) {
    return H(e, e.readUint8());
  }
  if (n === S) {
    return H(e, e.readUint16());
  }
  if (n === 252) {
    const n = e.readUint8();
    return q(e, n, t);
  }
  if (n === 253) {
    const n = e.readUint8();
    const r = e.readUint8();
    const i = e.readUint8();
    return q(e, ((n & 15) << 16) + (r << 8) + i, t);
  }
  if (n === 254) {
    const n = e.readUint32();
    return q(e, n, t);
  }
  if (n === 250) {
    return function (e) {
      const t = function (e) {
        const t = V(e, true);
        if (t != null && typeof t != "string") {
          throw (0, o.default)("WAWap:decodeNullableString got invalid value, string expected");
        }
        return t;
      }(e);
      const n = z(e);
      return c.WapJid.create(t, n);
    }(e);
  }
  if (n === 246) {
    return function (e) {
      const t = z(e);
      const n = e.readUint16();
      z(e);
      return c.WapJid.createFbJid(t, n);
    }(e);
  }
  if (n === 245) {
    return function (e) {
      const t = z(e);
      const n = e.readUint16();
      const r = e.readUint16();
      z(e);
      return c.WapJid.createInteropJid(t, n, r);
    }(e);
  }
  if (n === 247) {
    return function (e) {
      let t = null;
      const n = e.readUint8();
      if (n === 0) {
        t = c.DomainType.WHATSAPP;
      } else if (n === 1) {
        t = c.DomainType.LID;
      } else {
        if ((n & 1) != 0 || (n & 128) == 0) {
          throw (0, o.default)(`decodeJidU - Invalid domain type encoding ${n}`);
        }
        t = c.DomainType.HOSTED;
      }
      const r = e.readUint8();
      const i = z(e);
      return c.WapJid.createJidU(i, t, r);
    }(e);
  }
  if (n === 255) {
    const t = e.readUint8();
    return J(e, v, t >>> 7, t & 127);
  }
  if (n === 251) {
    const t = e.readUint8();
    return J(e, T, t >>> 7, t & 127);
  }
  if (n <= 0 || n >= 240) {
    throw (0, o.default)("Unable to decode WAP buffer");
  }
  if (n >= 236 && n <= 239) {
    const t = n - 236;
    const r = u.DICTIONARIES[t];
    if (r === undefined) {
      throw (0, o.default)(`Missing WAP dictionary ${t}`);
    }
    const i = e.readUint8();
    const a = r[i];
    if (a === undefined) {
      throw (0, o.default)(`Invalid value index ${i} in dict ${t}`);
    }
    return a;
  }
  const r = u.SINGLE_BYTE_TOKEN[n - 1];
  if (r === undefined) {
    throw (0, o.default)(`Undefined token with index ${n}`);
  }
  return r;
}
function H(e, t) {
  const n = [];
  for (let r = 0; r < t; r++) {
    n.push($(e));
  }
  return n;
}
function $(e) {
  const t = e.readUint8();
  let n;
  let r;
  if (t === E) {
    n = e.readUint8();
  } else {
    if (t !== S) {
      throw (0, o.default)(`Failed to decode node since type byte ${String(t)} is invalid`);
    }
    n = e.readUint16();
  }
  let i = null;
  if (n === 0) {
    throw (0, o.default)("Failed to decode node, list cannot be empty");
  }
  const a = z(e);
  for (n -= 1; n > 1;) {
    if (!r) {
      r = {};
    }
    const t = z(e);
    const i = V(e, true);
    r[t] = i;
    n -= 2;
  }
  if (n === 1) {
    i = V(e, false);
    if (i instanceof c.WapJid) {
      i = String(i);
    }
  }
  return new w(a, r, i);
}
function z(e) {
  const t = V(e, true);
  if (typeof t != "string") {
    throw (0, o.default)("WAWap:decodeString got invalid value, string expected");
  }
  return t;
}
function q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if (n) {
    return e.readString(t);
  } else {
    return e.readByteArray(t);
  }
}
function J(e, t, n, r) {
  const i = new Array(r * 2 - n);
  for (let n = 0; n < i.length - 1; n += 2) {
    const r = e.readUint8();
    i[n] = t[r >>> 4];
    i[n + 1] = t[r & 15];
  }
  if (n) {
    const n = e.readUint8();
    i[i.length - 1] = t[n >>> 4];
  }
  return i.join("");
}
function Q(e) {
  switch (e.type) {
    case "group":
      return e.groupJid;
    case "status":
      return s.STATUS_JID;
    case "device":
      return e.deviceJid;
    case "newsletter":
      return e.newsletterJid;
    case "hosted":
      return e.hostedDeviceJid;
    default:
      e.type;
      return e.broadcastJid;
  }
}
function X(e) {
  const t = (0, s.validateDomainJid)(e);
  if (t != null) {
    return Z(t);
  }
  const n = e.split("@");
  let r = n[0];
  const i = n[1];
  let a = null;
  let l = null;
  if (!(i !== _ && i !== f && i !== m && i !== g && i !== h)) {
    if (r.indexOf(":") !== -1) {
      [r, a] = r.split(":");
      l = parseInt(a, 10);
    }
  }
  if (i === m) {
    const [e, t] = r.split("-");
    return c.WapJid.createInteropJid(t, l, parseInt(e, 10));
  }
  if (i === f) {
    return c.WapJid.createFbJid(r, l);
  }
  let u = null;
  if (i === g) {
    u = c.DomainType.LID;
  } else if (i === h) {
    if (l == null || l === 0) {
      throw (0, o.default)("Hosted device should have deviceId > 0");
    }
    u = c.DomainType.HOSTED;
  } else {
    u = c.DomainType.WHATSAPP;
  }
  if (l != null && l !== 0) {
    return c.WapJid.createJidU(r, u, l);
  } else {
    return c.WapJid.create(r, i);
  }
}
function Z(e) {
  if (e === "s.whatsapp.net") {
    return P;
  } else if (e === "g.us") {
    return C;
  } else if (e === "newsletter") {
    return I;
  } else {
    return (0, i.default)(e);
  }
}
exports.wap = k;