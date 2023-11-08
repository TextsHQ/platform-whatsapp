var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastPosition = exports.ToastManager = undefined;
var i = r(require("./395654.js"));
const a = require("../vendor/76672.js")({
  LEFT: "LEFT",
  CENTER: "CENTER",
  RIGHT: "RIGHT"
});
exports.ToastPosition = a;
class o extends i.default {
  open(e, t) {
    this.trigger("open_toast", e, t);
  }
  close(e) {
    this.trigger("close_toast", e);
  }
}
const s = new o();
exports.ToastManager = s;