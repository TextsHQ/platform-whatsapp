Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMessageTable = function (e, t) {
  return (0, r.getMessageTable)().merge(e.toString(), t).catch(e => {
    __LOG__(4, true, new Error(), true)`updateMessageTable: failed to update in storage`;
    SEND_LOGS("updateMessageTable failed");
    throw e;
  });
};
var r = require("./851698.js");