var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteMessageForMeSyncBase = undefined;
var i = r(require("../vendor/222666.js"));
var a = require("./679905.js");
var o = require("./614392.js");
var s = require("./24756.js");
var l = require("./122393.js");
const u = ["timestamp", "deleteMedia", "messageTimestamp"];
class c extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 3;
    this.action = l.Actions.DeleteMessageForMe;
  }
  buildDeleteForMeMutation(e) {
    let {
      timestamp: t,
      deleteMedia: n,
      messageTimestamp: r
    } = e;
    let o = (0, i.default)(e, u);
    return (0, s.buildPendingMutation)({
      collection: l.CollectionName.RegularHigh,
      indexArgs: (0, s.buildMessageKey)(o),
      value: {
        deleteMessageForMeAction: {
          deleteMedia: n,
          messageTimestamp: r
        }
      },
      version: this.version,
      operation: a.SyncdMutation$SyncdOperation.SET,
      timestamp: t,
      action: this.action
    });
  }
}
exports.DeleteMessageForMeSyncBase = c;