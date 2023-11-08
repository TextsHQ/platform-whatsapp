Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeContentTypePollVoteMixin = function (e) {
  const t = (0, r.smax)("message", {
    type: "poll"
  }, (0, r.smax)("meta", {
    polltype: "vote"
  }));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");