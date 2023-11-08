Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./256764.js");
var i = require("./787685.js");
exports.default = class {
  static validateSyncActionDataProtobuf(e, t) {
    const {
      index: n,
      value: a,
      padding: o,
      version: s
    } = t;
    if (!n) {
      (0, i.reportSyncdFatalError)(i.SyncdFatalErrorType.MISSING_ACTION_INDEX, e);
      throw new r.SyncdFatalError("missing action index");
    }
    if (s == null) {
      (0, i.reportSyncdFatalError)(i.SyncdFatalErrorType.MISSING_ACTION_VERSION, e);
      throw new r.SyncdFatalError("missing action version");
    }
    return {
      index: n,
      value: a,
      padding: o,
      version: s
    };
  }
};