var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseWebMsgInfoComment = function (e, t, n) {
  const r = [];
  if (e == null || e.commentMetadata == null) {
    return r;
  }
  if (t == null || t.commentMetadata == null) {
    return r;
  }
  const {
    commentMetadata: s
  } = t;
  const {
    commentParentKey: l
  } = s;
  const {
    msgKey: u,
    sender: c
  } = (0, i.default)((0, a.buildAddOnMsgKey)(e.key, n), "buildAddOnMsgKey(webMsgInfo.key, isFromCag)");
  var d;
  if (c == null) {
    __LOG__(4, undefined, new Error())`parseWebMsgInfoComment: comment sender should be a wid`;
  } else {
    r.push({
      id: u,
      parentMsgKey: l,
      body: (0, i.default)((d = e.message) === null || d === undefined ? undefined : d.conversation, "webMsgInfo.message?.conversation"),
      sender: c,
      type: o.MSG_TYPE.COMMENT
    });
  }
  return r;
};
var i = r(require("./670983.js"));
var a = require("./767897.js");
var o = require("./373070.js");