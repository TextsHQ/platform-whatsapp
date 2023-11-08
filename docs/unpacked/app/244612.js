Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COUNT_FIELD_NAMES = exports.COUNT_FIELDS = undefined;
exports.toMaybeCountActionType = function (e) {
  if (!r.hasOwnProperty(e)) {
    return null;
  }
  return e;
};
const n = {
  profileViews: 0,
  statusViews: 0,
  statusReplies: 0,
  groupMembershipReplies: 0,
  groupPrivateReplies: 0,
  profileReplies: 0,
  chatOverflowClicks: 0,
  pdpViews: 0,
  ordersSent: 0,
  repliesSent: 0
};
const r = Object.freeze(n);
exports.COUNT_FIELDS = r;
const i = Object.freeze(Object.keys(n));
exports.COUNT_FIELD_NAMES = i;