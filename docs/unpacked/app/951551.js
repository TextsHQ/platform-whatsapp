var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./630884.js"));
const a = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true
};
class o extends i.default {
  constructor(e) {
    super(e, s, l, {
      encodeKey: u,
      matchOptions: a
    });
  }
}
function s(e) {
  return new Response(e);
}
function l(e) {
  return e.arrayBuffer();
}
function u(e, t) {
  const n = encodeURIComponent(e);
  return `https://_media_cache_v2_.whatsapp.com/${encodeURIComponent(t)}_${n}`;
}
exports.default = o;