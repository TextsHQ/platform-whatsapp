Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMediaErrorUnknownDetailsWamEvent = undefined;
var r = require("./901032.js");
var i = require("./44753.js");
const {
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  WebcMediaErrorUnknownDetails: [2352, {
    mediaId: [1, a],
    webcMediaErrorMessage: [4, o],
    webcMediaErrorName: [3, o],
    webcMediaOperation: [2, i.WEBC_MEDIA_OPERATION_CODE]
  }, [1, 1, 1], "regular"]
});
exports.WebcMediaErrorUnknownDetailsWamEvent = s;