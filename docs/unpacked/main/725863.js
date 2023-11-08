var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/395654.js"));
class o extends r.default {
  constructor(e) {
    super();
    this.isSelectable = e;
  }
  setSelectable(e) {
    this.isSelectable = e;
    this.trigger("update-selectable", e);
    return this.isSelectable;
  }
}
exports.default = o;