Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcAssetLoadWamEvent = undefined;
var r = require("./901032.js");
var i = require("./73170.js");
const {
  BOOLEAN: a,
  NUMBER: o,
  STRING: s,
  TIMER: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  WebcAssetLoad: [1358, {
    webcAssetCacheType: [4, i.WEBC_ASSET_CACHE_TYPE_CODE],
    webcAssetFromCache: [2, a],
    webcAssetLoadT: [3, l],
    webcAssetName: [1, s],
    webcAssetSize: [5, o]
  }, [1, 1, 1], "regular"]
});
exports.WebcAssetLoadWamEvent = u;