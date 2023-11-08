Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataRequestUploadOperationType = undefined;
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("non-message-data-request").version((0, i.nonMessageDataRequestCreateTable)(), [n("id"), t("fileKey"), t("requestType"), t("operationType"), t("lastRequestTimeStampSec"), t("requestRetryCount"), t("responseError"), t("lastMediaUploadTimeStampSec"), t("lastMediaUploadSuccess"), t("mediaUploadFailureCount")]).view(e => e);
};
exports.getNonMessageDataRequestTable = function () {
  return (0, r.getStorage)().table("non-message-data-request");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const o = require("../vendor/76672.js").Mirrored(["SEND_REQUEST", "MEDIA_UPLOAD"]);
exports.DataRequestUploadOperationType = o;