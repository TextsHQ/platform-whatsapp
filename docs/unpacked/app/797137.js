var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  if (i.Cmd.isOfflineDeliveryEnd) {
    return Promise.resolve();
  }
  return o;
};
var i = require("./780549.js");
var a = r(require("./799132.js"));
let o = (0, a.default)(i.Cmd, "offline_delivery_end");
i.Cmd.on("offline_delivery_start", () => {
  o = (0, a.default)(i.Cmd, "offline_delivery_end");
});