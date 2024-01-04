import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/profile';


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
    </Routes>
  
  </BrowserRouter>;
}
