Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_AV_DEVICE_ID = undefined;
exports.deviceInfoComparator = function (e, t) {
  if (e.deviceType !== t.deviceType) {
    return e.deviceType - t.deviceType;
  }
  if (e.isSystemDefault || t.isSystemDefault) {
    if (e.isSystemDefault) {
      return -1;
    } else {
      return 1;
    }
  }
  if (e.isConnected === t.isConnected) {
    return 0;
  } else if (e.isConnected) {
    return -1;
  } else {
    return 1;
  }
};
exports.getAvailableDevices = function (e, t) {
  var n;
  if ((n = e == null ? undefined : e.filter(e => e.deviceType === t && e.isConnected)) !== null && n !== undefined) {
    return n;
  } else {
    return [];
  }
};
exports.getDiff = function (e, t) {
  const n = t.filter(t => !e.some(e => e.uid === t.uid));
  const a = e.filter(e => !t.some(t => t.uid === e.uid));
  return {
    added: n,
    removed: a
  };
};
exports.getSanitizedDevices = function (e) {
  const t = e == null ? undefined : e.map(e => function (e) {
    return {
      uid: e.uid,
      name: e.name,
      deviceType: Number(e.deviceType),
      isConnected: Boolean(e.connected),
      isSelected: Boolean(e.isSelected),
      isSystemDefault: Boolean(e.isDefault)
    };
  }(e));
  const n = t == null ? undefined : t.filter(e => e.deviceType !== a.AVDeviceType.NotIdentified && e.isConnected);
  if (n != null) {
    return n;
  } else {
    return [];
  }
};
exports.getSelectedDevice = r;
exports.getSelectedDeviceIdOrDefault = function (e, t) {
  var n;
  var a;
  if ((n = (a = r(e, t)) === null || a === undefined ? undefined : a.uid) !== null && n !== undefined) {
    return n;
  } else {
    return "";
  }
};
exports.getSystemDefaultDevice = function (e, t) {
  if (e == null) {
    return undefined;
  } else {
    return e.find(e => e.isConnected && e.isSystemDefault && e.deviceType === t);
  }
};
var a = require("./219298.js");
function r(e, t) {
  if (e == null) {
    return undefined;
  } else {
    return e.find(e => e.isConnected && e.isSelected && e.deviceType === t);
  }
}
exports.DEFAULT_AV_DEVICE_ID = "";