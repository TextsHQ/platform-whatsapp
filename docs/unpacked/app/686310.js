var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertAttr = function (e, t, n) {
  const r = f(e, t);
  if (!r.success) {
    return r;
  }
  if (r.value !== n) {
    return b(e, `to have "${t}"="${n}", but instead has "${r.value}"`);
  }
  return p;
};
exports.assertTag = function (e, t) {
  if (e.tag !== t) {
    return b(e, `to be <${t}>`);
  }
  return p;
};
exports.attrInt = m;
exports.attrIntRange = function (e, t, n, r) {
  const i = m(e, t);
  if (!i.success) {
    return i;
  }
  const a = i.value;
  if (n !== undefined && a < n) {
    return b(e, `to have "${t}"={at least ${n}} but has value ${a}`);
  }
  if (r !== undefined && a > r) {
    return b(e, `to have "${t}"={at most ${r}} but has value ${a}`);
  }
  return (0, u.makeResult)(a);
};
exports.attrStanzaId = function (e, t) {
  return _(e, t, c.toStanzaId, "stanzaID");
};
exports.attrString = f;
exports.attrStringEnum = function (e, t, n) {
  const r = f(e, t);
  if (!r.success) {
    return r;
  }
  const i = n[r.value];
  if (i != null) {
    return (0, u.makeResult)(i);
  }
  const a = Object.values(n).join("|");
  return b(e, `to have "${t}"={${a}}, but instead has "${r.value}"`);
};
exports.attrValidate = _;
exports.childWithTag = function (e, t, n) {
  const r = E(e, t, n);
  if (!r.success) {
    return r;
  }
  const i = r.value;
  if (i == null) {
    return b(e, `to have 1 child <${t}>, but found 0`);
  }
  return (0, u.makeResult)(i);
};
exports.contentBytes = A;
exports.contentBytesRange = function (e, t, n) {
  const r = A(e);
  if (!r.success) {
    return r;
  }
  const i = r.value.length;
  if (t !== undefined && i < t) {
    return b(e, `to have binary content at least ${t} bytes but has ${i} bytes`);
  }
  if (n !== undefined && i > n) {
    return b(e, `to have binary content at most ${n} bytes but has ${i} bytes`);
  }
  return (0, u.makeResult)(r.value);
};
exports.contentInt = function (e) {
  return g(e, P, "integer");
};
exports.contentLiteralBytes = function (e, t) {
  const n = A(e);
  if (!n.success) {
    return n;
  }
  if ((0, o.uint8ArraysEqual)(n.value, t)) {
    return (0, u.makeResult)(t);
  }
  return b(e, `to have content ":binary:${(0, i.encodeB64)(t)}", but instead has ":binary:${(0, i.encodeB64)(n.value)}"`);
};
exports.contentString = M;
exports.contentStringEnum = function (e, t) {
  const n = M(e);
  if (!n.success) {
    return n;
  }
  const r = t[n.value];
  if (r != null) {
    return (0, u.makeResult)(r);
  }
  const i = Object.values(t).join("|");
  return b(e, `to have content "${i}", but instead has "${n.value}"`);
};
exports.contentValidate = g;
exports.countChildrenWithTag = function (e, t, n, r, i) {
  const a = O(e, t, n, r);
  if (!a.success) {
    return a;
  }
  const o = a.value.length;
  for (let e = 0; e < o; e++) {
    const t = i(a.value[e]);
    if (!t.success) {
      return t;
    }
  }
  return (0, u.makeResult)(o);
};
exports.countHomogeneousChildrenWithTag = function (e, t, n) {
  const r = v(e, t, n);
  if (!r.success) {
    return r;
  }
  return (0, u.makeResult)(r.value.length);
};
exports.emptyObject = undefined;
exports.errorMessage = b;
exports.errorMixinDisjunction = function (e, t, n) {
  const r = t.map((e, t) => `${e}: ${n[t].error}`);
  return b(e, [`to match any of following mixins: ${t.join(", ")}, but all mixins failed.`, ...r].join(" "));
};
exports.flattenedChildWithTag = function (e, t) {
  const n = y(e, t);
  if (!n.success) {
    return n;
  }
  if (n.value == null) {
    return b(e, `to have 1 child <${t}>, but found 0`);
  }
  return (0, u.makeResult)(n.value);
};
exports.identity = function (e) {
  return e;
};
exports.literal = function (e, t, n, r) {
  const i = e(t, n);
  if (!i.success) {
    return i;
  }
  if (i.value === r) {
    return (0, u.makeResult)(r);
  }
  return b(t, `to have "${n}"={${r}}, but instead has "${i.value}"`);
};
exports.literalContent = function (e, t, n) {
  const r = e(t);
  if (!r.success) {
    return r;
  }
  if (r.value === n) {
    return (0, u.makeResult)(n);
  }
  return b(t, `to have content "${n}", but instead has "${r.value}"`);
};
exports.mapChildrenWithTag = S;
exports.mapHomogeneousChildrenWithTag = v;
exports.maybeChildren = h;
exports.optional = T;
exports.optionalChild = y;
exports.optionalChildWithTag = E;
exports.optionalLiteral = function (e, t, n, r) {
  if (r == null) {
    return p;
  }
  const i = T(e, t, n);
  if (!i.success) {
    return i;
  }
  if (i.value === r) {
    return (0, u.makeResult)(r);
  }
  if (i.value == null) {
    return p;
  }
  return b(t, `to have "${n}"={${r}}, but instead has "${i.value}"`);
};
exports.voidSuccess = undefined;
var i = require("./417405.js");
var a = require("./904704.js");
var o = require("./31549.js");
var s = require("./411846.js");
var l = r(require("./380815.js"));
var u = require("./135781.js");
var c = require("./757585.js");
var d = require("./718682.js");
const p = (0, u.makeResult)();
function f(e, t) {
  if (C(e, t)) {
    return function (e, t) {
      if (t instanceof d.WapJid) {
        return (0, u.makeResult)(t.toString());
      }
      if (typeof t == "string") {
        return (0, u.makeResult)(t);
      }
      return b(e, `decodeAsString: attribute is ${typeof t} not a string: ${String(t)}`);
    }(e, e.attrs[t]);
  } else {
    return b(e, `to have attribute "${t}"`);
  }
}
function _(e, t, n, r) {
  const i = f(e, t);
  if (!i.success) {
    return i;
  }
  const a = n(i.value);
  if (a != null) {
    return (0, u.makeResult)(a);
  } else {
    return b(e, `to have "${t}"={${r}}, but instead has "${i.value}"`);
  }
}
function g(e, t, n) {
  const r = M(e);
  if (!r.success) {
    return r;
  }
  const i = t(r.value);
  if (i != null) {
    return (0, u.makeResult)(i);
  } else {
    return b(e, `to have ${n} content, but instead has "${r.value}"`);
  }
}
function m(e, t) {
  return _(e, t, P, "integer");
}
function h(e) {
  const t = e.content;
  if (t instanceof Uint8Array) {
    return b(e, "to have children");
  } else {
    return (0, u.makeResult)(t);
  }
}
function y(e, t) {
  const n = h(e);
  if (!n.success) {
    return n;
  }
  const r = n.value;
  if (r == null) {
    return p;
  }
  let i = null;
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.tag === t) {
      if (i != null) {
        return b(e, `to have 1 child <${t}>, but found more than 1`);
      }
      i = a;
    }
  }
  return (0, u.makeResult)(i);
}
function E(e, t, n) {
  const r = y(e, t);
  if (r.success) {
    if (r.value == null) {
      return p;
    } else {
      return n(r.value);
    }
  } else {
    return r;
  }
}
function S(e, t, n, r, i) {
  const a = O(e, t, n, r);
  if (!a.success) {
    return a;
  }
  const o = [];
  for (let e = 0; e < a.value.length; e++) {
    const t = i(a.value[e]);
    if (!t.success) {
      return t;
    }
    o.push(t.value);
  }
  return (0, u.makeResult)(o);
}
function v(e, t, n) {
  const r = S(e, t, 0, 1 / 0, n);
  if (!r.success) {
    return r;
  }
  for (let t = 0; t < r.value.length; t++) {
    if (!(0, s.deepEqual)(r.value[0], r.value[t])) {
      return b(e, "to have homogeneous children, but found two children that are not equal");
    }
  }
  return r;
}
function T(e, t, n, r, i) {
  if (C(t, n)) {
    return e(t, n, r, i);
  } else {
    return p;
  }
}
function M(e) {
  const t = A(e);
  if (!t.success) {
    return t;
  }
  try {
    const e = new a.Binary(t.value);
    const n = e.readString(e.size());
    return (0, u.makeResult)(n);
  } catch (t) {
    return b(e, `to have string content, but run into decoding error: ${t.message}`);
  }
}
function A(e) {
  const {
    content: t
  } = e;
  if (t == null) {
    return b(e, "to have content");
  } else if (Array.isArray(t)) {
    return b(e, "to have content, but has children instead");
  } else {
    return (0, u.makeResult)(t);
  }
}
function b(e, t) {
  return (0, u.makeError)(`expected <${e.tag}>: ${t}`);
}
function C(e, t) {
  return (0, l.default)(e.attrs, t);
}
function P(e) {
  const t = parseInt(e, 10);
  if (Number.isNaN(t)) {
    return null;
  } else {
    return t;
  }
}
function O(e, t, n, r) {
  const i = h(e);
  if (!i.success) {
    return i;
  }
  const a = i.value;
  if (a == null) {
    if (n !== 0) {
      return b(e, `to have at least ${n} <${t}> children, but found 0`);
    } else {
      return (0, u.makeResult)([]);
    }
  }
  const o = [];
  for (let e = 0; e < a.length; e++) {
    const n = a[e];
    if (n.tag === t) {
      o.push(n);
    }
  }
  const s = o.length;
  if (s < n) {
    return b(e, `to have at least ${n} <${t}> children, but found ${s}`);
  } else if (s > r) {
    return b(e, `to have at most ${r} <${t}> children, but found ${s}`);
  } else {
    return (0, u.makeResult)(o);
  }
}
exports.voidSuccess = p;
exports.emptyObject = {};