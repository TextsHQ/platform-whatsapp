var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateChatTable = function (e, t) {
  return (0, a.getChatTable)().merge(e.toString(), t).catch(e => {
    if (e instanceof i.DbOnLogoutAbort) {
      throw e;
    }
    __LOG__(4, true, new Error(), true)`updateChatTable: failed to update in storage`;
    SEND_LOGS("updateChatTable failed");
    throw (0, o.default)("updateChatTable failed");
  });
};
var i = require("./288057.js");
var a = require("./61229.js");
var o = r(require("./556869.js"));