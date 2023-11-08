Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logCadminDemoteEvent = undefined;
var a = require("./101694.js");
exports.logCadminDemoteEvent = (e, t, n) => {
  new a.CadminDemoteWamEvent({
    cadminDemoteOrigin: e,
    cadminDemoteResult: t,
    isLastCadminOrCreator: n
  }).commit();
};