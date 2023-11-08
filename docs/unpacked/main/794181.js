Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioManagerImpl = exports.AudioManager = undefined;
var a = require("./964395.js");
class r {
  constructor(e) {
    var t;
    this._listeners = new Map();
    this._activeAudios = new Map();
    this._inactiveAudios = new Map();
    this._releaseTimeouts = new Map();
    this.__TEST_ONLY__ = {
      getActiveAudio: e => this._activeAudios.get(e),
      getAllAudios: () => [...Array.from(this._activeAudios.values()), ...Array.from(this._inactiveAudios.values())]
    };
    this._minPoolSize = (t = e == null ? undefined : e.minPoolSize) !== null && t !== undefined ? t : 1;
  }
  addAudioListener(e, t, n) {
    var a;
    var r;
    if (!((a = this._activeAudios.get(e)) === null || a === undefined)) {
      a.addEventListener(t, n);
    }
    if (!((r = this._inactiveAudios.get(e)) === null || r === undefined)) {
      r.addEventListener(t, n);
    }
    let o = this._listeners.get(e);
    if (o == null) {
      o = new Set();
      this._listeners.set(e, o);
    }
    o.add({
      type: t,
      listener: n
    });
  }
  removeAudioListener(e, t, n) {
    var a;
    var r;
    if (!((a = this._activeAudios.get(e)) === null || a === undefined)) {
      a.removeEventListener(t, n);
    }
    if (!((r = this._inactiveAudios.get(e)) === null || r === undefined)) {
      r.removeEventListener(t, n);
    }
    const o = this._listeners.get(e);
    if (o != null) {
      for (const e of o) {
        if (e.type === t && e.listener === n) {
          o.delete(e);
          break;
        }
      }
      if (o.size === 0) {
        this._listeners.delete(e);
      }
    }
  }
  createAudioProxy() {
    return new a.AudioProxy(this);
  }
  _getAudio(e) {
    var t;
    const n = this._activeAudios.get(e);
    if (n != null) {
      self.clearTimeout(this._releaseTimeouts.get(n));
      this._releaseTimeouts.delete(n);
      return n;
    }
    const a = this._inactiveAudios.get(e);
    if (a != null) {
      this._inactiveAudios.delete(e);
      this._activeAudios.set(e, a);
      return a;
    }
    if (this._activeAudios.size + this._inactiveAudios.size >= this._minPoolSize) {
      for (const [t, n] of this._inactiveAudios) {
        var r;
        var o;
        this._inactiveAudios.delete(t);
        this._activeAudios.set(e, n);
        if (!((r = this._listeners.get(t)) === null || r === undefined)) {
          r.forEach(e => {
            let {
              type: t,
              listener: a
            } = e;
            n.removeEventListener(t, a);
          });
        }
        if (!((o = this._listeners.get(e)) === null || o === undefined)) {
          o.forEach(e => {
            let {
              type: t,
              listener: a
            } = e;
            n.addEventListener(t, a);
          });
        }
        return n;
      }
    }
    const l = new Audio();
    this._activeAudios.set(e, l);
    if (!((t = this._listeners.get(e)) === null || t === undefined)) {
      t.forEach(e => {
        let {
          type: t,
          listener: n
        } = e;
        l.addEventListener(t, n);
      });
    }
    const i = () => {
      for (const [e, t] of this._activeAudios) {
        if (t === l) {
          this._activeAudios.delete(e);
          this._inactiveAudios.set(e, l);
          break;
        }
      }
    };
    l.addEventListener("pause", () => {
      this._releaseTimeouts.set(l, self.setTimeout(i, 1000));
    });
    return l;
  }
  play(e, t) {
    const n = this._getAudio(e);
    n.src = e.src;
    n.currentTime = t.currentTime;
    n.playbackRate = t.playbackRate;
    n.defaultPlaybackRate = t.defaultPlaybackRate;
    return n.play();
  }
  pause(e) {
    var t;
    if (!((t = this._activeAudios.get(e)) === null || t === undefined)) {
      t.pause();
    }
  }
  load(e) {
    const t = this._getAudio(e);
    t.src = e.src;
    if (!(t == null)) {
      t.load();
    }
  }
  setDefaultPlaybackRate(e, t) {
    const n = this._activeAudios.get(e);
    if (n != null) {
      n.defaultPlaybackRate = t;
    }
  }
  setPlaybackRate(e, t) {
    const n = this._activeAudios.get(e);
    if (n != null) {
      n.playbackRate = t;
    }
  }
  getCurrentTime(e) {
    var t;
    var n;
    if ((t = (n = this._activeAudios.get(e)) === null || n === undefined ? undefined : n.currentTime) !== null && t !== undefined) {
      return t;
    } else {
      return null;
    }
  }
  setCurrentTime(e, t) {
    const n = this._activeAudios.get(e);
    var a;
    if (n != null) {
      n.currentTime = t;
    } else if (!((a = this._listeners.get(e)) === null || a === undefined)) {
      a.forEach(e => {
        let {
          type: t,
          listener: n
        } = e;
        if (t === "timeupdate") {
          n();
        }
      });
    }
  }
  getDuration(e) {
    var t;
    var n;
    if ((t = (n = this._activeAudios.get(e)) === null || n === undefined ? undefined : n.duration) !== null && t !== undefined) {
      return t;
    } else {
      return null;
    }
  }
  getPaused(e) {
    var t;
    var n;
    return (t = (n = this._activeAudios.get(e)) === null || n === undefined ? undefined : n.paused) === null || t === undefined || t;
  }
}
exports.AudioManagerImpl = r;
const o = new r();
exports.AudioManager = o;