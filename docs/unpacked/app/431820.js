var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, o.getStorage)().add("deferred_messages").version((0, s.deferredMessagesStorageCreateTable)(), [d("id"), u("type"), c("plaintext", a.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER), u("info"), u("paymentInfo"), u("bizInfo")]).view(e => ({
    id: e.id,
    type: e.type,
    plaintext: e.plaintext,
    info: e.info,
    paymentInfo: e.paymentInfo,
    bizInfo: e.bizInfo
  })).useDbMsgEncKeyForEncryptedCol(true);
};
exports.getTable = function () {
  return (0, o.getStorage)().table("deferred_messages");
};
var i = require("./322511.js");
var a = require("./918720.js");
var o = require("./722136.js");
var s = require("./772832.js");
var l = r(require("../vendor/441143.js"));
const {
  addColumn: u,
  addEncryptedColumn: c,
  addUserDefinedPrimaryKey: d
} = (0, i.columnBuilder)();
(0, l.default)(true, "only for use in worker");