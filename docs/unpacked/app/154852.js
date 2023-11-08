var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFlexStyles = function (e) {
  const {
    basis: t,
    order: n,
    grow: r,
    shrink: d
  } = e;
  return {
    xstyle: [e.flex === true && i.displayFlex, e.inline === true && i.displayInlineFlex, e.wrap != null && a[e.wrap], e.alignSelf != null && o[e.alignSelf], e.justifySelf != null && s[e.justifySelf], e.flex === true && [e.align != null && c[e.align], e.justify != null && l[e.justify], e.direction != null && u[e.direction]]],
    inline: {
      flexBasis: typeof t == "string" || t == null ? t : `${t}px`,
      flexGrow: r,
      flexShrink: d,
      order: n
    }
  };
};
r(require("./156720.js"));
const i = {
  displayFlex: {
    display: "p357zi0d"
  },
  displayInlineFlex: {
    display: "i86elurf"
  }
};
const a = {
  nowrap: {
    flexWrap: "dnb887gk"
  },
  wrap: {
    flexWrap: "lkhkxwyq"
  },
  wrapReverse: {
    flexWrap: "ns59xd2u"
  }
};
const o = {
  auto: {
    alignSelf: "gjuq5ydh"
  },
  start: {
    alignSelf: "ex3gcxaf"
  },
  center: {
    alignSelf: "o2es7gts"
  },
  end: {
    alignSelf: "rwlvdxyg"
  },
  stretch: {
    alignSelf: "l33m68ws"
  },
  baseline: {
    alignSelf: "syp6qgce"
  }
};
const s = {
  auto: {
    justifySelf: "i2cterl7"
  },
  start: {
    justifySelf: "a4ki7vd9"
  },
  center: {
    justifySelf: "fzhgt5rc"
  },
  end: {
    justifySelf: "s5cppr1w"
  },
  stretch: {
    justifySelf: "cwelc83b"
  }
};
const l = {
  start: {
    justifyContent: "fhf7t426"
  },
  center: {
    justifyContent: "ac2vgrno"
  },
  end: {
    justifyContent: "kcgo1i74"
  },
  all: {
    justifyContent: "o4u7okr9"
  },
  around: {
    justifyContent: "j1p1mz06"
  },
  evenly: {
    justifyContent: "s1e5xcja"
  },
  stretch: {
    justifyContent: "ctjs45qd"
  }
};
const u = {
  horizontal: {
    flexDirection: "sap93d0t"
  },
  vertical: {
    flexDirection: "f8m0rgwh"
  },
  horizontalReverse: {
    flexDirection: "v76qf5v1"
  },
  verticalReverse: {
    flexDirection: "qzvtbs9h"
  }
};
const c = {
  center: {
    alignItems: "gndfcl4n"
  },
  start: {
    alignItems: "r15c9g6i"
  },
  end: {
    alignItems: "r6jd426a"
  },
  stretch: {
    alignItems: "elxb2u3l"
  },
  baseline: {
    alignItems: "e4eao3g2"
  }
};