var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistorySyncLoadMoreMessages = function (e) {
  let {
    mdHistorySyncTransferState: t,
    chatId: n
  } = e;
  const a = (0, T.useModelValues)((0, f.getHistorySyncProgress)(), ["paused", "inProgress"]);
  const w = t === o.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
  const A = n == null ? undefined : n.toJid();
  const [P, O] = (0, M.useState)(() => A != null && new Set(h.inFlightHistorySyncOnDemandRequests.values()).has(A));
  const [k, D] = (0, M.useState)(null);
  let I;
  let R;
  let N;
  (0, S.useListener)(c.WAWebHistorySyncOnDemandEvents, "history_sync_on_demand_events:success_history_sync_od", e => {
    if ((0, _.isHistorySyncOnDemandEnabled)() && e === A) {
      __LOG__(2)`[history sync][on demand] success for chat ${""}`;
      O(false);
      D(true);
    }
  });
  (0, S.useListener)(c.WAWebHistorySyncOnDemandEvents, "history_sync_on_demand_events:error_history_sync_od", e => {
    if ((0, _.isHistorySyncOnDemandEnabled)() && e === A) {
      __LOG__(2)`[history sync][on demand] fail for chat ${""}`;
      O(false);
      D(false);
    }
  });
  if (w && a.inProgress) {
    I = a.paused ? (0, p.SYNCING_PAUSED_CONTEXTUAL_SYSTEM_MESSAGE_TEXT)() : (0, p.SYNC_IN_PROGRESS_CONTEXTUAL_SYSTEM_MESSAGE_TEXT)();
    R = a.paused ? M.default.createElement(r.AlertSyncPausedIcon, {
      width: 14,
      height: 14
    }) : M.default.createElement(y.SyncInProgressIcon, {
      width: 11,
      height: 14
    });
    N = a.paused ? () => {
      m.ModalManager.open(M.default.createElement(d.default, null));
    } : () => {
      m.ModalManager.open(M.default.createElement(s.default, null));
    };
  } else {
    if ((0, _.isHistorySyncOnDemandEnabled)() && t != null && !a.inProgress && !P && !h.historySyncOnDemandRequestsFailureRecord.disableRequestSending) {
      switch (t) {
        case o.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY:
          if (n != null) {
            if (k !== false) {
              I = b.fbt._("Click here to get older messages from your phone.", null, {
                hk: "33Son5"
              });
            } else {
              I = b.fbt._("Couldn't get older messages. Open WhatsApp on your phone and click here to try again.", null, {
                hk: "Z7sWB"
              });
              R = M.default.createElement(r.AlertSyncPausedIcon, {
                width: 14,
                height: 14
              });
            }
            N = () => {
              O(true);
              (0, E.sendPeerDataOperationRequest)(g.Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND, {
                chatId: n
              });
              D(null);
            };
          }
          break;
        case o.ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY:
          I = b.fbt._("Use WhatsApp on your phone to see older messages.", null, {
            hk: "1LRdxK"
          });
      }
    }
    if (I == null) {
      const e = i.Clock.relativeDateStr((0, C.getHistorySyncEarliestDate)());
      I = b.fbt._("Use WhatsApp on your phone to see older messages from before {date}.", [b.fbt._param("date", e)], {
        hk: "2iINqQ"
      });
    }
  }
  if ((0, _.isHistorySyncOnDemandEnabled)() && P) {
    return M.default.createElement("div", {
      className: u.default.wrapper
    }, M.default.createElement("div", {
      className: u.default.historySyncSpinnerWrapper
    }, M.default.createElement(v.Spinner, {
      stroke: 6,
      size: 24,
      color: "highlight"
    })));
  }
  const x = M.default.createElement("div", {
    className: u.default.historySyncStateContainerBody
  }, R, M.default.createElement("div", null, I));
  const L = (0, l.classnamesConvertMeToStylexPlease)({
    [u.default.historySyncSystemMsg]: !w,
    [u.default.historySyncLoadingIndicator]: w,
    [u.default.historySyncStateContainer]: true
  });
  const j = N != null ? M.default.createElement("button", {
    className: L,
    onClick: N
  }, x) : M.default.createElement("div", {
    className: L
  }, x);
  return M.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)(u.default.wrapper, u.default.historySyncStatusWrapper)
  }, j);
};
var r = require("./912670.js");
var o = require("../app/735618.js");
var l = require("../app/396574.js");
var i = require("../app/63014.js");
var u = a(require("./751951.js"));
var s = a(require("./254583.js"));
var c = require("./387589.js");
var d = a(require("./379802.js"));
var f = require("./894795.js");
var p = require("../app/631588.js");
var m = require("../app/114850.js");
var h = require("../app/510306.js");
var g = require("../app/533494.js");
var E = require("../app/437911.js");
var v = require("../app/956113.js");
var _ = require("../app/142601.js");
var y = require("./605181.js");
var C = require("../app/157942.js");
var b = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var S = require("../app/808446.js");
var T = require("../app/655241.js");
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}