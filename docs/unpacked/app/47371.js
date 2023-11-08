Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALUE_MAC_KEY_LENGTH = exports.VALUE_MAC_KEY_END = exports.VALUE_ENCRYPTION_KEY_LENGTH = exports.VALUE_ENCRYPTION_KEY_END = exports.SNAPSHOT_MAC_KEY_LENGTH = exports.SNAPSHOT_MAC_KEY_END = exports.PATCH_MAC_KEY_LENGTH = exports.PATCH_MAC_KEY_END = exports.OPERATION_SET_HEX = exports.OPERATION_REMOVE_HEX = exports.OCTET_LENGTH = exports.MAX_OF_MIN_DATA_LENGTH = exports.MAC_LENGTH = exports.IV_LENGTH = exports.INDEX_KEY_LENGTH = exports.INDEX_KEY_END = exports.HKDF_INFO = exports.EMPTY_MUTATION_MAC = exports.DERIVED_KEY_LENGTH = undefined;
exports.HKDF_INFO = "WhatsApp Mutation Keys";
exports.DERIVED_KEY_LENGTH = 160;
exports.INDEX_KEY_LENGTH = 32;
exports.VALUE_ENCRYPTION_KEY_LENGTH = 32;
exports.VALUE_MAC_KEY_LENGTH = 32;
exports.SNAPSHOT_MAC_KEY_LENGTH = 32;
exports.PATCH_MAC_KEY_LENGTH = 32;
exports.INDEX_KEY_END = 32;
exports.VALUE_ENCRYPTION_KEY_END = 64;
exports.VALUE_MAC_KEY_END = 96;
exports.SNAPSHOT_MAC_KEY_END = 128;
exports.PATCH_MAC_KEY_END = 160;
exports.OPERATION_SET_HEX = "0x01";
exports.OPERATION_REMOVE_HEX = "0x02";
exports.MAX_OF_MIN_DATA_LENGTH = 0;
exports.MAC_LENGTH = 32;
exports.OCTET_LENGTH = 8;
exports.IV_LENGTH = 16;
const n = new ArrayBuffer(32);
exports.EMPTY_MUTATION_MAC = n;