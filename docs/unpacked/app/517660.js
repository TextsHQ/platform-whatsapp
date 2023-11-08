var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WA_BIZ_NAME = exports.Field = undefined;
exports.clean = function (e) {
  if (!e) {
    return;
  }
  return e.replace(/^_\$!<([^>]*)>!\$_$/, "$1").replace(/\\,/, ",").replace(/\\;/, ";").replace(/\\\\/, "\\");
};
exports.parseMultiVcard = function (e) {
  const t = e.match(/BEGIN:VCARD([\s\S]*?)END:VCARD/g);
  if (t) {
    return t.map(e => E(e)).filter(Boolean);
  } else {
    return [];
  }
};
exports.parseVcard = E;
exports.vcardGetDate = function (e) {
  let t = e;
  (0, i.default)([/-([^-]*)-([^-]*)-([^-]*)/, /([^-]*)-([^-]*)-([^-]*)/], n => {
    const r = e.match(n);
    if (r) {
      const e = !r[1].length || r[1] === "1604";
      const n = e ? "0000" : r[1];
      t = (0, d.default)(`${n}-${r[2]}-${r[3]}`).format("l");
      if (e) {
        t = t.replace(/[.,-\/\s]*0000[.,-\/\s]*/, "");
      }
      return false;
    }
  });
  return t;
};
exports.vcardGetNameFromParsed = function (e) {
  let t = null;
  const {
    FN: n,
    NICKNAME: r,
    TEL: i
  } = e;
  if (n == null ? undefined : n[0]) {
    t = n[0].value;
  } else if (r == null ? undefined : r[0]) {
    t = r[0].value;
  } else if (i == null ? undefined : i[0]) {
    var a;
    const e = i[0];
    const n = (a = e.properties.waid) === null || a === undefined ? undefined : a[0];
    t = n ? (0, c.widToFormattedUser)(n) : e.value;
  }
  return t;
};
exports.vcardIsBiz = function (e) {
  return (e.SERVICE || []).some(e => e.type.toLowerCase() === p && e.value);
};
exports.vcardThumbnail = function (e) {
  if (!e) {
    return;
  }
  const {
    PHOTO: t
  } = e;
  if ((t == null ? undefined : t[0]) && l.default.isData(t[0].value)) {
    return t[0].value;
  }
};
exports.vcardWids = function (e) {
  let t = [];
  if (e == null ? undefined : e.TEL) {
    e.TEL.forEach(e => {
      var n;
      var r;
      var i;
      if (((n = (r = e.properties) === null || r === undefined || (i = r.waid) === null || i === undefined ? undefined : i.length) !== null && n !== undefined ? n : 0) > 0) {
        t = t.concat(e.properties.waid.map(e => (0, u.createUserWid)(e)));
      }
    });
  } else {
    const n = ((e == null ? undefined : e.SERVICE) || []).find(e => e.type.toLowerCase() === "wa-lid");
    if (n == null ? undefined : n.value) {
      t = t.concat((0, u.createUserWid)(n.value, "lid"));
    }
  }
  return t;
};
var i = r(require("../vendor/784486.js"));
var a = r(require("../vendor/189734.js"));
var o = r(require("../vendor/402525.js"));
var s = require("./724976.js");
var l = r(require("./79291.js"));
var u = require("./669050.js");
var c = require("./931019.js");
var d = r(require("../vendor/730381.js"));
const p = "wa-biz-name";
exports.WA_BIZ_NAME = p;
const f = /X-([^;:]+)(?:;[^:]+)*:(.+)/;
const _ = {
  "X-ABLabel": [/X-ABLabel(?:;([^:]+))*:(.+)/, 1],
  ADR: [/ADR(?:;([^:]+))*:;;(.*);(.*);(.*);(.*);(.*)/, 5],
  "X-ABADR": [/X-ABADR(?:;([^:]+))*:(.*)/, 1],
  URL: [/URL(?:;([^:]+))*:(.*)/, 1],
  EMAIL: [/EMAIL(?:;([^:]+))*:(.+)/, 1],
  TEL: [/TEL(?:;([^:]+))*:(.+)/, 1]
};
const g = {
  N: [/N(?:;([^:]+))*:([^;]*);([^;]*);([^;]*);([^;]*);(.*)/, 5],
  FN: [/FN(?:;([^:]+))*:(.*)/, 1],
  NICKNAME: [/NICKNAME(?:;([^:]+))*:(.*)/, 1],
  "X-PHONETIC-FIRST-NAME": [/X-PHONETIC-FIRST-NAME(?:;([^:]+))*:(.*)/, 1],
  "X-PHONETIC-LAST-NAME": [/X-PHONETIC-LAST-NAME(?:;([^:]+))*:(.*)/, 1],
  ORG: [/ORG(?:;([^:]+))*:([^;]*)(?:;(.*))*/, 2],
  TITLE: [/TITLE(?:;([^:]+))*:(.*)/, 1],
  TEL: [/TEL(?:;([^:]+))*:(.*)/, 1],
  PHOTO: [/PHOTO(?:;([^:]+))*:(.*)/, 1],
  BDAY: [/BDAY(?:;([^:]+))*:(.*)/, 1],
  URL: [/URL(?:;([^:]+))*:(.+)/, 1],
  EMAIL: [/EMAIL(?:;([^:]+))*:(.+)/, 1]
};
class m {
  constructor(e, t, n, r) {
    this.type = e;
    this.index = t;
    this.properties = n || {};
    this.value = r;
  }
}
function h(e, t, n) {
  if (!e[t]) {
    e[t] = [];
  }
  e[t].push(n);
}
function y(e) {
  const t = {};
  if (e) {
    e.split(";").forEach(e => {
      const n = e.split(/=/);
      if (n.length === 1) {
        const e = n[0];
        h(t, e.toLowerCase(), true);
      } else if (n.length === 2) {
        const [e, r] = n;
        h(t, e.toLowerCase(), r.toLowerCase());
      }
    });
    return t;
  } else {
    return t;
  }
}
function E(e) {
  const t = e.replace(/\r?\n|\r/g, "\n").replace(/\n^[ \t]/gm, "").split("\n").filter(e => e.trim().length !== 0);
  const n = {};
  const r = {};
  if (t.length < 3) {
    return;
  }
  const i = t[0].trim().toUpperCase();
  const l = t[1].trim().toUpperCase();
  const u = t[t.length - 1].trim().toUpperCase();
  const c = l === "VERSION:2.1" || l === "VERSION:3.0" || l === "VERSION:4.0";
  if (i !== "BEGIN:VCARD" || !c || u !== "END:VCARD") {
    __LOG__(4, undefined, new Error(), true)`vcard:parse failed because the vCard is not formatted as expected:
Header as expected? ${String(i === "BEGIN:VCARD")}
Version as expected? ${String(c)}
Footer as expected? ${String(u === "END:VCARD")}
Lines: ${t.length}`;
    return void SEND_LOGS("vcard-fault");
  }
  for (let e = 2; e < t.length - 1; e++) {
    var d;
    const i = t[e];
    const a = i.match(/item(\d+)\.(.*)/);
    const o = a ? a[2] : i;
    const l = (d = o.match(/([^:;]*)[:;].*/)) === null || d === undefined ? undefined : d[1];
    if (l == null) {
      continue;
    }
    const u = a ? _ : g;
    let c;
    let p;
    let E = l;
    let S = l;
    if (u[E]) {
      const [e, t] = u[E];
      const n = o.match(e);
      if (n) {
        c = y(n[1]);
        p = t === 1 ? p = n[2] : n.slice(2, 2 + t);
      }
    } else {
      const e = o.match(f);
      if (e) {
        S = "SERVICE";
        E = e[1];
        p = e[2];
        c = {};
      }
    }
    if ((Array.isArray(p) ? p : [p]).some(e => e && (0, s.isString)(e) && e.trim())) {
      if (a) {
        const t = a[1];
        if (r[t]) {
          r[t].fields.push(new m(E, null, c, p));
        } else {
          r[t] = {
            type: E,
            index: e,
            key: S,
            properties: c,
            value: p,
            fields: []
          };
        }
      } else {
        h(n, S, new m(E, e, c, p));
      }
    }
  }
  Object.keys(r).forEach(e => {
    const {
      key: t,
      index: i,
      type: a,
      value: o,
      properties: s,
      fields: l
    } = r[e];
    l.forEach(e => {
      s[e.type] = e.value;
    });
    h(n, t, new m(a, i, s, o));
  });
  return function (e) {
    const t = {};
    (0, o.default)(e, (e, n) => {
      t[n] = (0, a.default)(e, e => e.index);
    });
    return t;
  }(n);
}
exports.Field = m;