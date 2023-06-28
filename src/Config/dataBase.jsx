import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid'
const firebaseConfig = {
    apiKey: "AIzaSyA9Vb-O-tbSHYZ8tSSCcS1X6JDhxip2Ne4",
    authDomain: "crud-e0e99.firebaseapp.com",
    projectId: "crud-e0e99",
    storageBucket: "crud-e0e99.appspot.com",
    messagingSenderId: "1086110366757",
    appId: "1:1086110366757:web:71fc8b315acc90ed6e13cc"
  };
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
export const storage = getStorage(app)

export const subirImagen = async (file) => {
  const uploadImg = ref(storage, v4())
  await uploadBytes(uploadImg, file)
  const urlImg = await getDownloadURL(uploadImg)
  return urlImg
}
