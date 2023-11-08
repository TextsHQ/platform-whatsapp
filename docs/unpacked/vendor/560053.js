/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function n(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; n > 0;) {
    var r = n - 1 >>> 1;
    var i = e[r];
    if (!(a(i, t) > 0)) {
      break e;
    }
    e[r] = t;
    e[n] = i;
    n = r;
  }
}
function r(e) {
  if (e.length === 0) {
    return null;
  } else {
    return e[0];
  }
}
function i(e) {
  if (e.length === 0) {
    return null;
  }
  var t = e[0];
  var n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
      var s = (r + 1) * 2 - 1;
      var u = e[s];
      var l = s + 1;
      var c = e[l];
      if (a(u, n) < 0) {
        if (l < i && a(c, u) < 0) {
          e[r] = c;
          e[l] = n;
          r = l;
        } else {
          e[r] = u;
          e[s] = n;
          r = s;
        }
      } else {
        if (!(l < i && a(c, n) < 0)) {
          break e;
        }
        e[r] = c;
        e[l] = n;
        r = l;
      }
    }
  }
  return t;
}
function a(e, t) {
  var n = e.sortIndex - t.sortIndex;
  if (n !== 0) {
    return n;
  } else {
    return e.id - t.id;
  }
}
if (typeof performance == "object" && typeof performance.now == "function") {
  var o = performance;
  exports.unstable_now = function () {
    return o.now();
  };
} else {
  var s = Date;
  var u = s.now();
  exports.unstable_now = function () {
    return s.now() - u;
  };
}
var l = [];
var c = [];
var f = 1;
var d = null;
var h = 3;
var p = false;
var m = false;
var v = false;
var g = typeof setTimeout == "function" ? setTimeout : null;
var y = typeof clearTimeout == "function" ? clearTimeout : null;
var b = typeof setImmediate != "undefined" ? setImmediate : null;
function w(e) {
  for (var t = r(c); t !== null;) {
    if (t.callback === null) {
      i(c);
    } else {
      if (!(t.startTime <= e)) {
        break;
      }
      i(c);
      t.sortIndex = t.expirationTime;
      n(l, t);
    }
    t = r(c);
  }
}
function _(e) {
  v = false;
  w(e);
  if (!m) {
    if (r(l) !== null) {
      m = true;
      C(x);
    } else {
      var t = r(c);
      if (t !== null) {
        D(_, t.startTime - e);
      }
    }
  }
}
function x(e, n) {
  m = false;
  if (v) {
    v = false;
    y(O);
    O = -1;
  }
  p = true;
  var a = h;
  try {
    w(n);
    d = r(l);
    for (; d !== null && (!(d.expirationTime > n) || e && !M());) {
      var o = d.callback;
      if (typeof o == "function") {
        d.callback = null;
        h = d.priorityLevel;
        var s = o(d.expirationTime <= n);
        n = exports.unstable_now();
        if (typeof s == "function") {
          d.callback = s;
        } else if (d === r(l)) {
          i(l);
        }
        w(n);
      } else {
        i(l);
      }
      d = r(l);
    }
    if (d !== null) {
      var u = true;
    } else {
      var f = r(c);
      if (f !== null) {
        D(_, f.startTime - n);
      }
      u = false;
    }
    return u;
  } finally {
    d = null;
    h = a;
    p = false;
  }
}
if (typeof navigator != "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
  navigator.scheduling.isInputPending.bind(navigator.scheduling);
}
var S;
var E = false;
var k = null;
var O = -1;
var N = 5;
var T = -1;
function M() {
  return !(exports.unstable_now() - T < N);
}
function R() {
  if (k !== null) {
    var e = exports.unstable_now();
    T = e;
    var n = true;
    try {
      n = k(true, e);
    } finally {
      if (n) {
        S();
      } else {
        E = false;
        k = null;
      }
    }
  } else {
    E = false;
  }
}
if (typeof b == "function") {
  S = function () {
    b(R);
  };
} else if (typeof MessageChannel != "undefined") {
  var A = new MessageChannel();
  var P = A.port2;
  A.port1.onmessage = R;
  S = function () {
    P.postMessage(null);
  };
} else {
  S = function () {
    g(R, 0);
  };
}
function C(e) {
  k = e;
  if (!E) {
    E = true;
    S();
  }
}
function D(e, n) {
  O = g(function () {
    e(exports.unstable_now());
  }, n);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (e) {
  e.callback = null;
};
exports.unstable_continueExecution = function () {
  if (!(m || p)) {
    m = true;
    C(x);
  }
};
exports.unstable_forceFrameRate = function (e) {
  if (e < 0 || e > 125) {
    console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
  } else {
    N = e > 0 ? Math.floor(1000 / e) : 5;
  }
};
exports.unstable_getCurrentPriorityLevel = function () {
  return h;
};
exports.unstable_getFirstCallbackNode = function () {
  return r(l);
};
exports.unstable_next = function (e) {
  switch (h) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = h;
  }
  var n = h;
  h = t;
  try {
    return e();
  } finally {
    h = n;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = function () {};
exports.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = h;
  h = e;
  try {
    return t();
  } finally {
    h = n;
  }
};
exports.unstable_scheduleCallback = function (e, i, a) {
  var o = exports.unstable_now();
  if (typeof a == "object" && a !== null) {
    a = typeof (a = a.delay) == "number" && a > 0 ? o + a : o;
  } else {
    a = o;
  }
  switch (e) {
    case 1:
      var s = -1;
      break;
    case 2:
      s = 250;
      break;
    case 5:
      s = 1073741823;
      break;
    case 4:
      s = 10000;
      break;
    default:
      s = 5000;
  }
  e = {
    id: f++,
    callback: i,
    priorityLevel: e,
    startTime: a,
    expirationTime: s = a + s,
    sortIndex: -1
  };
  if (a > o) {
    e.sortIndex = a;
    n(c, e);
    if (r(l) === null && e === r(c)) {
      if (v) {
        y(O);
        O = -1;
      } else {
        v = true;
      }
      D(_, a - o);
    }
  } else {
    e.sortIndex = s;
    n(l, e);
    if (!(m || p)) {
      m = true;
      C(x);
    }
  }
  return e;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function (e) {
  var t = h;
  return function () {
    var n = h;
    h = t;
    try {
      return e.apply(this, arguments);
    } finally {
      h = n;
    }
  };
};