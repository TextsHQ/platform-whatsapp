Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAvailabilityRequest = function (e) {
  const {
    presenceType: t,
    presenceName: n
  } = e;
  return (0, i.smax)("presence", {
    type: (0, r.OPTIONAL)(a.CUSTOM_STRING, t),
    name: (0, r.OPTIONAL)(a.CUSTOM_STRING, n)
  });
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./716358.js");