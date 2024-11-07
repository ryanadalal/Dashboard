import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, set, onValue} from 'firebase/database';
import { getFirestore, collection, getDoc, doc} from 'firebase/firestore';

// set the default directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// configure enviornment variables
dotenv.config();
const {
  PORT,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

// initialize firebase
const firebase = initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  },
);
console.log(getDatabase());

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    console.log("testpost");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

