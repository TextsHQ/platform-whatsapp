Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuickReply = function (e) {
  let t = Promise.resolve();
  const {
    id: n,
    shortcut: i,
    count: a,
    message: o,
    keywords: s
  } = e;
  t = (0, r.getQuickReplyTable)().createOrReplace({
    id: n,
    shortcut: i,
    count: a,
    message: o,
    keywords: s
  });
  return t;
};
var r = require("./549791.js");