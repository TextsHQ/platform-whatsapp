var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./898817.js");
var a = r(require("./229922.js"));
var o = r(require("./79291.js"));
const s = {
  GET: "GET",
  POST: "POST",
  HEAD: "HEAD",
  PUT: "PUT"
};
function l(e, t) {
  for (const n in t) {
    e.setRequestHeader(n, t[n]);
  }
}
function u(e, t, n, r, u, c, d) {
  const p = new XMLHttpRequest();
  const f = new Promise((r, i) => {
    p.onload = function (e) {
      if (p.readyState === 4) {
        r(p);
      } else {
        __LOG__(4, undefined, new Error())`xhr.request:onload`;
        i(e);
      }
    };
    p.onerror = e => {
      __LOG__(4, undefined, new Error())`xhr.request:onerror`;
      i(e);
    };
    p.ontimeout = e => {
      __LOG__(4, undefined, new Error())`xhr.request:ontimeout`;
      i(e);
    };
    if (c) {
      p.onprogress = c;
    }
    p.onabort = e => {
      __LOG__(4, undefined, new Error())`xhr.request:onabort`;
      i(e);
    };
    if (n instanceof FormData) {
      p.open(t || s.POST, e, true);
      if (u) {
        p.responseType = u;
      }
      if (d) {
        l(p, d);
      }
      p.send(n);
    } else if (n instanceof Object) {
      const r = o.default.build(e, n);
      p.open(t || s.GET, r, true);
      if (u) {
        p.responseType = u;
      }
      if (d) {
        l(p, d);
      }
      p.send();
    } else {
      p.open(t || s.GET, e, true);
      if (u) {
        p.responseType = u;
      }
      if (d) {
        l(p, d);
      }
      p.send();
    }
  });
  const _ = (0, a.default)(f, r);
  _.catch((0, i.catchAbort)(() => {
    p.abort();
  })).catch(() => {});
  return _;
}
var c = {
  head: function (e, t) {
    return u(e, s.HEAD, null, t);
  },
  get: function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let r = arguments.length > 3 ? arguments[3] : undefined;
    return u(e, s.GET, null, r, t, undefined, n);
  },
  post: function (e, t, n) {
    return u(e, s.POST, t, n);
  },
  request: u,
  VERB: s,
  RESP_TYPE: {
    ARRAY_BUFFER: "arraybuffer",
    BLOB: "blob",
    JSON: "json"
  }
};
exports.default = c;