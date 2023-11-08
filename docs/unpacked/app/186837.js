var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewsletterMessageDeliveryUpdateNotification = function () {
  return _.apply(this, arguments);
};
exports.handleNewsletterMessageDeliveryUpdateNotificationImpl = g;
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./555884.js");
var s = require("./359987.js");
var l = require("./854379.js");
var u = require("./73225.js");
var c = require("./202917.js");
var d = require("./787671.js");
var p = require("./95589.js");
var f = require("./377773.js");
function _() {
  return (_ = (0, i.default)(function* (e) {
    const {
      makeMessageDeliveryUpdateNotificationResponseAck: t,
      parsedRequest: n
    } = (0, o.receiveMessageDeliveryUpdateNotificationRPC)(e);
    if (!(0, u.isNewsletterEnabled)()) {
      return t();
    }
    try {
      yield g(n.from, n.messageDeliveryUpdatesMessagesMessage, n.t);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][message-delivery-update-notification] Failed to update the db records`;
      SEND_LOGS("newsletter-message-delivery-update-notification-db-fail", 1, "newsletter");
    }
    return t();
  })).apply(this, arguments);
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    const r = (0, l.newsletterJidToWid)(e);
    const {
      updatesToAdd: i,
      updatesToRemove: o
    } = t.reduce((e, t) => {
      if (t.issueCode === 0) {
        e.updatesToRemove.push(t.serverId);
      } else {
        const r = {
          id: t.serverId,
          code: t.issueCode
        };
        if (n != null) {
          r.t = n;
        }
        e.updatesToAdd.push(r);
      }
      return e;
    }, {
      updatesToAdd: [],
      updatesToRemove: []
    });
    (0, d.updateNewsletterMessageDeliveryUpdates)(e, i, o, a.JOB_PRIORITY.HIGH);
    const {
      modelUpdatesToAdd: u,
      modelUpdatesToRemove: _
    } = yield (0, c.getMessageDeliveryUpdatesModelToUpdate)(e, i, o);
    yield (0, s.frontendSendAndReceive)("updateNewsletterMessageDeliveryUpdate", {
      id: r,
      modelUpdatesToAdd: u,
      modelUpdatesToRemove: _
    });
    const g = (0, p.getNewsletterAlertsBannerNuxKey)(e);
    (0, f.resetNux)(g);
  })).apply(this, arguments);
}