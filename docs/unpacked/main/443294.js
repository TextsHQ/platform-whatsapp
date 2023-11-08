Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentRuleValidator = undefined;
var a = require("./834322.js");
exports.contentRuleValidator = e => {
  var t;
  var n;
  var r;
  var o;
  if (((t = (n = e.data.primaryAction) === null || n === undefined ? undefined : n.deepLink) !== null && t !== undefined ? t : "").length > 0) {
    return a.RESULT_TRUE;
  }
  if (((r = (o = e.data.primaryAction) === null || o === undefined ? undefined : o.universalLink) !== null && r !== undefined ? r : "").length > 0) {
    return a.RESULT_TRUE;
  } else {
    return a.RESULT_FALSE_CONTENT_MISSING_ACTION_LINK;
  }
};