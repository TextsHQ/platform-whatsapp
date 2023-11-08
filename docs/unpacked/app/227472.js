Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USERJID_USERJID = exports.DEVICEJID_DOMAINJID = exports.DEVICEJID_DEVICEJID = undefined;
var r = require("./418987.js");
const i = {
  validators: [r.validateDeviceJid, r.validateDeviceJid],
  typeName: "DeviceJid|DeviceJid"
};
exports.DEVICEJID_DEVICEJID = i;
const a = {
  validators: [r.validateDeviceJid, r.validateDomainJid],
  typeName: "DeviceJid|DomainJid"
};
exports.DEVICEJID_DOMAINJID = a;
const o = {
  validators: [r.validateUserJid, r.validateUserJid],
  typeName: "UserJid|UserJid"
};
exports.USERJID_USERJID = o;