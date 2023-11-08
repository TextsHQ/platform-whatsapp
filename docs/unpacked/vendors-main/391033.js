var n = function () {
  if (typeof Map != "undefined") {
    return Map;
  }
  function e(e, t) {
    var r = -1;
    e.some(function (e, n) {
      return e[0] === t && (r = n, true);
    });
    return r;
  }
  return function () {
    function t() {
      this.__entries__ = [];
    }
    Object.defineProperty(t.prototype, "size", {
      get: function () {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    t.prototype.get = function (t) {
      var r = e(this.__entries__, t);
      var n = this.__entries__[r];
      return n && n[1];
    };
    t.prototype.set = function (t, r) {
      var n = e(this.__entries__, t);
      if (~n) {
        this.__entries__[n][1] = r;
      } else {
        this.__entries__.push([t, r]);
      }
    };
    t.prototype.delete = function (t) {
      var r = this.__entries__;
      var n = e(r, t);
      if (~n) {
        r.splice(n, 1);
      }
    };
    t.prototype.has = function (t) {
      return !!~e(this.__entries__, t);
    };
    t.prototype.clear = function () {
      this.__entries__.splice(0);
    };
    t.prototype.forEach = function (e, t) {
      if (t === undefined) {
        t = null;
      }
      for (var r = 0, n = this.__entries__; r < n.length; r++) {
        var a = n[r];
        e.call(t, a[1], a[0]);
      }
    };
    return t;
  }();
}();
var a = typeof window != "undefined" && typeof document != "undefined" && window.document === document;
var o = require.g !== undefined && require.g.Math === Math ? require.g : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
var i = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(o) : function (e) {
  return setTimeout(function () {
    return e(Date.now());
  }, 1000 / 60);
};
var u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var c = typeof MutationObserver != "undefined";
var s = function () {
  function e() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = function (e, t) {
      var r = false;
      var n = false;
      var a = 0;
      function o() {
        if (r) {
          r = false;
          e();
        }
        if (n) {
          c();
        }
      }
      function u() {
        i(o);
      }
      function c() {
        var e = Date.now();
        if (r) {
          if (e - a < 2) {
            return;
          }
          n = true;
        } else {
          r = true;
          n = false;
          setTimeout(u, t);
        }
        a = e;
      }
      return c;
    }(this.refresh.bind(this), 20);
  }
  e.prototype.addObserver = function (e) {
    if (!~this.observers_.indexOf(e)) {
      this.observers_.push(e);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  e.prototype.removeObserver = function (e) {
    var t = this.observers_;
    var r = t.indexOf(e);
    if (~r) {
      t.splice(r, 1);
    }
    if (!t.length && this.connected_) {
      this.disconnect_();
    }
  };
  e.prototype.refresh = function () {
    if (this.updateObservers_()) {
      this.refresh();
    }
  };
  e.prototype.updateObservers_ = function () {
    var e = this.observers_.filter(function (e) {
      e.gatherActive();
      return e.hasActive();
    });
    e.forEach(function (e) {
      return e.broadcastActive();
    });
    return e.length > 0;
  };
  e.prototype.connect_ = function () {
    if (a && !this.connected_) {
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (c) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    }
  };
  e.prototype.disconnect_ = function () {
    if (a && this.connected_) {
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    }
  };
  e.prototype.onTransitionEnd_ = function (e) {
    var t = e.propertyName;
    var r = t === undefined ? "" : t;
    if (u.some(function (e) {
      return !!~r.indexOf(e);
    })) {
      this.refresh();
    }
  };
  e.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new e();
    }
    return this.instance_;
  };
  e.instance_ = null;
  return e;
}();
var l = function (e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var a = n[r];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return e;
};
var f = function (e) {
  return e && e.ownerDocument && e.ownerDocument.defaultView || o;
};
var d = m(0, 0, 0, 0);
function p(e) {
  return parseFloat(e) || 0;
}
function v(e) {
  for (var t = [], r = 1; r < arguments.length; r++) {
    t[r - 1] = arguments[r];
  }
  return t.reduce(function (t, r) {
    return t + p(e["border-" + r + "-width"]);
  }, 0);
}
function h(e) {
  var t = e.clientWidth;
  var r = e.clientHeight;
  if (!t && !r) {
    return d;
  }
  var n = f(e).getComputedStyle(e);
  var a = function (e) {
    for (var t = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
      var a = n[r];
      var o = e["padding-" + a];
      t[a] = p(o);
    }
    return t;
  }(n);
  var o = a.left + a.right;
  var i = a.top + a.bottom;
  var u = p(n.width);
  var c = p(n.height);
  if (n.boxSizing === "border-box") {
    if (Math.round(u + o) !== t) {
      u -= v(n, "left", "right") + o;
    }
    if (Math.round(c + i) !== r) {
      c -= v(n, "top", "bottom") + i;
    }
  }
  if (!function (e) {
    return e === f(e).document.documentElement;
  }(e)) {
    var s = Math.round(u + o) - t;
    var l = Math.round(c + i) - r;
    if (Math.abs(s) !== 1) {
      u -= s;
    }
    if (Math.abs(l) !== 1) {
      c -= l;
    }
  }
  return m(a.left, a.top, u, c);
}
var y = typeof SVGGraphicsElement != "undefined" ? function (e) {
  return e instanceof f(e).SVGGraphicsElement;
} : function (e) {
  return e instanceof f(e).SVGElement && typeof e.getBBox == "function";
};
function g(e) {
  if (a) {
    if (y(e)) {
      return function (e) {
        var t = e.getBBox();
        return m(0, 0, t.width, t.height);
      }(e);
    } else {
      return h(e);
    }
  } else {
    return d;
  }
}
function m(e, t, r, n) {
  return {
    x: e,
    y: t,
    width: r,
    height: n
  };
}
var _ = function () {
  function e(e) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = m(0, 0, 0, 0);
    this.target = e;
  }
  e.prototype.isActive = function () {
    var e = g(this.target);
    this.contentRect_ = e;
    return e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
  };
  e.prototype.broadcastRect = function () {
    var e = this.contentRect_;
    this.broadcastWidth = e.width;
    this.broadcastHeight = e.height;
    return e;
  };
  return e;
}();
var b = function (e, t) {
  var r;
  var n;
  var a;
  var o;
  var i;
  var u;
  var c;
  n = (r = t).x;
  a = r.y;
  o = r.width;
  i = r.height;
  u = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object;
  c = Object.create(u.prototype);
  l(c, {
    x: n,
    y: a,
    width: o,
    height: i,
    top: a,
    right: n + o,
    bottom: i + a,
    left: n
  });
  var s = c;
  l(this, {
    target: e,
    contentRect: s
  });
};
var w = function () {
  function e(e, t, r) {
    this.activeObservations_ = [];
    this.observations_ = new n();
    if (typeof e != "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = e;
    this.controller_ = t;
    this.callbackCtx_ = r;
  }
  e.prototype.observe = function (e) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element != "undefined" && Element instanceof Object) {
      if (!(e instanceof f(e).Element)) {
        throw new TypeError("parameter 1 is not of type \"Element\".");
      }
      var t = this.observations_;
      if (!t.has(e)) {
        t.set(e, new _(e));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      }
    }
  };
  e.prototype.unobserve = function (e) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element != "undefined" && Element instanceof Object) {
      if (!(e instanceof f(e).Element)) {
        throw new TypeError("parameter 1 is not of type \"Element\".");
      }
      var t = this.observations_;
      if (t.has(e)) {
        t.delete(e);
        if (!t.size) {
          this.controller_.removeObserver(this);
        }
      }
    }
  };
  e.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  e.prototype.gatherActive = function () {
    var e = this;
    this.clearActive();
    this.observations_.forEach(function (t) {
      if (t.isActive()) {
        e.activeObservations_.push(t);
      }
    });
  };
  e.prototype.broadcastActive = function () {
    if (this.hasActive()) {
      var e = this.callbackCtx_;
      var t = this.activeObservations_.map(function (e) {
        return new b(e.target, e.broadcastRect());
      });
      this.callback_.call(e, t, e);
      this.clearActive();
    }
  };
  e.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  e.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return e;
}();
var E = typeof WeakMap != "undefined" ? new WeakMap() : new n();
var D = function e(t) {
  if (!(this instanceof e)) {
    throw new TypeError("Cannot call a class as a function.");
  }
  if (!arguments.length) {
    throw new TypeError("1 argument required, but only 0 present.");
  }
  var r = s.getInstance();
  var n = new w(t, r, this);
  E.set(this, n);
};
["observe", "unobserve", "disconnect"].forEach(function (e) {
  D.prototype[e] = function () {
    var t;
    return (t = E.get(this))[e].apply(t, arguments);
  };
});
export default o.ResizeObserver !== undefined ? o.ResizeObserver : D;