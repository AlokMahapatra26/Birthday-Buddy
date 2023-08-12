import {BrowserRouter  , Routes , Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import AddBirthday from './pages/AddBirthday';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {

  return (
  
  <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/add-birthdate" element={<AddBirthday/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
  </BrowserRouter>
  
  )
}

export default App



