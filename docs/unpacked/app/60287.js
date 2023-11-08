var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startQPL = function () {
  (0, i.defaultQplNetwork)({
    restInterface: h,
    isDev: false,
    qplAccessToken: p.qplConfigs.accessToken,
    qplAppId: p.qplConfigs.appId,
    qplEndpoint: p.qplConfigs.endpoint
  });
  const e = (0, l.config)(s);
  if (e.isQplEnabled()) {
    __LOG__(2)`QPL is being initialized`;
    (0, a.start)({
      isQplEnabled: e.isQplEnabled,
      sendEvents: e => (0, i.defaultQplNetwork)().sendEventsOverNetwork(e),
      intervalInSeconds: e.uploadInterval(),
      startDelayInSeconds: e.uploadDelay()
    }, {
      storageApi: new d.QplStorageApi(),
      healthLogger: m
    });
    c.QPL.init(e => {
      (0, o.add)([e]);
      return Promise.resolve();
    }, e.getEventDetails, e.isQplEnabled);
  } else {
    __LOG__(2)`QPL is disabled, throwing Killswitch, will clear database`;
    c.QPL.throwKillswitch(true);
    c.QPL.clearStorage();
  }
};
var i = require("./40999.js");
var a = require("./990439.js");
var o = require("./259812.js");
var s = g(require("./685357.js"));
var l = require("./605243.js");
var u = g(require("./786950.js"));
require("./316348.js");
var c = require("./555622.js");
var d = require("./240963.js");
var p = require("./497890.js");
var f = r(require("./794938.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function g(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}
const m = u;
const h = {
  post: f.default.post
};