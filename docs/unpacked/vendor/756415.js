function r() {
  return (r = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  }).apply(this, arguments);
}
function i(e, t) {
  if (e == null) {
    return {};
  }
  var n;
  var r;
  var i = {};
  var a = Object.keys(e);
  for (r = 0; r < a.length; r++) {
    n = a[r];
    if (!(t.indexOf(n) >= 0)) {
      i[n] = e[n];
    }
  }
  return i;
}
function a(e, t) {
  return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
    e.__proto__ = t;
    return e;
  })(e, t);
}
function o(e, t) {
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  a(e, t);
}
function s(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
import * as u from "./667294.js";
import * as l from "./973935.js";
export const config = {
  disabled: false
};
const f = u.createContext(null);
var d = function (e) {
  return e.scrollTop;
};
var h = "unmounted";
var p = "exited";
var m = "entering";
var v = "entered";
var g = "exiting";
var y = function (e) {
  function t(t, n) {
    var r;
    r = e.call(this, t, n) || this;
    var i;
    var a = n && !n.isMounting ? t.enter : t.appear;
    r.appearStatus = null;
    if (t.in) {
      if (a) {
        i = p;
        r.appearStatus = m;
      } else {
        i = v;
      }
    } else {
      i = t.unmountOnExit || t.mountOnEnter ? h : p;
    }
    r.state = {
      status: i
    };
    r.nextCallback = null;
    return r;
  }
  o(t, e);
  t.getDerivedStateFromProps = function (e, t) {
    if (e.in && t.status === h) {
      return {
        status: p
      };
    } else {
      return null;
    }
  };
  var n = t.prototype;
  n.componentDidMount = function () {
    this.updateStatus(true, this.appearStatus);
  };
  n.componentDidUpdate = function (e) {
    var t = null;
    if (e !== this.props) {
      var n = this.state.status;
      if (this.props.in) {
        if (n !== m && n !== v) {
          t = m;
        }
      } else if (!(n !== m && n !== v)) {
        t = g;
      }
    }
    this.updateStatus(false, t);
  };
  n.componentWillUnmount = function () {
    this.cancelNextCallback();
  };
  n.getTimeouts = function () {
    var e;
    var t;
    var n;
    var r = this.props.timeout;
    e = t = n = r;
    if (r != null && typeof r != "number") {
      e = r.exit;
      t = r.enter;
      n = r.appear !== undefined ? r.appear : t;
    }
    return {
      exit: e,
      enter: t,
      appear: n
    };
  };
  n.updateStatus = function (e, t) {
    if (e === undefined) {
      e = false;
    }
    if (t !== null) {
      this.cancelNextCallback();
      if (t === m) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var n = this.props.nodeRef ? this.props.nodeRef.current : l.findDOMNode(this);
          if (n) {
            d(n);
          }
        }
        this.performEnter(e);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === p) {
      this.setState({
        status: h
      });
    }
  };
  n.performEnter = function (e) {
    var t = this;
    var n = this.props.enter;
    var r = this.context ? this.context.isMounting : e;
    var i = this.props.nodeRef ? [r] : [l.findDOMNode(this), r];
    var a = i[0];
    var o = i[1];
    var s = this.getTimeouts();
    var u = r ? s.appear : s.enter;
    if (!e && !n || config.disabled) {
      this.safeSetState({
        status: v
      }, function () {
        t.props.onEntered(a);
      });
    } else {
      this.props.onEnter(a, o);
      this.safeSetState({
        status: m
      }, function () {
        t.props.onEntering(a, o);
        t.onTransitionEnd(u, function () {
          t.safeSetState({
            status: v
          }, function () {
            t.props.onEntered(a, o);
          });
        });
      });
    }
  };
  n.performExit = function () {
    var e = this;
    var t = this.props.exit;
    var n = this.getTimeouts();
    var r = this.props.nodeRef ? undefined : l.findDOMNode(this);
    if (t && !config.disabled) {
      this.props.onExit(r);
      this.safeSetState({
        status: g
      }, function () {
        e.props.onExiting(r);
        e.onTransitionEnd(n.exit, function () {
          e.safeSetState({
            status: p
          }, function () {
            e.props.onExited(r);
          });
        });
      });
    } else {
      this.safeSetState({
        status: p
      }, function () {
        e.props.onExited(r);
      });
    }
  };
  n.cancelNextCallback = function () {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  n.safeSetState = function (e, t) {
    t = this.setNextCallback(t);
    this.setState(e, t);
  };
  n.setNextCallback = function (e) {
    var t = this;
    var n = true;
    this.nextCallback = function (r) {
      if (n) {
        n = false;
        t.nextCallback = null;
        e(r);
      }
    };
    this.nextCallback.cancel = function () {
      n = false;
    };
    return this.nextCallback;
  };
  n.onTransitionEnd = function (e, t) {
    this.setNextCallback(t);
    var n = this.props.nodeRef ? this.props.nodeRef.current : l.findDOMNode(this);
    var r = e == null && !this.props.addEndListener;
    if (n && !r) {
      if (this.props.addEndListener) {
        var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback];
        var a = i[0];
        var o = i[1];
        this.props.addEndListener(a, o);
      }
      if (e != null) {
        setTimeout(this.nextCallback, e);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };
  n.render = function () {
    var e = this.state.status;
    if (e === h) {
      return null;
    }
    var t = this.props;
    var n = t.children;
    t.in;
    t.mountOnEnter;
    t.unmountOnExit;
    t.appear;
    t.enter;
    t.exit;
    t.timeout;
    t.addEndListener;
    t.onEnter;
    t.onEntering;
    t.onEntered;
    t.onExit;
    t.onExiting;
    t.onExited;
    t.nodeRef;
    var r = i(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return u.createElement(f.Provider, {
      value: null
    }, typeof n == "function" ? n(e, r) : u.cloneElement(u.Children.only(n), r));
  };
  return t;
}(u.Component);
function b() {}
y.contextType = f;
y.propTypes = {};
y.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: b,
  onEntering: b,
  onEntered: b,
  onExit: b,
  onExiting: b,
  onExited: b
};
y.UNMOUNTED = h;
y.EXITED = p;
y.ENTERING = m;
y.ENTERED = v;
y.EXITING = g;
export const Transition = y;
var _ = function (e, t) {
  return e && t && t.split(" ").forEach(function (t) {
    r = t;
    return void ((n = e).classList ? n.classList.remove(r) : typeof n.className == "string" ? n.className = s(n.className, r) : n.setAttribute("class", s(n.className && n.className.baseVal || "", r)));
    var n;
    var r;
  });
};
var x = function (e) {
  function t() {
    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
      r[i] = arguments[i];
    }
    (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    t.onEnter = function (e, n) {
      var r = t.resolveArguments(e, n);
      var i = r[0];
      var a = r[1];
      t.removeClasses(i, "exit");
      t.addClass(i, a ? "appear" : "enter", "base");
      if (t.props.onEnter) {
        t.props.onEnter(e, n);
      }
    };
    t.onEntering = function (e, n) {
      var r = t.resolveArguments(e, n);
      var i = r[0];
      var a = r[1] ? "appear" : "enter";
      t.addClass(i, a, "active");
      if (t.props.onEntering) {
        t.props.onEntering(e, n);
      }
    };
    t.onEntered = function (e, n) {
      var r = t.resolveArguments(e, n);
      var i = r[0];
      var a = r[1] ? "appear" : "enter";
      t.removeClasses(i, a);
      t.addClass(i, a, "done");
      if (t.props.onEntered) {
        t.props.onEntered(e, n);
      }
    };
    t.onExit = function (e) {
      var n = t.resolveArguments(e)[0];
      t.removeClasses(n, "appear");
      t.removeClasses(n, "enter");
      t.addClass(n, "exit", "base");
      if (t.props.onExit) {
        t.props.onExit(e);
      }
    };
    t.onExiting = function (e) {
      var n = t.resolveArguments(e)[0];
      t.addClass(n, "exit", "active");
      if (t.props.onExiting) {
        t.props.onExiting(e);
      }
    };
    t.onExited = function (e) {
      var n = t.resolveArguments(e)[0];
      t.removeClasses(n, "exit");
      t.addClass(n, "exit", "done");
      if (t.props.onExited) {
        t.props.onExited(e);
      }
    };
    t.resolveArguments = function (e, n) {
      if (t.props.nodeRef) {
        return [t.props.nodeRef.current, e];
      } else {
        return [e, n];
      }
    };
    t.getClassNames = function (e) {
      var n = t.props.classNames;
      var r = typeof n == "string";
      var i = r ? "" + (r && n ? n + "-" : "") + e : n[e];
      return {
        baseClassName: i,
        activeClassName: r ? i + "-active" : n[e + "Active"],
        doneClassName: r ? i + "-done" : n[e + "Done"]
      };
    };
    return t;
  }
  o(t, e);
  var n = t.prototype;
  n.addClass = function (e, t, n) {
    var r = this.getClassNames(t)[n + "ClassName"];
    var i = this.getClassNames("enter").doneClassName;
    if (t === "appear" && n === "done" && i) {
      r += " " + i;
    }
    if (n === "active" && e) {
      d(e);
    }
    if (r) {
      this.appliedClasses[t][n] = r;
      (function (e, t) {
        if (e && t) {
          t.split(" ").forEach(function (t) {
            r = t;
            return void ((n = e).classList ? n.classList.add(r) : function (e, t) {
              if (e.classList) {
                return !!t && e.classList.contains(t);
              } else {
                return (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
              }
            }(n, r) || (typeof n.className == "string" ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
            var n;
            var r;
          });
        }
      })(e, r);
    }
  };
  n.removeClasses = function (e, t) {
    var n = this.appliedClasses[t];
    var r = n.base;
    var i = n.active;
    var a = n.done;
    this.appliedClasses[t] = {};
    if (r) {
      _(e, r);
    }
    if (i) {
      _(e, i);
    }
    if (a) {
      _(e, a);
    }
  };
  n.render = function () {
    var e = this.props;
    e.classNames;
    var t = i(e, ["classNames"]);
    return u.createElement(Transition, r({}, t, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return t;
}(u.Component);
x.defaultProps = {
  classNames: ""
};
x.propTypes = {};
export const CSSTransition = x;
function E(e, t) {
  var n = Object.create(null);
  if (e) {
    u.Children.map(e, function (e) {
      return e;
    }).forEach(function (e) {
      n[e.key] = function (e) {
        if (t && (0, u.isValidElement)(e)) {
          return t(e);
        } else {
          return e;
        }
      }(e);
    });
  }
  return n;
}
function k(e, t, n) {
  if (n[t] != null) {
    return n[t];
  } else {
    return e.props[t];
  }
}
function O(e, t, n) {
  var r = E(e.children);
  var i = function (e, t) {
    function n(n) {
      if (n in t) {
        return t[n];
      } else {
        return e[n];
      }
    }
    e = e || {};
    t = t || {};
    var r;
    var i = Object.create(null);
    var a = [];
    for (var o in e) {
      if (o in t) {
        if (a.length) {
          i[o] = a;
          a = [];
        }
      } else {
        a.push(o);
      }
    }
    var s = {};
    for (var u in t) {
      if (i[u]) {
        for (r = 0; r < i[u].length; r++) {
          var l = i[u][r];
          s[i[u][r]] = n(l);
        }
      }
      s[u] = n(u);
    }
    for (r = 0; r < a.length; r++) {
      s[a[r]] = n(a[r]);
    }
    return s;
  }(t, r);
  Object.keys(i).forEach(function (a) {
    var o = i[a];
    if ((0, u.isValidElement)(o)) {
      var s = (a in t);
      var l = (a in r);
      var c = t[a];
      var f = (0, u.isValidElement)(c) && !c.props.in;
      if (!l || s && !f) {
        if (l || !s || f) {
          if (l && s && (0, u.isValidElement)(c)) {
            i[a] = (0, u.cloneElement)(o, {
              onExited: n.bind(null, o),
              in: c.props.in,
              exit: k(o, "exit", e),
              enter: k(o, "enter", e)
            });
          }
        } else {
          i[a] = (0, u.cloneElement)(o, {
            in: false
          });
        }
      } else {
        i[a] = (0, u.cloneElement)(o, {
          onExited: n.bind(null, o),
          in: true,
          exit: k(o, "exit", e),
          enter: k(o, "enter", e)
        });
      }
    }
  });
  return i;
}
var N = Object.values || function (e) {
  return Object.keys(e).map(function (t) {
    return e[t];
  });
};
var T = function (e) {
  function t(t, n) {
    var r;
    var i = (r = e.call(this, t, n) || this).handleExited.bind(function (e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }(r));
    r.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: i,
      firstRender: true
    };
    return r;
  }
  o(t, e);
  var n = t.prototype;
  n.componentDidMount = function () {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  n.componentWillUnmount = function () {
    this.mounted = false;
  };
  t.getDerivedStateFromProps = function (e, t) {
    var n;
    var r;
    var i = t.children;
    var a = t.handleExited;
    return {
      children: t.firstRender ? (n = e, r = a, E(n.children, function (e) {
        return (0, u.cloneElement)(e, {
          onExited: r.bind(null, e),
          in: true,
          appear: k(e, "appear", n),
          enter: k(e, "enter", n),
          exit: k(e, "exit", n)
        });
      })) : O(e, i, a),
      firstRender: false
    };
  };
  n.handleExited = function (e, t) {
    var n = E(this.props.children);
    if (!(e.key in n)) {
      if (e.props.onExited) {
        e.props.onExited(t);
      }
      if (this.mounted) {
        this.setState(function (t) {
          var n = r({}, t.children);
          delete n[e.key];
          return {
            children: n
          };
        });
      }
    }
  };
  n.render = function () {
    var e = this.props;
    var t = e.component;
    var n = e.childFactory;
    var r = i(e, ["component", "childFactory"]);
    var a = this.state.contextValue;
    var o = N(this.state.children).map(n);
    delete r.appear;
    delete r.enter;
    delete r.exit;
    if (t === null) {
      return u.createElement(f.Provider, {
        value: a
      }, o);
    } else {
      return u.createElement(f.Provider, {
        value: a
      }, u.createElement(t, r, o));
    }
  };
  return t;
}(u.Component);
T.propTypes = {};
T.defaultProps = {
  component: "div",
  childFactory: function (e) {
    return e;
  }
};
export const TransitionGroup = T;
var R = function (e) {
  function t() {
    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
      r[i] = arguments[i];
    }
    (t = e.call.apply(e, [this].concat(r)) || this).handleEnter = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
        n[r] = arguments[r];
      }
      return t.handleLifecycle("onEnter", 0, n);
    };
    t.handleEntering = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
        n[r] = arguments[r];
      }
      return t.handleLifecycle("onEntering", 0, n);
    };
    t.handleEntered = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
        n[r] = arguments[r];
      }
      return t.handleLifecycle("onEntered", 0, n);
    };
    t.handleExit = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
        n[r] = arguments[r];
      }
      return t.handleLifecycle("onExit", 1, n);
    };
    t.handleExiting = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
        n[r] = arguments[r];
      }
      return t.handleLifecycle("onExiting", 1, n);
    };
    t.handleExited = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
        n[r] = arguments[r];
      }
      return t.handleLifecycle("onExited", 1, n);
    };
    return t;
  }
  o(t, e);
  var n = t.prototype;
  n.handleLifecycle = function (e, t, n) {
    var r;
    var i = this.props.children;
    var a = u.Children.toArray(i)[t];
    if (a.props[e]) {
      (r = a.props)[e].apply(r, n);
    }
    if (this.props[e]) {
      var o = a.props.nodeRef ? undefined : l.findDOMNode(this);
      this.props[e](o);
    }
  };
  n.render = function () {
    var e = this.props;
    var t = e.children;
    var n = e.in;
    var r = i(e, ["children", "in"]);
    var a = u.Children.toArray(t);
    var o = a[0];
    var s = a[1];
    delete r.onEnter;
    delete r.onEntering;
    delete r.onEntered;
    delete r.onExit;
    delete r.onExiting;
    delete r.onExited;
    return u.createElement(TransitionGroup, r, n ? u.cloneElement(o, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : u.cloneElement(s, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };
  return t;
}(u.Component);
R.propTypes = {};
export const ReplaceTransition = R;
var P;
var C;
var D = "out-in";
var U = "in-out";
var I = function (e, t, n) {
  return function () {
    var r;
    if (e.props[t]) {
      (r = e.props)[t].apply(r, arguments);
    }
    n();
  };
};
(P = {})[D] = function (e) {
  var t = e.current;
  var n = e.changeState;
  return u.cloneElement(t, {
    in: false,
    onExited: I(t, "onExited", function () {
      n(m, null);
    })
  });
};
P[U] = function (e) {
  var t = e.current;
  var n = e.changeState;
  var r = e.children;
  return [t, u.cloneElement(r, {
    in: true,
    onEntered: I(r, "onEntered", function () {
      n(m);
    })
  })];
};
var L = P;
(C = {})[D] = function (e) {
  var t = e.children;
  var n = e.changeState;
  return u.cloneElement(t, {
    in: true,
    onEntered: I(t, "onEntered", function () {
      n(v, u.cloneElement(t, {
        in: true
      }));
    })
  });
};
C[U] = function (e) {
  var t = e.current;
  var n = e.children;
  var r = e.changeState;
  return [u.cloneElement(t, {
    in: false,
    onExited: I(t, "onExited", function () {
      r(v, u.cloneElement(n, {
        in: true
      }));
    })
  }), u.cloneElement(n, {
    in: true
  })];
};
var j = C;
var F = function (e) {
  function t() {
    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
      r[i] = arguments[i];
    }
    (t = e.call.apply(e, [this].concat(r)) || this).state = {
      status: v,
      current: null
    };
    t.appeared = false;
    t.changeState = function (e, n) {
      if (n === undefined) {
        n = t.state.current;
      }
      t.setState({
        status: e,
        current: n
      });
    };
    return t;
  }
  o(t, e);
  var n = t.prototype;
  n.componentDidMount = function () {
    this.appeared = true;
  };
  t.getDerivedStateFromProps = function (e, t) {
    if (e.children == null) {
      return {
        current: null
      };
    } else if (t.status === m && e.mode === U) {
      return {
        status: m
      };
    } else if (!t.current || (n = t.current, r = e.children, n === r || u.isValidElement(n) && u.isValidElement(r) && n.key != null && n.key === r.key)) {
      return {
        current: u.cloneElement(e.children, {
          in: true
        })
      };
    } else {
      return {
        status: g
      };
    }
    var n;
    var r;
  };
  n.render = function () {
    var e;
    var t = this.props;
    var n = t.children;
    var r = t.mode;
    var i = this.state;
    var a = i.status;
    var o = i.current;
    var s = {
      children: n,
      current: o,
      changeState: this.changeState,
      status: a
    };
    switch (a) {
      case m:
        e = j[r](s);
        break;
      case g:
        e = L[r](s);
        break;
      case v:
        e = o;
    }
    return u.createElement(f.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, e);
  };
  return t;
}(u.Component);
F.propTypes = {};
F.defaultProps = {
  mode: D
};
export const SwitchTransition = F;