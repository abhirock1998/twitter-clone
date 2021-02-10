import firebase from 'firebase';



var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_ID,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER,
    appId: process.env.REACT_APP_APPID
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

   const db =firebaseApp.firestore();
   export const auth =firebaseApp.auth();
   export default db;