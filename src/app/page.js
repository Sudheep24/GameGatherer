
import React from 'react';
import Header from './Component/Header/Header';
import './page.css';
import { Cardlist } from './Component/CardList/Cardlist';
import Section2, { About } from './Component/About/About';
import Footer from './Component/footer/Footer';
import Reveal from './Reveal';

export default function Home() {


  return (
    <>
    <div className=' headerr'>
    <Header />
    </div>
    <div className='main'>
      
      
      <Section2 />
      </div>
      <div className='main'>
      <Cardlist />
      </div>
      <div className='main'>
      <Footer />
    </div>
  </>
  );
}
