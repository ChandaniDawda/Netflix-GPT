# Netflix GPT

A React-based streaming service discovery application that combines Netflix's interface with AI-powered movie recommendations using OpenAI and TMDB API.

## 🎯 Features

### Authentication & User Management
- Sign up with email and password validation
- Secure login with Firebase Authentication
- User profile with display name and avatar
- Sign out functionality
- Protected routes (unauthenticated users redirected to login)

### Movies & Browse
- Browse Now Playing, Popular, Top Rated, and Upcoming movies
- Fetch movie data from TMDB API with custom hooks
- Movie trailers embedded from YouTube with autoplay and mute
- Beautiful movie cards with images and metadata
- Responsive movie lists and grid layout

### AI-Powered Search
- GPT-powered movie search and recommendations
- Multi-language support (English, Hindi, Spanish)
- Smart search queries powered by OpenAI
- Real-time language switching

### UI/UX
- Responsive design with Tailwind CSS
- Modern and clean interface
- Netflix-style layout with hero section and movie rows
- Smooth navigation between pages

---

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router v7
- **State Management**: Redux Toolkit
- **Authentication**: Firebase
- **Styling**: Tailwind CSS
- **APIs**: TMDB API, OpenAI API
- **Build Tool**: React Scripts

---

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase project (for authentication)
- TMDB API token (for movie data)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd netflix-gpt
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
# TMDB API Token
REACT_APP_TMDB_TOKEN=your_tmdb_token_here

# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run the Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── Components/         # React components
│   ├── Body.js        # Main routing component
│   ├── Login.js       # Authentication page
│   ├── Browse.js      # Main browsing page
│   ├── Header.js      # Navigation header
│   ├── MainContainer.js   # Hero section
│   ├── SecondaryContainer.js # Movie lists
│   ├── MovieList.js   # Movie grid component
│   ├── MovieCard.js   # Individual movie card
│   ├── VideoBackground.js # Trailer video player
│   ├── VideoTitle.js  # Movie title/description
│   ├── GptSearchPage.js # AI search interface
│   ├── GptSearchBar.js # AI search input
│   └── GptMovieSuggestions.js # Search results
├── Hooks/            # Custom React hooks
│   ├── useMovieTrailer.js
│   ├── useNowPlayingMovies.js
│   ├── usePopularMovies.js
│   ├── useTopRatedMovies.js
│   └── useUpcomingMovies.js
├── utils/            # Utilities and configuration
│   ├── appStore.js    # Redux store configuration
│   ├── userSlice.js   # User state management
│   ├── moviesSlice.js # Movies state management
│   ├── gptSlice.js    # GPT search state
│   ├── configSlice.js # App configuration
│   ├── firebase.js    # Firebase setup
│   ├── constants.js   # API endpoints & constants
│   ├── validate.js    # Form validation
│   └── openai.js      # OpenAI API wrapper
├── App.js            # Main app component
├── index.js          # App entry point
└── index.css         # Global styles
```

---

## 🔑 Key Components Explained

### Custom Hooks
Each hook manages fetching specific movie data from TMDB API:
- `useMovieTrailer`: Fetches YouTube trailer link
- `useNowPlayingMovies`: Gets currently playing movies
- `usePopularMovies`: Fetches popular movies
- `useTopRatedMovies`: Gets top-rated movies
- `useUpcomingMovies`: Fetches upcoming releases

### Redux Store
Centralized state management with slices:
- **userSlice**: User authentication and profile
- **moviesSlice**: Movies data and trailers
- **gptSlice**: GPT search state
- **configSlice**: Language and app configuration

### Firebase Integration
- User authentication with email/password
- Profile management (displayName, photoURL)
- Protected routes based on auth state

---

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_TMDB_TOKEN` | TMDB API Bearer token |
| `REACT_APP_FIREBASE_*` | Firebase project configuration |

⚠️ **Never commit `.env.local` file. It's already in .gitignore**

---

## 🧪 Testing

```bash
npm test
```

---

## 🚀 Deployment

### Deploy to Firebase Hosting

```bash
npm run build
firebase deploy
```

---

## 🔐 Security Notes

- Never commit API keys or secrets
- All sensitive data is stored in `.env.local`
- Firebase authentication handles password security
- TMDB API token has read-only permissions

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [TMDB API](https://www.themoviedb.org/settings/api)
- [Tailwind CSS](https://tailwindcss.com)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

Created as a full-stack React learning project.
-Browse  (after authentication)
 -Header
 -Main Movie
   - Tailor in Background
   - Title and Description
   - Movie Suggestions
      - MovieLists * N

 -  NetflixGPT
   -  Search Bar
   -  Movie Suggestions   
