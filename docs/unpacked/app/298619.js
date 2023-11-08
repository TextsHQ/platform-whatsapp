Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INLINE_MESSAGE_STARTING_INDEX = undefined;
exports.getLastRowId = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return e.all({
    reverse: !t,
    limit: 1,
    index: ["rowId"],
    returnKeyType: "keys"
  }).then(e => e.length === 0 ? n : e[0]);
};
const n = 1000000000;
exports.INLINE_MESSAGE_STARTING_INDEX = n;