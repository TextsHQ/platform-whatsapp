Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("qpl-events").version((0, i.qplEventsCreateTable)(), [s("id"), o("marker_id"), o("instance_id"), o("action_id"), o("sample_rate"), o("method"), o("duration_ns"), o("points"), o("metadata"), o("marker_type"), o("flags"), o("annotations"), o("annotations_double"), o("annotations_int"), o("annotations_bool"), o("annotations_string_array"), o("annotations_double_array"), o("annotations_int_array"), o("annotations_bool_array"), o("app_version"), o("app_build_number"), o("wa_ab_key2")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("qpl-events");
};
var r = require("./729195.js");
var i = require("./222125.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addAutoIncrementingPrimaryKey: s
} = (0, a.columnBuilder)();