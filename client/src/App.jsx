import '../src/App.css'

import React,{useState,useEffect} from 'react';
import {Spinner} from "react-bootstrap";

import {Routes,Route,Navigate} from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import MainReg from './components/Auth/MainReg';
import MainLog from './components/Auth/MainLog';

import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import OneCard from './components/Cards/OneCard';
import CardList from './components/Cards/CardList';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/Carousel/Carousel';

// import MyCarousel from './components/Carousel/Carousel';
import CardForm from './components/Cards/CardForm';

import CategoryList from './components/Categories/CategoryList';
import CardDetail from './components/Cards/CardDetail';

import UserCabinet from './components/Pages/UserCabinet';
import VerticalMenu from './components/Pages/VerticalMenu';
import InfoUser from './components/Pages/InfoUser';
import AuthorCards from './components/Pages/AuthorCards';
import Favourites from './components/Pages/Favourites';
import MainInfo from './components/MainPage/MainInfo';
import { getCards } from './redux/actions/cardActions';
import CloneCardForm from './components/CloneCardForm';
import Modal from './components/Cards/Modal';
import Pustoy from './components/Cards/Pustoy';
import TstCOMP from './components/test/TstCOMP';


function App() {
  const { auth } = useSelector((state) => state)


  const dispatch = useDispatch();
 
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)//1

    
    
    useEffect(() => {
      dispatch(getCards())
      }, [])

      // console.log(auth.isAuth)
  return (
  
   
    <div className="App">
 
        
      <header className='header'>
      <Header />
      
      </header>
      <main className='content main-content '>
      
      {/* <CategoriesOneList /> */}
       
        {show? <Pustoy setShow={setShow}/> : <></> }
       
        <Routes>
        {/* <Route path="test"element={<CloneCardForm />} /> */}
          <Route path="auth/register"element={ <MainReg/> } />
          <Route path="auth/login" element={<MainLog/>} />
          <Route path="/" element={<Main />} />
          <Route path="cards">
            <Route path="" element={<CardList />} />
            <Route path="detail/:id" element={<CardDetail />} />
            <Route path="category/:id" element={<CategoryList />} />
          </Route>
          <Route path="user">
            <Route path="cabinet/main/:id" element={!auth.isAuth? <Navigate to="/" replace={true} /> :<><InfoUser/></> } />
            <Route path="cabinet/menu/info" element={!auth.isAuth? <Navigate to="/" replace={true} /> :<InfoUser/>} />
            <Route path="cabinet/menu/favourites" element={!auth.isAuth? <Navigate to="/" replace={true} /> :<Favourites/>} />
            <Route path="cabinet/menu/cards" element={!auth.isAuth? <Navigate to="/" replace={true} /> :<AuthorCards isCabinet={true} setShow={setShow}/>} />
          </Route>
           <Route path="ads" element={<CloneCardForm />} />  
           {/* <Route path="ads" element={<CardForm />} />    */}
                 {/* <Route path="testCard" element={<TstCOMP/>} />    */}
        </Routes>
      </main>
      <div>

      </div>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;
{/* {
      loading ? 
      <Spinner animation={"grow"}/> 
      : 
}
    */}
