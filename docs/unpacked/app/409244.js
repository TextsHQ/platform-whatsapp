Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cancelCallNotification", {
  enumerable: true,
  get: function () {
    return i.cancelCallNotification;
  }
});
exports.closeNotifications = function (e) {
  r.WANotificationController.closeOrCancelNotificationsForChat(e.id);
};
exports.showCallNotification = function (e) {
  return r.WANotificationController.triggerNotification(new i.WACallNotification(e));
};
exports.showDeviceSwitchNotification = function (e) {
  return r.WANotificationController.triggerNotification(new a.WADeviceSwitchNotification(e));
};
exports.showMsgNotification = function (e) {
  return r.WANotificationController.triggerNotification(new o.WAMsgNotification({
    msg: e
  }));
};
exports.showPollVoteNotification = function (e) {
  const t = new l.PollVoteNotification({
    creationMsg: e
  });
  const n = r.WANotificationController.getNotification(t.buildKey());
  if (n instanceof l.PollVoteNotification && n.bodyText === t.bodyText) {
    return Promise.resolve();
  }
  return r.WANotificationController.triggerNotification(t);
};
exports.showReactionNotification = function (e) {
  return r.WANotificationController.triggerNotification(new s.WAReactionNotification({
    reactionMsg: e
  }));
};
exports.shutdownAsNeeded = function () {
  r.WANotificationController.closeOrCancelAllNotifications();
};
var r = require("./14346.js");
var i = require("./397128.js");
var a = require("./307025.js");
var o = require("./338993.js");
var s = require("./601738.js");
var l = require("./61481.js");