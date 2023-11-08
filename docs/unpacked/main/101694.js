Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CadminDemoteWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./909991.js");
var o = require("./427360.js");
const {
  BOOLEAN: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  CadminDemote: [3426, {
    cadminDemoteOrigin: [1, r.CADMIN_DEMOTE_ORIGIN_TYPE],
    cadminDemoteResult: [2, o.CADMIN_DEMOTE_RESULT_TYPE],
    isLastCadminOrCreator: [4, l]
  }, [1, 1, 1], "regular"]
});
exports.CadminDemoteWamEvent = i;