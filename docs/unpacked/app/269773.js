var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAddOnsAsReadJob = function () {
  return u.apply(this, arguments);
};
exports.markUnclassifiedAddOnsAsReadJob = function (e) {
  if (e.length === 0) {
    return Promise.resolve({
      updatedAddOns: new Map(),
      updatedOrphans: []
    });
  }
  return (0, l.createNonPersistedJob)("markUnclassifiedAddOnsAsRead", function () {
    var e = (0, i.default)(function* (e) {
      const t = yield (0, o.markUnclassifiedAddOnsAsReadDb)(e.msgKeys);
      (0, s.frontendFireAndForget)("markAddOnsAsReadUi", {
        updatedMsgKeys: t.updatedAddOns
      });
      return t;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted({
    msgKeys: e
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./768673.js");
var s = require("./359987.js");
var l = require("./899137.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    yield (0, l.createNonPersistedJob)("markAddOnsAsRead", function () {
      var e = (0, i.default)(function* (e) {
        yield (0, o.markAddOnsAsReadDb)(e.updates);
        (0, s.frontendFireAndForget)("markAddOnsAsReadUi", {
          updatedMsgKeys: e.updates
        });
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(), {
      priority: a.JOB_PRIORITY.LOW
    }).waitUntilCompleted({
      updates: e
    });
  })).apply(this, arguments);
}