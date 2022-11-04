import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const {
  VITE_APP_FIREBASE_API_ID,
  VITE_APP_FIREBASE_API_KEY,
  VITE_APP_FIREBASE_PROJECT_ID,
  VITE_APP_FIREBASE_AUTH_DOMAIN,
  VITE_APP_FIREBASE_MEASUREMENT_ID,
  VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  VITE_APP_FIREBASE_STORAGE_BUCKET_URL,
} = import.meta.env;

const firebaseConfig = {
  appId: VITE_APP_FIREBASE_API_ID,
  apiKey: VITE_APP_FIREBASE_API_KEY,
  projectId: VITE_APP_FIREBASE_PROJECT_ID,
  authDomain: VITE_APP_FIREBASE_AUTH_DOMAIN,
  measurementId: VITE_APP_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: VITE_APP_FIREBASE_STORAGE_BUCKET_URL,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
