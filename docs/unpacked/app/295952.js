Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnknownStanzaWamEvent = undefined;
var r = require("./901032.js");
const {
  STRING: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  UnknownStanza: [3448, {
    unknownStanzaTag: [1, i],
    unknownStanzaType: [2, i]
  }, [1, 1, 1], "regular"]
});
exports.UnknownStanzaWamEvent = a;