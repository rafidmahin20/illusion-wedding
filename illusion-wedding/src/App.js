import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/About Me/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import ServicePage from './Components/Services/ServicePage';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
