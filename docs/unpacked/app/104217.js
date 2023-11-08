Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GROUPJID_USERJID = exports.ENUM_LID_PN = exports.ENUM_IMAGE_PREVIEW = exports.DOMAINJID_GROUPJID_USERJID = undefined;
var r = require("./418987.js");
exports.ENUM_IMAGE_PREVIEW = {
  image: "image",
  preview: "preview"
};
exports.ENUM_LID_PN = {
  lid: "lid",
  pn: "pn"
};
const i = {
  validators: [r.validateDomainJid, r.validateGroupJid, r.validateUserJid],
  typeName: "DomainJid|GroupJid|UserJid"
};
exports.DOMAINJID_GROUPJID_USERJID = i;
const a = {
  validators: [r.validateGroupJid, r.validateUserJid],
  typeName: "GroupJid|UserJid"
};
exports.GROUPJID_USERJID = a;