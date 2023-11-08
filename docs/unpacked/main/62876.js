var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionBar = function (e) {
  let {
    result: t,
    isPollSentByMe: n
  } = e;
  const {
    percentageOfMostVotedForOption: a
  } = t;
  return o.default.createElement("div", {
    className: (0, l.default)(i.barContainer, r.uiMargin.top4, n ? i.barContainerSender : i.barContainerReceiver)
  }, o.default.createElement("div", {
    className: (0, l.default)(i.bar, n ? i.barSender : i.barReceiver),
    style: {
      width: a * 100 + "%"
    }
  }));
};
var r = require("../app/676345.js");
var o = a(require("../vendor/667294.js"));
var l = a(require("../app/156720.js"));
const i = {
  barContainer: {
    width: "ln8gz9je",
    height: "gm0rsm7k",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  barContainerReceiver: {
    backgroundColor: "plmgw4ct"
  },
  barContainerSender: {
    backgroundColor: "hmfli31t"
  },
  bar: {
    height: "ppled2lx",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9",
    transitionProperty: "jb7wq3az",
    transitionDuration: "p4t1lx4y"
  },
  barReceiver: {
    backgroundColor: "pdhqso7h"
  },
  barSender: {
    backgroundColor: "o12azb7x"
  }
};