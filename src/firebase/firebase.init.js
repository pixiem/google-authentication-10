import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthantication = () => {

    initializeApp(firebaseConfig);
}
export default initializeAuthantication;