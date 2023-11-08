var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapParsedMediaConn = _;
exports.queryMediaConn = function (e) {
  const t = new Date();
  const n = (0, l.unixTime)();
  const r = (0, u.wap)("iq", {
    to: u.S_WHATSAPP_NET,
    xmlns: "w:m",
    type: "set",
    id: (0, u.generateId)()
  }, (0, u.wap)("media_conn", null));
  const p = (0, a.deprecatedSendIq)(r, o.mediaConnParser).then(e => {
    if (e.success) {
      __LOG__(2)`backend:queryMediaConn: got ${e.result.hosts.length} hosts`;
      const {
        auth: r,
        authTTL: a,
        ttl: o,
        hosts: s,
        maxBuckets: l
      } = _(e.result);
      if (!r || o == null || !s || s.length === 0) {
        __LOG__(2)`backend:queryMediaConnections: auth exists ${String(!!r)}`;
        __LOG__(2)`backend:queryMediaConnections: ttl exists ${String(!!o)}`;
        __LOG__(2)`backend:queryMediaConnections: hosts exists ${String(!!s)}`;
        if (s) {
          __LOG__(2)`backend:queryMediaConnections: hosts.length ${s.length}`;
        }
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("backend:queryMediaConnections unexpected mediaConn");
        throw (0, d.default)("Invalid mediaConn");
      }
      return (0, i.default)({
        queryStartTime: t,
        auth: r,
        hosts: s,
        ttl: o - n,
        maxBuckets: l
      }, a != null ? {
        authTTL: a - n
      } : null);
    }
    __LOG__(4, undefined, new Error(), true)`response: ${e.errorCode} ${e.errorText}`;
    SEND_LOGS("backend:queryMediaConn: fail");
    if (e.errorCode === 507) {
      throw new c.E507(e.errorText, e.errorBackoff);
    }
    throw new c.ServerStatusCodeError(e.errorCode, e.errorText);
  });
  return (0, s.default)(p, e);
};
var i = r(require("../vendor/81109.js"));
var a = require("./250281.js");
var o = require("./798362.js");
var s = r(require("./229922.js"));
var l = require("./632157.js");
var u = require("./716358.js");
var c = require("./984330.js");
var d = r(require("./556869.js"));
function p(e) {
  switch (e) {
    case "kyc-id":
    case "novi-image":
    case "novi-video":
    case "thumbnail-gif":
    case "xma-image":
      return null;
    default:
      return e;
  }
}
function f(e) {
  return {
    hostname: e.domain,
    class: e.class,
    ips: [{
      ip4: e.ip4,
      ip6: e.ip6
    }]
  };
}
function _(e) {
  const t = e => {
    const t = [];
    const n = e.downloadable.map(p).filter(Boolean);
    if (n.length > 0) {
      t.push({
        download: n
      });
    }
    const r = e.uploadable.map(p).filter(Boolean);
    if (r.length > 0) {
      t.push({
        upload: r
      });
    }
    const i = e.downloadBuckets.map(e => e.toString());
    if (i != null && i.length > 0) {
      t.push({
        downloadBuckets: i
      });
    }
    return t;
  };
  return {
    hosts: e.hosts.map(e => (0, i.default)((0, i.default)({}, f(e)), {}, {
      fallback: e.fallback != null ? f(e.fallback) : undefined,
      type: e.isFallback ? "fallback" : "primary",
      rules: t(e)
    })),
    auth: e.authToken,
    authTTL: e.authTokenExpiryTs,
    ttl: e.routesExpiryTs,
    maxBuckets: e.maxBuckets
  };
}