var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessibleNotifyName = function (e) {
  if (e == null || e === "") {
    return "";
  }
  return i.fbt._("Maybe {notifyName}", [i.fbt._param("notifyName", e)], {
    hk: "1vt3xl"
  });
};
exports.getFormattedNotifyName = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  if (e == null || e === "") {
    return "";
  }
  return i.fbt._("~{spacing}{notifyName}", [i.fbt._param("spacing", t ? " " : ""), i.fbt._param("notifyName", e)], {
    hk: "1K6Ao7"
  });
};
var i = require("../vendor/548360.js");
r(require("../vendor/667294.js"));