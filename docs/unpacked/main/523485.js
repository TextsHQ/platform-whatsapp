Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClockBridgeApi = undefined;
var a = require("../app/63014.js");
const r = {
  setWebClockSkew(e) {
    let {
      newClockSkew: t
    } = e;
    a.Clock.setSkew(t);
  }
};
exports.ClockBridgeApi = r;