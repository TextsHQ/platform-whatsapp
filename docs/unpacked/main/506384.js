Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaShopsManagementWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./896492.js");
const {
  BOOLEAN: o,
  STRING: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  WaShopsManagement: [2908, {
    isShopsProductPreviewVisible: [2, o],
    shopsManagementAction: [1, r.SHOPS_MANAGEMENT_ACTION],
    shopsSellerJid: [3, l]
  }, [1, 1, 1], "regular"]
});
exports.WaShopsManagementWamEvent = i;