var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMembershipApprovalRequests = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if (n) {
    return s({
      id: e,
      requests: t
    });
  }
  const r = e.toString();
  return (0, o.getStorage)().lock(["pending-membership-approval-request"], e => {
    let [n] = e;
    return n.bulkRemove(t.map(e => [r, e.toString()]));
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./392646.js");
var o = require("./732011.js");
const s = (0, a.batch)({
  delayMs: 3000
}, function () {
  var e = (0, i.default)(function* (e) {
    const t = e.flatMap(e => {
      const t = e.id.toString();
      return e.requests.map(e => [t, e.toString()]);
    });
    yield (0, o.getStorage)().lock(["pending-membership-approval-request"], e => {
      let [n] = e;
      return n.bulkRemove(t);
    });
    return t.map(() => {});
  });
  return function () {
    return e.apply(this, arguments);
  };
}());