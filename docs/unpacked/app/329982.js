var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./670983.js"));
var a = r(require("./720132.js"));
var o = r(require("./8073.js"));
var s = require("./392632.js");
var l = r(require("./844453.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
class d extends u.Component {
  constructor() {
    var e;
    super(...arguments);
    e = this;
    this.state = {
      _stack: [],
      _transition: "default",
      _activeKey: 0,
      _ended: false,
      isPushed: false
    };
    this.setRefUIE = e => {
      this.refUIE = e;
    };
    this.getElement = () => {
      var e;
      if ((e = this.refUIE) === null || e === undefined) {
        return undefined;
      } else {
        return e.getElement();
      }
    };
    this.popAndUpdate = (e, t) => {
      const n = this.state._stack;
      if (n.length < 2) {
        return void this.pop(t);
      }
      const r = (0, u.cloneElement)(n[n.length - 2], e);
      n[n.length - 2] = r;
      this.pop(t);
    };
    this.push = function (t) {
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.props.pushTransition;
      e.setState(e => ({
        _stack: e._stack.concat(t),
        _transition: n,
        _activeKey: ++e._activeKey,
        _ended: false,
        isPushed: true
      }));
    };
    this.pop = function () {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.props.popTransition;
      const n = e.state._stack.slice(0, -1);
      if (n.length) {
        e.setState(e => ({
          _stack: n,
          _transition: t,
          _activeKey: --e._activeKey,
          isPushed: false
        }));
      } else if (!e.state._ended) {
        e.setState({
          _ended: true
        }, e.end);
      }
    };
    this.end = e => {
      if (this.props.onEnd) {
        this.props.onEnd(e);
      } else {
        (0, i.default)(this.context, "this.context").requestDismiss(e);
      }
    };
    this.stackSize = () => this.state._stack.length;
    this.requestFocus = () => {
      if (this.props.requestFocus) {
        this.props.requestFocus();
      }
    };
  }
  handleRequestDismiss() {
    this.pop();
  }
  render() {
    const {
      _stack: e,
      _transition: t,
      _activeKey: n,
      isPushed: r
    } = this.state;
    if (e.length === 0) {
      return null;
    }
    let i = e[e.length - 1];
    i = (0, u.cloneElement)(i, {
      isPushed: r
    });
    i = u.default.createElement(s.UIE, {
      displayName: `${this.props.displayName}-${n}`,
      key: n,
      escapable: true,
      ref: this.setRefUIE,
      requestFocus: this.requestFocus,
      requestDismiss: this.handleRequestDismiss.bind(this)
    }, i);
    return u.default.createElement(l.default, {
      transitionName: t,
      className: a.default.container
    }, this.props.removeTopDrawer ? i : e);
  }
}
exports.default = d;
d.contextType = o.default;
d.defaultProps = {
  removeTopDrawer: true,
  pushTransition: "flow-transition-drawer-push",
  popTransition: "flow-transition-drawer-pop",
  displayName: "FlowDrawer"
};
d.displayName = "FlowComponent";