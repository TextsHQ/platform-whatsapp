var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageMixinArgs = function (e) {
  if (!(0, u.isSpamSupportedForMessageType)(e.type)) {
    return null;
  }
  const {
    deletedReason: t,
    messageWithPaymentReportOrPaymentReportDeprecatedOrTypeOrPollMixinGroupArgs: n,
    hsmTemplateMixin: r,
    rawArgs: h
  } = function (e) {
    let t;
    const n = e.isViewOnce && !(0, g.isUnviewed)(e.safe());
    if (n) {
      t = (0, g.isViewed)(e.safe()) ? "view_once_opened" : "view_once_expired";
    }
    const r = function (e, t) {
      let n = e.conversation;
      if (!t.isFromTemplate || n == null) {
        return e;
      }
      const r = t.buttons;
      if (!(r == null)) {
        r.forEach(e => {
          const t = (0, d.getOTPCodeFromButton)(e);
          var r;
          if (t != null) {
            n = (r = n) === null || r === undefined ? undefined : r.replace(t, "<code>");
          }
        });
      }
      e.conversation = n;
      return e;
    }((0, _.getSpamMessageProtobuf)((0, p.createOutgoingMsgModelProtobuf)(e)), e);
    const a = (0, o.mediaTypeFromProtobuf)(r);
    const s = n ? null : (0, m.encodeProtobuf)(f.MessageSpec, r).readByteArray();
    let u;
    switch ((0, l.typeAttributeFromProtobuf)(r)) {
      case "poll":
        u = {
          messageWithPoll: {
            contentTypePollCreationContentTypePollCreationOrContentTypePollCreationDeprecatedMixinGroupArgs: {
              isContentTypePollCreation: true
            }
          }
        };
        break;
      case "text":
        u = {
          messageWithType: {
            contentTypeTextOrMediaMixinGroupArgs: {
              isContentTypeText: true
            }
          }
        };
        break;
      default:
        u = {
          messageWithType: {
            contentTypeTextOrMediaMixinGroupArgs: {
              isContentTypeMedia: true
            }
          }
        };
    }
    const c = s != null ? (0, i.default)({
      rawElementValue: s,
      rawV2Or3Or3DeprecatedMixinGroupArgs: o.CIPHERTEXT_VERSION === 2 ? {
        isRawV2: true
      } : {
        rawV3: {
          rawProtocolV: o.CIPHERTEXT_VERSION
        }
      }
    }, a && {
      rawMediatype: a
    }) : null;
    const h = e.isFromTemplate && e.templateId != null ? {
      hsmTid: e.templateId
    } : null;
    return {
      deletedReason: t,
      messageWithPaymentReportOrPaymentReportDeprecatedOrTypeOrPollMixinGroupArgs: u,
      hsmTemplateMixin: h,
      rawArgs: c
    };
  }(e);
  let y = (0, i.default)({
    messageWithPaymentReportOrPaymentReportDeprecatedOrTypeOrPollMixinGroupArgs: n,
    messageT: e.t,
    messageId: (0, a.toStanzaId)(e.id.id),
    rawArgs: h,
    messageDeletedReason: t,
    messageWithHsmTemplateMixinArgs: r
  }, (0, c.getIsEdited)(e) && {
    hasMessageEdit: true
  });
  if ((0, s.isSMBMMSpamReportEnabled)() && (0, c.getBizSource)(e) === "smb_promo") {
    y = (0, i.default)({
      hasSMBBroadcastSource: true
    }, y);
  }
  return y;
};
exports.parseGroupReportResponse = function (e) {
  switch (e.name) {
    case "GroupReportResponseError":
      {
        const t = parseInt(e.value.errorIQErrorInternalServerErrorOrBadRequestMixinGroup.value.code, 10);
        const n = e.value.errorIQErrorInternalServerErrorOrBadRequestMixinGroup.value.text;
        __LOG__(3)`parseGroupReportResponse: server response with ${t}, ${n}`;
        return {
          errorCode: t,
          errorText: n
        };
      }
    default:
      e.name;
      return e.value;
  }
};
exports.parseIndividualReportResponse = function (e) {
  switch (e.name) {
    case "IndividualReportResponseError":
      {
        const t = parseInt(e.value.errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup.value.code, 10);
        const n = e.value.errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup.value.text;
        __LOG__(3)`parseIndividualReportResponse: server response with ${t}, ${n}`;
        return {
          errorCode: t,
          errorText: n
        };
      }
    default:
      e.name;
      return e.value;
  }
};
var i = r(require("../vendor/81109.js"));
var a = require("./757585.js");
var o = require("./973776.js");
var s = require("./72696.js");
var l = require("./974637.js");
var u = require("./126506.js");
var c = require("./787742.js");
var d = require("./634730.js");
var p = require("./47.js");
var f = require("./533494.js");
var _ = require("./662193.js");
var g = require("./239870.js");
var m = require("./385914.js");