Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncDeviceProtocol = undefined;
exports.deviceParser = function (e) {
  e.assertTag("devices");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  const n = e.maybeChild("key-index-list");
  const r = e.maybeChild("device-list");
  const i = n == null ? null : {
    ts: n.attrTime("ts"),
    signedKeyIndexBytes: n.hasContent() ? n.contentBytes() : null,
    expectedTs: n.hasAttr("expected_ts") ? n.attrTime("expected_ts") : undefined
  };
  return {
    deviceList: r == null ? undefined : r.mapChildrenWithTag("device", e => ({
      id: e.attrInt("id"),
      keyIndex: e.hasAttr("key-index") ? e.attrInt("key-index") : null
    })),
    keyIndex: i
  };
};
var r = require("./716358.js");
exports.USyncDeviceProtocol = class {
  getName() {
    return "devices";
  }
  getQueryElement() {
    return (0, r.wap)("devices", {
      version: (0, r.CUSTOM_STRING)(String(2))
    });
  }
  getUserElement(e) {
    const t = e.getDeviceHash();
    const n = e.getTs();
    const i = e.getExpectedTs();
    if (t || n != null || i != null) {
      return (0, r.wap)("devices", {
        device_hash: t ? (0, r.CUSTOM_STRING)(t) : r.DROP_ATTR,
        ts: n != null ? (0, r.INT)(n) : r.DROP_ATTR,
        expected_ts: i != null ? (0, r.INT)(i) : r.DROP_ATTR
      });
    } else {
      return null;
    }
  }
};