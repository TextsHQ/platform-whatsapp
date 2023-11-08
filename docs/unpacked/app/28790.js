var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = i(require("../vendor/506479.js"));
var o = i(require("../vendor/81109.js"));
var s = i(require("../vendor/348926.js"));
var l = require("./672076.js");
var u = i(require("./670983.js"));
var c = i(require("./60748.js"));
var d = i(require("./616144.js"));
var p = require("./643235.js");
var f = require("./68799.js");
var _ = i(require("./864204.js"));
var g = i(require("./774513.js"));
var m = i(require("./504187.js"));
var h = require("./667854.js");
var y = require("./804074.js");
var E = i(require("./55144.js"));
var S = require("./262912.js");
var v = i(require("./180813.js"));
var T = require("./454889.js");
var M = require("./708761.js");
var A = i(require("./166034.js"));
var b = i(require("./99398.js"));
var C = require("./937849.js");
const P = ["ciphertextHmac"];
function O() {
  return (O = (0, s.default)(function* (e) {
    const {
      encFilehash: t,
      signal: n,
      type: r,
      mediaId: i
    } = e;
    let a = false;
    const u = {
      encFilehash: e.encFilehash,
      type: e.type
    };
    __LOG__(2)`mmsClient.checkIfUploadExists: start`;
    try {
      let u = null;
      const c = yield (0, l.exponentialBackoff)((0, o.default)((0, o.default)({}, _.default), {}, {
        signal: n
      }), function () {
        var o = (0, s.default)(function* (o, s) {
          __LOG__(2)`mmsClient.checkIfUploadExists: attempt #${s + 1}`;
          yield b.default.waitIfOffline({
            signal: n
          });
          try {
            const {
              auth: o,
              selectedHost: l,
              fallbackHost: c
            } = yield p.mediaHosts.getHostsInfo({
              operation: A.default.UPLOAD,
              encFilehash: t,
              type: r,
              signal: n
            });
            const d = (0, v.default)({
              selectedHost: l,
              fallbackHost: c,
              lastHostUsed: u,
              attemptCount: s,
              lastFetchMadeProgress: a
            });
            u = d;
            return yield (0, g.default)({
              auth: o,
              encFilehash: t,
              hostname: d.hostname,
              type: r,
              signal: n,
              onProgress: () => {
                a = true;
              },
              mediaId: i,
              token: e.token
            });
          } catch (e) {
            if ((0, f.isErrorRetryable)(e)) {
              return o(e);
            }
            throw e;
          }
        });
        return function () {
          return o.apply(this, arguments);
        };
      }());
      __LOG__(2)`mmsClient.checkIfUploadExists: success`;
      return c;
    } catch (e) {
      (0, y.mmsLogError)("mmsClient.checkIfUploadExists", e, u);
      throw e;
    }
  })).apply(this, arguments);
}
function I() {
  return (I = (0, s.default)(function* (e) {
    const {
      encFilehash: t,
      type: n,
      onUploadAttemptSuccess: r
    } = e;
    __LOG__(2)`mmsClient.upload: start`;
    try {
      if ((0, T.shouldUseStreamingUpload)(e.ciphertextHmac.byteLength, e.type)) {
        const {
          ciphertextHmac: t
        } = e;
        const n = (0, a.default)(e, P);
        const r = new T.UploadStreamer(n);
        return yield r.uploadCompleteFile({
          ciphertextHmac: t
        });
      }
      const {
        response: t,
        retryStartTime: n
      } = yield U(e);
      r(Date.now() - n);
      __LOG__(2)`mmsClient.upload: success`;
      return (0, u.default)(t, "response");
    } catch (e) {
      (0, y.mmsLogError)("mmsClient.upload", e, {
        encFilehash: t,
        type: n
      }, false);
      throw e;
    }
  })).apply(this, arguments);
}
function R() {
  return (R = (0, s.default)(function* (e) {
    const {
      directPath: t,
      filehash: n,
      type: r,
      debugString: i,
      staticUrl: a,
      onDownloadAttemptSuccess: o
    } = e;
    __LOG__(2)`mmsClient.download: [${i}] start`;
    try {
      const {
        response: t,
        retryStartTime: n
      } = yield w(e);
      o(Date.now() - n);
      __LOG__(2)`mmsClient.download: [${i}] success`;
      return t;
    } catch (e) {
      (0, y.mmsLogError)("mmsClient.download", e, {
        directPath: t,
        filehash: n,
        type: r,
        staticUrl: a
      });
      throw e;
    }
  })).apply(this, arguments);
}
function N(e, t) {
  const {
    directPath: n,
    encFilehash: r,
    type: i,
    signal: a
  } = t;
  __LOG__(2)`runTaskWithBackoff: start`;
  return (0, l.exponentialBackoff)((0, o.default)((0, o.default)({}, _.default), {}, {
    signal: a
  }), function () {
    var t = (0, s.default)(function* (t, o) {
      __LOG__(2)`runMmsTaskWithBackoff: attempt #${o + 1}`;
      try {
        const t = yield function () {
          return D.apply(this, arguments);
        }({
          operation: A.default.DOWNLOAD,
          directPath: n,
          encFilehash: r,
          type: i,
          signal: a,
          failCount: o
        });
        return yield e(t);
      } catch (e) {
        if ((0, f.isErrorRetryable)(e)) {
          return t(e);
        }
        throw e;
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
}
function D() {
  return (D = (0, s.default)(function* (e) {
    const {
      failCount: t,
      operation: n,
      directPath: r,
      encFilehash: i,
      type: a,
      signal: o
    } = e;
    const {
      selectedHost: s,
      fallbackHost: l
    } = yield p.mediaHosts.getHostsInfo({
      operation: n,
      directPath: r,
      encFilehash: i,
      type: a,
      signal: o
    });
    return (t >= 2 && l ? l : s).hostname;
  })).apply(this, arguments);
}
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, s.default)(function* (e) {
    let {
      debugString: t,
      signal: n,
      directPath: i,
      filehash: a,
      staticUrl: g,
      type: m,
      onDownloadHostFound: y,
      mode: E,
      byteRange: T,
      onDownloadAttemptError: M,
      onData: b,
      onProgress: C
    } = e;
    let P = Date.now();
    let O = false;
    let I = null;
    const R = yield (0, l.exponentialBackoff)((0, o.default)((0, o.default)({}, _.default), {}, {
      signal: n
    }), function () {
      var e = (0, s.default)(function* (e, o) {
        P = Date.now();
        __LOG__(2)`mmsClient.download: [${t}] attempt #${o + 1}`;
        const l = e => p.mediaHosts.getHostsInfo({
          operation: A.default.DOWNLOAD,
          directPath: i,
          encFilehash: a,
          type: m,
          signal: n,
          forceRefresh: e
        });
        try {
          const {
            selectedHost: e,
            fallbackHost: u
          } = yield l();
          let p = (0, v.default)({
            selectedHost: e,
            fallbackHost: u,
            attemptCount: o,
            lastHostUsed: I,
            lastFetchMadeProgress: O
          });
          I = p;
          y({
            hostName: p.hostname,
            hostClass: p.class,
            failCount: o
          });
          let f = 0;
          let _ = null;
          const M = {
            selectedHost: e,
            fallbackHost: u
          };
          const A = e => {
            if (e != null && _ == null) {
              const t = e.get("Content-Length");
              const n = parseInt(t, 10);
              _ = Number.isNaN(n) ? null : n;
            }
          };
          return yield (0, d.default)(function () {
            var e = (0, s.default)(function* (e) {
              let {
                retry: o,
                failCount: s
              } = e;
              const u = e => {
                if (!(C == null)) {
                  C(e);
                }
                O = true;
                if (e.lengthComputable) {
                  f = e.loaded;
                }
              };
              f = 0;
              const d = new r();
              const {
                signal: y
              } = d;
              const v = yield (0, c.default)([n, y], e => {
                const n = (0, h.mms4Download)({
                  directPath: i,
                  encFilehash: a,
                  staticUrl: g,
                  hostname: p.hostname,
                  type: m,
                  signal: e,
                  mode: E,
                  byteRange: T,
                  debugString: t,
                  onHeadersReceived: A,
                  onProgress: u,
                  onData: b,
                  downloadBucket: p.selectedBucket
                }).then(e => ({
                  kind: "download-completed",
                  arrayBuffer: e
                }));
                const r = (0, S.shouldPollDownloadHosts)(m, _) ? (0, S.pollMediaHosts)({
                  connectionBlock: M,
                  getHost: () => p,
                  getMediaHosts: () => l(true),
                  getRemainingBytes: () => _ != null ? _ - f : null,
                  signal: e
                }).then(e => ({
                  kind: "host-changed",
                  host: e
                })) : null;
                return Promise.race([n, r].filter(Boolean)).finally(() => d.abort());
              });
              if (v.kind === "host-changed") {
                p = v.host;
                I = p;
                return o();
              } else {
                return v.arrayBuffer;
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          }());
        } catch (t) {
          O = false;
          const n = (0, f.isErrorRetryable)(t);
          if (!(!n || o === _.default.retries)) {
            M({
              error: t,
              overallT: Date.now() - P,
              failCount: o
            });
          }
          if (n) {
            return e(t);
          }
          throw t;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    return {
      response: (0, u.default)(R, "response"),
      retryStartTime: P
    };
  })).apply(this, arguments);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, s.default)(function* (e) {
    let {
      auth: t,
      encFilehash: n,
      hostname: r,
      type: i,
      signal: a,
      byteLength: o,
      byteOffset: s,
      failCount: l,
      mediaId: u,
      token: c
    } = e;
    if (s != null && l === 0) {
      return s;
    }
    if (!(0, S.shouldPollUploadHosts)(i, o)) {
      return 0;
    }
    try {
      const e = yield (0, g.default)({
        auth: t,
        encFilehash: n,
        hostname: r,
        type: i,
        signal: a,
        mediaId: u,
        token: c
      });
      if (e.complete) {
        return 0;
      }
      const {
        resume: s
      } = e;
      if (s >= o) {
        return 0;
      } else {
        return s;
      }
    } catch (e) {
      __LOG__(4, true, new Error(), true)`Failed to compute upload offset`;
      SEND_LOGS("upload-offset-failed");
      return 0;
    }
  })).apply(this, arguments);
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, s.default)(function* (e) {
    const {
      ciphertextHmac: t,
      encFilehash: n,
      type: i,
      signal: a,
      onUploadHostFound: u,
      onUploadAttemptError: g,
      onProgress: m,
      byteOffset: h,
      mediaId: y
    } = e;
    let T = false;
    let M = Date.now();
    let P = null;
    return {
      response: yield (0, l.exponentialBackoff)((0, o.default)((0, o.default)({}, _.default), {}, {
        signal: a
      }), function () {
        var o = (0, s.default)(function* (o, l) {
          const O = e => p.mediaHosts.getHostsInfo({
            operation: A.default.UPLOAD,
            encFilehash: n,
            type: i,
            signal: a,
            forceRefresh: e
          });
          M = Date.now();
          __LOG__(2)`mmsClient.upload: attempt #${l + 1}`;
          try {
            yield b.default.waitIfOffline({
              signal: a
            });
            const {
              auth: o,
              selectedHost: p,
              fallbackHost: f
            } = yield O();
            const _ = {
              selectedHost: p,
              fallbackHost: f
            };
            let g = (0, v.default)({
              selectedHost: p,
              fallbackHost: f,
              attemptCount: l,
              lastHostUsed: P,
              lastFetchMadeProgress: T
            });
            P = g;
            u({
              hostName: g.hostname,
              hostClass: g.class,
              failCount: l
            });
            return yield (0, d.default)(function () {
              var u = (0, s.default)(function* (s) {
                let {
                  retry: u
                } = s;
                const d = yield k({
                  auth: o,
                  encFilehash: n,
                  byteLength: t.byteLength,
                  hostname: g.hostname,
                  type: i,
                  signal: a,
                  byteOffset: h,
                  failCount: l,
                  mediaId: y,
                  token: e.token
                });
                const p = new r();
                const {
                  signal: f
                } = p;
                const v = yield (0, c.default)([a, f], r => {
                  const s = (0, S.shouldPollUploadHosts)(i, t.byteLength) ? (0, S.pollMediaHosts)({
                    connectionBlock: _,
                    getHost: () => g,
                    getMediaHosts: () => O(true),
                    getRemainingBytes: () => t.byteLength,
                    signal: r
                  }).then(e => ({
                    kind: "host-changed",
                    host: e
                  })) : null;
                  const l = (0, E.default)({
                    auth: o,
                    ciphertextHmac: d > 0 ? new Uint8Array(t).subarray(d) : t,
                    hostname: g.hostname,
                    encFilehash: n,
                    type: i,
                    signal: a,
                    onProgress: e => {
                      T = true;
                      m(e, d);
                    },
                    byteRange: d > 0 ? {
                      start: d,
                      end: t.byteLength
                    } : undefined,
                    mediaId: y,
                    token: e.token
                  }).then(e => ({
                    kind: "upload-completed",
                    value: e
                  }));
                  return Promise.race([l, s].filter(Boolean)).finally(() => p.abort());
                });
                if (v.kind === "host-changed") {
                  g = v.host;
                  P = g;
                  return u();
                } else {
                  return v.value;
                }
              });
              return function () {
                return u.apply(this, arguments);
              };
            }());
          } catch (e) {
            T = false;
            const t = (0, f.isErrorRetryable)(e);
            if (!(!t || l === _.default.retries)) {
              g(e, Date.now() - M, l, C.OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD);
            }
            if (t) {
              return o(e);
            }
            throw e;
          }
        });
        return function () {
          return o.apply(this, arguments);
        };
      }()),
      retryStartTime: M
    };
  })).apply(this, arguments);
}
function B() {
  return (B = (0, s.default)(function* (e) {
    const {
      failCount: t,
      operation: n,
      directPath: r,
      encFilehash: i,
      type: a,
      signal: o
    } = e;
    const {
      selectedHost: s,
      fallbackHost: l,
      auth: u
    } = yield p.mediaHosts.getHostsInfo({
      operation: n,
      directPath: r,
      encFilehash: i,
      type: a,
      signal: o
    });
    return {
      hostname: (t >= 2 && l ? l : s).hostname,
      auth: u
    };
  })).apply(this, arguments);
}
var F = {
  download: function () {
    return R.apply(this, arguments);
  },
  upload: function () {
    return I.apply(this, arguments);
  },
  checkExistence: function (e) {
    return N(t => (0, h.mmsCheckExistence)((0, o.default)((0, o.default)({}, e), {}, {
      hostname: t
    })), e);
  },
  getEncryptedMediaSize: function (e) {
    return N(t => (0, h.mmsGetEncryptedMediaSize)((0, o.default)((0, o.default)({}, e), {}, {
      hostname: t
    })), e);
  },
  checkIfUploadExists: function () {
    return O.apply(this, arguments);
  },
  deleteMdHistorySyncBlob: function (e) {
    const {
      directPath: t,
      encFilehash: n
    } = e;
    return function (e, t) {
      const {
        directPath: n,
        encFilehash: r,
        type: i,
        signal: a,
        operation: u
      } = t;
      __LOG__(2)`runTaskWithBackoff: start`;
      return (0, l.exponentialBackoff)((0, o.default)((0, o.default)({}, _.default), {}, {
        signal: a
      }), function () {
        var t = (0, s.default)(function* (t, o) {
          __LOG__(2)`runMmsTaskWithBackoff: attempt #${o + 1}`;
          try {
            const {
              hostname: t,
              auth: s
            } = yield function () {
              return B.apply(this, arguments);
            }({
              operation: u,
              directPath: n,
              encFilehash: r,
              type: i,
              signal: a,
              failCount: o
            });
            return yield e(t, s);
          } catch (e) {
            if ((0, f.isErrorRetryable)(e)) {
              return t(e);
            }
            throw e;
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      }());
    }((e, r) => (0, m.default)({
      directPath: t,
      hostname: e,
      encFilehash: n,
      auth: r
    }), (0, o.default)((0, o.default)({}, e), {}, {
      type: M.MEDIA_TYPES.IMAGE,
      operation: A.default.UPLOAD
    }));
  }
};
exports.default = F;