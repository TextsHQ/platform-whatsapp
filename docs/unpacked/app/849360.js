Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.astralRange = undefined;
exports.length = function (e) {
  const t = e.match(n);
  if (t) {
    return t.length;
  } else {
    return 0;
  }
};
exports.substring = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let r = arguments.length > 2 ? arguments[2] : undefined;
  const i = e.match(n);
  if (!i) {
    return "";
  }
  return i.slice(Math.max(0, t), Math.max(0, r)).join("");
};
exports.toArray = function (e) {
  return e.match(n) || [];
};
const n = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;
exports.astralRange = n;