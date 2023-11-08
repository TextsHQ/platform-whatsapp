var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logTsBackgroundNavigation = function () {
  v = m({
    surface: "background"
  });
};
exports.logTsForegroundNavigation = function () {
  if (v == null) {
    return;
  }
  h(v);
};
exports.setPendingBackgroundNavigation = function () {
  const e = (0, s.getOrInitTimeSpentSession)();
  const t = function () {
    let e = "unknown";
    if (g.length > 0) {
      e = g[g.length - 1].surface;
    }
    return e;
  }();
  c.default.set(u.KEYS.TIME_SPENT_PENDING_BACKGROUND_NAVIGATION, {
    id: e.id,
    relativeTimestampMs: e.relativeTimestampMs,
    source: t
  });
};
exports.toggleTsNavigationDebug = function () {};
exports.tsNavigationEnter = m;
exports.tsNavigationExit = h;
exports.useTsNavigation = function (e) {
  (0, p.useEffect)(() => {
    const t = m(e != null ? e : {
      surface: "unknown"
    });
    return () => h(t);
  }, []);
};
var i = r(require("../vendor/81109.js"));
var a = require("./685639.js");
var o = require("./287461.js");
var s = require("./177733.js");
var l = require("./407922.js");
var u = require("./94872.js");
var c = r(require("./53575.js"));
var d = require("./402579.js");
var p = require("../vendor/667294.js");
const f = {
  unknown: d.TS_SURFACE.UNKNOWN,
  "chat-list": d.TS_SURFACE.CHAT_LIST,
  chat: d.TS_SURFACE.CHAT_THREAD,
  "community-tab": d.TS_SURFACE.COMMUNITY_TAB,
  "community-info": d.TS_SURFACE.COMMUNITY_HOME,
  "community-navigation": d.TS_SURFACE.COMMUNITY_NAVIGATION,
  "community-subgroup-switcher": d.TS_SURFACE.SUBGROUP_SWITCHER,
  "group-info-drawer": d.TS_SURFACE.CHAT_INFO_PAGE,
  "contact-info-drawer": d.TS_SURFACE.CHAT_INFO_PAGE,
  "status-v3": d.TS_SURFACE.STATUS_HOME_TAB,
  "status-v3-view": d.TS_SURFACE.STATUS_VIEW,
  "new-community-info-drawer": d.TS_SURFACE.COMMUNITY_COMPOSER,
  "media-viewer": d.TS_SURFACE.MEDIA_VIEWER,
  "media-drawer": d.TS_SURFACE.ALL_MEDIA,
  camera: d.TS_SURFACE.CAMERA,
  "youtube-player": d.TS_SURFACE.STREAMING_MEDIA_VIEWER,
  "settings-drawer": d.TS_SURFACE.SETTINGS_HOME_TAB,
  background: d.TS_SURFACE.BACKGROUND,
  "channel-updates-home": d.TS_SURFACE.CHANNEL_UPDATES_HOME,
  "channel-thread": d.TS_SURFACE.CHANNEL_THREAD,
  "channel-directory-home": d.TS_SURFACE.CHANNEL_DIRECTORY,
  "channel-profile": d.TS_SURFACE.CHANNEL_PROFILE,
  "channel-forward": d.TS_SURFACE.CHANNEL_FORWARD,
  "channel-producer-media-editor": d.TS_SURFACE.CHANNEL_PRODUCER_MEDIA_EDITOR,
  "channel-edit-page": d.TS_SURFACE.CHANNEL_EDIT,
  "channel-create-page": d.TS_SURFACE.CHANNEL_CREATE,
  "channel-delete-page": d.TS_SURFACE.CHANNEL_DELETE
};
let _;
const g = [];
function m(e) {
  var t;
  const n = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const r = (1 << f[e.surface] & (0, o.getABPropConfigValue)("ts_surface_killswitch")) != 0 ? {
    id: n,
    surface: "unknown"
  } : (0, i.default)((0, i.default)({}, e), {}, {
    id: n
  });
  const a = (t = g[g.length - 1]) !== null && t !== undefined ? t : {
    surface: "background",
    id: -1
  };
  g.push(r);
  S(a);
  return n;
}
function h(e) {
  const t = g.findIndex(t => t.id === e);
  if (t === -1) {
    return void __LOG__(2)`[time-spent][nav] cleaning up surface id ${e} but it's no longer visible`;
  }
  const n = g[t];
  g.splice(t, 1);
  S(n);
}
let y = [];
const E = new a.ShiftTimer(() => {
  var e;
  if (y.length === 0) {
    return void __LOG__(2)`[time-spent][nav] flushing empty queue!`;
  }
  let t;
  for (const e of y) {
    if (t != null) {
      if (t.destId === e.sourceId) {
        e.event.navigationSource = t.event.navigationSource;
        e.event.relativeTimestampMs = t.event.relativeTimestampMs;
      } else {
        t.event.commit();
      }
      t = e;
    } else {
      t = e;
    }
  }
  if (!((e = t) === null || e === undefined)) {
    e.event.commit();
  }
  y = [];
});
function S(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var d;
  if (!(0, o.getABPropConfigValue)("ts_navigation_community_enabled")) {
    return;
  }
  let p = g[g.length - 1];
  if (p == null) {
    __LOG__(2)`[time-spent][nav] missing destination for navigation from ${e.surface}`;
    p = {
      surface: "unknown",
      id: -1
    };
  }
  if (p.id === ((t = _) === null || t === undefined ? undefined : t.id)) {
    return;
  }
  const m = (0, s.getOrInitTimeSpentSession)();
  !function () {
    const e = c.default.get(u.KEYS.TIME_SPENT_PENDING_BACKGROUND_NAVIGATION);
    if (e == null || typeof e != "object") {
      return;
    }
    const {
      id: t,
      relativeTimestampMs: n,
      source: r
    } = e;
    if (typeof t != "number" || typeof n != "number" || typeof r != "string") {
      return;
    }
    if (f[r] == null) {
      return;
    }
    new l.TsNavigationWamEvent({
      tsSessionId: t,
      relativeTimestampMs: n,
      navigationSource: f[r],
      navigationDestination: f.background
    }).commit();
    c.default.set(u.KEYS.TIME_SPENT_PENDING_BACKGROUND_NAVIGATION, null);
  }();
  if (!(e.surface === "unknown" && p.surface === "unknown")) {
    y.push({
      sourceId: e.id,
      destId: p.id,
      event: new l.TsNavigationWamEvent({
        tsSessionId: m.id,
        relativeTimestampMs: m.relativeTimestampMs,
        navigationSource: f[e.surface],
        navigationDestination: f[p.surface],
        groupSize: (n = p.extras) === null || n === undefined ? undefined : n.groupSize,
        typeOfGroup: (r = p.extras) === null || r === undefined ? undefined : r.typeOfGroup,
        threadType: (i = p.extras) === null || i === undefined ? undefined : i.threadType,
        cid: (a = p.extras) === null || a === undefined || (d = a.channelWid) === null || d === undefined ? undefined : d.user
      })
    });
    E.onOrBefore(100);
    _ = p;
  }
}
let v = null;