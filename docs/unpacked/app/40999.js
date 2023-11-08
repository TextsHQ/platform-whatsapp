var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QplNetwork = undefined;
exports.createPayload = l;
exports.defaultQplNetwork = function (e) {
  if (c) {
    if (e) {
      __LOG__(3)`Default Network already init`;
    }
  } else {
    c = new u(e);
  }
  return c;
};
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./15842.js");
var s = require("./632157.js");
function l(e, t) {
  return JSON.stringify(e) + "\n" + t.map(function (e) {
    delete e.app_version;
    delete e.app_build_number;
    if (e.wa_ab_key2 === undefined) {
      e.wa_ab_key2 = "abkey";
    }
    return JSON.stringify(e);
  }).join("\n");
}
class u {
  constructor(e) {
    var t;
    var n;
    var r;
    var o;
    var s;
    var l;
    var u;
    var c;
    var d;
    var p;
    var f;
    this._qplEndpoint = (t = (n = e == null ? undefined : e.qplEndpoint) !== null && n !== undefined ? n : (r = (0, a.getQplConfig)()) === null || r === undefined ? undefined : r.endpoint) !== null && t !== undefined ? t : "";
    this._qplAccessToken = (o = (s = e == null ? undefined : e.qplAccessToken) !== null && s !== undefined ? s : (l = (0, a.getQplConfig)()) === null || l === undefined ? undefined : l.accessToken) !== null && o !== undefined ? o : "";
    this._qplAppId = (u = (c = e == null ? undefined : e.qplAppId) !== null && c !== undefined ? c : (d = (0, a.getQplConfig)()) === null || d === undefined ? undefined : d.appId) !== null && u !== undefined ? u : "";
    this._isDev = (p = e == null ? undefined : e.isDev) !== null && p !== undefined && p;
    this._restInterface = (f = e == null ? undefined : e.restInterface) !== null && f !== undefined ? f : {
      post: (e, t) => fetch(e, {
        method: "POST",
        body: t
      }).then(function () {
        var e = (0, i.default)(function* (e) {
          const t = yield e.text();
          return {
            status: e.status,
            responseText: t
          };
        });
        return function () {
          return e.apply(this, arguments);
        };
      }())
    };
  }
  sendEventsOverNetwork(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = t._isDev ? {
        is_employee: "true"
      } : {};
      const r = t._qplEndpoint;
      const i = new FormData();
      i.append("access_token", t._qplAccessToken);
      i.append("app_id", t._qplAppId);
      if (t._fakeUserId === undefined) {
        t._fakeUserId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
      }
      i.append("user_id", t._fakeUserId);
      i.append("upload_time", (0, s.unixTime)().toString());
      i.append("batch_info", JSON.stringify(n));
      const a = {};
      e.forEach(e => {
        if (e.app_version !== undefined) {
          if (a[e.app_version]) {
            a[e.app_version].push(e);
          } else {
            a[e.app_version] = [e];
          }
        }
      });
      if (Object.keys(a).length === 0) {
        return;
      }
      Object.keys(a).map(e => a[e]).forEach(e => {
        const t = {
          app_version: e[0].app_version,
          app_build_number: e[0].app_build_number
        };
        i.append("batches[]", function (e, t, n) {
          const r = new Blob(e, n || {});
          r.name = t;
          return r;
        }([l(t, e)], "qpldata.txt"));
      });
      const u = yield t._restInterface.post(r, i);
      __LOG__(2, undefined, undefined, undefined, ["qpl"])`qpl_networkSendEventsOverNetwork, completed Request`;
      if (u.status !== 200) {
        throw new o.QplServerStatusCodeError(u.status, `Failed call to QPL endpoint: ${t._qplEndpoint}, response: ${u.responseText}`);
      }
    })();
  }
}
let c;
exports.QplNetwork = u;