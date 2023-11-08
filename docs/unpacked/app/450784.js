var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticipantCollection = exports.MsgInfoParticipant = exports.MsgInfo = undefined;
var i = require("./481173.js");
var a = r(require("./708093.js"));
var o = require("./177938.js");
var s = require("./572002.js");
var l = r(require("./565754.js"));
var u = r(require("./124928.js"));
class c extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.t = (0, i.prop)();
    this.contact = (0, i.session)();
  }
  initialize() {
    super.initialize();
    this.addChild("contact", o.ContactCollection.gadd(this.id));
  }
}
c.Proxy = "msgInfoParticipant";
c.idClass = u.default;
const d = (0, i.defineModel)(c);
exports.MsgInfoParticipant = d;
class p extends a.default {}
exports.ParticipantCollection = p;
p.model = d;
p.comparator = (e, t) => (0, s.ContactComparator)(e.contact, t.contact);
class f extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.usePlayReceipt = (0, i.prop)();
    this.playedRemaining = (0, i.prop)(0);
    this.readRemaining = (0, i.prop)(0);
    this.deliveryRemaining = (0, i.prop)(0);
    this.deliveryPrivacyMode = (0, i.prop)();
    this.played = (0, i.collection)(p);
    this.read = (0, i.collection)(p);
    this.delivery = (0, i.collection)(p);
    this.settled = (0, i.derived)(function () {
      if (this.usePlayReceipt) {
        return !this.playedRemaining;
      } else {
        return !this.readRemaining;
      }
    }, ["usePlayReceipt", "playedRemaining", "readRemaining"]);
  }
  getCollection() {
    return require("./241164.js").MsgInfoCollection;
  }
}
f.Proxy = "msgInfo";
f.idClass = l.default;
const _ = (0, i.defineModel)(f);
exports.MsgInfo = _;