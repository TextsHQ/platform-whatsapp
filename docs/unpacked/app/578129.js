var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CelebrationAnimationType = undefined;
exports.getCongratulationsAnimationPath = function (e) {
  let t = null;
  if (e === a.DEFAULT) {
    t = i.default.build("https://static.whatsapp.net/wa/static/test", {
      cat: "test",
      id: "confetti-falling",
      test: "1"
    });
  }
  return t;
};
var i = r(require("./79291.js"));
const a = require("../vendor/76672.js").Mirrored(["DEFAULT"]);
exports.CelebrationAnimationType = a;