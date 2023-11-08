var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterIterator = function* (e, t) {
  let n = 0;
  for (const r of e) {
    if (t(r, n)) {
      yield r;
    }
    n++;
  }
};
exports.first = function (e) {
  for (const t of e) {
    return t;
  }
  return;
};
exports.iteratorFromArray = function* (e) {
  for (const t of e) {
    yield t;
  }
};
exports.mapIterator = function* (e, t) {
  let n = 0;
  for (const r of e) {
    yield t(r, n);
    n++;
  }
};
exports.rangeIterator = function* (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (n === 0) {
    throw (0, i.default)("Step can't be zero.");
  }
  if (n > 0) {
    if (e > t) {
      return;
    }
    for (let r = e; r < t; r += n) {
      yield r;
    }
  } else {
    if (e < t) {
      return;
    }
    for (let r = e; r > t; r += n) {
      yield r;
    }
  }
};
exports.takeIterator = function* (e, t) {
  if (t < 0) {
    throw (0, i.default)("Count must be a positive integer");
  }
  let n = 0;
  for (const r of e) {
    if (n >= t) {
      return;
    }
    yield r;
    n++;
  }
};
var i = r(require("./415227.js"));