var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitialsAlphabets = undefined;
exports.getInitialsFromContact = function (e) {
  return I({
    shortName: e == null ? undefined : e.shortName,
    name: e == null ? undefined : e.name,
    pushname: e == null ? undefined : e.pushname
  });
};
exports.getInitialsFromNames = I;
exports.supportedAlphabetsMap = undefined;
var i = r(require("./932325.js"));
const a = require("../vendor/76672.js").Mirrored(["ARABIC", "LATIN", "HEBREW", "THAI", "GUJARATI", "DEVANAGARI", "CYRILLIC", "BENGALI", "HAN"]);
exports.InitialsAlphabets = a;
const o = new RegExp(/[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]/);
const s = new RegExp(/[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u0249\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/);
const l = new RegExp(/[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/);
const u = new RegExp(/[\u0E01-\u0E3A\u0E40-\u0E5B]/);
const c = new RegExp(/[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/);
const d = new RegExp(/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]/);
const p = new RegExp(/[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]/);
const f = new RegExp(/[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/);
const _ = new RegExp(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]/);
const g = new Map([[a.ARABIC, o], [a.LATIN, s], [a.HEBREW, l], [a.THAI, u], [a.GUJARATI, c], [a.DEVANAGARI, d], [a.CYRILLIC, p], [a.BENGALI, f], [a.HAN, _]]);
exports.supportedAlphabetsMap = g;
const m = new RegExp(/[\u093A\u093B\u093E-\u094C\u094E\u094F\u0955-\u0957\u0962\u0963]/);
const h = new RegExp(/[\u09BE-\u09CC\u09E2\u09E3]/);
const y = new RegExp(/[\u0ABE-\u0ACC\u0AE2\u0AE3]/);
const E = new RegExp(/[\u0E30-\u0E59]/);
const S = C([o, u, c, d, f]);
const v = C([d, f, c]);
const T = C(Array.from(g.values()));
function M(e) {
  return Array.from(g.keys()).find(t => {
    const n = g.get(t);
    if (n == null) {
      return undefined;
    } else {
      return n.test(e);
    }
  });
}
function A(e) {
  return _.test(e);
}
function b(e) {
  return T.test(e);
}
function C(e) {
  return new RegExp(e.map(e => e.source).join("|"));
}
function P(e) {
  let t = false;
  var n;
  if (e.firstName != null) {
    n = e.firstName;
    t = S.test(n);
  }
  let r = e.firstName != null && e.firstName !== "" && !A(e.firstName);
  const i = t !== true && e.lastName != null && e.lastName !== "";
  if (e.firstName != null && e.firstName !== "" && _.test(e.firstName) && !i) {
    r = true;
  }
  const a = e.lastName === "" && e.firstName === "";
  return {
    showFirstNameInitial: r,
    showLastNameInitial: i,
    showPushnameInitial: r !== true && i !== true && !a
  };
}
function O(e, t) {
  const n = e.charAt(0);
  if (v.test(e)) {
    return function (e) {
      const t = e.charAt(0);
      const n = e.charAt(1);
      let r = null;
      let i = null;
      if (d.test(t)) {
        r = d;
        i = m;
      } else if (f.test(t)) {
        r = f;
        i = h;
      } else if (c.test(t)) {
        r = c;
        i = y;
      }
      if (r != null && i != null) {
        if (n != null && r.test(t) && !i.test(t) && i.test(n)) {
          return t + n;
        } else if (r.test(t)) {
          return t;
        } else {
          return null;
        }
      }
    }(e);
  }
  if (n != null && u.test(n) && E.test(n)) {
    const t = e == null ? undefined : e.slice(1).trim();
    const n = t == null ? undefined : t.charAt(0);
    if (b(n) && !E.test(n)) {
      return n;
    } else {
      return null;
    }
  }
  if (A(e) && !t) {
    return e.slice(0, 2);
  } else if (b(n)) {
    return n;
  } else {
    return null;
  }
}
function I(e) {
  const t = function (e, t, n) {
    var r;
    const a = e == null ? undefined : e.trim();
    let o = null;
    o = a != null && t != null && (a == null ? undefined : a.length) > 0 ? t.trim().replace(a, "").trim() : t == null ? undefined : t.trim();
    const s = i.default.getLocale();
    return {
      firstName: a == null ? undefined : a.toLocaleUpperCase(s),
      lastName: (r = o) === null || r === undefined ? undefined : r.toLocaleUpperCase(s),
      pushname: n == null ? undefined : n.toLocaleUpperCase(s)
    };
  }(e.shortName, e.name, e.pushname);
  const n = P(t);
  let r = null;
  let a = null;
  const o = t.firstName;
  const s = n.showFirstNameInitial === true && n.showLastNameInitial === false;
  if (n.showFirstNameInitial === true && o != null) {
    r = O(o, s);
  }
  if (n.showLastNameInitial === true && t.lastName != null) {
    a = O(t.lastName, s);
  }
  if (n.showPushnameInitial === true && t.pushname != null) {
    r = O(t.pushname, true);
    a = null;
  }
  if (r != null && a != null && M(r) !== M(a)) {
    a = null;
  }
  return {
    firstInitial: r,
    secondInitial: a
  };
}