var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttPrefsImpl = exports.PttPrefs = undefined;
var r = a(require("../vendors-main/974691.js"));
var o = require("../app/685639.js");
var l = require("../app/481173.js");
var i = require("../app/962260.js");
var u = require("../app/937001.js");
var s = require("../app/757453.js");
const c = [1, 1.5, 2];
class d extends l.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, l.prop)();
    this.playbackRate = (0, l.prop)(1);
    this.outOfChatPlayerMessage = (0, l.prop)(null);
    this.playbackControlMessageId = (0, l.prop)(null);
    this.isOocPlayerClosedByUser = (0, l.prop)(false);
  }
  closeOocPlayer() {
    this.isOocPlayerClosedByUser = true;
  }
  initialize() {
    l.BaseModel.prototype.initialize.call(this);
    this._restorePlaybackRate();
    this.listenTo(u.ServerProps, "change:pttPlaybackSpeedEnabled", () => {
      this._restorePlaybackRate();
    });
    this.on("change:playbackRate", (e, t) => {
      (0, s.setPttPlaybackRate)(t);
    });
  }
  setPlayingMessage(e) {
    this._setPlayingMessage(e);
    let t = () => {
      if (this._playingMessage === e) {
        this._setPlayingMessage(null);
      }
    };
    return () => {
      var e;
      if (!((e = t) === null || e === undefined)) {
        e();
      }
      t = null;
    };
  }
  _setPlayingMessage(e) {
    var t;
    this._playingMessage = e != null ? e : null;
    if (e) {
      this.outOfChatPlayerMessage = e;
      this.isOocPlayerClosedByUser = false;
    }
    if (this._playingMessage != null) {
      f.cancel();
      this.playbackControlMessageId = (t = this._playingMessage) === null || t === undefined ? undefined : t.id.toString();
    } else {
      this._scheduleClearPlaybackRateControl();
    }
  }
  _restorePlaybackRate() {
    this.playbackRate = u.ServerProps.pttPlaybackSpeedEnabled ? (0, s.getPttPlaybackRate)() : s.DEFAULT_PTT_PLAYBACK_RATE;
  }
  advancePlaybackRateFor(e) {
    this._changePlaybackRateFor(e, 1, true);
  }
  increasePlaybackRateFor(e) {
    this._changePlaybackRateFor(e, 1, false);
  }
  decreasePlaybackRateFor(e) {
    this._changePlaybackRateFor(e, -1, false);
  }
  _changePlaybackRateFor(e, t, n) {
    const a = c.indexOf(this.playbackRate);
    const o = n ? (a + t + c.length) % c.length : (0, r.default)(a + t, 0, c.length - 1);
    this.playbackRate = c[o];
    if (this._playingMessage == null) {
      this.playbackControlMessageId = e.toString();
      this._scheduleClearPlaybackRateControl();
    }
  }
  _scheduleClearPlaybackRateControl() {
    const {
      playbackControlMessageId: e
    } = this;
    if (e != null) {
      f.onOrAfter(i.PTT_PLAYBACK_SPEED_HIDE_DELAY, e);
    }
  }
  delayClearPlaybackRateControl() {
    if (!f.isScheduled()) {
      return;
    }
    const {
      playbackControlMessageId: e
    } = this;
    if (e != null) {
      f.onOrAfter(i.PTT_PLAYBACK_SPEED_HIDE_DELAY, e);
    }
  }
  clearOutOfChatMessage(e) {
    if (!(e != null && this.outOfChatPlayerMessage !== e)) {
      this.outOfChatPlayerMessage = null;
    }
  }
}
exports.PttPrefsImpl = d;
d.Proxy = "pttPrefs";
const f = new o.ShiftTimer(e => {
  if (e === p.playbackControlMessageId) {
    p.playbackControlMessageId = null;
  }
});
const p = new ((0, l.defineModel)(d))({
  id: "1"
});
exports.PttPrefs = p;