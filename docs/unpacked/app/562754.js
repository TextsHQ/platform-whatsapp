Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UseCaseSecretModificationType = undefined;
exports.createUseCaseSecret = function (e) {
  const {
    messageSecret: t,
    stanzaId: n,
    parentMsgOriginalSender: a,
    modificationSender: o,
    modificationType: s
  } = e;
  const l = r.Binary.build(n, a, o, s).readBuffer();
  return (0, i.extractAndExpand)(t instanceof ArrayBuffer ? new Uint8Array(t) : t, l, 32);
};
var r = require("./904704.js");
var i = require("./562075.js");
const a = require("../vendor/654302.js")({
  POLL_VOTE: "Poll Vote",
  ENC_REACTION: "Enc Reaction",
  ENC_COMMENT: "Enc Comment"
});
exports.UseCaseSecretModificationType = a;