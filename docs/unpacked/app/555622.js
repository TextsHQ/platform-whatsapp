var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QPL = exports.ALLOWLIST_IMMEDIATE_UPLOAD = exports.ALLOWLIST_DEV_VERBOSE_LOGGING = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./855034.js");
var o = require("./40999.js");
var s = require("./264325.js");
var l = require("./259812.js");
var u = function (e, t) {
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
}(require("./786950.js"));
var c = require("./316348.js");
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
const g = u;
const m = [c.QuickLogMarkerId.WHATSAPP_WEB_TEST_EVENT, c.QuickLogMarkerId.SYNCD, c.QuickLogMarkerId.ALTERNATIVE_DEVICE_LINKING, c.QuickLogMarkerId.OFFLINE_RESUME, c.QuickLogMarkerId.ELECTRON_MACOS_CATALYST_MIGRATION, c.QuickLogMarkerId.DESKTOP_UPSELL_LINK_DEVICE_METRICS];
const h = new Map([[c.QuickLogMarkerId.SYNCD, 100]]);
const y = [c.QuickLogMarkerId.WHATSAPP_WEB_TEST_EVENT];
exports.ALLOWLIST_DEV_VERBOSE_LOGGING = y;
const E = [c.QuickLogMarkerId.ALTERNATIVE_DEVICE_LINKING, c.QuickLogMarkerId.ELECTRON_MACOS_CATALYST_MIGRATION, c.QuickLogMarkerId.DESKTOP_UPSELL_LINK_DEVICE_METRICS];
exports.ALLOWLIST_IMMEDIATE_UPLOAD = E;
const S = {
  cast: e => c.QuickLogMarkerId.cast(e),
  getName: e => c.QuickLogMarkerId.getName(e)
};
s.QPL.setAllowListDevVerboseLogging(y.map(e => e));
s.QPL.setStartupAllowListEventFilter(m);
s.QPL.setQplReducePrecisionMapMs(h);
const v = new d.QplStorageApi();
s.QPL.setStorageApi(v);
s.QPL.setHealthLogger(g);
s.QPL.setEnumConversion(S);
s.QPL.setIsDev(false);
s.QPL.init(function () {
  var e = (0, i.default)(function* (e) {
    if (E.includes(c.QuickLogMarkerId.cast(e.marker_id))) {
      const t = {
        post: f.default.post
      };
      (0, o.defaultQplNetwork)({
        restInterface: t,
        isDev: false,
        qplAccessToken: p.qplConfigs.accessToken,
        qplAppId: p.qplConfigs.appId,
        qplEndpoint: p.qplConfigs.endpoint
      });
      try {
        yield (0, o.defaultQplNetwork)().sendEventsOverNetwork((0, l.createRows)([e]));
      } catch (t) {
        const n = c.QuickLogMarkerId.cast(e.marker_id);
        if (n) {
          __LOG__(2)`${c.QuickLogMarkerId.getName(n)} failed to upload successfully`;
        }
        __LOG__(4, undefined, new Error(), true, ["qpl"])`QPL ondemand upload event failure`;
        SEND_LOGS("QPL ondemand upload event failure", 1, "qpl");
      }
    } else {
      v.add([e]);
    }
    return Promise.resolve();
  });
  return function () {
    return e.apply(this, arguments);
  };
}(), e => ({
  sampleRate: m.includes(c.QuickLogMarkerId.cast(e)) ? 1 : 0,
  samplingMethod: a.QplSampleMethod.EVENT_BASED_SAMPLING
}), () => true);
const T = {
  init(e, t, n) {
    s.QPL.init(e, t, n);
  },
  clearInstance() {
    s.QPL.clearInstance();
  },
  getInstance: () => s.QPL.getInstance(),
  getNextMarkerInstanceValue: e => s.QPL.getNextMarkerInstanceValue(e),
  throwKillswitch(e) {
    s.QPL.throwKillswitch(e);
  },
  clearStorage() {
    s.QPL.clearStorage();
  },
  logActiveQplMarkers() {
    s.QPL.logActiveQplMarkers();
  },
  markerStart: (e, t) => s.QPL.markerStart(e, t),
  markerAnnotate(e, t, n) {
    s.QPL.markerAnnotate(e, t, n);
  },
  markerPoint(e, t, n) {
    s.QPL.markerPoint(e, t, n);
  },
  markerEnd(e, t, n) {
    s.QPL.markerEnd(e, t, n);
  },
  genMarkerEnd: (e, t, n) => s.QPL.genMarkerEnd(e, t, n),
  markerDrop(e, t) {
    s.QPL.markerDrop(e, t);
  },
  getActiveMarkerIDs: e => s.QPL.getActiveMarkerIDs(e),
  getMarker(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return s.QPL.getMarker(e, t);
  },
  getMarkerInstances: e => s.QPL.getMarkerInstances(e)
};
exports.QPL = T;