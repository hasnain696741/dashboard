import { initializeApp } from "firebase/app";

const Configuration = {
  apiKey: "AIzaSyDo-RJX_YTP98YW_YRABOXHmmZnTzPqovw",
  authDomain: "form-fb-90561.firebaseapp.com",
  projectId: "form-fb-90561",
  storageBucket: "form-fb-90561.appspot.com",
  messagingSenderId: "253315746839",
  appId: "1:253315746839:web:3596eab1cbf90b53422052",
  databaseURL: 'https://form-fb-90561-default-rtdb.firebaseio.com',
};

export const push = initializeApp(Configuration);