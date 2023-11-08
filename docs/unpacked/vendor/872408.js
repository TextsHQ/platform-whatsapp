/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n = Symbol.for("react.element");
var r = Symbol.for("react.portal");
var i = Symbol.for("react.fragment");
var a = Symbol.for("react.strict_mode");
var o = Symbol.for("react.profiler");
var s = Symbol.for("react.provider");
var u = Symbol.for("react.context");
var l = Symbol.for("react.forward_ref");
var c = Symbol.for("react.suspense");
var f = Symbol.for("react.memo");
var d = Symbol.for("react.lazy");
var h = Symbol.iterator;
var p = {
  isMounted: function () {
    return false;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};
var m = Object.assign;
var v = {};
function g(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = v;
  this.updater = n || p;
}
function y() {}
function b(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = v;
  this.updater = n || p;
}
g.prototype.isReactComponent = {};
g.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) {
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  }
  this.updater.enqueueSetState(this, e, t, "setState");
};
g.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
y.prototype = g.prototype;
var w = b.prototype = new y();
w.constructor = b;
m(w, g.prototype);
w.isPureReactComponent = true;
var _ = Array.isArray;
var x = Object.prototype.hasOwnProperty;
var S = {
  current: null
};
var E = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function k(e, t, r) {
  var i;
  var a = {};
  var o = null;
  var s = null;
  if (t != null) {
    if (t.ref !== undefined) {
      s = t.ref;
    }
    if (t.key !== undefined) {
      o = "" + t.key;
    }
    for (i in t) {
      if (x.call(t, i) && !E.hasOwnProperty(i)) {
        a[i] = t[i];
      }
    }
  }
  var u = arguments.length - 2;
  if (u === 1) {
    a.children = r;
  } else if (u > 1) {
    for (var l = Array(u), c = 0; c < u; c++) {
      l[c] = arguments[c + 2];
    }
    a.children = l;
  }
  if (e && e.defaultProps) {
    for (i in u = e.defaultProps) {
      if (a[i] === undefined) {
        a[i] = u[i];
      }
    }
  }
  return {
    $$typeof: n,
    type: e,
    key: o,
    ref: s,
    props: a,
    _owner: S.current
  };
}
function O(e) {
  return typeof e == "object" && e !== null && e.$$typeof === n;
}
var N = /\/+/g;
function T(e, t) {
  if (typeof e == "object" && e !== null && e.key != null) {
    return function (e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function (e) {
        return t[e];
      });
    }("" + e.key);
  } else {
    return t.toString(36);
  }
}
function M(e, t, i, a, o) {
  var s = typeof e;
  if (!(s !== "undefined" && s !== "boolean")) {
    e = null;
  }
  var u = false;
  if (e === null) {
    u = true;
  } else {
    switch (s) {
      case "string":
      case "number":
        u = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case n:
          case r:
            u = true;
        }
    }
  }
  if (u) {
    o = o(u = e);
    e = a === "" ? "." + T(u, 0) : a;
    if (_(o)) {
      i = "";
      if (e != null) {
        i = e.replace(N, "$&/") + "/";
      }
      M(o, t, i, "", function (e) {
        return e;
      });
    } else if (o != null) {
      if (O(o)) {
        o = function (e, t) {
          return {
            $$typeof: n,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          };
        }(o, i + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(N, "$&/") + "/") + e);
      }
      t.push(o);
    }
    return 1;
  }
  u = 0;
  a = a === "" ? "." : a + ":";
  if (_(e)) {
    for (var l = 0; l < e.length; l++) {
      var c = a + T(s = e[l], l);
      u += M(s, t, i, c, o);
    }
  } else if (typeof (c = function (e) {
    if (e === null || typeof e != "object") {
      return null;
    } else if (typeof (e = h && e[h] || e["@@iterator"]) == "function") {
      return e;
    } else {
      return null;
    }
  }(e)) == "function") {
    e = c.call(e);
    l = 0;
    e = c.call(e);
    l = 0;
    for (; !(s = e.next()).done;) {
      u += M(s = s.value, t, i, c = a + T(s, l++), o);
    }
  } else if (s === "object") {
    t = String(e);
    throw Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  }
  return u;
}
function R(e, t, n) {
  if (e == null) {
    return e;
  }
  var r = [];
  var i = 0;
  M(e, r, "", "", function (e) {
    return t.call(n, e, i++);
  });
  return r;
}
function A(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()).then(function (t) {
      if (!(e._status !== 0 && e._status !== -1)) {
        e._status = 1;
        e._result = t;
      }
    }, function (t) {
      if (!(e._status !== 0 && e._status !== -1)) {
        e._status = 2;
        e._result = t;
      }
    });
    if (e._status === -1) {
      e._status = 0;
      e._result = t;
    }
  }
  if (e._status === 1) {
    return e._result.default;
  }
  throw e._result;
}
var P = {
  current: null
};
var C = {
  transition: null
};
var D = {
  ReactCurrentDispatcher: P,
  ReactCurrentBatchConfig: C,
  ReactCurrentOwner: S
};
exports.Children = {
  map: R,
  forEach: function (e, t, n) {
    R(e, function () {
      t.apply(this, arguments);
    }, n);
  },
  count: function (e) {
    var t = 0;
    R(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return R(e, function (e) {
      return e;
    }) || [];
  },
  only: function (e) {
    if (!O(e)) {
      throw Error("React.Children.only expected to receive a single React element child.");
    }
    return e;
  }
};
exports.Component = g;
exports.Fragment = i;
exports.Profiler = o;
exports.PureComponent = b;
exports.StrictMode = a;
exports.Suspense = c;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D;
exports.cloneElement = function (e, t, r) {
  if (e == null) {
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  }
  var i = m({}, e.props);
  var a = e.key;
  var o = e.ref;
  var s = e._owner;
  if (t != null) {
    if (t.ref !== undefined) {
      o = t.ref;
      s = S.current;
    }
    if (t.key !== undefined) {
      a = "" + t.key;
    }
    if (e.type && e.type.defaultProps) {
      var u = e.type.defaultProps;
    }
    for (l in t) {
      if (x.call(t, l) && !E.hasOwnProperty(l)) {
        i[l] = t[l] === undefined && u !== undefined ? u[l] : t[l];
      }
    }
  }
  var l = arguments.length - 2;
  if (l === 1) {
    i.children = r;
  } else if (l > 1) {
    u = Array(l);
    for (var c = 0; c < l; c++) {
      u[c] = arguments[c + 2];
    }
    i.children = u;
  }
  return {
    $$typeof: n,
    type: e.type,
    key: a,
    ref: o,
    props: i,
    _owner: s
  };
};
exports.createContext = function (e) {
  (e = {
    $$typeof: u,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }).Provider = {
    $$typeof: s,
    _context: e
  };
  return e.Consumer = e;
};
exports.createElement = k;
exports.createFactory = function (e) {
  var t = k.bind(null, e);
  t.type = e;
  return t;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (e) {
  return {
    $$typeof: l,
    render: e
  };
};
exports.isValidElement = O;
exports.lazy = function (e) {
  return {
    $$typeof: d,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: A
  };
};
exports.memo = function (e, t) {
  return {
    $$typeof: f,
    type: e,
    compare: t === undefined ? null : t
  };
};
exports.startTransition = function (e) {
  var t = C.transition;
  C.transition = {};
  try {
    e();
  } finally {
    C.transition = t;
  }
};
exports.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
exports.useCallback = function (e, t) {
  return P.current.useCallback(e, t);
};
exports.useContext = function (e) {
  return P.current.useContext(e);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (e) {
  return P.current.useDeferredValue(e);
};
exports.useEffect = function (e, t) {
  return P.current.useEffect(e, t);
};
exports.useId = function () {
  return P.current.useId();
};
exports.useImperativeHandle = function (e, t, n) {
  return P.current.useImperativeHandle(e, t, n);
};
exports.useInsertionEffect = function (e, t) {
  return P.current.useInsertionEffect(e, t);
};
exports.useLayoutEffect = function (e, t) {
  return P.current.useLayoutEffect(e, t);
};
exports.useMemo = function (e, t) {
  return P.current.useMemo(e, t);
};
exports.useReducer = function (e, t, n) {
  return P.current.useReducer(e, t, n);
};
exports.useRef = function (e) {
  return P.current.useRef(e);
};
exports.useState = function (e) {
  return P.current.useState(e);
};
exports.useSyncExternalStore = function (e, t, n) {
  return P.current.useSyncExternalStore(e, t, n);
};
exports.useTransition = function () {
  return P.current.useTransition();
};
exports.version = "18.2.0";