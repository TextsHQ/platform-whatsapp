var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionsSendersCollection = exports.ReactionsSenders = exports.Reactions = exports.FlattenedReaction = exports.AggReactionsCollection = exports.AggReactions = undefined;
var i = r(require("../vendor/594654.js"));
var a = require("./402994.js");
var o = require("./626596.js");
var s = require("./481173.js");
var l = r(require("./708093.js"));
var u = require("./177938.js");
var c = r(require("./565754.js"));
var d = require("./459857.js");
var p = r(require("./124928.js"));
var f = require("./669050.js");
class _ extends o.AddOnBaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.msgKey = (0, s.prop)();
    this.parentMsgKey = (0, s.prop)();
    this.reactionText = (0, s.prop)();
    this.timestamp = (0, s.prop)();
    this.senderUserJid = (0, s.prop)();
    this.read = (0, s.prop)();
    this.orphan = (0, s.prop)();
    this.isFailed = (0, s.derived)(function () {
      if (this.id.remote.isNewsletter()) {
        return false;
      }
      return (0, d.isSerializedWidMe)(this.senderUserJid) && this.ack != null && this.ack < a.ACK.CLOCK || Boolean(this.isSendFailure);
    }, ["ack", "isSendFailure"]);
    this.senderObj = (0, s.session)();
    this.parentMsg = (0, s.derived)(function () {
      return this._getMsgCollection().get(this.parentMsgKey);
    });
  }
  initialize() {
    super.initialize();
    if (p.default.isNewsletter(this.senderUserJid)) {
      return;
    }
    const e = u.ContactCollection.gadd((0, f.createUserWid)(this.senderUserJid));
    this.addChild("senderObj", e);
  }
  _getMsgCollection() {
    return require("./61113.js").MsgCollection;
  }
  isEqual(e) {
    return this.id.equals(e.id);
  }
}
_.Proxy = "reactionsSenders";
_.idClass = c.default;
const g = (0, s.defineModel)(_);
exports.ReactionsSenders = g;
class m extends l.default {}
exports.ReactionsSendersCollection = m;
m.model = g;
m.comparator = (e, t) => (0, d.isSerializedWidMe)(e.senderUserJid) ? -1 : (0, d.isSerializedWidMe)(t.senderUserJid) ? 1 : t.timestamp - e.timestamp;
class h extends s.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.aggregateEmoji = (0, s.prop)();
    this.hasReactionByMe = (0, s.prop)();
    this.senders = (0, s.collection)(m);
  }
}
h.Proxy = "aggReactions";
const y = (0, s.defineModel)(h);
exports.AggReactions = y;
class E extends l.default {}
exports.AggReactionsCollection = E;
E.model = y;
E.comparator = (e, t) => {
  const n = t.senders.length - e.senders.length;
  if (e.hasReactionByMe) {
    return -1;
  }
  if (t.hasReactionByMe) {
    return 1;
  }
  if (n === 0) {
    const n = t.senders.at(0);
    const r = e.senders.at(0);
    if (n && r) {
      return n.timestamp - r.timestamp;
    }
  }
  return n;
};
class S extends s.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.reactionByMe = (0, s.prop)();
    this.reactions = (0, s.collection)(E);
  }
  unreadSenders() {
    return (0, i.default)(this.reactions.toArray(), e => e.senders.toArray()).filter(e => !e.read && !(0, d.isSerializedWidMe)(e.senderUserJid));
  }
  getReactionSenderModel(e, t) {
    const n = this.reactions.get(e);
    if (n == null) {
      return undefined;
    } else {
      return n.senders.findFirst(e => e.senderUserJid === t);
    }
  }
  getCollection() {
    return require("./762897.js").ReactionsCollection;
  }
}
S.Proxy = "reactions";
S.idClass = c.default;
const v = (0, s.defineModel)(S);
exports.Reactions = v;
class T extends o.AddOnBaseModel {
  constructor() {
    super(...arguments);
    this.msgKey = (0, s.prop)();
    this.parentMsgKey = (0, s.prop)();
    this.reactionText = (0, s.prop)();
    this.timestamp = (0, s.prop)();
    this.senderUserJid = (0, s.prop)();
    this.read = (0, s.prop)();
    this.orphan = (0, s.prop)();
    this.id = (0, s.prop)();
    this.aggregatedEmoji = (0, s.prop)();
    this.isFailed = (0, s.derived)(function () {
      return (0, d.isMeAccount)((0, f.createUserWid)(this.senderUserJid)) && this.ack != null && this.ack < a.ACK.CLOCK || Boolean(this.isSendFailure);
    }, ["sender", "ack", "isSendFailure"]);
    this.senderObj = (0, s.session)();
  }
  isEqual(e) {
    return this.id.equals(e.id);
  }
  initialize() {
    super.initialize();
    if (!p.default.isNewsletter(this.senderUserJid)) {
      u.ContactCollection.gadd((0, f.createUserWid)(this.senderUserJid));
    }
  }
}
const M = (0, s.defineModel)(T);
exports.FlattenedReaction = M;