Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  switch ((0, a.getSubtype)(t)) {
    case "fanout":
      return r.fbt._("Waiting for this message. Check your phone.", null, {
        hk: "3bM8te"
      });
    case "bot_unavailable_fanout":
      return r.fbt._("This message can't be displayed here. Please open WhatsApp on your phone to view the message.", null, {
        hk: "2jZa3c"
      });
    default:
      return r.fbt._("Waiting for this message. This may take a while.", null, {
        hk: "16kp4Z"
      });
  }
};
var a = require("../app/787742.js");
var r = require("../vendor/548360.js");