Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetParticipatingGroupsRequest = function (e) {
  const {
    hasParticipants: t,
    hasDescription: n
  } = e;
  return (0, a.mergeBaseGetServerMixin)((0, i.smax)("iq", null, (0, i.smax)("participating", null, (0, r.HAS_OPTIONAL_CHILD)(o, t), (0, r.HAS_OPTIONAL_CHILD)(s, n))));
};
exports.makeGetParticipatingGroupsRequestParticipatingDescription = s;
exports.makeGetParticipatingGroupsRequestParticipatingParticipants = o;
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./822435.js");
function o() {
  return (0, i.smax)("participants", null);
}
function s() {
  return (0, i.smax)("description", null);
}