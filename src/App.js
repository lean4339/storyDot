import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Detail from './components/detail';
function App() {
  const [openModal,setOpenModal] = useState(false);
  const [product,setProduct] = useState();
  return (
    <div className="app">
      <Header/>
      <Main
      setProduct={setProduct}
      setOpenModal={setOpenModal}/>
      {openModal && <Detail
      product = {product}
      openModal = {openModal}
      setOpenModal = {setOpenModal} />}
    <Footer/>
    </div>
  );
}

export default App;
