Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetRequest = function (e) {
  const {
    usernameElementValue: t
  } = e;
  return (0, i.mergeSetIQMixin)((0, r.smax)("iq", null, (0, r.smax)("username", null, t)));
};
var r = require("./758616.js");
var i = require("./22476.js");