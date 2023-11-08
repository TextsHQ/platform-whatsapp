Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    contextInfo: n
  } = e;
  return {
    templateButtonReplyMessage: {
      selectedId: t.selectedId,
      selectedIndex: t.selectedIndex,
      selectedDisplayText: t.body,
      contextInfo: n
    }
  };
};