
Netflix-GPT

Cloning the front-end of Netflix using React/Redux, Firebase, and integrating Gemini for enhanced features.

Disclaimer: Initially, the project utilized OpenAI's GPT API. Due to its paid nature, I switched to the Gemini API. Both APIs offer comparable performance and capabilities.
1.	Boilerplate Setup    

o	Initialized the project using Create React App.

o	Cleaned up the boilerplate code to kickstart the project.

o	Configured TailwindCSS for styling.

2.	Project Structure
   
o	Created components and utils folders for better organization.

4.	Authentication

o	Login Component: Developed a user-friendly login form.

o	Routing Setup: Configured routing for login and browse pages. Added an error page for unhandled routes.

o	Form Validation: Implemented form validation using useRef for state management.

o	Firebase Integration:

        o	Created a Firebase project and enabled hosting and authentication.
        o	Deployed the project using Firebase Hosting.
        o	Implemented sign-up and sign-in functionalities using Firebase Auth.
        o	Redux Toolkit: Set up Redux Toolkit for managing user authentication state.
        o	Actions: addUser and removeUser for managing user session.
        o	Navigation: Redirected users to browse page post login/signup and to login page post logout using useNavigate.
        o	Profile Management:
        o	Updated user profile with display name.
        o	Displayed user information in the header.
        o	Bug Fixes:
           o   Protected routes for login and browse pages using Firebase's onAuthStateChanged.
           o    Managed dual user states with Redux store and Firebase Auth.
           o	Added loaders for a smooth user experience.
           o	Unsubscribed from onAuthStateChanged subscription to avoid memory leaks.
           o	Added constant file for dummy data and constants.
6.	Browse Page

o	TMDB API Integration:
   o	Registered and obtained API keys from TMDB.
   o	Created a constant file for TMDB API options.
   o	Made API calls to fetch "Now Playing" movies and stored data in Redux store.
o	Component Structure:
   o	MainContainer:
       o	Displayed a highlighted movie with video background, title, and info.
       o	Fetched movie trailers using TMDB API and displayed them.
   o	SecondaryContainer:
       o	Displayed multiple movie categories (Popular, Now Playing, Horror) using MovieList and MovieCard components.
       o	Fetched different categories of movies using custom hooks.
       
8.	GEMINI Integration

o	GEMINI Search Page:
   o	Added GPT search button in the header (accessible to signed-in users).
   o	Developed a search page for GEMINI-based movie recommendations.
   o	Created a gptSlice in Redux to manage GEMINI-related state and toggle search view.
   
o	GEMINI Setup:
   o	Registered on ai.google.dev and obtained API key.
   o	Integrated AI.GOOGLE API for GEMINI-based movie recommendations.
   
o	GEMINI Search Flow:
   o	Implemented search functionality to get movie recommendations from GEMINI.
   o	Fetched detailed movie information from TMDB based on GEMINI suggestions.
   o	Stored and displayed movie suggestions using Redux.
   
10.	Environment Variables
    
o	Created .env file for storing sensitive API keys.

o	Added .env file to .gitignore for security.

o	Stored Firebase configuration in environment variables.

12.	Performance Optimization
    
o	Implemented memoization to avoid unnecessary API calls.

o	Ensured API calls are only made when necessary, checking Redux store for existing data.

17.	Features

o	Netflix Home Page:

   o	Login/Sign Up Form
   o	Redirect to Browse Page post login/signup
   
o	Browse Page (After Authentication):
   o	Header
   o	Movie with trailer background, title, and description
   o	Movie suggestions
   o	Multiple movie list carousels
   
o	Netflix GPT:

   o	GEMINI Search Bar for movie suggestions via AI

