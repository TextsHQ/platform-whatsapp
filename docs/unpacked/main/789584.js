var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexFetchNewsletterMessageReactionSenderList = function () {
  return s.apply(this, arguments);
};
var r;
var o = a(require("../vendor/348926.js"));
var l = require("../app/123982.js");
var i = require("../app/669050.js");
const u = r !== undefined ? r : r = require("./119294.js");
function s() {
  return (s = (0, o.default)(function* (e, t) {
    var n;
    var a;
    const r = (yield (0, l.fetchQuery)(u, {
      input: {
        id: e,
        server_id: t
      }
    })).xwa2_newsletters_reaction_sender_list;
    if (r == null) {
      __LOG__(4, undefined, new Error(), undefined, ["GQL", "mex"])`[mex][NEWSLETTER] error fetching reaction sender list for newsletter with id ${e} and message with id ${t}`;
      return null;
    } else {
      return {
        reactions: (n = (a = r.reactions) === null || a === undefined ? undefined : a.map(e => {
          let {
            reaction_code: t,
            sender_list: n
          } = e;
          return {
            reactionCode: t,
            senderList: n == null ? undefined : n.edges.map(e => {
              let {
                node: t
              } = e;
              const {
                id: n,
                profile_pic_direct_path: a
              } = t;
              return {
                id: n != null ? (0, i.createWid)(n) : null,
                profileUrl: a
              };
            })
          };
        }).filter(Boolean)) !== null && n !== undefined ? n : []
      };
    }
  })).apply(this, arguments);
}