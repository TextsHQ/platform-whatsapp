var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processEncCommentMsg = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./344530.js");
var o = require("./83564.js");
var s = require("./817690.js");
var l = require("./787742.js");
var u = require("./533494.js");
var c = require("./751047.js");
var d = require("./669050.js");
var p = require("./394629.js");
var f = r(require("./556869.js"));
function _() {
  return (_ = (0, i.default)(function* (e) {
    const {
      targetMessageKey: t,
      encIv: n,
      encPayload: r
    } = e;
    if (n == null) {
      throw new o.CommentMessageValidationError(o.CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_IV, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    if (r == null) {
      throw new o.CommentMessageValidationError(o.CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_PAYLOAD, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    if (t == null) {
      throw new o.CommentMessageValidationError(o.CommentMessageValidationErrorCode.MISSING_COMMENT_MESSAGE_KEY, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    const i = yield (0, s.getMsgByMsgKey)(t);
    if (i == null) {
      throw (0, f.default)("[messaging] - handling orphans");
    }
    const _ = e.author ? e.author : e.id.participant;
    const g = (0, l.getOriginalSender)(i);
    if (_ == null) {
      throw new o.CommentMessageValidationError(o.CommentMessageValidationErrorCode.MISSING_COMMENT_SENDER, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    if (g == null) {
      throw new o.CommentMessageValidationError(o.CommentMessageValidationErrorCode.MISSING_ORIGINAL_MESSAGE_SENDER, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    if ((i == null ? undefined : i.messageSecret) == null) {
      throw new o.CommentMessageValidationError(o.CommentMessageValidationErrorCode.MISSING_MESSAGE_SECRET, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    const m = yield (0, a.decryptAddOn)({
      type: "comment",
      encryptedAddOn: r
    }, {
      messageSecret: i.messageSecret,
      iv: n,
      stanzaId: i.id.id,
      originalMessageSender: g,
      addOnSender: (0, d.toUserWid)(_)
    });
    return (0, p.decodeProtobuf)(u.MessageSpec, m);
  })).apply(this, arguments);
}