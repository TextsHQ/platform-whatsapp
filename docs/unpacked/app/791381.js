var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._cache = undefined;
exports.addActiveMessageRange = function () {
  return g.apply(this, arguments);
};
exports.bulkUpdateActiveMessageRanges = function (e) {
  return f.bulkCreateOrReplaceRanges(e);
};
exports.getActiveMessageRanges = function (e) {
  return f.getRangesForChat(e);
};
exports.getActiveRangeAction = function (e, t) {
  switch (e) {
    case "archive":
      return u.ActiveRangeAction.Archive;
    case "markChatAsRead":
      return u.ActiveRangeAction.MarkChatAsRead;
    case "clearChat":
      if ((t == null ? undefined : t.deleteStarred) && t.deleteMedia) {
        return u.ActiveRangeAction.ClearChatDeleteStarredDeleteMedia;
      } else if ((t == null ? undefined : t.deleteStarred) && !t.deleteMedia) {
        return u.ActiveRangeAction.ClearChatDeleteStarredKeepMedia;
      } else if ((t == null ? undefined : t.deleteMedia) && !t.deleteStarred) {
        return u.ActiveRangeAction.ClearChatKeepStarredDeleteMedia;
      } else {
        return u.ActiveRangeAction.ClearChatKeepStarredKeepMedia;
      }
    case "deleteChat":
      if (t == null ? undefined : t.deleteMedia) {
        return u.ActiveRangeAction.DeleteChatDeleteMedia;
      } else {
        return u.ActiveRangeAction.DeleteChatKeepMedia;
      }
    default:
      throw (0, d.default)("unsupported active message range action");
  }
};
exports.removeActiveMessageRange = function (e, t) {
  return f.removeRange(e, t);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./527796.js");
var l = require("./817690.js");
var u = require("./685907.js");
var c = require("./394629.js");
var d = r(require("./556869.js"));
let p = new Map();
const f = {
  reset: () => {
    p = new Map();
  },
  removeRange(e, t) {
    var n;
    if (!((n = p.get(e)) === null || n === undefined)) {
      n.delete(t);
    }
    return (0, u.getActiveMessageRangesTable)().remove([e, t]);
  },
  createOrReplaceRange(e) {
    let t = p.get(e.chatId);
    if (t == null) {
      t = new Map();
      p.set(e.chatId, t);
    }
    t.set(e.action, e);
    return (0, u.getActiveMessageRangesTable)().createOrReplace(e);
  },
  bulkCreateOrReplaceRanges: e => {
    e.forEach(e => {
      let t = p.get(e.chatId);
      if (t == null) {
        t = new Map();
        p.set(e.chatId, t);
      }
      t.set(e.action, e);
    });
    return (0, u.getActiveMessageRangesTable)().bulkCreateOrReplace(e);
  },
  getRangesForChat: e => (0, a.default)(function* () {
    let t = p.get(e);
    if (t == null) {
      const n = yield (0, u.getActiveMessageRangesTable)().anyOf(["chatId"], [e]);
      t = new Map(n.map(e => [e.action, e]));
      p.set(e, t);
    }
    return Array.from(t.values());
  })()
};
function _(e, t) {
  switch (e) {
    case u.ActiveRangeAction.Archive:
      return {
        action: u.ActiveRangeAction.Archive,
        actionValue: (0, o.default)(t.archiveChatAction, "syncActionValue.archiveChatAction")
      };
    case u.ActiveRangeAction.MarkChatAsRead:
      return {
        action: u.ActiveRangeAction.MarkChatAsRead,
        actionValue: (0, o.default)(t.markChatAsReadAction, "syncActionValue.markChatAsReadAction")
      };
    case u.ActiveRangeAction.ClearChatKeepStarredKeepMedia:
      return {
        action: u.ActiveRangeAction.ClearChatKeepStarredKeepMedia,
        actionValue: (0, o.default)(t.clearChatAction, "syncActionValue.clearChatAction")
      };
    case u.ActiveRangeAction.ClearChatKeepStarredDeleteMedia:
      return {
        action: u.ActiveRangeAction.ClearChatKeepStarredDeleteMedia,
        actionValue: (0, o.default)(t.clearChatAction, "syncActionValue.clearChatAction")
      };
    case u.ActiveRangeAction.ClearChatDeleteStarredKeepMedia:
      return {
        action: u.ActiveRangeAction.ClearChatDeleteStarredKeepMedia,
        actionValue: (0, o.default)(t.clearChatAction, "syncActionValue.clearChatAction")
      };
    case u.ActiveRangeAction.ClearChatDeleteStarredDeleteMedia:
      return {
        action: u.ActiveRangeAction.ClearChatDeleteStarredDeleteMedia,
        actionValue: (0, o.default)(t.clearChatAction, "syncActionValue.clearChatAction")
      };
    case u.ActiveRangeAction.DeleteChatDeleteMedia:
      return {
        action: u.ActiveRangeAction.DeleteChatDeleteMedia,
        actionValue: (0, o.default)(t.deleteChatAction, "syncActionValue.deleteChatAction")
      };
    case u.ActiveRangeAction.DeleteChatKeepMedia:
      return {
        action: u.ActiveRangeAction.DeleteChatKeepMedia,
        actionValue: (0, o.default)(t.deleteChatAction, "syncActionValue.deleteChatAction")
      };
    default:
      throw (0, d.default)(`unsupported action for message ranges: ${String(e)}`);
  }
}
function g() {
  return (g = (0, a.default)(function* (e, t, n) {
    var r;
    const a = (0, c.decodeProtobuf)(s.SyncActionValueSpec, n);
    const {
      actionValue: o
    } = _(t, a);
    const u = ((r = o.messageRange) === null || r === undefined ? undefined : r.messages) || [];
    const d = yield (0, l.filterReceivedMessagesInRange)(e, u);
    const p = Math.max(0, u.length - d.length);
    return f.createOrReplaceRange((0, i.default)((0, i.default)({
      chatId: e
    }, _(t, a)), {}, {
      remainingMessages: p
    }));
  })).apply(this, arguments);
}
exports._cache = f;