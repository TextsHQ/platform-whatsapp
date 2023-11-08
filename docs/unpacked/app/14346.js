var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WANotificationController = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./898817.js");
var o = require("./163755.js");
var s = require("./338993.js");
const l = new class {
  constructor() {
    this.map = new Map();
    this.lastMsgNotifByChat = new Map();
  }
  notificationExists(e) {
    return this.map.has(e);
  }
  getNotification(e) {
    return this.map.get(e);
  }
  closeOrCancelNotification(e) {
    const t = this.getNotification(e);
    if (t) {
      if (t.notificationBanner) {
        t.notificationBanner.close();
      } else if (t.abortController) {
        t.abortController.abort();
      }
      this._removeNotificationFromMap(e);
    }
  }
  closeOrCancelAllNotifications() {
    this.map.forEach((e, t) => {
      this.closeOrCancelNotification(t);
    });
  }
  closeOrCancelNotificationsForChat(e) {
    this.map.forEach((t, n) => {
      if (t.matchesChat(e)) {
        this.closeOrCancelNotification(n);
      }
    });
  }
  triggerNotification(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = e.buildKey();
      t._addNotificationToMap(n, e);
      try {
        const r = yield e.triggerNotification();
        if (r != null) {
          if ((0, s.shouldReplaceMsgNotificationManually)() && e instanceof s.WAMsgNotification) {
            const n = (0, o.getChat)(e.msg).id.toString();
            const i = t.lastMsgNotifByChat.get(n);
            if (i) {
              self.setTimeout(() => i.close(), 2000);
            }
            t.lastMsgNotifByChat.set(n, r);
            r.waitForClose().then(() => {
              if (t.lastMsgNotifByChat.get(n) === r) {
                t.lastMsgNotifByChat.delete(n);
              }
            });
          }
          r.waitForClose().then(() => {
            t._removeNotificationFromMap(n);
          });
        } else {
          __LOG__(2)`WANotificationController: notification not invoked:`;
          t._removeNotificationFromMap(n);
        }
      } catch (e) {
        (0, a.catchAbort)(e => {
          __LOG__(2)`WANotificationController: notification aborted: ${e}`;
          t._removeNotificationFromMap(n);
        })(e);
      }
      return e;
    })();
  }
  _addNotificationToMap(e, t) {
    this.map.set(e, t);
    __LOG__(2)`WANotificationController: adding notification to map ${e}`;
  }
  _removeNotificationFromMap(e, t) {
    __LOG__(2)`WANotificationController:_removeNotificationFromMap attempting to remove ${e}`;
    const n = this.getNotification(e);
    if (n != null) {
      if (t == null || n === t) {
        __LOG__(2)`WANotificationController:_removeNotificationFromMap removing notification with key ${e}`;
        this.map.delete(e);
      } else {
        __LOG__(2)`WANotificationController:_removeNotificationFromMap not removing due to strict equality`;
      }
    } else {
      __LOG__(2)`WANotificationController:_removeNotificationFromMap cannot find notification in map with key: ${e}`;
    }
  }
}();
exports.WANotificationController = l;