Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvMetadataCreationFailureWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  AdvMetadataCreationFailure: [3048, {
    advMetadataIsMe: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.AdvMetadataCreationFailureWamEvent = a;