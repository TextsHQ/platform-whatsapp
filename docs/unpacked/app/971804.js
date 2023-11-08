var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuteCollectionImpl = exports.MuteCollection = undefined;
var i = require("./997853.js");
var a = require("./392125.js");
var o = require("./445729.js");
var s = require("./621270.js");
var l = require("./94872.js");
var u = require("./117429.js");
var c = r(require("./53575.js"));
let d = true;
let p = true;
let f = false;
let _ = false;
let g = false;
let m = false;
let h = false;
class y extends a.BaseCollection {
  initializeFromCache(e) {
    if (Array.isArray(e)) {
      e.forEach(e => {
        if ([s.GLOBAL_MUTE, s.GLOBAL_REACTIONS_MUTE].includes(e.id)) {
          this.add(e, {
            remove: false
          });
        }
      });
    } else if (e != null && e.id === s.GLOBAL_MUTE) {
      this.add(e, {
        remove: false
      });
    }
    this.setGlobalNotifications((0, u.getGlobalNotifications)());
    this.setGlobalOfflineNotifications((0, u.getGlobalOfflineNotifications)());
    this.setGlobalSounds((0, u.getGlobalSounds)());
    this.setGlobalCallRingtone((0, u.getGlobalCallRingtone)());
    this.setGlobalPreviews((0, u.getGlobalPreviews)());
    this.setCollapseMuted((0, u.getCollapseMuted)());
    this.setOutgoingMessageSound((0, u.getOutgoingMessageSound)());
    this.setIgnoreNondirectGroupMsg((0, u.getIgnoreNondirectGroupMsg)());
  }
  saveToCache() {
    if (!o.Conn.shouldSaveToCache()) {
      return;
    }
    const {
      id: e
    } = this.constructor.cachePolicy;
    const t = [];
    __LOG__(2)`models:mute:cache-save: ${String(e)}`;
    const n = this.get(s.GLOBAL_MUTE);
    const r = this.get(s.GLOBAL_REACTIONS_MUTE);
    if (n) {
      t.push(n.toJSON());
    }
    if (r) {
      t.push(r.toJSON());
    }
    if (t.length) {
      c.default.setCollection(e, t);
    } else {
      __LOG__(3)`models:mute:cache-save: globalMuteModel or globalReactionsMuteModel does not exist`;
    }
  }
  globalMute() {
    const e = this.get(s.GLOBAL_MUTE);
    return e || this.add({
      id: s.GLOBAL_MUTE
    })[0];
  }
  globalReactionsMute() {
    const e = this.get(s.GLOBAL_REACTIONS_MUTE);
    return e || this.add({
      id: s.GLOBAL_REACTIONS_MUTE
    })[0];
  }
  getGlobalSounds() {
    return d;
  }
  setGlobalSounds(e) {
    d = e;
    (0, u.setGlobalSounds)(e);
  }
  getGlobalCallRingtone() {
    return p;
  }
  setGlobalCallRingtone(e) {
    p = e;
    (0, u.setGlobalCallRingtone)(e);
  }
  getGlobalNotifications() {
    return f;
  }
  setGlobalNotifications(e) {
    f = e;
    (0, u.setGlobalNotifications)(e);
  }
  getGlobalOfflineNotifications() {
    return _;
  }
  setGlobalOfflineNotifications(e) {
    _ = e;
    (0, u.setGlobalOfflineNotifications)(e);
  }
  getGlobalPreviews() {
    return g;
  }
  setGlobalPreviews(e) {
    g = e;
    (0, u.setGlobalPreviews)(e);
  }
  getCollapseMuted() {
    return m;
  }
  setCollapseMuted(e) {
    m = e;
    (0, u.setCollapseMuted)(e);
    this.trigger("change:collapseMuted", m);
  }
  getOutgoingMessageSound() {
    return h;
  }
  setOutgoingMessageSound(e) {
    h = e;
    (0, u.setOutgoingMessageSound)(e);
  }
  getIgnoreNondirectGroupMsg() {
    return false;
  }
  setIgnoreNondirectGroupMsg(e) {}
}
exports.MuteCollectionImpl = y;
y.model = s.Mute;
y.cachePolicy = {
  id: l.COLLECTIONS_KEYS.MUTE_COLLECTION,
  policy: i.CACHE_POLICY.LOAD,
  delay: 1000
};
const E = new y();
exports.MuteCollection = E;