var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (!(0, c.getABPropConfigValue)("web_ps_v3_enabled")) {
    return Promise.resolve(t);
  }
  const n = new Uint8Array((0, s.decodeB64)(e));
  i = t;
  f = function () {
    var e = (0, a.default)(function* (e) {
      const {
        uploadedBufferKeys: r,
        metrics: i
      } = yield (0, m.upload_UNSAFE_INTERNAL_DO_NOT_USE)([{
        key: t,
        content: n
      }], d.getToken);
      i.map(h);
      if (r.length === 0) {
        e(t);
      }
      e(undefined);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return (0, u.promiseLoop)(function () {
    var e = (0, a.default)(function* (e, t, n) {
      const a = (0, l.delayMs)((0, o.expBackoff)(n, 120000, 1000, 0.1));
      try {
        yield p.default.waitIfOffline({
          signal: new r().signal
        });
        return yield f(e);
      } catch (t) {
        if (n > 1) {
          __LOG__(3)`wam:sendLogs failure error: ${String(t)}`;
          return e(i);
        } else {
          return a;
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
  var i;
  var f;
};
var a = i(require("../vendor/348926.js"));
var o = require("./250655.js");
var s = require("./417405.js");
var l = require("./8304.js");
var u = require("./904086.js");
var c = require("./287461.js");
var d = require("./262732.js");
var p = i(require("./99398.js"));
var f = require("./699117.js");
var _ = require("./507201.js");
var g = require("./831655.js");
var m = require("./542765.js");
function h(e) {
  const {
    result: t,
    uploadTime: n,
    httpResponseCode: r
  } = e;
  const i = function (e) {
    switch (e) {
      case "success":
        return g.PS_BUFFER_UPLOAD_RESULT.SUCCESS;
      case "error-server-other":
        return g.PS_BUFFER_UPLOAD_RESULT.ERROR_SERVER_OTHER;
      case "error-parsing":
        return g.PS_BUFFER_UPLOAD_RESULT.ERROR_PARSING;
      case "error-decoding":
        return g.PS_BUFFER_UPLOAD_RESULT.ERROR_DECODING;
      case "error-credential":
        return g.PS_BUFFER_UPLOAD_RESULT.ERROR_CREDENTIAL;
      case "error-other":
        return g.PS_BUFFER_UPLOAD_RESULT.ERROR_OTHER;
      default:
        return g.PS_BUFFER_UPLOAD_RESULT.ERROR_ACCESS_TOKEN;
    }
  }(t);
  new f.PsBufferUploadWamEvent({
    psBufferUploadResult: i,
    psBufferUploadT: n,
    psBufferUploadHttpResponseCode: r,
    applicationState: document.visibilityState === "visible" ? _.APPLICATION_STATE.FOREGROUND : _.APPLICATION_STATE.BACKGROUND
  }).commit();
}