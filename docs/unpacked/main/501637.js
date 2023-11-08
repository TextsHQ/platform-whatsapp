var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    options: n
  } = e;
  const a = (0, r.default)((0, o.getAsPollCreation)(t), "getAsPollCreation(msg)");
  if ((0, u.arePollsFastFollowsEnabled)()) {
    var s;
    const e = (0, l.getSearchMatchFromMsg)(a, (s = n.searchQuery) !== null && s !== undefined ? s : []);
    if (e == null) {
      return a.pollName;
    } else if (e === a.pollName) {
      return e;
    } else if (i.default.isRTL()) {
      return `${e} ○`;
    } else {
      return `○ ${e}`;
    }
  }
  return a.pollName;
};
var r = a(require("../app/670983.js"));
var o = require("../app/163755.js");
var l = require("./217880.js");
var i = a(require("../app/932325.js"));
var u = require("../app/671598.js");