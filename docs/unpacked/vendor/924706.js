exports.__esModule = true;
exports.useModality = function () {
  var e = r.default.useState({
    activeModality: (0, i.getActiveModality)(),
    modality: (0, i.getModality)()
  });
  var t = e[0];
  var n = e[1];
  (0, a.default)(function () {
    return (0, i.addModalityListener)(function (e) {
      n(e);
    });
  }, []);
  return t;
};
var r = o(require("./667294.js"));
var i = require("./112139.js");
var a = o(require("./124739.js"));
function o(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}