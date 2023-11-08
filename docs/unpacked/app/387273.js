Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveMsgIds = function (e) {
  const t = e.map(e => +e.id);
  const n = new Map(e.map(e => [+e.id, e]));
  return (0, i.getMessageTable)().anyOf(["rowId"], t).then(e => {
    const t = [];
    e.forEach(e => {
      const i = (0, r.messageFromDbRow)(e);
      const a = n.get(i.rowId);
      if (a != null && a.id === String(i.rowId) && a.timestamp === i.t && a.chatId === i.id.remote.toString()) {
        t.push(i);
        n.delete(i.rowId);
      }
    });
    const i = Array.from(n.keys(), e => String(e));
    t.sort((e, t) => t.t - e.t);
    return {
      resolved: t,
      unresolved: i
    };
  });
};
var r = require("./907539.js");
var i = require("./851698.js");