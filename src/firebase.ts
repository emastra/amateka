import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from './config/firebaseConfig';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

function initialize() {
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    return { firebaseApp, auth, firestore };
}

function connectToEmulators({ firebaseApp, auth, firestore }) {
    if (location.hostname === 'localhost') {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
    }

    return { firebaseApp, auth, firestore };
}

export function getFirebase() {
    // const existingApp = getApps().at(0);

    // if (existingApp) return initialize();
    // return connectToEmulators(initialize());
    return initialize();
}
