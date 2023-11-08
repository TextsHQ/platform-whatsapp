Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FLAG_FIELD_NAMES = exports.FLAG_FIELDS = undefined;
exports.toMaybeBoolFlagActionType = function (e) {
  if (!r.hasOwnProperty(e)) {
    return null;
  }
  return e;
};
const n = {
  isCartAddClicked: false,
  isCtaOnPdpClicked: false,
  isCommerceViewed: false,
  viaContactlessChats: false
};
const r = Object.freeze(n);
exports.FLAG_FIELDS = r;
const i = Object.freeze(Object.keys(n));
exports.FLAG_FIELD_NAMES = i;