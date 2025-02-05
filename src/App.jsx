
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import About from './components/About'
import CreateForm from './components/CreateForm'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <AppContent />
      </BrowserRouter>
    </>
  )
}

const AppContent=()=>{
  const navigate=useNavigate();

  function handleclick(){
    navigate("/create_blog");
  }
  
  return <>
  <div className='bg-orange-100'>
      <Header clickaction={handleclick} />
      <Routes>
      <Route path='/' element={<Home clickaction={handleclick} />}></Route>
      <Route path='/blogs' element={<Blogs />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/create_blog' element={<CreateForm />}></Route>
      </Routes>
      <Footer />
    </div>
  </>
}

export default App
