
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='bg-orange-100'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>   
            <Route path='/blogs' element={<About/>}>
            <Route path='/contact' element={<About/>}/>
          </Routes>
          <Footer />
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
