var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePicsTypeEnum = exports.ProfilePicsQueryEnum = undefined;
exports.getProfilePics = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./257118.js");
var s = require("./984330.js");
var l = require("./669050.js");
var u = require("./574819.js");
const c = Object.freeze({
  IMAGE: "image",
  PREVIEW: "preview"
});
exports.ProfilePicsTypeEnum = c;
const d = Object.freeze({
  BLOB: "blob",
  URL: "url"
});
function p() {
  return (p = (0, a.default)(function* (e, t, n) {
    const {
      subgroupHintId: r,
      type: a = c.PREVIEW,
      query: s = d.URL
    } = n;
    const p = {
      profilePictureTypeMixinArgs: {
        pictureType: a
      },
      profilePictureQueryMixinArgs: {
        pictureQuery: s
      }
    };
    const _ = e.map(e => {
      let {
        groupId: t,
        photoId: n,
        isParentGroup: r = false
      } = e;
      const a = r ? {
        parentGroup: {
          anyParentGroupJid: (0, u.widToGroupJid)(t)
        }
      } : {
        subGroup: {
          anySubGroupJid: (0, u.widToGroupJid)(t)
        }
      };
      return (0, i.default)({
        parentOrSubGroupMixinGroupArgs: a,
        profilePictureIdMixinArgs: n != null ? {
          pictureId: n
        } : undefined
      }, p);
    });
    const g = yield (0, o.sendGetGroupProfilePicturesRPC)({
      pictureArgs: _,
      subGroupHintMixinArgs: r ? {
        anyLinkedGroupsMembershipHint: (0, u.widToGroupJid)(r)
      } : undefined,
      baseGetGroupOrServerMixinGroupArgs: {
        baseGetGroup: {
          iqTo: (0, u.widToGroupJid)(t)
        }
      }
    });
    switch (g.name) {
      case "GetGroupProfilePicturesResponseSuccessGroupPictures":
        return g.value.picturesPicture.map(e => {
          let t;
          t = e.parentOrSubGroupMixinGroup.name === "SubGroup" ? (0, l.createWid)(e.parentOrSubGroupMixinGroup.value.subGroupJid) : (0, l.createWid)(e.parentOrSubGroupMixinGroup.value.parentGroupJid);
          switch (e.getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup.name) {
            case "GetGroupProfilePicturesSuccessProfilePictureResponse":
              {
                var n;
                var r;
                const i = e.getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup.value;
                return {
                  id: t,
                  tag: i.id,
                  eurl: (n = i.profilePictureUrlOrBlobResponseMixinGroup) === null || n === undefined ? undefined : n.value.url,
                  directPath: (r = i.profilePictureUrlOrBlobResponseMixinGroup) === null || r === undefined ? undefined : r.value.directPath,
                  type: i.type,
                  updatePicture: true
                };
              }
            case "GetGroupProfilePicturesPartialProfilePictureResponse":
              {
                var i;
                let n = false;
                if (((i = e.getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup.value.pictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup) === null || i === undefined ? undefined : i.name) === "PictureNotFound") {
                  n = true;
                }
                return {
                  id: t,
                  tag: null,
                  eurl: null,
                  directPath: null,
                  type: null,
                  updatePicture: n
                };
              }
          }
        });
      case "GetGroupProfilePicturesResponseClientError":
        return f(g.value.errorGetGroupProfilePictureClientErrors.value.code, g.value.errorGetGroupProfilePictureClientErrors.value.text);
      case "GetGroupProfilePicturesResponseServerError":
        return f(g.value.errorServerErrors.value.code, g.value.errorServerErrors.value.text);
    }
  })).apply(this, arguments);
}
function f(e, t) {
  __LOG__(4, undefined, new Error(), true, ["non-sad"])`getGroupProfilePics failed: ${e}:${t}`;
  SEND_LOGS("pictures-error", 0.001, "non-sad");
  return Promise.reject(new s.ServerStatusCodeError(Number(e), t));
}
exports.ProfilePicsQueryEnum = d;