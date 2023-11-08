Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;
exports.cleanHex = s;
exports.compareHex = function (e, t) {
  if (!e || !t) {
    return false;
  }
  const n = s(e);
  const r = s(t);
  if (n === r) {
    return true;
  }
  let i = 0;
  let a = 0;
  for (; i < e.length;) {
    if (n[i] !== r[a] || n[i] !== r[a + 1]) {
      return false;
    }
    i += 1;
    a += 2;
  }
  return true;
};
exports.isValidHex = function (e) {
  if (!e) {
    return false;
  }
  const t = s(e);
  if (t.length === 3) {
    return n.test(t);
  }
  if (t.length === 6) {
    return r.test(t);
  }
  return false;
};
const n = /^[0-9A-F]{3}$/i;
const r = /^[0-9A-F]{6}$/i;
class i {
  constructor(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    if (e < 0 || e > 255) {
      throw new RangeError(`red (${e} given) should be >= 0 and <= 255`);
    }
    if (t < 0 || t > 255) {
      throw new RangeError(`green (${t} given) should be >= 0 and <= 255`);
    }
    if (n < 0 || n > 255) {
      throw new RangeError(`blue (${n} given) should be >= 0 and <= 255`);
    }
    if (r < 0 || r > 1) {
      throw new RangeError(`alpha (${r} given) should be >= 0 and <= 1`);
    }
    this._red = e;
    this._green = t;
    this._blue = n;
    this._alpha = r;
  }
  static fromHex(e) {
    let t = e.trim().toLowerCase();
    if (t.length && t[0] === "#") {
      t = t.substr(1);
    }
    if (t.length !== 3 && t.length !== 6) {
      throw new RangeError(`hex ${e} does not have 3 or 6 digits`);
    }
    if (t.length === 3) {
      t = `${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`;
    }
    const n = parseInt(t.substr(0, 2), 16);
    const r = parseInt(t.substr(2, 2), 16);
    const a = parseInt(t.substr(4, 2), 16);
    if (isNaN(n) || isNaN(r) || isNaN(a)) {
      throw new RangeError(`hex ${e} is invalid`);
    }
    return new i(n, r, a, 1);
  }
  static _fromHsl(e, t, n) {
    let r;
    let o;
    let s;
    if (t === 0 || n === 0) {
      r = o = s = n;
    } else {
      const i = n < 0.5 ? n * (1 + t) : n + t - n * t;
      const l = n * 2 - i;
      r = a(l, i, e + 1 / 3);
      o = a(l, i, e);
      s = a(l, i, e - 1 / 3);
    }
    return new i(Math.round(r * 255), Math.round(o * 255), Math.round(s * 255));
  }
  toRgb() {
    return {
      red: this._red,
      green: this._green,
      blue: this._blue
    };
  }
  toRgba() {
    return {
      red: this._red,
      green: this._green,
      blue: this._blue,
      alpha: this._alpha
    };
  }
  toRgbString() {
    return `rgb(${this._red}, ${this._green}, ${this._blue})`;
  }
  toRgbaString() {
    return `rgba(${this._red}, ${this._green}, ${this._blue}, ${this._alpha})`;
  }
  toHex() {
    return `#${o(this._red.toString(16), 2)}${o(this._green.toString(16), 2)}${o(this._blue.toString(16), 2)}`.toUpperCase();
  }
  toHsl() {
    const e = this._red / 255;
    const t = this._green / 255;
    const n = this._blue / 255;
    const r = Math.max(e, t, n);
    const i = Math.min(e, t, n);
    let a = (r + i) / 2;
    let o = (r + i) / 2;
    const s = (r + i) / 2;
    if (r === i) {
      a = o = 0;
    } else {
      const l = r - i;
      o = s > 0.5 ? l / (2 - r - i) : l / (r + i);
      switch (r) {
        case e:
          a = (t - n) / l + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / l + 2;
          break;
        case n:
          a = (e - t) / l + 4;
      }
      a /= 6;
    }
    return {
      hue: a,
      saturation: o,
      lightness: s
    };
  }
  getBackgroundAndTintColors() {
    const {
      hue: e,
      saturation: t,
      lightness: n
    } = this.toHsl();
    let r;
    let a;
    if (n < 0.55 && t > 0.1) {
      let o = e;
      if (e > 0.08 && e < 0.22) {
        o = e < 0.22000000000000003 ? 0.08 : 0.22;
      }
      r = i._fromHsl(o, t < 0.01 ? 0 : Math.max(t, 0.75), Math.min(n, 0.25));
      a = new i(255, 255, 255, 1);
    } else {
      r = i._fromHsl(e, Math.min(t, 0.33), Math.max(n, 0.9));
      a = i._fromHsl(e, t === 0 ? 0 : 0.4, 0.2);
    }
    return {
      backgroundColor: r,
      tintColor: a
    };
  }
  withAlpha(e) {
    return new i(this._red, this._green, this._blue, e);
  }
  isLight() {
    return this._red * 0.299 + this._green * 0.587 + this._blue * 0.114 > 190;
  }
  isWhite() {
    const {
      lightness: e
    } = this.toHsl();
    return e >= 0.996;
  }
  equals(e) {
    return this._red === e._red && this._green === e._green && this._blue === e._blue && this._alpha === e._alpha;
  }
  clone() {
    return new i(this._red, this._green, this._blue, this._alpha);
  }
  toString() {
    return `(${this._red}, ${this._green}, ${this._blue}, ${this._alpha})`;
  }
  get red() {
    return this._red;
  }
  get green() {
    return this._green;
  }
  get blue() {
    return this._blue;
  }
  get alpha() {
    return this._alpha;
  }
}
function a(e, t, n) {
  let r = n;
  if (r < 0) {
    r += 1;
  }
  if (r > 1) {
    r -= 1;
  }
  if (r < 1 / 6) {
    return e + (t - e) * 6 * r;
  } else if (r < 0.5) {
    return t;
  } else if (r < 2 / 3) {
    return e + (t - e) * (2 / 3 - r) * 6;
  } else {
    return e;
  }
}
function o(e, t) {
  if (e.length >= t) {
    return e;
  } else {
    return "0".repeat(t - e.length) + e;
  }
}
function s(e) {
  let t = e.trim();
  if (t.substring(0, 1) === "#") {
    t = t.substring(1).toLowerCase();
  }
  return t;
}
exports.Color = i;
i.Black = new i(0, 0, 0);
i.White = new i(255, 255, 255);