Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableModeByMsgType = function (e) {
  switch (e) {
    case a.MSG_TYPE.PIN_MESSAGE:
      return r.AddonTableMode.Pin;
    case a.MSG_TYPE.COMMENT:
      return r.AddonTableMode.Comment;
    case a.MSG_TYPE.POLL_UPDATE:
      return r.AddonTableMode.PollVote;
    default:
      throw new i.AddonInfraError(i.AddonInfraErrorCode.NotSupportedMsgType, `received ${e} msgType`);
  }
};
var r = require("./634951.js");
var i = require("./994879.js");
var a = require("./373070.js");