export function getUTCDate(e) {
  return new Date(e.getTime() + e.getTimezoneOffset() * 60000);
}
export function getParametersValue(e, t, n) {
  if (e instanceof Object == false) {
    return n;
  } else if (t in e) {
    return e[t];
  } else {
    return n;
  }
}
export function bufferToHexCodes(e, t = 0, n = e.byteLength - t, r = false) {
  let i = "";
  for (const a of new Uint8Array(e, t, n)) {
    const e = a.toString(16).toUpperCase();
    if (e.length === 1) {
      i += "0";
    }
    i += e;
    if (r) {
      i += " ";
    }
  }
  return i.trim();
}
export function checkBufferParams(e, t, n, r) {
  if (t instanceof ArrayBuffer == false) {
    e.error = "Wrong parameter: inputBuffer must be \"ArrayBuffer\"";
    return false;
  } else if (t.byteLength === 0) {
    e.error = "Wrong parameter: inputBuffer has zero length";
    return false;
  } else if (n < 0) {
    e.error = "Wrong parameter: inputOffset less than zero";
    return false;
  } else if (r < 0) {
    e.error = "Wrong parameter: inputLength less than zero";
    return false;
  } else {
    return !(t.byteLength - n - r < 0) || (e.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", false);
  }
}
export function utilFromBase(e, t) {
  let n = 0;
  if (e.length === 1) {
    return e[0];
  }
  for (let r = e.length - 1; r >= 0; r--) {
    n += e[e.length - 1 - r] * Math.pow(2, t * r);
  }
  return n;
}
export function utilToBase(e, t, n = -1) {
  const r = n;
  let i = e;
  let a = 0;
  let o = Math.pow(2, t);
  for (let n = 1; n < 8; n++) {
    if (e < o) {
      let e;
      if (r < 0) {
        e = new ArrayBuffer(n);
        a = n;
      } else {
        if (r < n) {
          return new ArrayBuffer(0);
        }
        e = new ArrayBuffer(r);
        a = r;
      }
      const o = new Uint8Array(e);
      for (let e = n - 1; e >= 0; e--) {
        const n = Math.pow(2, e * t);
        o[a - e - 1] = Math.floor(i / n);
        i -= o[a - e - 1] * n;
      }
      return e;
    }
    o *= Math.pow(2, t);
  }
  return new ArrayBuffer(0);
}
export function utilConcatBuf(...e) {
  let t = 0;
  let n = 0;
  for (const n of e) {
    t += n.byteLength;
  }
  const r = new ArrayBuffer(t);
  const i = new Uint8Array(r);
  for (const t of e) {
    i.set(new Uint8Array(t), n);
    n += t.byteLength;
  }
  return r;
}
export function utilConcatView(...e) {
  let t = 0;
  let n = 0;
  for (const n of e) {
    t += n.length;
  }
  const r = new ArrayBuffer(t);
  const i = new Uint8Array(r);
  for (const t of e) {
    i.set(t, n);
    n += t.length;
  }
  return i;
}
export function utilDecodeTC() {
  const e = new Uint8Array(this.valueHex);
  if (this.valueHex.byteLength >= 2) {
    const t = e[0] === 255 && e[1] & 128;
    const n = e[0] === 0 && (e[1] & 128) == 0;
    if (t || n) {
      this.warnings.push("Needlessly long format");
    }
  }
  const t = new ArrayBuffer(this.valueHex.byteLength);
  const n = new Uint8Array(t);
  for (let e = 0; e < this.valueHex.byteLength; e++) {
    n[e] = 0;
  }
  n[0] = e[0] & 128;
  const r = utilFromBase(n, 8);
  const i = new ArrayBuffer(this.valueHex.byteLength);
  const a = new Uint8Array(i);
  for (let t = 0; t < this.valueHex.byteLength; t++) {
    a[t] = e[t];
  }
  a[0] &= 127;
  return utilFromBase(a, 8) - r;
}
export function utilEncodeTC(e) {
  const t = e < 0 ? e * -1 : e;
  let n = 128;
  for (let r = 1; r < 8; r++) {
    if (t <= n) {
      if (e < 0) {
        const e = utilToBase(n - t, 8, r);
        new Uint8Array(e)[0] |= 128;
        return e;
      }
      let i = utilToBase(t, 8, r);
      let a = new Uint8Array(i);
      if (a[0] & 128) {
        const e = i.slice(0);
        const t = new Uint8Array(e);
        i = new ArrayBuffer(i.byteLength + 1);
        a = new Uint8Array(i);
        for (let n = 0; n < e.byteLength; n++) {
          a[n + 1] = t[n];
        }
        a[0] = 0;
      }
      return i;
    }
    n *= Math.pow(2, 8);
  }
  return new ArrayBuffer(0);
}
export function isEqualBuffer(e, t) {
  if (e.byteLength !== t.byteLength) {
    return false;
  }
  const n = new Uint8Array(e);
  const r = new Uint8Array(t);
  for (let e = 0; e < n.length; e++) {
    if (n[e] !== r[e]) {
      return false;
    }
  }
  return true;
}
export function padNumber(e, t) {
  const n = e.toString(10);
  if (t < n.length) {
    return "";
  }
  const r = t - n.length;
  const i = new Array(r);
  for (let e = 0; e < r; e++) {
    i[e] = "0";
  }
  return i.join("").concat(n);
}
const m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
export function toBase64(e, t = false, n = false, r = false) {
  let i = 0;
  let a = 0;
  let o = 0;
  let s = "";
  const u = t ? v : m;
  if (r) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
      if (e.charCodeAt(n) !== 0) {
        t = n;
        break;
      }
    }
    e = e.slice(t);
  }
  for (; i < e.length;) {
    const t = e.charCodeAt(i++);
    if (i >= e.length) {
      a = 1;
    }
    const r = e.charCodeAt(i++);
    if (i >= e.length) {
      o = 1;
    }
    const l = e.charCodeAt(i++);
    const c = t >> 2;
    const f = (t & 3) << 4 | r >> 4;
    let d = (r & 15) << 2 | l >> 6;
    let h = l & 63;
    if (a === 1) {
      d = h = 64;
    } else if (o === 1) {
      h = 64;
    }
    s += n ? d === 64 ? `${u.charAt(c)}${u.charAt(f)}` : h === 64 ? `${u.charAt(c)}${u.charAt(f)}${u.charAt(d)}` : `${u.charAt(c)}${u.charAt(f)}${u.charAt(d)}${u.charAt(h)}` : `${u.charAt(c)}${u.charAt(f)}${u.charAt(d)}${u.charAt(h)}`;
  }
  return s;
}
export function fromBase64(e, t = false, n = false) {
  const r = t ? v : m;
  function i(e) {
    for (let t = 0; t < 64; t++) {
      if (r.charAt(t) === e) {
        return t;
      }
    }
    return 64;
  }
  function a(e) {
    if (e === 64) {
      return 0;
    } else {
      return e;
    }
  }
  let o = 0;
  let s = "";
  for (; o < e.length;) {
    const t = i(e.charAt(o++));
    const n = o >= e.length ? 0 : i(e.charAt(o++));
    const r = o >= e.length ? 0 : i(e.charAt(o++));
    const u = o >= e.length ? 0 : i(e.charAt(o++));
    const l = a(t) << 2 | a(n) >> 4;
    const c = (a(n) & 15) << 4 | a(r) >> 2;
    const f = (a(r) & 3) << 6 | a(u);
    s += String.fromCharCode(l);
    if (r !== 64) {
      s += String.fromCharCode(c);
    }
    if (u !== 64) {
      s += String.fromCharCode(f);
    }
  }
  if (n) {
    let e = -1;
    for (let t = s.length - 1; t >= 0; t--) {
      if (s.charCodeAt(t) !== 0) {
        e = t;
        break;
      }
    }
    s = e !== -1 ? s.slice(0, e + 1) : "";
  }
  return s;
}
export function arrayBufferToString(e) {
  let t = "";
  const n = new Uint8Array(e);
  for (const e of n) {
    t += String.fromCharCode(e);
  }
  return t;
}
export function stringToArrayBuffer(e) {
  const t = e.length;
  const n = new ArrayBuffer(t);
  const r = new Uint8Array(n);
  for (let n = 0; n < t; n++) {
    r[n] = e.charCodeAt(n);
  }
  return n;
}
const _ = Math.log(2);
export function nearestPowerOf2(e) {
  const t = Math.log(e) / _;
  const n = Math.floor(t);
  const r = Math.round(t);
  if (n === r) {
    return n;
  } else {
    return r;
  }
}
export function clearProps(e, t) {
  for (const n of t) {
    delete e[n];
  }
}