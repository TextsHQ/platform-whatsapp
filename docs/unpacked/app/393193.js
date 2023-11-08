var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./431820.js");
var o = require("./722136.js");
(0, r(require("../vendor/441143.js")).default)(true, "only for use in worker");
var s = {
  getDeferredMessages: function () {
    return (0, a.getTable)().all().then(e => e.map(e => ({
      id: e.id,
      type: e.type,
      plaintext: e.plaintext,
      info: e.info,
      paymentInfo: e.paymentInfo,
      bizInfo: e.bizInfo
    })));
  },
  updateDeferredMessages: function (e) {
    const t = e.map(e => ({
      id: e.id,
      type: e.type,
      plaintext: e.plaintext,
      info: e.info,
      paymentInfo: e.paymentInfo,
      bizInfo: e.bizInfo
    }));
    return (0, o.getStorage)().lock(["deferred_messages"], function () {
      var e = (0, i.default)(function* (e) {
        let [n] = e;
        yield n.bulkCreateOrReplace(t);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  },
  deleteDeferredMessage: function (e) {
    return (0, a.getTable)().remove(e);
  },
  clearDeferredMessages: function () {
    return (0, a.getTable)().clear();
  }
};
exports.default = s;