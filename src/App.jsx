
import './App.scss'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Other } from './pages/Other/Other';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Slug } from './components/Slug/Slug';

import Cookies from 'js-cookie'
import { useSetAtom } from 'jotai'
import { tokenAtom, uidAtom } from './atoms/atoms'
import { Login } from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile'
import { Register } from './pages/Register/Register'
import { useEffect } from 'react'

export const App = () => {

  const setToken = useSetAtom(tokenAtom)
  const setUid = useSetAtom(uidAtom)

  useEffect(() => {
    setToken(Cookies.get('token'))
    setUid(Cookies.get('uid'))
  }, [])

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/other" element={<Other />} />
            <Route path="/other/:otherSlug" element={<Slug />} />
            <Route path="/*" element={<NotFound />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
