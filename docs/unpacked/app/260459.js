Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIRECT_CONNECTION_FLAG = undefined;
exports.getBusinessProfileQueryVersion = function () {
  return a(i.ServerProps.webBizProfileOptions);
};
exports.getBusinessProfileQueryVersionWithCustomBizProfileOptions = a;
var r = require("./72696.js");
var i = require("./937001.js");
exports.DIRECT_CONNECTION_FLAG = 128;
function a(e) {
  let t = 247;
  if ((0, r.bizLinkedAccountsEnabled)()) {
    t |= 256;
  }
  return e & t;
}