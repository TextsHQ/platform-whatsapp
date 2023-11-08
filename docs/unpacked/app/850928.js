Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.isFocused = (0, r.session)(true);
  }
  initialize() {
    super.initialize();
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }
  delete() {
    super.delete();
  }
  _handleFocus() {
    this.isFocused = true;
  }
  _handleBlur() {
    this.isFocused = false;
  }
}
i.Proxy = "mainWindowState";
var a = new ((0, r.defineModel)(i))();
exports.default = a;