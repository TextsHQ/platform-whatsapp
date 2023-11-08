var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  var a;
  const c = (0, l.default)(e);
  if (!(t || n)) {
    __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
    SEND_LOGS(`StateHOC wrapping class with no concerns, check ${c}`);
  }
  const d = [];
  if (t) {
    for (const e in t) {
      d.push(new u.default(c, e, t[e], true));
    }
  }
  if (n) {
    for (const e in n) {
      if (t && t.hasOwnProperty(e)) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS(`Component has marked "${e}" as both a normal and weak concern, check ${c}`);
      }
      d.push(new u.default(c, e, n[e], false));
    }
  }
  (a = class t extends i.WrappedComponent {
    constructor(e) {
      super(e);
      this._rr = (e, t) => {
        this.setState(n => ({
          proxies: (0, o.default)((0, o.default)({}, n.proxies), {}, {
            [e.name]: e.createProxy(t)
          })
        }));
      };
      const n = {};
      let a = false;
      for (let r = 0; r < d.length; r++) {
        const o = d[r];
        const l = o.name;
        const i = o.getModelAndValidate(t._getModelOrProxy(l, e));
        if (i) {
          const e = o.createProxy(i);
          o.attachConcern(i, e.proxyBitMask, this._rr);
          n[l] = e;
        } else {
          a = true;
        }
      }
      this.state = {
        props: e,
        proxies: n,
        hasBroken: a
      };
    }
    static _getModelOrProxy(e, t) {
      return t[e];
    }
    static getDerivedStateFromProps(e, n) {
      const a = (0, o.default)({}, n.proxies);
      let r = false;
      if (!n.hasBroken) {
        const o = n.props;
        for (let n = 0; n < d.length; n++) {
          const l = d[n];
          const i = l.name;
          const u = l.getModel(t._getModelOrProxy(i, o));
          const s = l.getModelAndValidate(t._getModelOrProxy(i, e));
          if (u !== s) {
            if (s) {
              a[i] = l.createProxy(s);
            } else {
              r = true;
            }
          }
        }
      }
      return {
        props: e,
        proxies: a,
        hasBroken: r
      };
    }
    componentDidUpdate(e) {
      if (!this.state.hasBroken) {
        for (let n = 0; n < d.length; n++) {
          const a = d[n];
          const r = a.name;
          const o = a.getModel(t._getModelOrProxy(r, e));
          const l = a.getModelAndValidate(t._getModelOrProxy(r, this.props));
          if (o !== l && (a.detachConcern(o, this._rr), l)) {
            const e = this.state.proxies[r];
            a.attachConcern(l, e.proxyBitMask, this._rr);
          }
        }
      }
    }
    componentWillUnmount() {
      if (!this.state.hasBroken) {
        for (let e = 0; e < d.length; e++) {
          const n = d[e];
          n.detachConcern(n.getModel(t._getModelOrProxy(n.name, this.props)), this._rr);
        }
      }
    }
    _getComponent() {
      return i._getComponent.call(this);
    }
    render() {
      const {
        proxies: t,
        hasBroken: n
      } = this.state;
      if (n) {
        return null;
      } else {
        return s.default.createElement(e, (0, r.default)({
          ref: this.setComponent
        }, this.props, t));
      }
    }
  }).displayName = `State(${c})`;
  a.wrappedComponent = null;
  return a;
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../app/107153.js"));
var i = require("../app/12.js");
var u = a(require("../app/243382.js"));
var s = a(require("../vendor/667294.js"));