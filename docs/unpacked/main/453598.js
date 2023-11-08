var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMediaStreamPlaybackMetric = function (e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : i.PLAYBACK_ORIGIN_TYPE.CONVERSATION;
  const r = (0, s.useRef)(true);
  const l = (0, c.default)(() => f(a));
  (0, s.useEffect)(() => {
    if (e == null || !e.startsWith(o.VIDEO_STREAM_URL)) {
      return;
    }
    const t = l.current;
    const n = () => {
      t.commit();
      r.current = true;
      l.current = f(a);
      window.removeEventListener("unload", n);
    };
    window.addEventListener("unload", n);
    return n;
  }, [e]);
  const p = (0, d.default)(e => {
    var a;
    if (t.current) {
      l.current.videoDuration = Math.floor(t.current.duration);
    }
    if (!((a = n.onDurationChange) === null || a === undefined)) {
      a.call(n, e);
    }
  });
  const m = (0, d.default)(() => {
    var e;
    l.current.playbackState = u.PLAYBACK_STATE_TYPE.READY_PLAY;
    if (!l.current.didPlay) {
      l.current.didPlay = true;
    }
    if (!((e = n.onPlaying) === null || e === undefined)) {
      e.call(n);
    }
  });
  const h = (0, d.default)(e => {
    var t;
    if (l.current.playbackState === u.PLAYBACK_STATE_TYPE.READY_PLAY) {
      l.current.playbackState = u.PLAYBACK_STATE_TYPE.READY_PAUSE;
    }
    if (!((t = n.onPause) === null || t === undefined)) {
      t.call(n, e);
    }
  });
  const g = (0, d.default)(e => {
    var t;
    l.current.playbackState = u.PLAYBACK_STATE_TYPE.BUFFERING;
    if (r.current) {
      l.current.startInitialBufferingT();
    } else {
      l.current.startTotalRebufferingT();
    }
    if (!((t = n.onWaiting) === null || t === undefined)) {
      t.call(n, e);
    }
  });
  const E = (0, d.default)(e => {
    var t;
    l.current.playbackState = u.PLAYBACK_STATE_TYPE.READY_PAUSE;
    if (r.current) {
      l.current.markInitialBufferingT();
      r.current = false;
    } else {
      l.current.markTotalRebufferingT();
    }
    if (!((t = n.onCanPlay) === null || t === undefined)) {
      t.call(n, e);
    }
  });
  const v = (0, d.default)(e => {
    var t;
    l.current.playbackState = u.PLAYBACK_STATE_TYPE.ENDED;
    if (!((t = n.onEnded) === null || t === undefined)) {
      t.call(n, e);
    }
  });
  const _ = (0, d.default)(e => {
    var a;
    var r;
    var o;
    var i;
    var s;
    l.current.playbackState = u.PLAYBACK_STATE_TYPE.ERROR;
    const c = (a = (r = (o = t.current) === null || o === undefined || (i = o.error) === null || i === undefined ? undefined : i.code) !== null && r !== undefined ? r : e.code) !== null && a !== undefined ? a : null;
    if (c != null) {
      l.current.playbackError = c;
    }
    if (!((s = n.onError) === null || s === undefined)) {
      s.call(n, e);
    }
  });
  return {
    mediaStreamPlaybackMetricRef: l,
    wrappedProps: {
      onDurationChange: p,
      onPlaying: m,
      onWaiting: g,
      onCanPlay: E,
      onEnded: v,
      onError: _,
      onPause: h
    }
  };
};
var r = require("./222447.js");
var o = require("./511016.js");
var l = require("../app/684290.js");
var i = require("./989639.js");
var u = require("./64193.js");
var s = require("../vendor/667294.js");
var c = a(require("../app/637660.js"));
var d = a(require("../app/17533.js"));
function f(e) {
  return new r.MediaStreamPlaybackWamEvent({
    playbackOrigin: e,
    mediaType: l.MEDIA_TYPE.VIDEO,
    didPlay: false,
    playbackState: u.PLAYBACK_STATE_TYPE.IDLE
  });
}