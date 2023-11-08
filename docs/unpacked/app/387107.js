var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msgContext: t,
    contextInfo: n,
    json: r
  } = e;
  const a = t === "quoted" ? {
    name: r.pollName,
    options: []
  } : {
    name: r.pollName,
    options: r.pollOptions.map(e => {
      let {
        name: t
      } = e;
      return {
        optionName: t
      };
    }),
    selectableOptionsCount: r.pollSelectableOptionsCount
  };
  const o = n ? (0, i.default)((0, i.default)({}, a), {}, {
    contextInfo: n
  }) : a;
  if (r.isSentCagPollCreation) {
    return {
      pollCreationMessageV2: o
    };
  }
  if (r.pollSelectableOptionsCount === 1) {
    return {
      pollCreationMessageV3: o
    };
  }
  return {
    pollCreationMessage: o
  };
};
var i = r(require("../vendor/81109.js"));