import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from './../seed';

const config = {
    apiKey: "AIzaSyBDDr7No-IcPebQ8fJ2zFPQl5fV-FbXloU",
    authDomain: "netflix-clone-2760b.firebaseapp.com",
    projectId: "netflix-clone-2760b",
    storageBucket: "netflix-clone-2760b.appspot.com",
    messagingSenderId: "265361095748",
    appId: "1:265361095748:web:6f3bf1432fbe96027e5011",
    measurementId: "G-ZZGKP8DM0W"
};

const firebase = Firebase.initializeApp(config);

// uncomment when you want to load data in firestore
// seedDatabase(firebase);
// comment when done, don't refresh the page with this uncommented - that will cause duplication of data

export { firebase };