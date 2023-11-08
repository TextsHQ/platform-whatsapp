Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerCommonQueryToStaticServerWamEvent = undefined;
var r = require("./901032.js");
var i = require("./560817.js");
const {
  INTEGER: a,
  STRING: o,
  TIMER: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  StickerCommonQueryToStaticServer: [2740, {
    httpResponseCode: [2, a],
    params: [3, o],
    queryLatencyMs: [4, s],
    queryType: [1, i.QUERY_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.StickerCommonQueryToStaticServerWamEvent = l;