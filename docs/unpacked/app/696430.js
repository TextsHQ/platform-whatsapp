var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListenerHOC = function (e) {
  var t;
  var n;
  (t = class extends c.WrappedComponent {
    constructor() {
      super(...arguments);
      this.listeners = new f();
    }
    componentDidMount() {
      this.listeners.internalUseOnlyMarkMounted();
    }
    componentWillUnmount() {
      this.listeners.internalUseOnlyMarkUnmounted();
    }
    _getComponent() {
      return c._getComponent.call(this);
    }
    render() {
      return p.default.createElement(e, (0, a.default)({
        ref: this.setComponent
      }, this.props, {
        listeners: this.listeners
      }));
    }
  }).defaultProps = (n = e.defaultProps) !== null && n !== undefined ? n : undefined;
  t.displayName = `Listener(${(0, u.default)(e)})`;
  t.wrappedComponent = null;
  return t;
};
exports.Listeners = undefined;
var a = i(require("../vendor/967154.js"));
var o = require("./898817.js");
var s = require("./780549.js");
var l = require("./493288.js");
var u = i(require("./107153.js"));
var c = require("./12.js");
var d = require("./337159.js");
var p = i(require("../vendor/667294.js"));
class f {
  constructor() {
    this._mounted = false;
    this._unmounted = false;
    this._listeners = new Set();
    this._remove = e => {
      e.disengage();
      this._listeners.delete(e);
    };
  }
  _add(e) {
    if (this._unmounted) {
      __LOG__(3)`Listener added after unmounting`;
    } else {
      this._listeners.add(e);
      if (this._mounted) {
        e.engage();
      }
    }
  }
  internalUseOnlyMarkMounted() {
    this._mounted = true;
    this._listeners.forEach(e => {
      e.engage();
    });
  }
  internalUseOnlyMarkUnmounted() {
    this._unmounted = true;
    this._listeners.forEach(this._remove);
    if (this._abortController) {
      this._abortController.abort();
    }
  }
  add(e, t, n, r) {
    const i = this;
    const a = new d.Listener(e, t, function () {
      if (!i._unmounted) {
        n.apply(this, arguments);
      }
    }, r, n);
    this._add(a);
  }
  addOnce(e, t, n, r) {
    const i = this;
    const a = new d.Listener(e, t, function () {
      i._remove(a);
      if (!i._unmounted) {
        n.apply(this, arguments);
      }
    }, r, n);
    this._add(a);
  }
  remove(e, t, n, r) {
    this._listeners.forEach(i => {
      if (i.represents(e, t, n, r)) {
        this._remove(i);
      }
    });
  }
  uiIdle(e) {
    if (s.Cmd.uiBusy) {
      this.addOnce(s.Cmd, "ui_idle", e);
    } else {
      this._abortController = this._abortController || new r();
      (0, l.documentFlushed)({
        signal: this._abortController.signal
      }).then(() => {
        e();
      }, e => {
        if (e.name !== o.ABORT_ERROR) {
          throw e;
        }
      });
    }
  }
  testsOnlyGetListeners() {
    return this._listeners;
  }
}
exports.Listeners = f;