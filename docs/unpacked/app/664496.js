var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/82569.js"));
var a = r(require("../vendor/385564.js"));
var o = require("./481173.js");
var s = require("./557491.js");
var l = r(require("./556869.js"));
class u extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, o.prop)();
    this.pendingMsgs = (0, o.prop)();
    this.labels = (0, o.prop)();
    this.msgChunks = (0, o.session)(() => []);
    this.lastReceivedKey = (0, o.session)();
    this.unreadMsgAnchor = (0, o.session)();
    this.disableUnreadAnchor = (0, o.session)();
    this.msgsLength = (0, o.session)();
    this.msgsChanged = (0, o.session)(0);
    this.msgs = (0, o.collection)(s.ChatMsgsCollection);
  }
  initialize() {
    super.initialize();
    this.listenTo(this.msgs, "change:last", () => {
      this.msgsChanged++;
    });
    this.listenTo(this.msgs, "add remove bulk_add", () => {
      this.msgsChanged++;
      this.msgsLength = this.msgs.length;
    });
  }
  onEmptyMRM() {
    throw (0, l.default)("onEmptyMRM not implemented");
  }
  delete() {
    super.delete();
    this.getAllCMCs().forEach(e => {
      e.forEach(e => {
        e.delete();
      });
      e.delete();
    });
  }
  removeMsg(e) {
    const t = e.msgChunk;
    if (!t) {
      return;
    }
    if (!(t.indexOf(e) < 0)) {
      __LOG__(2)`models:Chat:removeMsg ${e.get("id")}`;
      t.remove(e);
      if (t.length === 0) {
        if (t === this.msgs) {
          this.onEmptyMRM();
        } else {
          this.removeMsgsCollection(t);
        }
      }
    }
  }
  getAllCMCs() {
    return this.msgChunks.concat([this.msgs]);
  }
  getAllMsgs() {
    return (0, a.default)(this.getAllCMCs().map(e => e.getModelsArray()));
  }
  replaceMsgsCollection(e) {
    __LOG__(2)`model:Chat:replaceMsgsCollection:${this.id.toString()}`;
    const t = {
      msg: e.last()
    };
    this.msgs.replace(e);
    this.notifyMsgCollectionMerge(e, this.msgs, this.msgs, t);
    this.msgChunks = (0, i.default)(this.msgChunks, e);
    e.delete();
  }
  removeMsgsCollection(e) {
    this.msgChunks = (0, i.default)(this.msgChunks, e);
    e.delete();
  }
  notifyMsgCollectionMerge(e, t, n, r) {
    this.trigger("change:cmc:merge", e, t, n, r);
  }
}
exports.default = u;