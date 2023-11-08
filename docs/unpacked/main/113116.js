var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentCollectionImpl = exports.CommentCollection = undefined;
exports.createCommentModel = function (e) {
  return new i.Comment((0, r.default)((0, r.default)({}, e), {}, {
    id: s(e.id)
  }));
};
exports.getCommentId = s;
var r = a(require("../vendor/81109.js"));
var o = require("../app/392125.js");
var l = require("../app/818454.js");
var i = require("./90723.js");
class u extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this.byParent = (0, l.aggregated)(e => e.parentMsgKey);
  }
}
function s(e) {
  return `!!${e.toString()}`;
}
exports.CommentCollectionImpl = u;
u.model = i.Comment;
const c = new u();
exports.CommentCollection = c;