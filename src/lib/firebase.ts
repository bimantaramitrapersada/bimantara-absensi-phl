import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6cW0N_nlAN4AHdpyltl6M-ylzNBwf-IQ",
  authDomain: "absensi-phl-bimantara.firebaseapp.com",
  projectId: "absensi-phl-bimantara",
  storageBucket: "absensi-phl-bimantara.firebasestorage.app",
  messagingSenderId: "587054437477",
  appId: "1:587054437477:web:e9edd689b3c3c0ad1ca28c",
};

// Initialize once (Next.js fast refresh safe)
// Guard against Worker/SSR environment where Firebase client SDK shouldn't run
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export default app;
