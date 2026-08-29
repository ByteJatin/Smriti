// TEMPORARY fake data.
// Lavish when you finished add apis, replace the places that import.
// this file with a real fetch() call. Keep the same shape (same field names)
// so you don't have to rewrite your screens  just swap where the data comes from.

export const games = [
  { id: 1, name: "Tea Garden Match", type: "Memory", pairs: 6, difficulty: 2 },
  { id: 2, name: "Weave the Pattern", type: "Attention", pairs: 4, difficulty: 1 },
  { id: 3, name: "My Morning Routine", type: "Recall", pairs: 5, difficulty: 3 },
];

export const reminders = [
  { id: 1, time: "8:00", title: "Take BP medicine", note: "with a glass of water" },
  { id: 2, time: "11:00", title: "Drink water", note: "third glass today" },
  { id: 3, time: "16:00", title: "Video call with Rima", note: "your daughter" },
];

export const caregiverStats = {
  weeklyEngagement: [55, 70, 40, 80, 65, 90, 75], // Mon - Sun, percent
  alert: "Response time on memory games rose on Tuesday might be worth a check-in call.",
};
