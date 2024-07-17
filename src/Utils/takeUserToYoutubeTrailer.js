import { YOUTUBE_QUERY_URL } from "./constants";

const takeUserToYoutubeTrailer = (trailer) => {
  const trailerString = trailer + " official trailer";
  const filteredTrailerString = trailerString
    .toLowerCase()
    .replaceAll(" ", "+");
  window.open(
    YOUTUBE_QUERY_URL + filteredTrailerString,
    "_blank",
    "noopener,noreferrer"
  );
};
export default takeUserToYoutubeTrailer;
