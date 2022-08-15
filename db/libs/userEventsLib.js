// populate with user events

const userEventsLib = [
  { userId: 1, eventId: 1 },
  { userId: 2, eventId: 1 },
  { userId: 22, eventId: 1 },
  { userId: 27, eventId: 1 },
  { userId: 3, eventId: 1 },
  { userId: 4, eventId: 1 },
  { userId: 10, eventId: 1 },
  { userId: 8, eventId: 1 },
  { userId: 1, eventId: 2 },
  { userId: 4, eventId: 2 },
  { userId: 10, eventId: 2 },
  { userId: 21, eventId: 2 },
  { userId: 26, eventId: 2 },
  { userId: 7, eventId: 2 },
  { userId: 5, eventId: 2 },
  { userId: 1, eventId: 3 },
  { userId: 10, eventId: 3 },
  { userId: 7, eventId: 3 },
  { userId: 4, eventId: 3 },
  { userId: 24, eventId: 3 },
  { userId: 22, eventId: 3 },
  { userId: 1, eventId: 4 },
  { userId: 6, eventId: 4 },
  { userId: 3, eventId: 4 },
  { userId: 23, eventId: 4 },
  { userId: 24, eventId: 4 },
  { userId: 1, eventId: 5 },
  { userId: 4, eventId: 5 },
  { userId: 25, eventId: 5 },
  { userId: 27, eventId: 5 },
  { userId: 24, eventId: 5 },
  { userId: 2, eventId: 6 },
  { userId: 4, eventId: 6 },
  { userId: 10, eventId: 6 },
  { userId: 9, eventId: 6 },
  { userId: 11, eventId: 6 },
  { userId: 16, eventId: 6 },
  { userId: 4, eventId: 7 },
  { userId: 17, eventId: 7 },
  { userId: 18, eventId: 7 },
  { userId: 19, eventId: 7 },
  { userId: 20, eventId: 7 },
  { userId: 1, eventId: 8 },
  { userId: 9, eventId: 8 },
  { userId: 8, eventId: 8 },
  { userId: 18, eventId: 8 },
  { userId: 19, eventId: 8 },
  { userId: 21, eventId: 8 },
  { userId: 27, eventId: 8 },
  { userId: 2, eventId: 8 },
  { userId: 4, eventId: 9 },
  { userId: 1, eventId: 9 },
  { userId: 2, eventId: 9 },
  { userId: 3, eventId: 9 },
  { userId: 5, eventId: 9 },
  { userId: 8, eventId: 9 },
  { userId: 14, eventId: 9 },
  { userId: 15, eventId: 9 },
  { userId: 26, eventId: 9 },
  { userId: 3, eventId: 10 },
  { userId: 10, eventId: 10 },
  { userId: 5, eventId: 10 },
  { userId: 12, eventId: 10 },
  { userId: 17, eventId: 10 },
  { userId: 24, eventId: 10 },
  { userId: 4, eventId: 11 },
  { userId: 2, eventId: 11 },
  { userId: 9, eventId: 11 },
  { userId: 13, eventId: 11 },
  { userId: 14, eventId: 11 },
  { userId: 18, eventId: 11 },
  { userId: 27, eventId: 11 },
  { userId: 22, eventId: 11 },
  { userId: 25, eventId: 11 },
  { userId: 1, eventId: 12 },
  { userId: 4, eventId: 12 },
  { userId: 6, eventId: 12 },
  { userId: 20, eventId: 12 },
  { userId: 19, eventId: 12 },
  { userId: 25, eventId: 12 },
  { userId: 26, eventId: 12 },
  { userId: 25, eventId: 13 },
  { userId: 1, eventId: 13 },
  { userId: 4, eventId: 13 },
  { userId: 5, eventId: 13 },
  { userId: 12, eventId: 13 },
  { userId: 17, eventId: 13 },
  { userId: 19, eventId: 13 },
  { userId: 26, eventId: 13 },
  { userId: 2, eventId: 14 },
  { userId: 5, eventId: 14 },
  { userId: 6, eventId: 14 },
  { userId: 11, eventId: 14 },
  { userId: 18, eventId: 14 },
  { userId: 22, eventId: 14 },
  { userId: 23, eventId: 14 },
  { userId: 3, eventId: 14 },
  { userId: 10, eventId: 15 },
  { userId: 14, eventId: 15 },
  { userId: 13, eventId: 15 },
  { userId: 24, eventId: 15 },
  { userId: 27, eventId: 15 },
  { userId: 5, eventId: 16 },
  { userId: 7, eventId: 16 },
  { userId: 9, eventId: 16 },
  { userId: 22, eventId: 16 },
  { userId: 2, eventId: 17 },
  { userId: 4, eventId: 17 },
  { userId: 9, eventId: 17 },
  { userId: 16, eventId: 17 },
  { userId: 18, eventId: 18 },
  { userId: 22, eventId: 18 },
  { userId: 27, eventId: 18 },
  { userId: 5, eventId: 18 },
  { userId: 6, eventId: 18 },
  { userId: 11, eventId: 18 },
  { userId: 12, eventId: 18 },
  { userId: 1, eventId: 19 },
  { userId: 4, eventId: 19 },
  { userId: 13, eventId: 19 },
  { userId: 21, eventId: 19 },
  { userId: 20, eventId: 19 },
  { userId: 7, eventId: 20 },
  { userId: 17, eventId: 20 },
  { userId: 18, eventId: 20 },
  { userId: 19, eventId: 20 },
  { userId: 20, eventId: 20 },
  { userId: 1, eventId: 21 },
  { userId: 2, eventId: 21 },
  { userId: 3, eventId: 21 },
  { userId: 15, eventId: 21 },
  { userId: 3, eventId: 22 },
  { userId: 4, eventId: 22 },
  { userId: 12, eventId: 22 },
  { userId: 11, eventId: 22 },
  { userId: 24, eventId: 22 },
  { userId: 20, eventId: 22 },
  { userId: 16, eventId: 22 },
];

export default userEventsLib;
