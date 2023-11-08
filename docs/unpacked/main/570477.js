var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireVoipCommonDisabled = exports.requireVoip = exports.requireStickerPackCollection = exports.requireStatusV3Collection = exports.requireSetWorkerSafeHandlers = exports.requireSetFrontendHandlers = exports.requireMsgCollection = exports.requireMain = exports.requireLabelCollection = exports.requireHandleVideoStreamingRequest = exports.requireEmojiConfig = exports.requireEmojiAssetMapCreator = exports.requireContactCollection = exports.requireClearAppStates = exports.requireChatCollection = exports.requireCallCollection = undefined;
var r = a(require("../app/97359.js"));
exports.requireMain = () => (0, r.default)(require("./56917.js"));
exports.requireContactCollection = () => require("../app/177938.js").ContactCollection;
exports.requireEmojiConfig = () => ({
  APPLE: {
    UNICODE_TO_EMOJI: (0, r.default)(require("../main-chunk/28193.js")),
    SELECTOR: "apple"
  },
  WHATSAPP: {
    UNICODE_TO_EMOJI: (0, r.default)(require("../main-chunk/568412.js")),
    SELECTOR: "wa"
  }
});
exports.requireEmojiAssetMapCreator = () => require("../app/343168.js").emojiAssetMapCreator;
exports.requireStatusV3Collection = () => require("../app/657694.js").StatusV3Collection;
exports.requireClearAppStates = () => (0, r.default)(require("./6375.js"));
exports.requireHandleVideoStreamingRequest = () => require("./511016.js").handleVideoStreamingRequest;
exports.requireLabelCollection = () => require("../app/856311.js").LabelCollection;
exports.requireChatCollection = () => require("../app/351053.js").ChatCollection;
exports.requireMsgCollection = () => require("../app/61113.js").MsgCollection;
exports.requireStickerPackCollection = () => require("./276741.js").StickerPackCollection;
exports.requireCallCollection = () => (0, r.default)(require("../app/247665.js"));
exports.requireVoip = () => (0, r.default)(require("../app/961745.js")).Voip;
exports.requireVoipCommonDisabled = () => require("./323446.js");
exports.requireSetFrontendHandlers = () => require("./79806.js").$;
exports.requireSetWorkerSafeHandlers = () => require("./358040.js").A;