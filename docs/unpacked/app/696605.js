var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  let {
    json: n,
    mediaMetadata: r,
    contextInfo: d
  } = e;
  if (n.interactiveHeader) {
    t = {
      title: n.interactiveHeader.title,
      subtitle: n.interactiveHeader.subtitle,
      hasMediaAttachment: n.interactiveHeader.hasMediaAttachment
    };
    if (n.interactiveHeader.thumbnail) {
      t = (0, i.default)((0, i.default)({}, t), {}, {
        jpegThumbnail: (0, a.encodeBytes)(n.interactiveHeader.thumbnail)
      });
    } else if (n.interactiveHeader.mediaType) {
      switch (n.interactiveHeader.mediaType) {
        case u.InteractiveMessageHeaderMediaType.VIDEO:
          {
            const e = (0, l.default)({
              json: n,
              mediaMetadata: r,
              contextInfo: d
            }).videoMessage;
            t = (0, i.default)((0, i.default)({}, t), {}, {
              videoMessage: (0, i.default)((0, i.default)({}, e), {}, {
                caption: undefined
              })
            });
            break;
          }
        case u.InteractiveMessageHeaderMediaType.DOCUMENT:
          t = (0, i.default)((0, i.default)({}, t), {}, {
            documentMessage: (0, o.default)({
              json: n,
              mediaMetadata: r,
              contextInfo: d
            }).documentMessage
          });
          break;
        case u.InteractiveMessageHeaderMediaType.IMAGE:
          t = (0, i.default)((0, i.default)({}, t), {}, {
            imageMessage: (0, s.default)({
              json: n,
              mediaMetadata: r,
              contextInfo: d
            }).imageMessage
          });
      }
    }
  }
  const p = (0, i.default)({
    body: n.caption || n.nativeFlowName === c.default.ORDER_STATUS ? {
      text: n.caption
    } : undefined,
    footer: n.footer ? {
      text: n.footer
    } : undefined,
    header: t
  }, d && {
    contextInfo: d
  });
  const f = (0, a.getInteractiveMessageFieldNameForType)(n.interactiveType);
  if (f) {
    p[f] = n.interactivePayload;
  }
  return {
    interactiveMessage: p
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = r(require("./706200.js"));
var s = r(require("./920697.js"));
var l = r(require("./461499.js"));
var u = require("./943914.js");
var c = r(require("./753110.js"));