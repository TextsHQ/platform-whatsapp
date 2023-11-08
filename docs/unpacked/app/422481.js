var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreAgents = function () {
  return W.apply(this, arguments);
};
exports.restoreArchiveV2Settings = function () {
  return K.apply(this, arguments);
};
exports.restoreBlocklist = function () {
  return (0, A.getBlocklistTable)().all().then(e => {
    u.BlocklistCollection.initializeFromCache(e.map(s.hydrateWids));
  });
};
exports.restoreCarts = function () {
  return (0, b.getCartTable)().all().then(e => {
    c.CartCollection.initializeFromCache(e.map(s.hydrateWids));
  });
};
exports.restoreChatAssignments = function () {
  return H.apply(this, arguments);
};
exports.restoreCommunityActivity = function () {
  const e = g.default.filter(e => e.isParentGroup).map(e => p.default.syncActivityFor(e.id));
  return Promise.all(e);
};
exports.restoreFavoriteStickers = function () {
  return (0, P.getFavoriteStickersTable)().all().then(e => _.FavoriteStickerCollection.initializeFromCache(e));
};
exports.restoreImportantMetaData = function () {
  return Y.apply(this, arguments);
};
exports.restoreLabelAssociations = function () {
  if ((0, l.canDisplayLabel)()) {
    return (0, I.getLabelAssociationTable)().all().then(e => {
      m.LabelCollection.initializeAssociationsFromCache(e);
    });
  }
  return Promise.resolve();
};
exports.restoreLabels = function () {
  if ((0, l.canDisplayLabel)()) {
    return (0, O.getLabelTable)().all().then(e => {
      m.LabelCollection.initializeFromCache(e);
    });
  }
  return Promise.resolve();
};
exports.restoreMediaUploadResult = function () {
  return (0, R.getNonMessageDataRequestTable)().all().then(e => {
    (0, S.initializeMediaUploadResultFromStorage)(e);
  });
};
exports.restoreQuickReplies = function () {
  if ((0, l.canSendQuickReply)()) {
    return (0, N.getQuickReplyTable)().all().then(e => {
      v.QuickReplyCollection.initializeFromCache(e);
    });
  }
  return Promise.resolve();
};
exports.restoreRecentStickers = function () {
  return (0, D.getRecentStickersTable)().all().then(e => T.RecentStickerCollectionMd.initializeFromCache(e));
};
exports.restoreSubscriptions = function () {
  return V.apply(this, arguments);
};
exports.restoreUnjoinedSubgroups = function () {
  return $.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./919833.js");
var s = require("./147793.js");
var l = require("./72696.js");
var u = require("./474596.js");
var c = require("./290895.js");
var d = require("./412380.js");
var p = r(require("./806711.js"));
var f = require("./445729.js");
var _ = require("./788788.js");
var g = r(require("./667845.js"));
var m = require("./856311.js");
var h = require("./332108.js");
var y = require("./97858.js");
var E = require("./94602.js");
var S = require("./443261.js");
var v = require("./193991.js");
var T = require("./951220.js");
var M = require("./630001.js");
var A = require("./467750.js");
var b = require("./898508.js");
var C = require("./657858.js");
var P = require("./211368.js");
var O = require("./512549.js");
var I = require("./362029.js");
var R = require("./9339.js");
var N = require("./549791.js");
var D = require("./102671.js");
var w = require("./619588.js");
var L = require("./709136.js");
var k = r(require("./634152.js"));
var G = require("./38878.js");
var U = require("./315650.js");
var x = r(require("./22368.js"));
var B = require("./757453.js");
var F = require("./673168.js");
var j = require("./669050.js");
function Y() {
  return (Y = (0, a.default)(function* () {
    __LOG__(2)`[InitFromStorage] will attempt to initialize metadata from storage`;
    f.Conn.trigger("me_ready");
    const e = (0, B.getPushname)();
    const t = yield (0, B.getLastMobilePlatform)();
    if (t == null) {
      __LOG__(4, undefined, new Error())`platform not found in UserPrefs.`;
      return G.Socket.logout(h.LogoutReason.UnknownCompanion);
    }
    yield (0, E.setMobilePlatform)(t, false);
    f.Conn.pushname = e;
    f.Conn.platform = t;
    __LOG__(2)`[InitFromStorage] important metadata loaded`;
  })).apply(this, arguments);
}
function K() {
  return (K = (0, a.default)(function* () {
    if ((0, y.archiveV2Supported)()) {
      const e = yield (0, F.getArchiveV2EnabledSetting)();
      const t = yield (0, F.getUnarchiveChatsSetting)();
      if (e != null) {
        k.default.archive = (0, i.default)((0, i.default)({}, k.default.archive), {}, {
          enabled: e
        });
      }
      if (t != null) {
        k.default.archive = (0, i.default)((0, i.default)({}, k.default.archive), {}, {
          classic: t
        });
      }
    }
  })).apply(this, arguments);
}
function W() {
  return (W = (0, a.default)(function* () {
    if ((0, l.isMultiDeviceMessageAttributionEnabled)()) {
      const e = yield (0, M.getAgentTable)().all();
      o.AgentCollection.initializeFromCache(e);
    }
  })).apply(this, arguments);
}
function V() {
  return (V = (0, a.default)(function* () {
    const e = yield (0, w.getSubscriptionTable)().all();
    U.SubscriptionCollection.initializeFromCache(e);
  })).apply(this, arguments);
}
function H() {
  return (H = (0, a.default)(function* () {
    if ((0, l.chatAssignmentEnabled)()) {
      const e = yield (0, C.getChatAssignmentTable)().all();
      d.ChatAssignmentCollection.initializeFromCache(e);
    }
  })).apply(this, arguments);
}
function $() {
  return ($ = (0, a.default)(function* () {
    try {
      (yield (0, L.getUnjoinedSubgroupMetadataTable)().all()).forEach(e => {
        x.default.add({
          id: (0, j.createWid)(e.id),
          subject: e.subject,
          subjectTime: e.subjectTime,
          defaultSubgroup: e.defaultSubgroup,
          parentGroupId: (0, j.createWid)(e.parentGroup)
        }, {
          merge: true
        });
      });
    } finally {}
  })).apply(this, arguments);
}