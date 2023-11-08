var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchMatchFromMsg = function (e, t) {
  if (t.length === 0) {
    return null;
  }
  switch (e.type) {
    case l.MSG_TYPE.POLL_CREATION:
      return function (e, t) {
        var n;
        const a = (0, r.default)(e.pollName, "msg.pollName");
        const l = t.join(" ").toLowerCase();
        if ((0, o.fuzzyMatches)(l, a.toLowerCase()).length > 0) {
          return a;
        }
        const i = (n = e.pollOptions) === null || n === undefined ? undefined : n.map(e => e.name).find(e => (0, o.fuzzyMatches)(l, e.toLowerCase()).length > 0);
        if (i != null) {
          return i;
        } else {
          return a;
        }
      }(e, t);
    default:
      throw (0, i.default)(`Unimplemented getMatchedPropertyFromMsg for msg type: ${e.type}`);
  }
};
var r = a(require("../app/670983.js"));
var o = require("./573797.js");
var l = require("../app/373070.js");
var i = a(require("../app/556869.js"));