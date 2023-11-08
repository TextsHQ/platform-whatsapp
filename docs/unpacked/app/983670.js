var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    contextInfo: n
  } = e;
  let r = {};
  if (t.loc && (0, a.isString)(t.loc)) {
    const e = t.loc.split("\n");
    r = {
      name: e[0],
      address: e[1],
      url: t.clientUrl
    };
  }
  return {
    locationMessage: (0, i.default)((0, i.default)({}, r), {}, {
      degreesLatitude: parseFloat(t.lat) || undefined,
      degreesLongitude: parseFloat(t.lng) || undefined,
      jpegThumbnail: (0, o.encodeBytes)(t.body),
      contextInfo: n
    })
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./724976.js");
var o = require("./974637.js");