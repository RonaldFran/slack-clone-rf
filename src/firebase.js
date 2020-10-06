import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBEPLbUCpSCyiV3GwMHhHCa4MX3YfGXqo",
  authDomain: "slack-clone-rf.firebaseapp.com",
  databaseURL: "https://slack-clone-rf.firebaseio.com",
  projectId: "slack-clone-rf",
  storageBucket: "slack-clone-rf.appspot.com",
  messagingSenderId: "733499271650",
  appId: "1:733499271650:web:9dbcc92ac0a6c1e131b1bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const emailProvider = new firebase.auth.EmailAuthProvider();
// const [googleProvider, emailProvider] = provider;

export { auth, provider };
export default db;
