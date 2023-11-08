var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgAudioStore = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/196127.js");
var l = require("../app/513681.js");
var i = require("./794181.js");
var u = require("./621016.js");
var s = require("./606993.js");
var c = require("../app/937001.js");
var d = a(require("../vendor/441143.js"));
function f(e) {
  let t = false;
  return () => {
    (0, d.default)(!t, "Dispose cannot be called more than once for the same audio");
    t = true;
    e();
  };
}
const p = new class {
  constructor() {
    this._msgIdToAudioEntry = new Map();
  }
  _createResource(e, t) {
    const {
      mediaData: n
    } = e;
    const a = i.AudioManager.createAudioProxy();
    const d = l.MainAudioChannel.registerMedia(a);
    const f = function (e) {
      let {
        filehash: t
      } = e;
      if (!o.InMemoryMediaBlobCache.has(t)) {
        return null;
      }
      const n = o.InMemoryMediaBlobCache.getOrCreateURL(t);
      o.InMemoryMediaBlobCache.increaseUsageCount(t);
      return {
        url: n,
        dispose: () => o.InMemoryMediaBlobCache.decreaseUsageCount(t)
      };
    }(n);
    if (f) {
      a.src = f.url;
      const t = (0, s.getDurationFromMediaOrProtobuf)(a, e.mediaData);
      if (c.ServerProps.pttRememberPlayPosition && e.lastPlaybackProgress != null && t != null) {
        a.currentTime = t * e.lastPlaybackProgress;
      }
    }
    const p = new u.AudioPlaybackController({
      msg: e,
      audio: a
    });
    return {
      playbackController: p,
      refCount: 1,
      dispose: () => {
        const e = (0, r.default)(this._msgIdToAudioEntry.get(t), "this._msgIdToAudioEntry.get(key)");
        e.refCount--;
        if (e.refCount === 0) {
          d();
          this._msgIdToAudioEntry.delete(t);
          if (!(f == null)) {
            f.dispose();
          }
          p.dispose();
        }
      }
    };
  }
  acquireAudio(e) {
    const t = function (e) {
      return e.id.toString();
    }(e);
    let n = this._msgIdToAudioEntry.get(t);
    if (n) {
      n.refCount++;
    } else {
      n = this._createResource(e, t);
      this._msgIdToAudioEntry.set(t, n);
    }
    const {
      playbackController: a,
      dispose: r
    } = n;
    return {
      audio: a.audio,
      pttPlaybackLogger: a.pttPlaybackLogger,
      controller: a,
      dispose: f(r)
    };
  }
}();
exports.MsgAudioStore = p;