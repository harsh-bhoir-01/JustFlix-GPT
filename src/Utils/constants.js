export const USER_AVATAR =
  "https://ik.imagekit.io/3buj7rcwco/user_icon.png?updatedAt=1710247789248";

export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w200/";

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const YOUTUBE_TRAILER_URL = "https://www.youtube.com/watch?v=";

export const YOUTUBE_QUERY_URL =
  "https://www.youtube.com/results?search_query=";
