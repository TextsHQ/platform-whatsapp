var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserDisclosuresAction = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./10256.js");
var o = require("./912513.js");
function s() {
  return (s = (0, i.default)(function* () {
    const e = (yield (0, a.getAllUserDisclosures)()).map(e => ({
      id: e.id.toString(),
      state: e.stage === 5
    }));
    return {
      refresh: o.DEFAULT_TOS_REFRESH_INTERVAL,
      notice: e
    };
  })).apply(this, arguments);
}