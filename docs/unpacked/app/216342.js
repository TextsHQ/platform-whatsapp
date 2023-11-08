Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessageRpcParsing = function (e, t) {
  const n = Object.keys(t).map(e => `Tried <response name="${e}">, but failed with ${t[e].error}.`).join(" ");
  return `Failed to parse the response of <rpc name="${e}">. ${n}`;
};