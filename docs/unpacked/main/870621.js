Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifSearchResultTappedWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./340406.js");
const {
  INTEGER: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  GifSearchResultTapped: [1122, {
    gifSearchProvider: [1, r.GIF_SEARCH_PROVIDER],
    rank: [2, o]
  }, [1, 1, 1], "regular"]
});
exports.GifSearchResultTappedWamEvent = l;