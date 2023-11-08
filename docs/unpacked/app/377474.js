Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAddressingModeMismatch = function (e, t) {
  if (!(0, r.getABPropConfigValue)("lid_groups_handle_server_addressing_mode")) {
    return false;
  }
  if (Boolean(e.defaultSubgroup) === true) {
    return false;
  }
  return Boolean(t.isLidAddressingMode) !== Boolean(e.isLidAddressingMode);
};
var r = require("./287461.js");