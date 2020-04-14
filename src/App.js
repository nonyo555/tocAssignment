import React from 'react';
import './App.css';
import firebasedb from './component/product_type/db/firebasedb';
import AppPage from './component/apppage';
function App() {
  new firebasedb() 
  return (
    <AppPage />
  );
}
export default App;
