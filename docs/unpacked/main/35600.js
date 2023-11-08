Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryFeaturesBridgeApi = undefined;
var a = require("../app/805617.js");
const r = {
  setPrimaryFeatures(e) {
    let {
      primaryFeatures: t
    } = e;
    a.PrimaryFeatures.setPrimaryFeatures(t);
  }
};
exports.PrimaryFeaturesBridgeApi = r;