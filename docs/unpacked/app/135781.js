var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncChain = function (e, t) {
  if (e.success) {
    return t(e.value);
  }
  return Promise.resolve(e);
};
exports.asyncMapError = c;
exports.asyncMapResult = l;
exports.catchError = function (e) {
  return function () {
    var t = (0, i.default)(function* (t) {
      yield c(t, e);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
};
exports.chain = function (e, t) {
  if (e.success) {
    return t(e.value);
  }
  return e;
};
exports.makeError = a;
exports.makeResult = o;
exports.mapAsyncResult = function () {
  return s.apply(this, arguments);
};
exports.mapError = function (e, t) {
  if (e.success) {
    return o(e.value);
  }
  return a(t(e.error), e.payload);
};
exports.mapResult = function (e, t) {
  if (!e.success) {
    return e;
  }
  return o(t(e.value));
};
exports.onResult = function (e) {
  return t => l(t, e);
};
var i = r(require("../vendor/311504.js"));
function a(e, t) {
  if (t != null) {
    return {
      success: false,
      error: e,
      payload: t
    };
  } else {
    return {
      success: false,
      error: e
    };
  }
}
function o(e) {
  return {
    success: true,
    value: e
  };
}
function s() {
  return (s = (0, i.default)(function* (e, t) {
    const n = yield e;
    if (n.success) {
      return o(t(n.value));
    } else {
      return n;
    }
  })).apply(this, arguments);
}
function l() {
  return u.apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e, t) {
    if (!e.success) {
      return e;
    }
    return o(yield t(e.value));
  })).apply(this, arguments);
}
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if (e.success) {
      return o(e.value);
    }
    return a(yield t(e.error), e.payload);
  })).apply(this, arguments);
}