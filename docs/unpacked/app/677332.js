var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateFilehashFromBlob = function (e) {
  return (e instanceof s.default ? (0, o.opaqueDataToArrayBuffer)(e) : (0, a.blobToArrayBuffer)(e)).then(e => (0, i.calculateFilehash)(e)).catch(t => {
    const n = {
      error: `${t}`,
      blobSize: e.size,
      isOpaqueData: e instanceof s.default
    };
    __LOG__(3, undefined, undefined, true)`calculateFilehashFromBlob error. Debug:\n${JSON.stringify(n, null, 2)}`;
    SEND_LOGS("calculate-filehash-from-blob-error");
  });
};
var i = require("./815612.js");
var a = require("./698210.js");
var o = require("./232294.js");
var s = r(require("./756680.js"));