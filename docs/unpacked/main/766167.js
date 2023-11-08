var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupMetadataBridgeApi = undefined;
var r = a(require("../app/667845.js"));
var o = a(require("../app/342310.js"));
const l = {
  getGroupMetadata(e) {
    let {
      groupWid: t
    } = e;
    return r.default.get(t);
  },
  updateCachedDeviceCount(e) {
    let {
      groupWid: t,
      deviceCount: n
    } = e;
    const a = r.default.get(t);
    if (a != null) {
      a.cachedDeviceCount = n;
      a.cachedDeviceSizeBucket = (0, o.default)(n);
    }
  },
  setGroupMetadata(e) {
    var t;
    if (!((t = r.default.get(e.id)) === null || t === undefined)) {
      t.set(e);
    }
  },
  removeMembershipApprovalRequests(e) {
    var t;
    let {
      groupId: n,
      requestIds: a
    } = e;
    if (!((t = r.default.get(n)) === null || t === undefined)) {
      t.membershipApprovalRequests.remove(a);
    }
  },
  addMembershipApprovalRequests(e) {
    var t;
    let {
      groupId: n,
      requests: a
    } = e;
    if (!((t = r.default.get(n)) === null || t === undefined)) {
      t.membershipApprovalRequests.add(a, {
        merge: true
      });
    }
  }
};
exports.GroupMetadataBridgeApi = l;