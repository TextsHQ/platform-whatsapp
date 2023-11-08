Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("profile-pic-thumb").version((0, i.profilePicThumbCreateTable)(), [n("id"), t("tag"), t("eurl"), t("previewEurl"), t("timestamp"), t("previewDirectPath"), t("fullDirectPath"), t("filehash")]).view(e => ({
    id: e.id,
    tag: e.tag,
    eurl: e.eurl,
    previewEurl: e.previewEurl,
    timestamp: e.timestamp,
    previewDirectPath: e.previewDirectPath,
    fullDirectPath: e.fullDirectPath,
    filehash: e.filehash
  }));
};
exports.getProfilePicThumbTable = function () {
  return (0, r.getStorage)().table("profile-pic-thumb");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");