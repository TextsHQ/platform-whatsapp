var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceQplUpload = function () {
  return T();
};
exports.start = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./8304.js");
var o = require("./721569.js");
var s = require("./15842.js");
const l = 1000;
const u = 10000;
const c = "exponential";
const d = 100;
const p = 4;
const f = 60000;
const _ = 900000;
let g;
let m;
let h;
function y() {
  return (y = (0, i.default)(function* (e, t) {
    var n;
    var r;
    var i;
    var o;
    var s;
    g = t.healthLogger;
    m = t.storageApi;
    if (!h) {
      h = {
        sendEvents: e.sendEvents,
        isQplEnabled: e.isQplEnabled,
        startDelayInMs: ((n = e.startDelayInSeconds) !== null && n !== undefined ? n : 300) * 1000,
        intervalInMs: ((r = e.intervalInSeconds) !== null && r !== undefined ? r : 86400) * 1000,
        minRetryDelayInMs: ((i = e.minRetryDelayInSeconds) !== null && i !== undefined ? i : f) * 1000,
        maxRetryDelayInMs: ((o = e.maxRetryDelayInSeconds) !== null && o !== undefined ? o : _) * 1000,
        maxRetryAttemptsCount: (s = e.maxRetryAttemptsCount) !== null && s !== undefined ? s : p
      };
      yield (0, a.delayMs)(h.startDelayInMs);
      yield T();
      E();
    }
  })).apply(this, arguments);
}
function E() {
  setTimeout((0, i.default)(function* () {
    yield T();
    E();
  }), h.intervalInMs);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* () {
    const e = h.minRetryDelayInMs + Math.floor(Math.random() * (h.maxRetryDelayInMs - h.minRetryDelayInMs));
    yield (0, a.delayMs)(e);
  })).apply(this, arguments);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (h.isQplEnabled()) {
      try {
        const e = yield m.getRowCount();
        let t = 0;
        for (; t < e;) {
          const e = yield m.getFromBottom(d);
          yield A(e);
          const n = e[0].id || 0;
          const r = e[e.length - 1].id || 0;
          yield m.deleteRange(n, r);
          t += e.length;
        }
      } catch (n) {
        var t;
        if (e < h.maxRetryAttemptsCount) {
          yield S();
          T(e + 1);
        } else {
          __LOG__(4, true, new Error(), true)`QPL Uploader, error during upload session, error: ${n}`;
          SEND_LOGS("QPL Uploader upload session failed");
          if (!((t = g) === null || t === undefined)) {
            t.errorUploadingChunk(n);
          }
        }
      }
    }
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    const t = new o.PromiseRetryLoop({
      name: "QplUploadChunk",
      timer: {
        algo: {
          type: c,
          first: l
        },
        max: u
      },
      code: t => {
        e[0].id;
        e[e.length - 1].id;
        return h.sendEvents(e).then(() => {
          t();
        }).catch(e => {
          if (e instanceof s.QplServerStatusCodeError) {
            switch (e.statusCode) {
              case 500:
                __LOG__(3)`QPL Uploader uploadChunk, retriable error: ${e.message}`;
                break;
              default:
                t();
            }
          }
          throw e;
        });
      }
    });
    t.start();
    yield t.promise();
  })).apply(this, arguments);
}