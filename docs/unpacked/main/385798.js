Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = undefined;
var a = require("../app/914368.js");
const r = window.matchMedia(`\nonly screen and (max-width: ${a.LAYOUT_2COLUMNS_MAX_WIDTH}px)\n`);
const o = {
  column: r.matches ? 2 : 3
};
exports.Column = o;
r.addListener(function (e) {
  const t = e.matches ? 2 : 3;
  if (o.column === t) {
    return;
  }
  o.column = t;
  const n = document.createEvent("Event");
  n.initEvent("columnChange", true, true);
  window.dispatchEvent(n);
});