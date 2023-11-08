Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LID_CANONICAL_TYPE = exports.EncMediaType = exports.DecryptFailType = exports.CiphertextType = undefined;
const r = require("../vendor/76672.js")({
  Skmsg: "skmsg",
  Pkmsg: "pkmsg",
  Msg: "msg",
  Msmsg: "msmsg"
});
exports.CiphertextType = r;
const i = require("../vendor/76672.js")({
  CTWA: "ctwa",
  USERNAME: "username"
});
exports.LID_CANONICAL_TYPE = i;
const a = require("../vendor/76672.js")({
  Image: "image",
  Video: "video",
  Ptv: "ptv",
  Audio: "audio",
  Ptt: "ptt",
  Location: "location",
  VCard: "vcard",
  Document: "document",
  Url: "url",
  Call: "call",
  Gif: "gif",
  Future: "future",
  ContactArray: "contact_array",
  LiveLocation: "livelocation",
  ProfilePic: "profile_pic",
  Sticker: "sticker",
  Hsm: "hsm",
  ProductImage: "product_image",
  Template: "template",
  MdAppState: "md_app_state",
  MdHistorySync: "md_history_sync",
  List: "list",
  ListResponse: "list_response",
  Button: "button",
  ButtonResponse: "button_response",
  Order: "order",
  Product: "product",
  NativeFlowResponse: "native_flow_response"
});
exports.EncMediaType = a;
const o = require("../vendor/76672.js")({
  Hide: "hide",
  Show: "show"
});
exports.DecryptFailType = o;