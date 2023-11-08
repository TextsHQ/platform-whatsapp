var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    finalLocation: r
  } = e;
  const {
    locationMessage: u,
    liveLocationMessage: c
  } = t;
  let d = null;
  if (u != null) {
    d = function (e, t) {
      var n;
      var r;
      let a = ((n = e.name) !== null && n !== undefined ? n : "") || ((r = e.address) !== null && r !== undefined ? r : "");
      if (e.name != null && e.name !== "" && e.address != null && e.address !== "") {
        a = `${e.name}\n${e.address}`;
      }
      const s = e.degreesLatitude !== undefined ? e.degreesLatitude : undefined;
      const u = e.degreesLongitude !== undefined ? e.degreesLongitude : undefined;
      return {
        msgData: (0, i.default)((0, i.default)({}, t), {}, {
          type: l.MSG_TYPE.LOCATION,
          loc: a,
          lat: s,
          lng: u,
          body: (0, o.decodeBytes)(e.jpegThumbnail) || "",
          clientUrl: e.url
        }),
        contextInfo: e.contextInfo
      };
    }(u, n);
  }
  if (c != null) {
    d = function (e, t, n) {
      let r = {};
      if (n) {
        r = {
          finalLat: n.degreesLatitude,
          finalLng: n.degreesLongitude,
          finalThumbnail: (0, o.decodeBytes)(n.jpegThumbnail) || "",
          finalAccuracy: n.accuracyInMeters,
          finalSpeed: n.speedInMps,
          finalDegrees: n.degreesClockwiseFromMagneticNorth,
          finalTimeOffset: n.timeOffset
        };
      }
      return {
        msgData: (0, i.default)((0, i.default)((0, i.default)({}, t), r), {}, {
          type: l.MSG_TYPE.LOCATION,
          isLive: true,
          lat: e.degreesLatitude,
          lng: e.degreesLongitude,
          body: (0, o.decodeBytes)(e.jpegThumbnail) || "",
          accuracy: e.accuracyInMeters,
          speed: e.speedInMps,
          degrees: e.degreesClockwiseFromMagneticNorth,
          comment: (0, s.convertToTextWithoutSpecialEmojis)(e.caption),
          sequence: (0, a.maybeNumberOrThrowIfTooLarge)(e.sequenceNumber)
        }),
        contextInfo: e.contextInfo
      };
    }(c, n, r);
  }
  return d;
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./21094.js");
var s = require("./974637.js");
var l = require("./373070.js");