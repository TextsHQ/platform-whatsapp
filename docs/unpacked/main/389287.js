var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/395654.js"));
var o = require("../app/787742.js");
var l = require("../app/596633.js");
var i = require("../app/728.js");
class u extends r.default {
  constructor() {
    super(...arguments);
    this.openPiP = (e, t, n) => {
      var a;
      if (!((a = this.manager) === null || a === undefined)) {
        a.openPiP(i.PiPVideoType.MSG, {
          msg: e,
          startTime: t,
          zoomRect: n,
          videoSrc: null,
          preview: null
        });
      }
    };
    this.closePiP = () => {
      var e;
      if (!((e = this.manager) === null || e === undefined)) {
        e.closePiP();
      }
    };
    this.pausePiP = () => {
      var e;
      if (!((e = this.manager) === null || e === undefined)) {
        e.pausePiP();
      }
    };
    this.openYoutubePiP = (e, t, n, a) => {
      (0, l.genNonceForMsg)(t).then(r => {
        var l;
        const u = (0, o.getRcatString)(t);
        const s = r != null && u != null ? {
          nonce: r,
          counterAbuseToken: u
        } : null;
        if (!((l = this.manager) === null || l === undefined)) {
          l.openPiP(i.PiPVideoType.YOUTUBE, {
            msg: t,
            startTime: n,
            zoomRect: a,
            videoSrc: e,
            preview: null,
            counterAbuseData: s
          });
        }
      });
    };
    this.openOgVideoPiP = (e, t, n, a, r) => {
      var o;
      if (!((o = this.manager) === null || o === undefined)) {
        o.openPiP(i.PiPVideoType.OG, {
          videoSrc: e,
          preview: t,
          msg: n,
          startTime: a,
          zoomRect: r
        });
      }
    };
    this.isOpened = e => {
      var t;
      var n;
      return (t = (n = this.manager) === null || n === undefined ? undefined : n.isOpened(e)) !== null && t !== undefined && t;
    };
  }
  register(e) {
    this.manager = e;
  }
  unregister() {
    this.manager = null;
  }
  didOpen(e) {
    this.trigger(`${e.id.toString()}_pip_did_open`);
  }
  didClose(e) {
    this.trigger(`${e.id.toString()}_pip_did_close`);
  }
  didError(e) {
    this.trigger(`${e.id.toString()}_pip_did_error`);
  }
}
var s = new u();
exports.default = s;