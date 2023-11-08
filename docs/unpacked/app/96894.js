Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPresenceStatusProtocol = function (e) {
  let {
    status: t,
    name: n
  } = e;
  return (0, r.sendAvailabilityRPC)({
    presenceType: t,
    presenceName: n
  });
};
var r = require("./943290.js");