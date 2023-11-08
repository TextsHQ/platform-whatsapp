Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSelfPrimaryIdentityChange = function () {
  __LOG__(4, undefined, new Error(), true)`handleNewIdentity: ignore identity change for your own primary device`;
  SEND_LOGS("self-identity-change");
  const e = require("../app/38878.js").Socket;
  const t = require("../app/332108.js").LogoutReason;
  e.logout(t.PrimaryIdentityKeyChange);
};