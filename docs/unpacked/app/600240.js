var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processEditProtocolMsgsJob = function () {
  return c.apply(this, arguments);
};
exports.processPollUpdatesMsgsJob = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./52045.js");
var s = require("./963495.js");
var l = require("./899137.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    const t = (0, l.createNonPersistedJob)("processPollUpdateMsgs", e => (0, s.processPollUpdateMsgs)(e.msgs), {
      priority: a.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted({
      msgs: e
    });
    yield t;
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = (0, l.createNonPersistedJob)("processEditProtocolMsgs", e => (0, o.processEditProtocolMsgs)(e.msgs), {
      priority: a.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted({
      msgs: e
    });
    yield t;
  })).apply(this, arguments);
}