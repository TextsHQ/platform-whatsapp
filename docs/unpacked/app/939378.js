var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleForArchive = function () {
  return d.apply(this, arguments);
};
exports.handleForClearChat = function (e, t) {
  switch (t) {
    case l.RangeContain.CONTAINS_BY_TIMESTAMP:
    case l.RangeContain.CONTAINS_BY_ADDITIONAL:
      return l.ActiveRangeHandlerAction.DropMessage;
    case l.RangeContain.DOES_NOT_CONTAIN:
  }
};
exports.handleForDeleteChat = function (e, t) {
  switch (t) {
    case l.RangeContain.CONTAINS_BY_TIMESTAMP:
    case l.RangeContain.CONTAINS_BY_ADDITIONAL:
      return l.ActiveRangeHandlerAction.DropMessage;
    case l.RangeContain.DOES_NOT_CONTAIN:
  }
};
exports.handleForMarkAsReadUnread = function () {
  return f.apply(this, arguments);
};
exports.handleForUnarchive = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./791381.js");
var o = require("./359987.js");
var s = require("./811670.js");
var l = require("./989.js");
var u = require("./673168.js");
var c = require("./669050.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if (t === l.RangeContain.DOES_NOT_CONTAIN) {
      const t = yield (0, u.getArchiveV2EnabledSetting)();
      const n = yield (0, u.getUnarchiveChatsSetting)();
      if (!(t && !n)) {
        (0, s.setArchive)([{
          id: e.chatId,
          archive: false
        }]);
      }
      yield (0, a.removeActiveMessageRange)(e.chatId, e.action);
    }
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t) {
    if (!(t !== l.RangeContain.DOES_NOT_CONTAIN && e.remainingMessages !== 0)) {
      yield (0, a.removeActiveMessageRange)(e.chatId, e.action);
    }
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t, n) {
    if (t === l.RangeContain.DOES_NOT_CONTAIN) {
      yield (0, a.removeActiveMessageRange)(e.chatId, e.action);
    } else if (e.remainingMessages === 0) {
      (0, o.frontendFireAndForget)("updateChatReadStatus", {
        id: (0, c.createWid)(e.chatId),
        read: n
      });
      yield (0, a.removeActiveMessageRange)(e.chatId, e.action);
    }
  })).apply(this, arguments);
}