var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVote = function () {
  return u.apply(this, arguments);
};
exports.getVotes = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/450125.js");
var l = require("../app/941322.js");
function i() {
  return (i = (0, r.default)(function* (e) {
    return (yield (0, l.getTable)().anyOf(["parentMsgKey"], e.map(e => e.toString()))).map(o.voteFromDbRow);
  })).apply(this, arguments);
}
function u() {
  return (u = (0, r.default)(function* (e, t) {
    const n = yield (0, l.getTable)().get([e.toString(), t.toString()]);
    if (n == null) {
      return null;
    } else {
      return (0, o.voteFromDbRow)(n);
    }
  })).apply(this, arguments);
}