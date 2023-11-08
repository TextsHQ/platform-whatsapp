var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openOrderExpansionModal = exports.BizOrderExpansionModal = undefined;
var r = require("../app/72696.js");
var o = require("./416056.js");
var l = require("./155734.js");
var i = require("../app/103440.js");
var u = require("../app/690495.js");
var s = require("../app/114850.js");
var c = require("../app/462937.js");
var d = require("./598788.js");
var f = require("../app/180519.js");
var p = require("../app/676345.js");
var m = require("../vendor/548360.js");
var h = a(require("../vendor/667294.js"));
var g = a(require("../app/156720.js"));
const E = {
  illustration: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno"
  },
  modalTitle: {
    lineHeight: "geihefkw",
    textAlign: "qfejxiq4"
  },
  iconColor: {
    color: "s4recxw2"
  },
  listItem: {
    lineHeight: "htjsae3x"
  }
};
const v = e => h.default.createElement(i.ConfirmPopup, {
  onOK: e.onOk,
  okText: m.fbt._("OK", null, {
    hk: "1sx2Sd"
  }),
  onOverlayClick: e.onDismiss
}, h.default.createElement(u.FlexColumn, {
  className: (0, g.default)(p.uiPadding.horiz30)
}, h.default.createElement(u.FlexRow, {
  justify: "center",
  align: "center",
  className: (0, g.default)([p.uiPadding.top28])
}, h.default.createElement(o.BusinessOrderExpansionModalIcon, {
  width: 360,
  height: 128,
  className: (0, g.default)(E.illustration)
})), h.default.createElement(u.FlexRow, null, h.default.createElement(f.TextDiv, {
  weight: "medium",
  size: "24",
  color: "dark",
  xstyle: [p.uiMargin.vert24, E.modalTitle]
}, (0, r.isOrderContentOptimizationEnabled)() ? m.fbt._("Manage your charges like a pro", null, {
  hk: "18QOAg"
}) : m.fbt._("Use orders to manage your sales like a pro", null, {
  hk: "35Ghdo"
}))), h.default.createElement(u.FlexRow, {
  align: "center",
  xstyle: [p.uiMargin.bottom16, p.uiPadding.horiz18]
}, h.default.createElement(l.ChatMsgIcon, {
  height: 22,
  width: 22,
  xstyle: E.iconColor
}), h.default.createElement(f.TextDiv, {
  xstyle: p.uiMargin.start24
}, h.default.createElement(f.TextDiv, {
  size: "16",
  weight: "medium",
  color: "dark",
  xstyle: [p.uiMargin.bottom4, E.listItem]
}, m.fbt._("Easy to do in chat", null, {
  hk: "4d9lLB"
})), h.default.createElement(f.TextDiv, {
  size: "16",
  weight: "normal",
  color: "secondary",
  xstyle: E.listItem
}, m.fbt._("Simply open a chat with a customer, then attach an order.", null, {
  hk: "31pFwv"
})))), h.default.createElement(u.FlexRow, {
  align: "center",
  xstyle: [p.uiMargin.bottom16, p.uiPadding.horiz18]
}, h.default.createElement(d.SecurityShieldLockIcon, {
  height: 22,
  width: 22,
  xstyle: E.iconColor
}), h.default.createElement(f.TextDiv, {
  xstyle: p.uiMargin.start24
}, h.default.createElement(f.TextDiv, {
  size: "16",
  weight: "medium",
  color: "dark",
  xstyle: [p.uiMargin.bottom4, E.listItem]
}, m.fbt._("Build trust with customers", null, {
  hk: "4nA8xn"
})), h.default.createElement(f.TextDiv, {
  size: "16",
  weight: "normal",
  color: "secondary",
  xstyle: E.listItem
}, m.fbt._("Send receipts and status updates for their purchases, all in chat.", null, {
  hk: "aNvkc"
})))), h.default.createElement(u.FlexRow, {
  align: "center",
  xstyle: [p.uiMargin.bottom16, p.uiPadding.horiz18]
}, h.default.createElement(c.ReceiptIcon, {
  height: 22,
  width: 22,
  xstyle: E.iconColor
}), h.default.createElement(f.TextDiv, {
  xstyle: p.uiMargin.start24
}, h.default.createElement(f.TextDiv, {
  size: "16",
  weight: "medium",
  color: "dark",
  xstyle: [p.uiMargin.bottom4, E.listItem]
}, (0, r.isOrderContentOptimizationEnabled)() ? m.fbt._("Simple management", null, {
  hk: "3lstwJ"
}) : m.fbt._("Simple order management", null, {
  hk: "1aokpi"
})), h.default.createElement(f.TextDiv, {
  size: "16",
  weight: "normal",
  color: "secondary",
  xstyle: E.listItem
}, m.fbt._("Track which items you've sold and if you've been paid.", null, {
  hk: "EYHUv"
}))))));
exports.BizOrderExpansionModal = v;
exports.openOrderExpansionModal = e => {
  s.ModalManager.open(h.default.createElement(v, {
    onDismiss: () => {
      e();
      s.ModalManager.close();
    },
    onOk: () => {
      e();
      s.ModalManager.close();
    }
  }));
};