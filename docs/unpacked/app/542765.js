var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFinishedPrivateStatsBuffers = function (e) {
  return (0, u.getFinishedStreamBuffers)("private").then(t => v(t, e));
};
exports.upload_UNSAFE_INTERNAL_DO_NOT_USE = v;
var i = r(require("../vendor/311504.js"));
var a = require("./417405.js");
var o = require("./301055.js");
var s = require("./721569.js");
var l = require("./632157.js");
var u = require("./975276.js");
const c = "https://dit.whatsapp.net/deidentified_telemetry";
const d = "245118376424571|3e7d275052f1522bf3200afcf53841a7";
const p = "WAMEventBuffer.dat";
const f = 111000;
const _ = 3067002;
const g = 3067003;
const m = 3067004;
function h(e) {
  return {
    result: e.result,
    httpResponseCode: e.httpResponseCode,
    uploadTime: (0, l.monotonicTimeSince)(e.uploadStartTime)
  };
}
function y() {
  return (y = (0, i.default)(function* (e, t, n, r) {
    if ((yield (0, u.privateStatsKillSwitchGetBlockedToken)()) === d) {
      __LOG__(2)`Removing private stats buffer without submitting it (kill switch)`;
      return (0, u.removeBufferByKey)(n.key).then(() => {
        e();
      });
    }
    const i = (0, l.monotonicTime)();
    const s = yield r();
    if (s == null) {
      __LOG__(4, undefined, new Error())`Couldn't get token to submit a private stats buffer`;
      return void e();
    }
    const f = new FormData();
    f.append("access_token", d);
    const _ = yield (0, o.hmacSha256)(s.sharedSecret, n.content);
    const g = (0, a.encodeB64UrlSafe)(s.token, true);
    const m = (0, a.encodeB64UrlSafe)(_, true);
    let h;
    f.append("credential", `${g}+${m}`);
    f.append("message", new Blob([n.content], {
      type: "application/octet-stream"
    }), p);
    f.append("meta_data", JSON.stringify({
      t: (0, l.unixTime)(),
      p: 0
    }));
    try {
      h = yield fetch(c, {
        method: "POST",
        body: f,
        "Content-Type": "multipart/form-data"
      });
    } catch (e) {
      __LOG__(3)`Upload of a private stats buffer failed: ${e}`;
      return void t({
        uploadStartTime: i,
        result: "error-other"
      });
    }
    const y = h.status;
    const S = t => {
      e({
        uploadStartTime: i,
        httpResponseCode: y,
        result: t
      });
    };
    const v = e => {
      t({
        uploadStartTime: i,
        httpResponseCode: y,
        result: e
      });
    };
    switch (y) {
      case 200:
        return (0, u.removeBufferByKey)(n.key).then(() => {
          S("success");
        });
      case 429:
        return void S("error-server-other");
      case 401:
        return Promise.all([(0, u.privateStatsKillSwitchSet)(d), (0, u.removeBufferByKey)(n.key)]).then(() => {
          S("error-access-token");
        });
      case 400:
        {
          const {
            result: n,
            shouldRetry: r
          } = yield E(h);
          const a = {
            uploadStartTime: i,
            httpResponseCode: y,
            result: n
          };
          return void (r === "retry" ? t(a) : e(a));
        }
      case 500:
        return void v("error-server-other");
    }
    __LOG__(3)`Unsupported response status code from PrivateStats upload request: ${y}`;
    v("error-other");
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = yield e.json().catch(() => {});
    if (typeof t != "object") {
      __LOG__(3)`Unable to parse error response 400 from PrivateStats upload request or parsed response is not an object`;
      return {
        result: "error-other",
        shouldRetry: "retry"
      };
    }
    const {
      error: n
    } = t;
    if (typeof n != "object") {
      __LOG__(3)`Incorrect or missing error entry in the error response 400 from PrivateStats upload request`;
      return {
        result: "error-other",
        shouldRetry: "retry"
      };
    }
    const {
      code: r,
      error_subcode: i
    } = n;
    if (typeof r != "number" || typeof i != "number") {
      __LOG__(3)`Incorrect code or subcode in the error response 400 from PrivateStats upload request`;
      return {
        result: "error-other",
        shouldRetry: "retry"
      };
    }
    switch (r) {
      case 9:
        return {
          result: "error-server-other",
          shouldRetry: "no-retry"
        };
      case f:
        switch (i) {
          case _:
            return {
              result: "error-parsing",
              shouldRetry: "retry"
            };
          case g:
            return {
              result: "error-decoding",
              shouldRetry: "retry"
            };
          case m:
            return {
              result: "error-credential",
              shouldRetry: "retry"
            };
          default:
            __LOG__(3)`Unsupported subcode value in the error response 400 from PrivateStats upload request: ${i}`;
            return {
              result: "error-other",
              shouldRetry: "retry"
            };
        }
      default:
        __LOG__(3)`Unsupported code value in the error response 400 from PrivateStats upload request: ${r}`;
        return {
          result: "error-other",
          shouldRetry: "retry"
        };
    }
  })).apply(this, arguments);
}
function v(e, t) {
  const n = e.map(e => {
    let n = 3;
    const r = [];
    const i = new s.PromiseRetryLoop({
      name: "uploadPrivateStatsBuffer",
      timer: {
        algo: {
          type: "exponential",
          first: 250
        },
        max: 1000
      },
      code: i => function () {
        return y.apply(this, arguments);
      }(i, e => {
        const t = h(e);
        r.push(t);
        if (n <= 0) {
          i();
        } else {
          n--;
        }
      }, e, t)
    });
    i.start();
    return i.promise().then(t => {
      if (t != null) {
        const e = h(t);
        r.push(e);
      }
      return {
        uploadedBufferKey: (t == null ? undefined : t.result) === "success" ? e.key : null,
        metrics: r
      };
    });
  });
  return Promise.all(n).then(e => {
    const t = e.reduce((e, t) => {
      e.push(...t.metrics);
      return e;
    }, []);
    return {
      uploadedBufferKeys: e.reduce((e, t) => {
        if (t.uploadedBufferKey != null) {
          e.push(t.uploadedBufferKey);
        }
        return e;
      }, []),
      metrics: t
    };
  });
}