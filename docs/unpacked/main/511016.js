var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIDEO_STREAM_URL = undefined;
exports.handleVideoStreamingRequest = function (e) {
  let {
    action: t,
    message: r
  } = e;
  switch (t) {
    case c.default.REQUEST_STREAMING_INFO:
      return function (e) {
        const t = u.MsgCollection.get(e);
        if (!t) {
          return null;
        }
        return (0, i.videoStreamingInfo)(t);
      }(r.key);
    case c.default.EXP_BACKOFF:
      {
        const {
          expDelaySec: e
        } = require("../app/250655.js");
        return e(r.generation, 60).then(() => s.default.waitIfOffline({
          signal: new a().signal
        }));
      }
    case c.default.REQUEST_RMR:
      return function () {
        return h.apply(this, arguments);
      }(r);
    case c.default.SEND_STREAMING_CHUNK:
      {
        const e = r.msgKey;
        const t = u.MsgCollection.get(e);
        if (!t) {
          return void delete g[e.toString()];
        }
        let n;
        if (g.hasOwnProperty(e)) {
          n = g[e.toString()];
        } else {
          g[e.toString()] = n = new m(t.size);
        }
        n.push(r.data);
        if (n.isComplete()) {
          (0, i.manuallySetMedia)({
            msg: t,
            media: n.serialize(),
            rmrReason: d.WEBC_RMR_REASON_CODE.VIDEO_STREAMING
          });
          delete g[e.toString()];
        }
        break;
      }
    default:
      return Promise.reject((0, f.default)("Invalid Video Streaming Action"));
  }
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/508247.js");
var i = require("../app/644234.js");
var u = require("../app/61113.js");
var s = r(require("../app/99398.js"));
var c = r(require("../app/647349.js"));
var d = require("../app/885313.js");
var f = r(require("../app/556869.js"));
const p = `${l.WEB_PUBLIC_PATH}stream/video`;
exports.VIDEO_STREAM_URL = p;
class m {
  constructor(e) {
    this.ranges = [];
    this.buffer = [];
    this.size = e;
    if (!e) {
      __LOG__(3)`video buffer falsy size: ${e}`;
    }
  }
  push(e) {
    this.buffer.push(e);
    this.add(e.start, e.end);
  }
  add(e, t) {
    let n = e;
    const a = this.ranges;
    for (let e = 0; e < a.length; e++) {
      let [r, o] = a[e];
      if (!(n > o + 1)) {
        if (t + 1 < r) {
          return a.splice(e, 0, [n, t]);
        }
        for (; e + 1 < a.length;) {
          const [l, i] = a[e + 1];
          if (t + 1 < l) {
            break;
          }
          n = Math.min(n, r);
          a.splice(e, 1);
          r = l;
          o = i;
        }
        return void (a[e] = [Math.min(n, r), Math.max(t, o)]);
      }
    }
    return a.push([n, t]);
  }
  isComplete() {
    const e = this.ranges;
    const t = this.size;
    return !!t && e.length === 1 && e[0][0] === 0 && e[0][1] === t - 1;
  }
  serialize() {
    const e = new Uint8Array(this.size);
    const t = this.buffer;
    for (let n = 0; n < t.length; n++) {
      const {
        start: a,
        buffer: r
      } = t[n];
      e.set(new Uint8Array(r), a);
    }
    return e;
  }
}
function h() {
  return (h = (0, o.default)(function* (e) {
    const t = u.MsgCollection.get(e.key);
    if (!t) {
      return null;
    }
    yield t.downloadMedia({
      downloadEvenIfExpensive: true,
      rmrReason: d.WEBC_RMR_REASON_CODE.VIDEO_STREAMING,
      isUserInitiated: true
    });
    throw (0, f.default)("downloaded media instead of streaming");
  })).apply(this, arguments);
}
const g = {};