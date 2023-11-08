var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactionsAddOnProvider = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./702618.js");
var o = require("./123765.js");
var s = require("./803328.js");
var l = require("./373070.js");
var u = r(require("./556869.js"));
const c = {
  type: s.MessageAddOnType.Reaction,
  matches: e => e.type === l.MSG_TYPE.REACTION,
  matchesFutureproof: e => e.type === l.MSG_TYPE.UNKNOWN && e.futureproofType === l.MSG_TYPE.REACTION,
  canRenderInUi: () => true,
  processOrphansForNewMsg: () => (0, i.default)(function* () {
    throw (0, u.default)("Reactions not yet integrated into orphan framework");
  })(),
  updateAcks: (e, t) => (0, o.updateAddOnAcksForTable)("reactions", e, t),
  markAsRead: e => (0, a.markAsReadForTable)("reactions", e.map(String))
};
exports.reactionsAddOnProvider = c;