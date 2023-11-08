Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawGroupMention = undefined;
var r = require("./948325.js");
class i extends r.GroupMention {}
exports.RawGroupMention = i;
i.mutates = true;
i.mutate = (e, t) => {
  let {
    groupSubject: n
  } = t;
  return `@${n}`;
};