Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePicThumbBridgeApi = undefined;
var a = require("../app/446474.js");
const r = {
  markProfilePicStale(e) {
    let {
      profilePicThumbWid: t
    } = e;
    const n = a.ProfilePicThumbCollection.get(t);
    if (n) {
      n.markStale();
    }
  }
};
exports.ProfilePicThumbBridgeApi = r;