Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHdPhoto = function (e, t) {
  return Math.max(e, t) >= (0, r.getABPropConfigValue)("original_quality_image_min_edge");
};
exports.isHdVideo = function (e, t) {
  if (!(0, r.getABPropConfigValue)("hd_video_label_enabled")) {
    return false;
  }
  const [n, i] = [Math.max(e, t), Math.min(e, t)];
  if (i >= (0, r.getABPropConfigValue)("hd_video_definition_min_edge")) {
    return true;
  }
  return n > (0, r.getABPropConfigValue)("hd_video_definition_max_edge") && i >= (0, r.getABPropConfigValue)("hd_video_definition_min_edge_with_max_edge");
};
var r = require("./287461.js");