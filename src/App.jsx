import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'


import Header from './components/header/Header'
import Home from './pages/Home'
import Business from './pages/Business'
import Entertainment from './pages/Entertainment'
import General from './pages/General'
import Health from './pages/Health'
import Science from './pages/Science'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import NotFound from './pages/NotFound'


import AboutPages from './pages/about/AboutPages'
import Loading from './pages/Loading'


import './App.css'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <div className="container mt-5 pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/Entertainment" element={<Entertainment />} />
            <Route path="/General" element={<General />} />
            <Route path="/Health" element={<Health />} />
            <Route path="/Science" element={<Science />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/AboutPage/:id" element={<AboutPages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
