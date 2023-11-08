Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    contextInfo: n
  } = e;
  return {
    contactsArrayMessage: {
      contacts: t.vcardList.map(e => e),
      contextInfo: n
    }
  };
};