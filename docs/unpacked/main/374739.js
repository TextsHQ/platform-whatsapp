var a = require("../vendor/595318.js");
exports.j = undefined;
var r = require("../app/351053.js");
var o = require("../app/780549.js");
var l = require("../app/292220.js");
var i = require("../app/177938.js");
var u = a(require("../app/495976.js"));
var s = a(require("../app/395654.js"));
var c = require("../app/61113.js");
var d = require("../app/192737.js");
var f = require("../app/973981.js");
var p = require("../app/757453.js");
var m = a(require("../app/256695.js"));
var h = require("./189426.js");
function g() {
  return Math.floor(window.performance.now());
}
class E extends s.default {
  constructor() {
    var e;
    super();
    this.timings = {
      chatSync: undefined,
      contactSync: undefined,
      endSync: undefined,
      msgSync: undefined,
      startSync: undefined
    };
    this.data = {
      webcPersistentLoginEnabled: false,
      webcQrCodes: 0,
      webcSyncMessageCount: 0,
      webcSyncMessageSize: 0
    };
    if ((e = window.performance) === null || e === undefined ? undefined : e.now) {
      if ((0, p.knowsPhone)()) {
        this.listenToOnce(o.Cmd, "logout", this.init);
      } else {
        this.init();
      }
    }
  }
  init() {
    this.timings.startSync = f.Stream.lastSyncStart;
    this.listenTo(f.Stream, "change:mode", this.changeStreamMode);
    this.listenTo(r.ChatCollection, l.COLLECTION_HAS_SYNCED, this._handleChatSync);
    this.listenTo(i.ContactCollection, l.COLLECTION_HAS_SYNCED, this._handleContactSync);
    this.listenTo(c.MsgCollection, l.COLLECTION_HAS_SYNCED, this._handleMsgSync);
    this.listenTo(c.MsgCollection, "handle:msg_history", this._handleMsgHistory);
  }
  changeStreamMode() {
    if (f.Stream.mode === f.StreamMode.SYNCING) {
      this.timings.startSync = g();
      this.data.webcPersistentLoginEnabled = true;
    }
    if (f.Stream.mode === f.StreamMode.MAIN) {
      this.timings.endSync = g();
      this.maybeLogToWam();
    }
  }
  _handleChatSync(e) {
    if (e.timing != null) {
      this.data.webcSyncChatT = e.timing;
    } else {
      this.timings.chatSync = g();
    }
    this.data.webcSyncChatCount = e.count;
    this.data.webcSyncChatSize = 10;
    this.maybeLogToWam();
  }
  _handleMsgSync(e) {
    if (e) {
      this.timings.msgSync = g();
      this.data.webcSyncMessageCount += e.count;
    }
    this.maybeLogToWam();
  }
  _handleContactSync(e) {
    if (e.timing != null) {
      this.data.webcSyncContactT = e.timing;
    } else {
      this.timings.contactSync = g();
    }
    this.data.webcSyncContactCount = e.count;
    this.maybeLogToWam();
  }
  _handleMsgHistory(e) {
    this.data.webcSyncMessageSize += e.binarySize;
    this.data.webcSyncMessageCount += e.count;
    if (this.timings.msgSync != null) {
      this.timings.msgSync = g();
    }
  }
  maybeLogToWam() {
    const {
      contactSync: e,
      msgSync: t,
      chatSync: n
    } = this.timings;
    const a = n != null && Number.isFinite(n || this.data.webcSyncChatT);
    const r = e != null && Number.isFinite(e || this.data.webcSyncContactT);
    const o = Number.isFinite(t);
    if (a && r && o) {
      if (!this._commitPromise) {
        this._commitPromise = (0, u.default)().then(e => this._commitEvent(e)).catch(() => {
          __LOG__(3)`wam:Error committing login event`;
        }).finally(() => this.reset());
      }
    }
  }
  _commitEvent(e) {
    const {
      startSync: t,
      endSync: n,
      contactSync: a,
      msgSync: r,
      chatSync: o
    } = this.timings;
    const l = m.default.initialDisplayDate;
    if (l != null && l !== 0 && t != null && n != null && r != null && o != null && a != null && Number.isFinite(l) && Number.isFinite(t) && Number.isFinite(n)) {
      this.data.webcQrLoadT = l;
      this.data.webcQrCodes = m.default.get();
      this.data.webcLoginT = t - l;
      this.data.webcSyncT = n - t;
      this.data.webcSyncMessageT = r - t;
      if (!this.data.webcSyncChatT) {
        this.data.webcSyncChatT = o - t;
      }
      if (!this.data.webcSyncContactT) {
        this.data.webcSyncContactT = a - t;
      }
      this.data.webcBrowserNetworkType = (0, d.getEffectiveNetworkType)();
      if (e) {
        this.data.webcBrowserStorageQuotaBytes = e.quota;
        this.data.webcBrowserStorageQuotaUsedBytes = e.usage;
      }
      new h.WebcLoginWamEvent(this.data).commit();
    } else {
      __LOG__(3)`One or more of the login timings was not logged: `;
    }
  }
  reset() {
    this.stopListening();
    this.data = {
      webcPersistentLoginEnabled: false,
      webcQrCodes: 0,
      webcSyncMessageCount: 0,
      webcSyncMessageSize: 0
    };
    this.timings = {
      chatSync: undefined,
      contactSync: undefined,
      endSync: undefined,
      msgSync: undefined,
      startSync: undefined
    };
    this._commitPromise = undefined;
    this.listenToOnce(o.Cmd, "logout", this.init);
  }
}
exports.j = () => new E();