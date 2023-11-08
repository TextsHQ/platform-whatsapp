Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStarredMessagesForChat = function (e, t, n) {
  return Promise.resolve().then(() => {
    if (n != null) {
      return (0, a.getMessageTable)().get(n.toString());
    }
  }).then(n => {
    const o = n == null ? [(0, i.endOfChat)(e), 1 / 0] : [n.internalId, n.isStarred];
    const s = [(0, i.beginningOfChat)(e), 0];
    return (0, a.getMessageTable)().between(["internalId", "isStarred"], s, o, {
      lowerInclusive: false,
      upperInclusive: false,
      reverse: true,
      limit: t
    }).then(e => e.map(e => (0, r.messageFromDbRow)(e)));
  });
};
var r = require("./907539.js");
var i = require("./878685.js");
var a = require("./851698.js");