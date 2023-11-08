var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetGroupProfilePicturesRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./931754.js");
var s = require("./248227.js");
var l = require("./180969.js");
var u = require("./259051.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetGroupProfilePicturesRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetGroupProfilePicturesResponseSuccessGroupPictures)(r, n);
    if (i.success) {
      return {
        name: "GetGroupProfilePicturesResponseSuccessGroupPictures",
        value: i.value
      };
    }
    const p = (0, o.parseGetGroupProfilePicturesResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetGroupProfilePicturesResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetGroupProfilePicturesResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetGroupProfilePicturesResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetGroupProfilePictures", {
      SuccessGroupPictures: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}