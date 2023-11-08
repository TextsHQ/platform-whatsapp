var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfilePic = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./677825.js");
var o = require("./984330.js");
var s = require("./574819.js");
function l() {
  return (l = (0, i.default)(function* (e, t) {
    if (e.isStatusV3() || e.isBroadcast()) {
      __LOG__(4, true, new Error())`getProfilePic failed with an invalid WID: ${e.toString()}`;
      return Promise.reject(new o.ServerStatusCodeError(401, `getProfilePic failed with an invalid WID: ${e.toString()}`));
    }
    const {
      preview: n = true,
      invite: r,
      photoId: i
    } = t;
    const l = yield (0, a.sendGetRPC)({
      iqTarget: (0, s.widToChatJid)(e),
      pictureType: n ? "preview" : "image",
      pictureId: i != null ? String(i) : undefined,
      pictureQuery: "url",
      pictureInvite: r
    });
    switch (l.name) {
      case "GetResponseSuccessPictureURL":
        {
          const {
            pictureId: e,
            pictureType: t,
            pictureUrl: n,
            pictureDirectPath: r,
            pictureHash: i
          } = l.value;
          return {
            tag: e,
            type: t,
            eurl: n,
            directPath: r,
            filehash: i
          };
        }
      case "GetResponseError":
        {
          const e = l.value.errorIQErrorBadRequestOrNotAuthorizedOrItemNotFoundOrRateOverlimitOrInternalServerErrorOrFeatureNotImplementedOrServiceUnavailableMixinGroup.value;
          return Promise.reject(new o.ServerStatusCodeError(Number(e.code), e.text));
        }
      case "GetResponseSuccessNoData":
      case "GetResponseSuccessPictureBlob":
        return Promise.reject(l.value.type);
    }
  })).apply(this, arguments);
}