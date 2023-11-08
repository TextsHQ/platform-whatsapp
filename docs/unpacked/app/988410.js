var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./9686.js"));
var a = new class {
  constructor() {
    this.shouldIndicateFocusTimestamp = 0;
  }
  shouldIndicateFocus() {
    this.shouldIndicateFocusTimestamp = Date.now();
  }
  maybeIndicateFocus(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i.default.focusAnimation;
    if (!(Date.now() - this.shouldIndicateFocusTimestamp > 200)) {
      this.indicateFocus(e, t);
    }
  }
  indicateFocus(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i.default.focusAnimation;
    if (e) {
      e.classList.remove(t);
      e.offsetWidth;
      e.classList.add(t);
    }
  }
}();
exports.default = a;