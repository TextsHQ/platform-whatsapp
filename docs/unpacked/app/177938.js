var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactCollectionImpl = exports.ContactCollection = undefined;
var i = r(require("../vendor/23279.js"));
var a = require("./392125.js");
var o = require("./710933.js");
var s = require("./572002.js");
var l = require("./608919.js");
var u = require("./660666.js");
var c = r(require("./102130.js"));
var d = r(require("./653305.js"));
var p = r(require("./932325.js"));
var f = require("./226562.js");
var _ = require("./38878.js");
var g = require("./129417.js");
var m = require("./757453.js");
var h = require("./459857.js");
class y extends a.BaseCollection {
  constructor() {
    super();
    this._contactHashes = new d.default();
    this.checksum = undefined;
    this._frequentContacts = {};
    this._sort = (0, i.default)(() => super.sort(), 1000);
    this._silentSort = (0, i.default)(() => super.sort({
      silent: true
    }), 1000);
    this.findImpl = e => {
      const t = this.get(e);
      if (t) {
        return Promise.resolve({
          id: t.id,
          stale: t.stale
        });
      } else {
        return Promise.resolve({
          id: e
        });
      }
    };
    this.listenTo(p.default, "locale_change", () => this.sort());
    this.listenTo(this, "change:name", this.sort);
    this.listenTo(_.Socket, "change:stream", () => {
      if (_.Socket.stream === f.SOCKET_STREAM.RESUMING) {
        this.forEach(e => {
          e.unset("verificationString");
          e.unset("verificationBinary");
        });
      }
    });
    this.listenTo(this, "add", this.contactAdded);
    this.listenTo(this, "remove", this.contactRemoved);
  }
  sort(e) {
    if (e == null ? undefined : e.silent) {
      return this._silentSort();
    } else {
      return this._sort();
    }
  }
  ensureSorted() {
    this._sort.flush();
  }
  initializeFromCache(e) {
    if (e) {
      __LOG__(2)`Store:Contact init from cache`;
      this.add(e, {
        silent: true,
        merge: true
      });
    }
  }
  contactAdded(e) {
    this._contactHashes.put(e);
  }
  contactRemoved(e) {
    this._contactHashes.remove(e);
  }
  delete() {
    super.delete();
    this.setChecksum();
    delete this.checksum;
    this._frequentContacts = {};
    (0, l.setFrequent)({}).catch(() => {});
    this._contactHashes.clear();
  }
  isFilteredContact(e) {
    return (e.username != null && (0, g.usernameDisplayedEnabled)() || !!e.name) && !(0, u.getIsMe)(e) && !(0, u.getIsPSA)(e) && (0, u.getIsWAContact)(e);
  }
  getFilteredContacts(e) {
    let {
      showMe: t = false,
      showWithoutName: n = false,
      includeLidContacts: r = false
    } = e;
    return this.filter(function (e) {
      if ((0, u.getIsMe)(e) && !e.id.isLid()) {
        return t;
      }
      if (e.id.isBot()) {
        return false;
      }
      if (e.id.isLid()) {
        if ((0, g.usernameDisplayedEnabled)() && e.username != null) {
          return true;
        }
        if (r === false) {
          return false;
        }
      }
      return (e.name || (0, g.usernameDisplayedEnabled)() && e.username != null || n) && !(0, u.getIsPSA)(e) && (0, u.getIsWAContact)(e);
    });
  }
  getGroupContacts() {
    return this.filter(e => (0, u.getIsGroup)(e));
  }
  frequentContacts(e, t) {
    let n = e && this._frequentContacts[e];
    if (!n) {
      n = this._frequentContacts.message;
    }
    if (!n) {
      return [];
    }
    const r = t == null ? undefined : t.id;
    return n.map(e => this.get(e)).filter(e => !!e && !e.id.equals(r));
  }
  setChecksum(e) {
    this.checksum = e;
    (0, m.setContactChecksum)(this.checksum);
    (0, o.setChecksum)(e).catch(() => {});
  }
  resolveWidsFromHash(e) {
    return this._contactHashes.get(e);
  }
  getMeContact() {
    const e = (0, h.getMaybeMeUser)();
    if (e == null) {
      return null;
    } else {
      return this.get(e);
    }
  }
}
exports.ContactCollectionImpl = y;
y.model = c.default;
y.comparator = s.ContactComparator;
const E = new y();
exports.ContactCollection = E;