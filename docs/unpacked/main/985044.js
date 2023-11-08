var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return U.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./271460.js");
var l = require("./767173.js");
var i = require("./111757.js");
var u = require("./532702.js");
var s = require("./951664.js");
var c = require("./537751.js");
var d = require("./303449.js");
var f = require("./807101.js");
var p = require("./260854.js");
var m = require("../app/174834.js");
var h = require("./655183.js");
var g = require("./819052.js");
var E = require("./361483.js");
var v = require("./408256.js");
var _ = require("./996596.js");
var y = require("./105272.js");
var C = require("./81095.js");
var b = require("./82967.js");
var M = require("./617267.js");
var S = require("./769081.js");
var T = require("./614724.js");
var w = require("./19645.js");
var A = require("./494095.js");
var P = require("./219548.js");
var O = require("./427181.js");
var k = require("./511696.js");
var D = require("./639793.js");
var I = require("./937445.js");
var R = require("./494459.js");
var N = require("./386682.js");
var x = require("./493075.js");
var L = require("./215913.js");
var j = require("./125775.js");
var B = require("./523233.js");
var F = require("./111971.js");
var G = require("./500017.js");
function U() {
  return (U = (0, r.default)(function* () {
    try {
      const e = [(0, w.requireBundle)(), (0, C.requireBundle)()];
      yield Promise.all(e);
      const t = [(0, I.requireBundle)(), (0, k.requireBundle)(), (0, F.requireBundle)(), (0, i.requireBundle)(), (0, c.requireBundle)(), (0, g.requireBundle)(), (0, _.requireBundle)(), (0, A.requireBundle)(), (0, O.requireBundle)(), (0, P.requireBundle)(), (0, j.requireBundle)(), (0, u.requireBundle)(), (0, N.requireBundle)(), (0, L.requireBundle)(), (0, E.requireBundle)(), (0, s.requireBundle)(), (0, D.requireBundle)(), (0, d.requireBundle)(), (0, b.requireBundle)(), (0, T.requireBundle)(), (0, o.requireBundle)(), (0, B.requireBundle)(), (0, v.requireBundle)(), (0, G.requireBundle)(), (0, R.requireBundle)(), (0, h.requireBundle)(), (0, x.requireBundle)(), (0, y.requireBundle)(), (0, l.requireBundle)(), (0, M.requireBundle)()];
      if ((0, m.communitiesEnabled)()) {
        t.push((0, S.requireBundle)(), (0, p.requireBundle)());
      }
      if ((0, m.communityAdminPromotionOneTimePromptEnabled)()) {
        t.push((0, f.requireBundle)());
      }
      yield Promise.all(t);
    } catch (e) {
      __LOG__(3)`Error prefetching loadables: ${e.stack}`;
    }
  })).apply(this, arguments);
}