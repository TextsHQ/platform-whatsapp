var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitPollOpenCreationModal = function (e) {
  u(e, o.POLL_ACTION_TYPE.OPEN_CREATE_MODAL).commit();
};
exports.commitPollsActionsMetric = function (e) {
  let {
    action: t,
    chat: n,
    pollOptionsCount: a,
    creationDateInSeconds: r
  } = e;
  const o = u(n, t);
  o.pollCreationDs = function (e) {
    const t = i.default.utc(e * 1000);
    t.startOf("day");
    return t.unix();
  }(r);
  o.pollOptionsCount = a;
  o.commit();
};
var r = require("./932493.js");
var o = require("./607693.js");
var l = a(require("../app/351199.js"));
var i = a(require("../vendor/730381.js"));
function u(e, t) {
  const n = new r.PollsActionsWamEvent({
    pollAction: t
  });
  if (e.isGroup) {
    n.groupSizeBucket = (0, l.default)(e.getParticipantCount());
    n.isAdmin = e.iAmAdmin();
  }
  return n;
}