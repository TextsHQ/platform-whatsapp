Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddonInfraErrorCode = exports.AddonInfraError = undefined;
const r = require("../vendor/76672.js")({
  InvalidParentMsgKey: "invalid_parent_msg_key",
  NotSupportedMsgType: "not_supported_msg_type",
  UnexpectedMsgType: "unexpected_msg_type",
  UnexpectedError: "unexpected_error",
  MissingParentMsg: "missing_parent_msg"
});
exports.AddonInfraErrorCode = r;
class i extends Error {
  constructor(e, t) {
    let n = `errorCode: ${String(e)}`;
    if (t != null) {
      n += ` comment: ${t}`;
    }
    super(n);
    this.name = "AddonInfraError";
  }
}
exports.AddonInfraError = i;