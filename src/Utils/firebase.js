import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMximyjYgcH8KO_wpaHJAAYMTPnpGC_s0",
  authDomain: "justflixgpt.firebaseapp.com",
  projectId: "justflixgpt",
  storageBucket: "justflixgpt.appspot.com",
  messagingSenderId: "723095497734",
  appId: "1:723095497734:web:37b09a6d98224416786787",
  measurementId: "G-CJD43TEKBQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
