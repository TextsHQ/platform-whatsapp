Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEphemeralDurationAllowed = function (e) {
  if (e < 0) {
    return false;
  }
  if (e === 0) {
    return true;
  }
  return r.ServerProps.getEphemeralMessagesAllowedValues().includes(e);
};
var r = require("./937001.js");