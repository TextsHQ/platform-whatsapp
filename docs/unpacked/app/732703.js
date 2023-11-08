var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateExpiredTextStatusOfContact = function () {
  const e = (0, a.unixTime)();
  if (!(0, s.receiveTextStatusEnabled)()) {
    return Promise.resolve();
  }
  return (0, o.getStorage)().lock(["contact"], function () {
    var t = (0, i.default)(function* (t) {
      let [n] = t;
      const r = yield n.lessThan(["textStatusExpiryTs"], e);
      if (!r || r.length === 0) {
        return;
      }
      const i = r.map(e => ({
        id: e.id,
        textStatusString: undefined,
        textStatusEmoji: undefined,
        textStatusExpiryTs: undefined,
        textStatusEphemeralDuration: undefined,
        textStatusLastUpdateTime: l.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL
      }));
      return n.bulkCreateOrMerge(i);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./732011.js");
var s = require("./491805.js");
var l = require("./596328.js");