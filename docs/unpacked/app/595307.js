var n;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
const r = document.getElementById("hard_expire_time");
let i = r == null || (n = r.dataset) === null || n === undefined ? undefined : n.time;
if (!i) {
  __LOG__(3)`hard expire time not found on dom, using fallback of 1572566400 (2019/11/1)`;
  i = "1572566400";
}
var a = i;
exports.default = a;