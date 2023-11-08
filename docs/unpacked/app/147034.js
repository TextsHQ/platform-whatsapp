Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TcTokenMode = undefined;
exports.getTcTokenDuration = o;
exports.isTokenExpired = function (e, t) {
  return e < s(t);
};
exports.shouldSendNewToken = function (e) {
  if (e == null) {
    return true;
  }
  const t = (0, i.getABPropConfigValue)("tctoken_duration_sender");
  const n = Math.floor((0, r.unixTime)() / t);
  const a = Math.floor(e / t);
  return n > a;
};
exports.tokenExpirationCutoff = s;
var r = require("./632157.js");
var i = require("./287461.js");
const a = require("../vendor/76672.js")({
  Sender: "sender",
  Receiver: "receiver"
});
function o(e) {
  const t = e === a.Receiver ? "tctoken_duration" : "tctoken_duration_sender";
  return Math.min((0, i.getABPropConfigValue)(t), 15552000);
}
function s(e) {
  const t = e === a.Receiver ? "tctoken_num_buckets" : "tctoken_num_buckets_sender";
  const n = (0, i.getABPropConfigValue)(t);
  const s = o(e);
  const l = Math.floor((0, r.unixTime)() / s);
  return (0, r.castToUnixTime)((l - (n - 1)) * s);
}
exports.TcTokenMode = a;