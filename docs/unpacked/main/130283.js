var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVoteCount = function (e) {
  const {
    id: t
  } = (0, u.useModelValues)(e, ["id"]);
  const [n] = r.PollVoteCollection.getForParent([t]);
  const a = (0, i.default)(n, "add remove reset", () => n.getVoteCount());
  (0, l.useEffect)(() => {
    (0, o.populatePollVoteCollectionFor)([t]);
  }, [t]);
  return a;
};
var r = require("../app/344400.js");
var o = require("./850468.js");
var l = require("../vendor/667294.js");
var i = a(require("../app/524578.js"));
var u = require("../app/655241.js");