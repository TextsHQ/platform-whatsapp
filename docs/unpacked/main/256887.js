Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifSearchCancelledWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./340406.js");
const o = (0, a.defineEvents)({
  GifSearchCancelled: [1126, {
    gifSearchProvider: [1, r.GIF_SEARCH_PROVIDER]
  }, [1, 1, 1], "regular"]
});
exports.GifSearchCancelledWamEvent = o;