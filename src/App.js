import  React from 'react';
import { BrowserRouter, Router, Route, Routes, useLocation } from 'react-router-dom';
import ClientSchedule from '../src/pages/Home'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyAuBuQVnz974K2fXi9iq2qgtDm5kkd93zk",
  authDomain: "dosagem-79271.firebaseapp.com",
  databaseURL: "https://dosagem-79271-default-rtdb.firebaseio.com",
  projectId: "dosagem-79271",
  storageBucket: "dosagem-79271.firebasestorage.app",
  messagingSenderId: "258455838256",
  appId: "1:258455838256:web:d8386e88c570417720d7f5",
  measurementId: "G-MV68282QW7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


export { database }



function App() {


  return (

      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<ClientSchedule />} />
      
        </Routes>
      </BrowserRouter>
  
   
  );
}

export default App;