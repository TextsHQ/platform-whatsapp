var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerManager = undefined;
var i = r(require("./395654.js"));
class a extends i.default {
  setDrawerContext(e, t) {
    this.trigger(`update_context_${e}`, t);
  }
  openDrawerRight(e, t) {
    this.trigger("open_drawer_right", e, t);
  }
  openDrawerMid(e, t) {
    this.trigger("open_drawer_mid", e, t);
  }
  openDrawerLeft(e, t) {
    this.trigger("open_drawer_left", e, t);
  }
  existsDrawerRight(e) {
    this.trigger("exists_drawer_right", e);
  }
  existsDrawerMid(e) {
    this.trigger("exists_drawer_mid", e);
  }
  existsDrawerLeft(e) {
    this.trigger("exists_drawer_left", e);
  }
  closeDrawerRight() {
    this.trigger("close_drawer_right");
  }
  closeDrawerMid() {
    this.trigger("close_drawer_mid");
  }
  closeDrawerLeft() {
    this.trigger("close_drawer_left");
  }
}
const o = new a();
exports.DrawerManager = o;