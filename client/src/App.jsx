import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/profile';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';


export default function App() {
  return <BrowserRouter>
    {/* Header */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route element={<PrivateRoute />} > {/* Fixed the opening tag */}
        <Route path="/profile" element={<Profile />} />
      </Route> {/* Added the closing tag */}
    </Routes>
  </BrowserRouter>;
}
