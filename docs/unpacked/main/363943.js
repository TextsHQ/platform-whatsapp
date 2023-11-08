Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCommentCollection = function (e) {
  const t = e.map(e => (0, a.createCommentModel)(e));
  a.CommentCollection.add(t);
};
var a = require("./113116.js");