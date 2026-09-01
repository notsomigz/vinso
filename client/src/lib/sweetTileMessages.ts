const messageOpeners = [
  "You make ordinary moments",
  "Your smile makes every day",
  "Thinking of you makes my heart",
  "You bring a little more light to",
  "Your kindness turns small moments into",
  "Every memory with you feels",
  "You make the quiet moments",
  "Your presence makes everything",
  "You are the sweetest part of",
  "A little thought of you makes today",
  "Your laugh makes the whole world",
  "You make every simple moment",
  "Your heart makes this life",
  "You turn memories into",
  "Being near you feels like",
  "Your warmth makes every place",
  "You make my favorite moments",
  "Your gentle spirit makes everything",
  "Remembering you makes my day",
  "You are a beautiful reason to",
  "Your eyes make the world",
  "You bring joy to the little things and",
  "Your love makes each memory",
  "You make every photograph feel",
  "Your sweet soul makes life",
  "One thought of you makes my heart",
  "You make happiness feel",
  "Your magic makes ordinary days",
  "You are the lovely feeling behind",
  "Every moment with you becomes",
] as const;

const messageEndings = [
  "feel brighter.",
  "feel special.",
  "feel like home.",
  "feel worth keeping.",
  "feel full of wonder.",
  "shine a little longer.",
  "feel beautifully unforgettable.",
  "feel warmer somehow.",
  "feel like a gift.",
  "feel wonderfully yours.",
] as const;

export const SWEET_TILE_MESSAGES = messageOpeners.flatMap((opener) =>
  messageEndings.map((ending) => `${opener} ${ending}`),
);

if (SWEET_TILE_MESSAGES.length !== 300) {
  throw new Error(`Expected 300 sweet tile messages, got ${SWEET_TILE_MESSAGES.length}`);
}
