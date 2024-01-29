import Image from 'next/image';
import Header from './Component/Header/Header';
import './page.css'
import { Cardlist } from './Component/CardList/Cardlist';
import { About } from './Component/About/About';

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;
  
  return (
    <div className='main'>
      <Header />
      <About/>
      <Cardlist page={page}/>
      
    </div>
  );
}
