Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postUnknownStanzaMetric = function (e) {
  var t;
  new r.UnknownStanzaWamEvent({
    unknownStanzaTag: e.tag,
    unknownStanzaType: (t = e.attrs.type) === null || t === undefined ? undefined : t.toString()
  }).commit();
};
var r = require("./295952.js");