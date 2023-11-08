var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearStorage = m;
exports.sendClear = function (e, t, r) {
  return function () {
    return y.apply(this, arguments);
  }(e, t, r).then(function () {
    var t = (0, a.default)(function* (t) {
      if (t.result != null && t.result.length > 0) {
        const r = t.result;
        (0, _.deleteModelsForLastAddOnPreview)(r);
        const i = require("./628905.js").getJobManager;
        yield i().waitUntilPersisted(f.jobSerializers.deleteAddOns(e.id.toString(), r));
      }
      return t;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./527796.js");
var l = require("./632157.js");
var u = require("./791381.js");
var c = require("./422033.js");
var d = require("./110567.js");
var p = r(require("./97359.js"));
var f = require("./323829.js");
var _ = require("./251444.js");
var g = require("./394629.js");
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, a.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (n) {
      return (0, c.queryAndRemoveMessagesInMessageRange)(e.id, n, {
        skipStarred: t,
        skipRecentSystemMessages: false
      });
    }
    const r = yield (0, c.getBoundsForChat)(e.id);
    const a = yield (0, c.queryAndRemoveMessageHistory)(e.id);
    if (r == null) {
      __LOG__(3)`_sendClearMD: Expected to receive boundaries for chat while clearing`;
    }
    d.ftsClient.purgeRange((0, i.default)({
      chatId: e.id.toString()
    }, (0, o.default)(r, "rowIdBounds"))).catch(() => {});
    return a;
  })).apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* (e, t, r) {
    const {
      lockForMessageRangeSync: i
    } = require("./414240.js");
    const o = (0, p.default)(require("./973907.js"));
    const c = (0, l.unixTimeMs)();
    const d = yield o.getClearChatMutation(c, e.id, !r);
    let f;
    yield i(["message"], [d], (0, a.default)(function* () {
      var t;
      yield (0, u.addActiveMessageRange)(e.id.toString(), (0, u.getActiveRangeAction)("clearChat", {
        deleteStarred: !r
      }), d.binarySyncAction);
      const n = (t = (0, g.decodeProtobuf)(s.SyncActionValueSpec, d.binarySyncAction).clearChatAction) === null || t === undefined ? undefined : t.messageRange;
      f = yield m(e, r, n);
    }));
    return {
      result: f
    };
  })).apply(this, arguments);
}