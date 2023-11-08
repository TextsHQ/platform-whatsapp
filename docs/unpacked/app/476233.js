var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./724976.js");
var s = require("./351053.js");
var l = require("./713105.js");
var u = require("./780549.js");
var c = require("./174834.js");
var d = require("./877171.js");
var p = require("./862159.js");
var f = r(require("./932325.js"));
var _ = require("./114850.js");
var g = require("./61113.js");
var m = require("./373070.js");
const h = ["title", "notification", "renotify"];
exports.default = class {
  constructor(e, t, n, r) {
    this.close = () => {
      if (this.notification) {
        this._waitForInteractionStop().then(() => {
          if (this.notification && (0, o.isFunction)(this.notification.close)) {
            this.notification.close();
          }
        }).catch(() => {});
      }
    };
    this._handleClose = () => {
      __LOG__(2)`BaseNotificationBanner: _handleClose()`;
      this.waitingPromise.resolver();
      window.removeEventListener("beforeunload", this.close);
      if (this.notification) {
        this.notification.removeEventListener("click", this._handleClick);
        this.notification.removeEventListener("close", this._handleClose);
      }
      if (this.msg) {
        this.msg.off("change:type", this._handleRevoke);
      }
    };
    this._handleClick = () => {
      var e;
      if (!((e = this._onClick) === null || e === undefined)) {
        e.call(this);
      }
      window.focus();
      const t = this.chat;
      const n = this.msg;
      const r = this.doNotOpenChat != null && this.doNotOpenChat;
      if (t) {
        if (!r) {
          var i;
          var a;
          const e = n && n !== t.msgs.last() ? (0, l.getSearchContext)(t, n) : undefined;
          var o;
          if ((0, c.communitiesEnabled)() && ((i = t.groupMetadata) === null || i === undefined ? undefined : i.groupType) === p.GroupType.LINKED_ANNOUNCEMENT_GROUP && ((a = t.groupMetadata) === null || a === undefined ? undefined : a.parentGroup) && n != null && (n.subtype === p.GROUP_ACTIONS.LINKED_GROUP_PROMOTE || n.subtype === p.GROUP_ACTIONS.LINKED_GROUP_DEMOTE)) {
            u.Cmd.openCommunityHome((o = t.groupMetadata) === null || o === undefined ? undefined : o.parentGroup);
          } else {
            u.Cmd.openChatAt(t, e).then(e => {
              if (e) {
                d.ComposeBoxActions.focus(t);
              }
            });
          }
        }
        _.ModalManager.closeMedia();
        this.close();
      }
    };
    this._handleRevoke = () => {
      if (this.msg && this.msg.type === m.MSG_TYPE.REVOKED) {
        this.close();
      }
    };
    this.msg = t != null ? g.MsgCollection.get(t) : null;
    this.chat = s.ChatCollection.get(e);
    this.tag = n;
    this._onClick = r.onClick;
    this.canBlock = r.canBlock;
    this.doNotOpenChat = r.doNotOpenChat;
    const y = new Promise(e => {
      this.waitingPromise = {
        resolver: e
      };
    });
    this.waitingPromise.promise = y;
    const {
      title: E,
      notification: S,
      renotify: v
    } = r;
    const T = (0, a.default)(r, h);
    if (T.body && T.body.charCodeAt(0) >= 128) {
      T.body = " " + T.body;
    }
    try {
      const e = (0, i.default)({
        tag: n,
        renotify: v != null ? v : Boolean(n),
        dir: "auto",
        lang: f.default.getLocale(),
        silent: true
      }, T);
      this.notification = new S(E, e);
      this.notification.addEventListener("error", () => {
        __LOG__(2)`native notification error`;
      });
      this.notification.addEventListener("close", () => {
        __LOG__(2)`native notification close`;
      });
      this.notification.addEventListener("click", this._handleClick);
      this.notification.addEventListener("close", this._handleClose);
      if (this.msg) {
        this.msg.on("change:type", this._handleRevoke);
      }
      window.addEventListener("beforeunload", this.close);
    } catch (e) {
      __LOG__(2)`Failed to create notification: ${e.name}:${e.message}`;
      this.waitingPromise.resolver();
    }
  }
  _waitForInteractionStop() {
    return Promise.resolve();
  }
  waitForClose() {
    return this.waitingPromise.promise;
  }
  detach() {
    this._handleClose();
  }
};