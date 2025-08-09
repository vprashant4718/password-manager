import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
  import { ToastContainer } from 'react-toastify';


function App() {

  return (

    <>
    <BrowserRouter >
     
     <Navbar />
     <Routes>

      
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/signout' element={<SignOut />}/>
      <Route path='/signup' element={<SignUp />}/>
      
       <Route element={<PrivateRoute/>}><Route path='/' element={<Manager />}/>
      </Route>  

     </Routes>

    <Footer />
    <ToastContainer className={'mt-6'} autoClose={3000} theme="dark"/>
     
    </BrowserRouter>


    {/* <div className='min-h-[95vh]'>
    <Navbar />
    <Manager />

    </div>
    <Footer /> */}
       
    </>
  )
}

export default App
