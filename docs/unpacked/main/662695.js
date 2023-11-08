Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsReadyToShowStickers = function (e) {
  const [t, n] = (0, r.useState)(e !== a.DisplayLocation.ExpressionsPanel);
  (0, o.useTimeout)(() => n(true), 250, {
    immediate: true
  });
  return t;
};
var a = require("./833654.js");
var r = require("../vendor/667294.js");
var o = require("../app/441673.js");