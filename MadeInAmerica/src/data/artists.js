import scheduleData from "./schedule";

const uniqueArtists = [
  ...new Map(scheduleData.map((show) => [show.artist, show])).values(),
];

export default uniqueArtists;