Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forcePassRuleValidator = undefined;
exports.forcePassRuleValidator = e => {
  const {
    qpConfigForcePass: t
  } = e.data;
  let n;
  n = t === "true";
  return {
    result: true,
    skipWaterfallLogging: true,
    forcePass: n
  };
};