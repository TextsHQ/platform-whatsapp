var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatus = function (e) {
  return (0, s.getAbout)(e).then(e => e.error ? (__LOG__(3)`getStatus: failed ${e.error.errorCode} : ${e.error.errorText}`, {
    id: e.id,
    stale: true,
    status: ""
  }) : {
    id: e.id,
    status: e.status != null ? e.status : ""
  });
};
exports.queryStatusAll = function () {
  return (0, o.getAllStatuses)();
};
exports.sendReadStatus = function () {
  return c.apply(this, arguments);
};
exports.setMyStatus = function (e) {
  return (0, require("./628905.js").getJobManager)().waitUntilCompleted(l.jobSerializers.setAbout(e));
};
var i = r(require("../vendor/348926.js"));
var a = require("./402994.js");
var o = require("./323319.js");
var s = require("./515309.js");
var l = require("./323829.js");
var u = require("./203146.js");
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const n = e.id;
    try {
      yield (0, u.markStatusRead)(n, t);
      e.ack = a.ACK.READ;
      return true;
    } catch (e) {
      return false;
    }
  })).apply(this, arguments);
}