var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityHomeWrapper = exports.CommunityHomeTheme = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/122583.js");
var i = require("../app/984330.js");
var u = require("../app/351053.js");
var s = require("../app/394164.js");
var c = a(require("../app/806711.js"));
var d = require("../app/255131.js");
var f = require("../app/359198.js");
var p = require("./293486.js");
var m = require("./270443.js");
var h = require("./355351.js");
var g = require("../app/900316.js");
var E = require("../app/113269.js");
var v = require("./510900.js");
var _ = require("./428968.js");
var y = require("../app/428991.js");
var C = require("./382117.js");
var b = require("./834364.js");
var M = require("../app/858029.js");
var S = require("./612180.js");
var T = require("../app/571444.js");
var w = require("../app/965927.js");
var A = require("./744976.js");
var P = require("../app/869513.js");
var O = require("../app/818674.js");
var k = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = x(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var D = a(require("./599888.js"));
var I = a(require("../app/524578.js"));
var R = a(require("../app/637660.js"));
var N = require("../app/808446.js");
function x(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (x = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const L = require("../vendor/76672.js").Mirrored(["TabbedInfo", "Navigation", "CommunityHome"]);
exports.CommunityHomeTheme = L;
const j = (0, k.forwardRef)((e, t) => {
  var n;
  const a = (0, R.default)(() => new C.UiActionWamEvent({
    uiActionType: A.UI_ACTION_TYPE.COMMUNITY_INFO_OPEN,
    uiActionPreloaded: true
  }));
  const {
    jid: x,
    showFullDescription: j,
    callbacks: B,
    theme: F = L.CommunityHome,
    hasFetchedSubgroups: G = false,
    initialTab: U = h.CommunityInfoTabs.Community,
    scrollToMemberList: W
  } = e;
  const H = (0, I.default)(u.ChatCollection, "add", () => u.ChatCollection.get(x));
  const V = (0, I.default)(H == null || (n = H.groupMetadata) === null || n === undefined ? undefined : n.participants, ["bulk_add", "bulk_remove", "reset", "change:isAdmin"], () => {
    var e;
    return Boolean(H == null || (e = H.groupMetadata) === null || e === undefined ? undefined : e.participants.iAmAdmin());
  });
  (0, k.useEffect)(() => {
    const e = a.current;
    if (e) {
      e.markUiActionT();
      const t = H == null ? undefined : H.groupMetadata;
      const n = t == null ? undefined : t.cachedDeviceSizeBucket;
      if (n != null) {
        e.sizeBucket = n;
      }
      if (t) {
        Object.assign(e, (0, P.getGroupCountMetricsFromGroupMetadata)(t));
      }
      e.commit();
      a.current = undefined;
      (0, O.logUiActionShadowPrivateStatsTestEvents)();
    }
    const t = F === L.Navigation ? w.SURFACE_TYPE.COMMUNITY_NAV : w.SURFACE_TYPE.COMMUNITY_HOME;
    new f.CommunityGroupJourneyEvent({
      action: T.CHAT_FILTER_ACTION_TYPES.VIEW,
      surface: t,
      chat: H
    }).commit();
  }, []);
  const q = () => {
    if (B.onBack) {
      B.onBack();
    } else {
      g.DrawerManager.closeDrawerLeft();
    }
  };
  function Y() {
    return (Y = (0, o.default)(function* () {
      if (H) {
        yield Promise.all(yield (0, M.databaseUpdatesForDeactivateCommunity)(H.id, false));
        (0, S.updateModelsForDeactivateCommunity)(H.id);
      }
    })).apply(this, arguments);
  }
  function z() {
    return (z = (0, o.default)(function* () {
      if (H) {
        yield Promise.all(yield (0, M.databaseUpdatesForExitedCommunity)(H.id));
        (0, S.updateModelsForExitedCommunity)(H.id);
      }
    })).apply(this, arguments);
  }
  (0, k.useEffect)(() => {
    const e = u.ChatCollection.get(x);
    (0, E.queryAndUpdateGroupMetadataById)(x).catch((0, l.filteredCatch)(i.ServerStatusCodeError, t => {
      if (!(0, s.isIntegritySuspendedCommunity)(e)) {
        if (t.status === 403) {
          q();
          (0, _.showCommunityHomeError)(t);
          (function () {
            z.apply(this, arguments);
          })();
        } else if (t.status === 404) {
          q();
          (0, _.showCommunityHomeError)(t);
          (function () {
            Y.apply(this, arguments);
          })();
        }
      }
    }));
    if ((0, s.isIntegritySuspendedCommunity)(e)) {
      (0, y.openTerminatedCommunityModal)();
    }
  }, [x]);
  (0, N.useListener)(H == null ? undefined : H.groupMetadata, "exitParentGroup", q);
  (0, k.useEffect)(() => {
    var e;
    if (!G) {
      (0, v.queryAndUpdateSubgroupsMetadata)(x, H == null || (e = H.groupMetadata) === null || e === undefined ? undefined : e.joinedSubgroups);
    }
  }, [x, G]);
  (0, D.default)(H);
  const K = (0, R.default)(() => H ? c.default.getActivityFor(H.id).filter(e => e.type === d.ActivityTypeType.SUB_GROUP_LINK) : []);
  const Q = K.current.map(e => {
    let {
      subgroupId: t
    } = e;
    return t;
  });
  const X = () => {
    if ((H == null ? undefined : H.groupMetadata) && Q.length) {
      (0, b.updateLastSeenTimestamp)(H.groupMetadata);
      c.default.remove(K.current);
    }
    B.onBack();
  };
  const Z = {
    callbacks: B,
    chat: H,
    isAdmin: V
  };
  switch (F) {
    case L.TabbedInfo:
      return k.default.createElement(h.CommunityTabbedInfoDrawer, (0, r.default)({
        ref: t,
        initialTab: U,
        showFullDescription: j,
        scrollToMemberList: W
      }, Z));
    case L.Navigation:
      return k.default.createElement(m.CommunityNavigation, (0, r.default)({
        ref: t,
        highlightedSubgroups: Q,
        onBack: X
      }, Z));
    case L.CommunityHome:
  }
  return k.default.createElement(p.CommunityHome, (0, r.default)({
    ref: t,
    highlightedSubgroups: Q,
    showFullDescription: j,
    onBack: X
  }, Z));
});
exports.CommunityHomeWrapper = j;
j.displayName = "CommunityHomeWrapper";