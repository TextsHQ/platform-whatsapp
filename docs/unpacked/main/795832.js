Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownFilter = function (e) {
  switch (e) {
    case a.QP$FilterClientNotSupportedConfig.PASS_BY_DEFAULT:
      return true;
    case a.QP$FilterClientNotSupportedConfig.FAIL_BY_DEFAULT:
      return false;
  }
};
var a = require("../app/853721.js");