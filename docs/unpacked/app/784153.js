Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteChatSyncBase = undefined;
var r = require("./679905.js");
var i = require("./614392.js");
var a = require("./24756.js");
var o = require("./122393.js");
class s extends i.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 6;
    this.action = o.Actions.DeleteChat;
  }
  buildDeleteChatMutation(e) {
    let {
      timestamp: t,
      chatId: n,
      mergedRange: i,
      deleteMediaFiles: s
    } = e;
    return (0, a.buildPendingMutation)({
      collection: o.CollectionName.RegularHigh,
      indexArgs: this.buildDeleteChatIndexArgs(n, s),
      value: {
        deleteChatAction: {
          messageRange: i
        }
      },
      version: this.version,
      operation: r.SyncdMutation$SyncdOperation.SET,
      timestamp: t,
      action: this.action
    });
  }
  buildDeleteChatIndexArgs(e, t) {
    return [e, t ? "1" : "0"];
  }
}
exports.DeleteChatSyncBase = s;