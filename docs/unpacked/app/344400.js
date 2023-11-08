var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollVoteCollectionImpl = exports.PollVoteCollection = exports.GroupedPollVoteCollection = undefined;
exports.createPollVoteModel = function (e) {
  return new s.PollVote((0, i.default)({
    id: d(e.msgKey)
  }, e));
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./670983.js"));
var o = require("./392125.js");
var s = require("./370135.js");
var l = require("./459857.js");
class u extends o.BaseCollection {
  getVoteFromSender(e) {
    return this.findFirst(t => t.sender.equals(e));
  }
  getUnreadCount() {
    return this.filter(e => e.selectedOptionLocalIds.length > 0 && !e.read && !(0, l.isMeAccount)(e.sender)).length;
  }
  getVoteCount() {
    return this.filter(e => e.selectedOptionLocalIds.length > 0).length;
  }
}
exports.GroupedPollVoteCollection = u;
u.model = s.PollVote;
class c extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this._parentMsgKeyToCollection = new Map();
  }
  add(e, t) {
    const n = super.add(e, t);
    const r = f(n.filter(Boolean));
    for (const [e, t] of r) {
      const [n] = this.getForParent([e]);
      n.add(t);
    }
    return n;
  }
  remove(e, t) {
    const n = super.remove(e, t);
    const r = f(n.filter(Boolean));
    for (const [e, t] of r) {
      this.getForParent([e])[0].remove(t);
    }
    return n;
  }
  reset() {
    super.reset();
    for (const e of this._parentMsgKeyToCollection.values()) {
      e.reset();
    }
    this._parentMsgKeyToCollection.clear();
  }
  getForParent(e) {
    return e.map(e => this._getForParent(e));
  }
  _getForParent(e) {
    let t = this._parentMsgKeyToCollection.get(e.toString());
    if (t == null) {
      t = new u();
      t.add(this.filter(t => t.parentMsgKey.equals(e)));
      this._parentMsgKeyToCollection.set(e.toString(), t);
    }
    return t;
  }
  getByMsgKey(e) {
    return this.get(d(e));
  }
}
function d(e) {
  return `!!${e.toString()}`;
}
exports.PollVoteCollectionImpl = c;
c.model = s.PollVote;
const p = new c();
function f(e) {
  const t = new Map();
  if (e) {
    e.forEach(e => {
      const n = e.parentMsgKey;
      if (!t.has(n)) {
        t.set(n, []);
      }
      (0, a.default)(t.get(n), "parentKeyToVotes.get(key)").push(e);
    });
    return t;
  } else {
    return t;
  }
}
exports.PollVoteCollection = p;