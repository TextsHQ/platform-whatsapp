Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markInteractiveButtonClicked = function (e, t) {
  var n;
  var r;
  const o = {
    buttons: (n = e.interactivePayload) === null || n === undefined || (r = n.buttons) === null || r === undefined ? undefined : r.map((e, n) => {
      if (e.buttonParamsJson === undefined) {
        return null;
      }
      const a = JSON.parse(e.buttonParamsJson);
      if (t === n) {
        a.disabled = true;
      }
      return {
        name: e.name,
        buttonParamsJson: JSON.stringify(a)
      };
    })
  };
  e.set("interactivePayload", o);
  return (0, a.getMessageTable)().get(e.id.toString()).then(e => {
    const t = {
      id: e == null ? undefined : e.id,
      interactivePayload: o
    };
    return (0, a.getMessageTable)().bulkCreateOrMerge([t]);
  });
};
var a = require("../app/851698.js");