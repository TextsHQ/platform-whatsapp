Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HAS_OPTIONAL_CHILD = function (e, t) {
  if (t == null) {
    return null;
  }
  if (t) {
    return e();
  }
};
exports.HOMOGENEOUS_CHILD = function (e, t) {
  if (t) {
    for (let e = 1; e < t.length; e++) {
      if (!(0, r.deepEqual)(t[e], t[0])) {
        throw new Error("expected all homogeneous children to be equal, but they were not");
      }
    }
  }
  return i(e, t, 0, 1 / 0);
};
exports.HOMOGENEOUS_CHILD_COUNT = function (e, t) {
  return a(e, t, 0, 1 / 0);
};
exports.OPTIONAL_CHILD = function (e, t) {
  if (t == null) {
    return null;
  } else {
    return e(t);
  }
};
exports.REPEATED_CHILD = i;
exports.REPEATED_CHILD_COUNT = a;
var r = require("./411846.js");
function i(e, t, n, r) {
  if (t == null) {
    if (n > 0) {
      throw new Error(`expected at least ${n} children, but none provided`);
    }
    return [];
  }
  const i = t.length;
  if (i < n) {
    throw new Error(`expected at least ${n} children, but found ${i}`);
  }
  if (i > r) {
    throw new Error(`expected at most ${r} children, but found ${i}`);
  }
  return t.map(t => e(t));
}
function a(e, t, n, r) {
  if (t === 0) {
    if (n > 0) {
      throw new Error(`expected at least ${n} children, but none provided`);
    }
    return [];
  }
  if (t < n) {
    throw new Error(`expected at least ${n} children, but found ${t}`);
  }
  if (t > r) {
    throw new Error(`expected at most ${r} children, but found ${t}`);
  }
  const i = [];
  for (let n = 0; n < t; n++) {
    i.push(e());
  }
  return i;
}