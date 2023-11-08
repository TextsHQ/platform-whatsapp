var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  (t = class extends i.WrappedComponent {
    constructor() {
      super(...arguments);
      this._isUnmounted = false;
      this._controller = null;
      this.getUnmountSignal = () => {
        if (!this._controller) {
          this._controller = new a();
          if (this._isUnmounted) {
            this._controller.abort();
          }
        }
        return this._controller.signal;
      };
    }
    componentWillUnmount() {
      var e;
      this._isUnmounted = true;
      if (!((e = this._controller) === null || e === undefined)) {
        e.abort();
      }
    }
    _getComponent() {
      return i._getComponent.call(this);
    }
    render() {
      return u.default.createElement(e, (0, o.default)({
        ref: this.setComponent,
        getUnmountSignal: this.getUnmountSignal
      }, this.props));
    }
  }).defaultProps = (n = e.defaultProps) !== null && n !== undefined ? n : undefined;
  t.displayName = `UnmountSignal(${(0, l.default)(e)})`;
  t.wrappedComponent = null;
  return t;
};
var o = r(require("../vendor/967154.js"));
var l = r(require("../app/107153.js"));
var i = require("../app/12.js");
var u = r(require("../vendor/667294.js"));