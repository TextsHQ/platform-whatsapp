var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainAudioChannel = undefined;
var i = r(require("./395654.js"));
class a extends i.default {
  registerMedia(e) {
    let t = null;
    const n = () => {
      t = this.claim(e, () => {
        e.pause();
      });
    };
    const r = () => {
      var e;
      if (!((e = t) === null || e === undefined)) {
        e();
      }
    };
    e.addEventListener("play", n);
    e.addEventListener("pause", r);
    return () => {
      var i;
      if (!((i = t) === null || i === undefined)) {
        i();
      }
      e.removeEventListener("play", n);
      e.removeEventListener("pause", r);
    };
  }
  claim(e, t) {
    const n = this._active;
    if (n != null && e !== n.key) {
      n.pause();
      this.trigger("paused_DEPRECATED_DO_NOT_USE", n.key);
    }
    this._active = {
      key: e,
      pause: t
    };
    return () => {
      var t;
      if (e === ((t = this._active) === null || t === undefined ? undefined : t.key)) {
        this._active = null;
      }
    };
  }
}
const o = new a();
exports.MainAudioChannel = o;