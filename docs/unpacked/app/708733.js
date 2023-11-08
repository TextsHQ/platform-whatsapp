Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VARIATION_CATEGORY = exports.ORDERED_CATEGORY_IDS = exports.LARGE_EMOJI_SIZE = exports.HEART_EMOJIS = exports.EMOJI_WIDTH = exports.EMOJI_TYPE = exports.CATEGORY_ORDERING = exports.CATEGORY_MAPPING = exports.CATEGORIES = exports.BUCKET_SIZE = exports.ANIMATED_EMOJIS_STRING_TO_LOTTIE_ASSET_MAP = undefined;
exports.BUCKET_SIZE = 25;
exports.CATEGORIES = {
  SMILEYS_PEOPLE: "SMILEYS_PEOPLE",
  ANIMALS_NATURE: "ANIMALS_NATURE",
  FOOD_DRINK: "FOOD_DRINK",
  ACTIVITY: "ACTIVITY",
  TRAVEL_PLACES: "TRAVEL_PLACES",
  OBJECTS: "OBJECTS",
  SYMBOLS: "SYMBOLS",
  FLAGS: "FLAGS"
};
exports.CATEGORY_MAPPING = {
  "Smileys & People": "SMILEYS_PEOPLE",
  "Animals & Nature": "ANIMALS_NATURE",
  "Food & Drink": "FOOD_DRINK",
  Activity: "ACTIVITY",
  "Travel & Places": "TRAVEL_PLACES",
  Objects: "OBJECTS",
  Symbols: "SYMBOLS",
  Flags: "FLAGS"
};
const r = ["SMILEYS_PEOPLE", "ANIMALS_NATURE", "FOOD_DRINK", "ACTIVITY", "TRAVEL_PLACES", "OBJECTS", "SYMBOLS", "FLAGS"];
exports.ORDERED_CATEGORY_IDS = r;
exports.EMOJI_TYPE = {
  APPLE: "APPLE",
  WHATSAPP: "WHATSAPP"
};
exports.EMOJI_WIDTH = {
  small: 20,
  large: 32
};
const i = require("../vendor/76672.js").Mirrored(["MEDIUM", "LARGE", "XLARGE"]);
exports.LARGE_EMOJI_SIZE = i;
const a = require("../vendor/76672.js")({
  PartyEmojiLottieAnimation: "party_emoji_lottie_animation",
  LolEmojiLottieAnimation: "lol_emoji_lottie_animation",
  CryEmojiLottieAnimation: "cry_emoji_lottie_animation",
  SadTearEmojiLottieAnimation: "sad_tear_emoji_lottie_animation",
  SurprisedEmojiLottieAnimation: "surprised_emoji_lottie_animation",
  HeartEmojiLottieAnimation: "heart_emoji_lottie_animation",
  FireEmojiLottieAnimation: "fire_emoji_lottie_animation"
});
const o = [...r, "VARIATION"];
exports.CATEGORY_ORDERING = o;
const s = o.indexOf("VARIATION");
exports.VARIATION_CATEGORY = s;
const l = ["❤", "♥", String.fromCodePoint(129294), String.fromCodePoint(128150), String.fromCodePoint(128420), String.fromCodePoint(128154), String.fromCodePoint(128156), String.fromCodePoint(128151), String.fromCodePoint(128147), String.fromCodePoint(128153), String.fromCodePoint(129293), String.fromCodePoint(128155), String.fromCodePoint(128149), String.fromCodePoint(129505), String.fromCodePoint(10084, 65039, 8205, 128293), String.fromCodePoint(129653), String.fromCodePoint(129654), String.fromCodePoint(129655)];
exports.HEART_EMOJIS = l;
const u = new Map([[String.fromCodePoint(129395), `${a.PartyEmojiLottieAnimation}`], [String.fromCodePoint(128514), `${a.LolEmojiLottieAnimation}`], [String.fromCodePoint(128293), `${a.FireEmojiLottieAnimation}`], [String.fromCodePoint(128546), `${a.SadTearEmojiLottieAnimation}`], [String.fromCodePoint(128557), `${a.CryEmojiLottieAnimation}`], [String.fromCodePoint(10084), `${a.HeartEmojiLottieAnimation}`], [String.fromCodePoint(128558), `${a.SurprisedEmojiLottieAnimation}`]]);
exports.ANIMATED_EMOJIS_STRING_TO_LOTTIE_ASSET_MAP = u;