var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mms4Download = function (e) {
  let {
    directPath: t,
    encFilehash: n,
    staticUrl: r,
    hostname: o,
    type: s,
    signal: l,
    onProgress: u,
    onData: c,
    onHeadersReceived: d,
    mode: p,
    byteRange: _,
    debugString: m,
    downloadBucket: h
  } = e;
  const y = r || (0, f.default)({
    directPath: t,
    encFilehash: n,
    hostname: o,
    type: s,
    mode: p,
    byteRange: _,
    downloadBucket: h
  });
  return function () {
    return g.apply(this, arguments);
  }({
    url: y,
    signal: l,
    onHeadersReceived: d,
    onProgress: u,
    onData: c,
    ciphertextValidator: _ ? null : function () {
      var e = (0, i.default)(function* (e) {
        return (yield (0, a.calculateFilehash)(e)) === n;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    debugString: m,
    debug: {
      encFilehash: n,
      type: s,
      url: y
    }
  });
};
exports.mmsCheckExistence = function () {
  return m.apply(this, arguments);
};
exports.mmsGetEncryptedMediaSize = function () {
  return h.apply(this, arguments);
};
exports.validateMmsResponse = y;
var i = r(require("../vendor/348926.js"));
var a = require("./815612.js");
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./791357.js");
var u = require("./754424.js");
var c = require("./288057.js");
var d = require("./887694.js");
var p = require("./263958.js");
var f = r(require("./126655.js"));
var _ = require("./804074.js");
function g() {
  return (g = (0, i.default)(function* (e) {
    let {
      url: t,
      signal: n,
      onHeadersReceived: r,
      onProgress: i,
      onData: a,
      debug: o,
      debugString: s,
      ciphertextValidator: c
    } = e;
    __LOG__(2)`mmsDownload: [${s}] start`;
    try {
      const e = yield (0, u.extendedFetch)(t, {
        signal: n,
        onProgress: i,
        onData: a,
        onHeadersReceived: r
      });
      yield y({
        response: e,
        functionName: "mmsDownload",
        url: t
      });
      const o = yield e.arrayBuffer();
      if (c && !(yield c(o))) {
        __LOG__(3)`download hash mismatch error. downloaded size: ${o.byteLength}`;
        throw new l.MmsDownloadFilehashMismatchError({
          url: t
        });
      }
      __LOG__(2)`mmsDownload: [${s}] success`;
      return o;
    } catch (e) {
      (0, _.mmsLogError)("mmsDownload", e, o);
      if (e instanceof TypeError) {
        throw new l.HttpNetworkError(e.message);
      }
      throw e;
    }
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const {
      directPath: t,
      encFilehash: n,
      hostname: r,
      type: i,
      signal: a
    } = e;
    yield S({
      directPath: t,
      encFilehash: n,
      hostname: r,
      type: i,
      signal: a,
      functionName: "mmsCheckExistence"
    });
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    const {
      directPath: t,
      encFilehash: n,
      hostname: r,
      type: i,
      signal: a
    } = e;
    const o = (yield S({
      directPath: t,
      encFilehash: n,
      hostname: r,
      type: i,
      signal: a,
      functionName: "mmsGetEncryptedMediaSize"
    })).headers.get("content-length");
    if (!o) {
      throw new c.UnableToGetContentLengthError();
    }
    return parseInt(o, 10);
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    const {
      response: t,
      url: n,
      functionName: r
    } = e;
    if (!t.ok) {
      switch (t.status) {
        case 401:
          throw new p.MMSUnauthorizedError(r, {
            url: n
          });
        case 403:
          {
            if ((yield t.text()).includes("URL signature expired")) {
              throw new p.MediaNotFoundError(r, {
                url: n,
                status: t.status
              });
            }
            const {
              expirationDate: e
            } = (0, d.parseCdnUrlParams)(n);
            if ((0, s.getABPropConfigValue)("web_killswitch_s310872_mitigation") && e != null && (0, o.toDate)((0, o.unixTime)()) >= e) {
              throw new p.MediaNotFoundError(r, {
                url: n,
                status: t.status
              });
            }
            throw new p.MMSForbiddenError(r, {
              url: n
            });
          }
        case 404:
        case 410:
          throw new p.MediaNotFoundError(r, {
            url: n,
            status: t.status
          });
        case 507:
          throw new p.MMSThrottleError(r, {
            url: n
          });
        default:
          throw new l.HttpStatusCodeError(t.status, r, {
            url: n
          });
      }
    }
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    const {
      directPath: t,
      encFilehash: n,
      hostname: r,
      type: i,
      signal: a,
      functionName: o
    } = e;
    const s = (0, f.default)({
      directPath: t,
      encFilehash: n,
      hostname: r,
      type: i,
      mode: "auto"
    });
    const l = yield (0, u.extendedFetch)(s, {
      method: "HEAD",
      signal: a
    });
    yield y({
      response: l,
      functionName: o,
      url: s
    });
    return l;
  })).apply(this, arguments);
}