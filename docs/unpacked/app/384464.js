Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyDisallowedListType = undefined;
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("privacy-disallowed-list").version((0, i.privacyDisallowedListCreateTable)(), [n("id"), t("disallowedList")]).version((0, i.privacyDisallowedListAddDhashField)(), [t("dhash")]).view(e => ({
    id: e.id,
    disallowedList: e.disallowedList,
    dhash: e.dhash
  }));
};
exports.getPrivacyDisallowedListTable = function () {
  return (0, r.getStorage)().table("privacy-disallowed-list");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const o = require("../vendor/76672.js")({
  About: "status",
  GroupAdd: "groupadd",
  LastSeen: "last",
  ProfilePicture: "profile"
});
exports.PrivacyDisallowedListType = o;