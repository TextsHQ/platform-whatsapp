Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBaseGetGroupOrServerMixinGroup = function (e, t) {
  if (t.baseGetGroup) {
    return (0, i.mergeBaseGetGroupMixin)(e, t.baseGetGroup);
  }
  if (t.isBaseGetServer) {
    return (0, a.mergeBaseGetServerMixin)(e);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./96981.js");
var a = require("./822435.js");