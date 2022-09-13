import HomePage from './comp/homePage';
import './App.css';
import './css/all.css';
import WriteUs from "./comp/writeUs/writeUs"
import Header from './comp/homePageComponent/header';
import Footer from './comp/homePageComponent/footer';
import Post from './comp/blogPost/post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './comp/AboutPage';
import Gallery from './comp/foto.jsx';
import Products from './comp/products';
import Contact from './comp/contact';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Header/>  
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='/write' element={ <WriteUs/> }/>
          <Route path='/news1' element={ <Post/>}/>
          <Route path='/about-us' element={ <AboutPage/>}/>
          <Route path='/photo' element={ <Gallery/>}/>
          <Route path='/products' element={ <Products/>}/>
          <Route path='/contact' element={ <Contact/>}/>
        </Routes>
      <Footer />  
    </BrowserRouter>  
  );
}

export default App;

