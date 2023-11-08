var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalManager = undefined;
var i = r(require("./395654.js"));
class a extends i.default {
  open(e, t) {
    this.trigger("open_modal", e, t);
  }
  exists(e) {
    this.trigger("exists_modal", e);
  }
  close(e) {
    this.trigger("close_modal", e);
  }
  openMedia(e, t) {
    this.trigger("open_media", e, t);
  }
  existsMedia(e) {
    this.trigger("exists_media", e);
  }
  closeMedia() {
    this.trigger("close_media");
  }
  getRef(e) {
    this.trigger("get_ref", e);
  }
}
const o = new a();
exports.ModalManager = o;