import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import VisaApplicationForm from './pages/visaApplicationForm';
import ApplicationSubmission from './pages/ApplicationSubmission';
import ApplicationStatusList from './pages/ApplicationStatusList';

export default function App() {
  return <BrowserRouter>
    {/* Header */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/application-status-list" element={<ApplicationStatusList />} />
      <Route path="/application-submission" element={<ApplicationSubmission/>} />
      <Route path="/visaApplicationForm" element={<VisaApplicationForm/>} />
      <Route element={<PrivateRoute />} > {/* Fixed the opening tag */}
        <Route path="/profile" element={<Profile />} />
      </Route> {/* Added the closing tag */}
    </Routes>
  </BrowserRouter>;
}
