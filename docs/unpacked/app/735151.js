var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = r(require("./164325.js"));
var s = require("./481173.js");
var l = require("./292220.js");
var u = require("./177938.js");
var c = require("./374100.js");
var d = require("./124370.js");
var p = r(require("./664496.js"));
var f = r(require("./124928.js"));
const _ = 86400;
class g extends p.default {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.t = (0, s.prop)();
    this.unreadCount = (0, s.prop)(0);
    this.totalCount = (0, s.prop)(0);
    this.pic = (0, s.prop)();
    this._msgs = (0, s.prop)(() => []);
    this.readKeys = (0, s.session)(() => ({}));
    this.contact = (0, s.session)();
    this.expireTimer = (0, s.session)();
    this.expireTs = (0, s.session)();
    this.hasUnread = (0, s.derived)(function () {
      return this.unreadCount > 0;
    }, ["unreadCount"]);
    this.readCount = (0, s.derived)(function () {
      const e = this.totalCount - this.unreadCount;
      if (Number.isFinite(e)) {
        return e;
      } else {
        __LOG__(3)`Bad status v3 read count, ${this.totalCount}, ${this.unreadCount}`;
        return 0;
      }
    }, ["unreadCount", "totalCount"]);
    this.lastStatus = (0, s.derived)(function () {
      return this.msgs.last();
    }, ["msgsChanged", "totalCount"]);
  }
  initialize() {
    super.initialize();
    this.addChild("contact", u.ContactCollection.gadd(this.id));
    this.listenTo(this.msgs, "add bulk_add", () => {
      self.setTimeout(() => {
        this.setupStatusExpiration();
      });
    });
    this.listenTo(this, "change:lastStatus", () => {
      if (this.lastStatus) {
        this.t = this.lastStatus.t;
      }
    });
  }
  isExpired() {
    if (this.id.isPSA()) {
      return (0, d.isExpiredStatusPSA)(this.msgs.toArray(), _);
    } else {
      return (0, a.unixTime)() - this.t > _;
    }
  }
  setupStatusExpiration() {
    const e = this.msgs.at(0);
    if (!e) {
      return;
    }
    if (typeof this.expireTs == "number" && this.expireTs <= e.t) {
      return;
    }
    const t = e.t + _ + 1;
    if (t < (0, a.unixTime)()) {
      self.setTimeout(() => {
        this.expireMsg();
      });
    } else {
      this.expireTimer = o.default.setGlobalTimeout(this.expireMsg.bind(this), t * 1000, this.expireTimer);
      this.expireTs = e.t;
    }
  }
  _removeSingleMsg(e) {
    const t = this.msgs;
    if (this.unreadCount > this.totalCount - 1) {
      this.unreadCount--;
    }
    this.totalCount--;
    t.remove(e);
    e.delete();
  }
  expireMsg() {
    if (this.id.isPSA()) {
      return void this.expirePSAMsg();
    }
    const e = this.msgs;
    for (; e.length > 0;) {
      const t = e.at(0);
      if (!t) {
        break;
      }
      if (t.t + _ > (0, a.unixTime)()) {
        break;
      }
      this._removeSingleMsg(t);
    }
    this.expireTs = undefined;
    this.expireTimer = undefined;
    if (this.totalCount !== 0) {
      this.setupStatusExpiration();
    }
  }
  expirePSAMsg() {
    const e = (0, d.getPSACampaigns)(this.msgs.toArray());
    this.msgs.forEach(t => {
      const {
        campaignId: n
      } = t;
      if (n == null) {
        return;
      }
      if ((0, d.isCampaignExpired)(e[n], _)) {
        this._removeSingleMsg(t);
      }
    });
    this.expireTs = undefined;
    this.expireTimer = undefined;
    if (this.totalCount !== 0) {
      this.setupStatusExpiration();
    }
  }
  revokeMsgs(e) {
    const t = new Set(e);
    this.msgs.filter(e => t.has(e.id.toString())).forEach(e => this._removeSingleMsg(e));
    if (this.totalCount === 0) {
      this.expireTs = undefined;
      this.expireTimer = undefined;
    }
  }
  delete() {
    __LOG__(2)`Status v3 deleted with total count: ${this.totalCount}`;
    super.delete();
    if (this.expireTimer) {
      o.default.clearTimeout(this.expireTimer);
    }
    if (this.expireTs != null) {
      this.expireTs = undefined;
    }
    this.getCollection().remove(this.id);
  }
  onEmptyMRM() {
    __LOG__(2)`Status V3 onEmptyMRM with total count: ${this.totalCount}, noEarlierMsgs: ${this.msgs.msgLoadState.noEarlierMsgs ? "true" : "false"}`;
    if (this.msgs.msgLoadState.noEarlierMsgs && this.totalCount === 0) {
      this.delete();
    } else if (this.totalCount > 0) {
      this.loadMore().catch(() => {}).finally(() => {
        if (!this.msgs.length) {
          this.delete();
        }
      });
    }
  }
  loadMore() {
    if (!(arguments.length > 0 && arguments[0] !== undefined)) {
      l.PAGE_SIZE;
    }
    if (this.msgs.msgLoadState.noEarlierMsgs) {
      return Promise.resolve();
    } else if (this.msgs.msgLoadState.isLoadingEarlierMsgs) {
      return this.msgs.loadEarlierPromise;
    } else {
      this.msgs.msgLoadState.noEarlierMsgs = true;
      return Promise.resolve();
    }
  }
  handleReadStatus(e) {
    if (!this.readKeys[e]) {
      this.readKeys[e] = true;
      if (this.unreadCount > 0) {
        this.unreadCount--;
      }
    }
  }
  sendReadStatus(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      if (yield (0, c.sendReadStatus)(e, t)) {
        n.handleReadStatus(e.id);
      }
    })();
  }
  getCollection() {
    return require("./657694.js").StatusV3Collection;
  }
  containsMessage(e) {
    return this.msgs.toArray().some(t => t.id.toString() === e.toString());
  }
}
g.Proxy = "statusV3";
g.idClass = f.default;
var m = (0, s.defineModel)(g);
exports.default = m;