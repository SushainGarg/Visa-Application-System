import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/profile';
import Header from './commponents/header';


export default function App() {
  return <BrowserRouter>
    {/* Header */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
    </Routes>
  </BrowserRouter>;
}
