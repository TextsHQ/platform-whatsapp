Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifSearchNoResultsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./340406.js");
const {
  STRING: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  GifSearchNoResults: [1128, {
    gifSearchProvider: [1, r.GIF_SEARCH_PROVIDER],
    inputLanguageCode: [3, o],
    languageCode: [2, o]
  }, [1, 1, 1], "regular"]
});
exports.GifSearchNoResultsWamEvent = l;