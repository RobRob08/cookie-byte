import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAu0AKzwl95xTyfEzEFhzEXe3nRx5oXMxM',
  authDomain: 'cookie-byte-219d3.firebaseapp.com',
  projectId: 'cookie-byte-219d3',
  storageBucket: 'cookie-byte-219d3.appspot.com', // Corrected URL (should be .appspot.com)
  messagingSenderId: '294513604128',
  appId: '1:294513604128:android:f3f315b89171f5a6ec2e45', // Android-specific appId, make sure this is valid for your platform
  measurementId: 'your-measurement-id', // Optional: Keep only if using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore and Auth references
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
