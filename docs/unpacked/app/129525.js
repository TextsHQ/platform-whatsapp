var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterMessageReactions = undefined;
var i = require("./632157.js");
var a = require("./481173.js");
var o = require("./382849.js");
var s = r(require("./565754.js"));
var l = require("./911600.js");
class u extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, o.prop)();
    this.parentMsgServerId = (0, o.prop)();
    this.myReactionMsgKey = (0, o.prop)();
    this.reactionCountMap = (0, o.prop)();
    this.reactionCountMapTs = (0, o.prop)();
    this.myReaction = (0, o.prop)();
    this.myReactionTs = (0, o.prop)();
  }
  initialize() {
    var e;
    super.initialize();
    this.reactionCountMap = (e = this.reactionCountMap) !== null && e !== undefined ? e : new Map();
  }
  updateMyReaction(e) {
    if (e === l.REVOKED_REACTION_TEXT) {
      return this._revokeMyReaction();
    } else {
      return this._addOrUpdateMyReaction(e);
    }
  }
  _addOrUpdateMyReaction(e) {
    var t;
    const {
      myReaction: n
    } = this;
    this.reactionCountMap = (t = this.reactionCountMap) !== null && t !== undefined ? t : new Map();
    const {
      reactionCountMap: r
    } = this;
    const i = r.get(e);
    r.set(e, (i != null ? i : 0) + 1);
    const a = n != null ? r.get(n) : null;
    if (a != null && n != null) {
      const e = a - 1;
      if (e > 0) {
        r.set(n, e);
      } else {
        r.delete(n);
      }
    }
    this._updateMyReaction(e);
  }
  _revokeMyReaction() {
    var e;
    const {
      myReaction: t
    } = this;
    if (t == null) {
      return;
    }
    this.reactionCountMap = (e = this.reactionCountMap) !== null && e !== undefined ? e : new Map();
    const {
      reactionCountMap: n
    } = this;
    const r = n.get(t);
    if (r != null) {
      if (r > 1) {
        n.set(t, r - 1);
      } else {
        n.delete(t);
      }
      this._updateMyReaction(null);
    }
  }
  _updateMyReaction(e) {
    this.myReactionTs = (0, i.unixTime)();
    this.myReaction = e;
  }
}
u.Proxy = "newsletterReaction";
u.idClass = s.default;
const c = (0, a.defineModel)(u);
exports.NewsletterMessageReactions = c;