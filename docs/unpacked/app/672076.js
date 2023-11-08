var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exponentialBackoff = function (e, t) {
  const n = (0, a.default)((0, a.default)({}, u), e);
  const {
    signal: r,
    timeoutIncludesTaskDuration: c
  } = n;
  const d = (0, i.default)(n, l);
  const p = (0, s.exponentialBackoffIterator)(d);
  return (0, o.backoff)({
    signal: r,
    timeoutIterator: p,
    timeoutIncludesTaskDuration: c
  }, t);
};
var i = r(require("../vendor/222666.js"));
var a = r(require("../vendor/73982.js"));
var o = require("./165319.js");
var s = require("./977464.js");
const l = ["signal", "timeoutIncludesTaskDuration"];
const u = (0, a.default)((0, a.default)({}, s.defaults), o.defaults);