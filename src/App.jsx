import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Common/Header'
import Footer from './Common/Footer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Newsbycategorie from './Pages/Newsbycategorie'
import Categories from './Common/Categories'
import Sources from './Pages/Sources'
import SearchNews from './Pages/SearchNews'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

function App() {

  return (
    <>

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/sources' element={<Sources/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Newsbycategorie/:categorie' element={<Newsbycategorie/>} />
        <Route path='/searchNews' element={<SearchNews />} />
      </Routes>
    <Footer/>
    </BrowserRouter>





    </>
  )
}

export default App
