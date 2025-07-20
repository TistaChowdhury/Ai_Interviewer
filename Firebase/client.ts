// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCglniYJaaMl6LkJ2qbAdO2Le_A8mtNk4w",
    authDomain: "ai-interviewer-7f269.firebaseapp.com",
    projectId: "ai-interviewer-7f269",
    storageBucket: "ai-interviewer-7f269.firebasestorage.app",
    messagingSenderId: "284759778212",
    appId: "1:284759778212:web:dd94c26c4642c9c1b8d731",
    measurementId: "G-TNSBWL9S9S"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth=getAuth(app);
export const db = getFirestore(app)