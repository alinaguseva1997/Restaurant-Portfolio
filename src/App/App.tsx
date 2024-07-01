import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {Error404Page} from "../view/pages/Error404Page";
import {HomePage} from "../view/pages/HomePage";
import {ProductCardPage} from "../view/pages/ProductCardPage";

function App() {
  return (
      <main className='w-full h-wull bg-base overflow-y-hidden'>
         <Routes>
             <Route path='/home' element={<HomePage />}/>
             <Route path='/' element={<Navigate to='/home'/>}/>
             <Route path='/product-card' element={<ProductCardPage />}/>
             <Route path='/error404' element={<Error404Page />}/>
             <Route path='/*' element={<Navigate to='/error404'/>}/>
         </Routes>
      </main>
  );
}

export default App;
