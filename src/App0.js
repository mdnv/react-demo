import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './component/top.js';
import Head from './component/head.js';
import Se_index from './component/se_index.js';
import Footer from './component/footer.js';

class App extends React.Component {
  render () 
  {
    return(
    <div>
      <Top/>
      <Head/>
      <Se_index vitri="order-lg-2" link_anh="img/01.jpg" tieude="Tiêu đề số 1"/>
      <Se_index vitri="" link_anh="img/02.jpg" tieude="Tiêu đề số 2"/>
      <Se_index vitri="order-lg-2" link_anh="img/03.jpg" tieude="Tiêu đề số 2"/>
      <Footer text="Copyright &copy; Your Website 2020" tieude="Tiêu đề số 3"/>
    </div>
    );

  }
}
export default App;
