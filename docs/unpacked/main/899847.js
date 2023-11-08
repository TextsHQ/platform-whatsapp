Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkUpdateLidContactState = function (e) {
  let {
    lidContactDataMappings: t
  } = e;
  t.forEach(e => {
    let {
      lid: t,
      shareOwnPn: n,
      displayNameLID: r,
      requestedPnTimestamp: o
    } = e;
    const l = a.ContactCollection.get(t);
    if (l != null) {
      if (n != null) {
        l.shareOwnPn = n;
      }
      if (r != null) {
        l.displayNameLID = r;
      }
      if (o != null) {
        l.requestedPnTimestamp = o;
      }
    }
  });
};
exports.bulkUpdatePhoneNumberJids = function (e) {
  let {
    lidPhoneNumberMappings: t
  } = e;
  t.forEach(e => {
    let {
      lid: t,
      phoneNumber: n
    } = e;
    const o = a.ContactCollection.get((0, r.createUserWid)(t, "lid"));
    const l = a.ContactCollection.get((0, r.createUserWid)(n));
    if (o != null) {
      o.phoneNumber = (0, r.createUserWid)(n);
    }
    if (!(o == null)) {
      o.updateContactBlocked();
    }
    if (!(l == null)) {
      l.updateContactBlocked();
    }
  });
};
exports.bulkUpdateUsernames = function (e) {
  let {
    usernameUpdates: t
  } = e;
  t.forEach(e => {
    let {
      id: t,
      username: n
    } = e;
    const o = a.ContactCollection.gadd((0, r.createUserWid)(t));
    if (o.username !== n) {
      o.username = n;
    }
  });
};
exports.updateBusinessInfo = function (e) {
  let {
    contactId: t,
    businessInfo: n
  } = e;
  if (n == null) {
    return;
  }
  a.ContactCollection.gadd(t).set(n);
};
exports.updateContactAdvAccountType = function (e) {
  let {
    contactId: t,
    advAccountType: n
  } = e;
};
exports.updateContactName = function (e) {
  let {
    contactId: t,
    name: n
  } = e;
  a.ContactCollection.gadd(t).set({
    name: n
  });
  __LOG__(2, undefined, undefined, undefined, ["contact"])`updated contact name`;
};
exports.updateDisappearingMode = function (e) {
  let {
    contactId: t,
    disappearingModeDuration: n,
    disappearingModeSettingTimestamp: r
  } = e;
  a.ContactCollection.gadd(t).set({
    disappearingModeDuration: n,
    disappearingModeSettingTimestamp: r
  });
};
exports.updatePushname = function (e) {
  let {
    contactId: t,
    pushname: n
  } = e;
  const r = a.ContactCollection.gadd(t);
  if (r.pushname === n) {
    return false;
  }
  r.set({
    pushname: n
  });
  return true;
};
exports.updateTextStatus = function (e) {
  let {
    contactId: t,
    textStatusString: n,
    textStatusEmoji: r,
    textStatusEphemeralDuration: o,
    textStatusLastUpdateTime: l,
    textStatusExpiryTs: i
  } = e;
  a.ContactCollection.gadd(t).set({
    textStatusString: n,
    textStatusEmoji: r,
    textStatusEphemeralDuration: o,
    textStatusLastUpdateTime: l,
    textStatusExpiryTs: i
  });
};
var a = require("../app/177938.js");
require("../app/962559.js");
var r = require("../app/669050.js");