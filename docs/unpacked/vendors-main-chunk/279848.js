var r = require("../vendor/667294.js");
function i(e, t) {
  return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
    e.__proto__ = t;
    return e;
  })(e, t);
}
var o = {
  error: null
};
var s = function (e) {
  function t() {
    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) {
      r[i] = arguments[i];
    }
    (t = e.call.apply(e, [this].concat(r)) || this).state = o;
    t.resetErrorBoundary = function () {
      for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) {
        r[i] = arguments[i];
      }
      if (!(t.props.onReset == null)) {
        (e = t.props).onReset.apply(e, r);
      }
      t.reset();
    };
    return t;
  }
  !function (e, t) {
    e.prototype = Object.create(t.prototype);
    e.prototype.constructor = e;
    i(e, t);
  }(t, e);
  t.getDerivedStateFromError = function (e) {
    return {
      error: e
    };
  };
  var n = t.prototype;
  n.reset = function () {
    this.setState(o);
  };
  n.componentDidCatch = function (e, t) {
    var n;
    var r;
    if (!((n = (r = this.props).onError) == null)) {
      n.call(r, e, t);
    }
  };
  n.componentDidUpdate = function (e, t) {
    var n;
    var r;
    var i = this.props.resetKeys;
    if (this.state.error !== null && t.error !== null && function (e, t) {
      if (e === undefined) {
        e = [];
      }
      if (t === undefined) {
        t = [];
      }
      return e.length !== t.length || e.some(function (e, n) {
        return !Object.is(e, t[n]);
      });
    }(e.resetKeys, i)) {
      if (!((n = (r = this.props).onResetKeysChange) == null)) {
        n.call(r, e.resetKeys, i);
      }
      this.reset();
    }
  };
  n.render = function () {
    var e = this.state.error;
    var t = this.props;
    var n = t.fallbackRender;
    var i = t.FallbackComponent;
    t = t.fallback;
    if (e !== null) {
      e = {
        error: e,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (r.isValidElement(t)) {
        return t;
      }
      if (typeof n == "function") {
        return n(e);
      }
      if (i) {
        return r.createElement(i, e);
      }
      throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  };
  return t;
}(r.Component);
module.exports = function ({
  children: e,
  onError: t
}) {
  return r.createElement(s, {
    fallback: r.createElement("div", {
      style: {
        border: "1px solid #f00",
        color: "#f00",
        padding: "8px"
      }
    }, "An error was thrown."),
    onError: t
  }, e);
};