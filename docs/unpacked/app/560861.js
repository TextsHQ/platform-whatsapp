Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canAssignChats = function () {
  return (0, r.chatAssignmentEnabled)() && (0, i.isInitializedAndFeatureFlagEnabled)("MD_EXTENSION");
};
var r = require("./72696.js");
var i = require("./146254.js");