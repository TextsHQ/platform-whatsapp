var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = (0, g.default)(() => new s.UiActionWamEvent({
    uiActionType: f.UI_ACTION_TYPE.CHAT_OPEN,
    uiActionPreloaded: true
  })).current;
  const a = (0, g.default)(() => new h.WebcChatOpenWamEvent({
    webcUnreadCount: e.unreadCount,
    webcWindowHeightFloat: (0, u.default)()
  })).current;
  const v = (0, g.default)(() => i.QPL.markerStart(l.QuickLogMarkerId.CHAT_OPEN, {
    annotations: {
      int: {
        unreadMessageCount: e.unreadCount,
        windowHeight: (0, u.default)()
      }
    },
    closePreviousInstanceWithAction: r.QuickLogActionType.ABORTED,
    instanceKeyOption: r.QplInstanceKeyOptions.AUTO_INCREMENT
  }).instanceKey).current;
  (0, E.default)({
    onMount() {
      const r = t();
      if (r != null) {
        a.webcRenderedMessageCount = r;
      }
      a.markWebcChatOpenT();
      i.QPL.markerPoint(l.QuickLogMarkerId.CHAT_OPEN, "chat_open", {
        instanceKey: v
      });
      if (e.isGroup && e.groupMetadata != null) {
        var u;
        const t = e.groupMetadata.isIncognitoCag;
        if (t != null) {
          n.isLid = t;
        }
        if (((u = e.groupMetadata) === null || u === undefined ? undefined : u.cachedDeviceSizeBucket) != null) {
          n.sizeBucket = e.groupMetadata.cachedDeviceSizeBucket;
          Object.assign(n, (0, p.getGroupCountMetricsFromGroupMetadata)(e.groupMetadata));
        }
      } else {
        n.isLid = e.id.isLid();
      }
      if (e.id.isBot()) {
        n.agentEngagementType = c.AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
      }
      n.uiActionChatType = function (e) {
        if (e.isGroup) {
          var t;
          var n;
          if (((t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) === o.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            return d.UI_ACTION_CHAT_TYPE.DEFAULT_SUBGROUP;
          } else if (((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === o.GroupType.LINKED_SUBGROUP) {
            return d.UI_ACTION_CHAT_TYPE.SUBGROUP;
          } else {
            return d.UI_ACTION_CHAT_TYPE.GROUP;
          }
        }
        if (e.isNewsletter) {
          return d.UI_ACTION_CHAT_TYPE.CHANNEL;
        }
        return d.UI_ACTION_CHAT_TYPE.INDIVIDUAL;
      }(e);
      n.markUiActionT();
      n.commit();
      (0, m.logUiActionShadowPrivateStatsTestEvents)();
    },
    onBeforePaint() {
      a.markWebcChatOpenBeforePaintT();
      i.QPL.markerPoint(l.QuickLogMarkerId.CHAT_OPEN, "painted_start", {
        instanceKey: v
      });
    },
    onAfterPaint() {
      const e = t();
      if (e != null) {
        a.webcFinalRenderedMessageCount = e;
        i.QPL.markerAnnotate(l.QuickLogMarkerId.CHAT_OPEN, {
          int: {
            finalRenderedMessageCount: e
          }
        }, {
          instanceKey: v
        });
      }
      a.markWebcChatOpenPaintedT();
      i.QPL.markerPoint(l.QuickLogMarkerId.CHAT_OPEN, "painted_end", {
        instanceKey: v
      });
      a.commit();
      i.QPL.markerEnd(l.QuickLogMarkerId.CHAT_OPEN, r.QuickLogActionType.SUCCESS, {
        instanceKey: v
      });
    },
    onUnmount() {
      i.QPL.markerEnd(l.QuickLogMarkerId.CHAT_OPEN, r.QuickLogActionType.CANCEL, {
        instanceKey: v
      });
    },
    onError() {
      i.QPL.markerEnd(l.QuickLogMarkerId.CHAT_OPEN, r.QuickLogActionType.FAIL, {
        instanceKey: v
      });
    }
  });
};
var r = require("../app/15842.js");
var o = require("../app/862159.js");
var l = require("../app/316348.js");
var i = require("../app/555622.js");
var u = a(require("./731336.js"));
var s = require("./382117.js");
var c = require("../app/800277.js");
var d = require("./210344.js");
var f = require("./744976.js");
var p = require("../app/869513.js");
var m = require("../app/818674.js");
var h = require("./197864.js");
var g = a(require("../app/637660.js"));
var E = a(require("./308876.js"));