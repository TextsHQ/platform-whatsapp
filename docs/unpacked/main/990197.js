Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifFromProviderSentWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./340406.js");
const o = (0, a.defineEvents)({
  GifFromProviderSent: [1124, {
    gifSearchProvider: [1, r.GIF_SEARCH_PROVIDER]
  }, [1, 1, 1], "regular"]
});
exports.GifFromProviderSentWamEvent = o;