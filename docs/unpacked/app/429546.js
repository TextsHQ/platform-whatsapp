Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    contextInfo: n
  } = e;
  return {
    contactMessage: {
      displayName: t.vcardFormattedName,
      vcard: t.body,
      contextInfo: n
    }
  };
};