var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedComponent = undefined;
exports._getComponent = function () {
  const e = this.component || this.refs.component;
  if (typeof e._getComponent == "function") {
    return e._getComponent();
  }
  return e;
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./670983.js"));
var o = require("../vendor/667294.js");
class s extends o.Component {
  constructor(e) {
    super(e);
    this.setComponent = e => {
      this.component = e;
    };
    this.state = (0, i.default)({}, this.state);
  }
  getComponent() {
    if (this.component instanceof s) {
      return this.component.getComponent();
    } else {
      return (0, a.default)(this.component, "this.component");
    }
  }
}
exports.WrappedComponent = s;