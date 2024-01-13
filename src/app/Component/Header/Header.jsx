import React from 'react';
import './header.css';
import Search from '../Search/Search';

import CricketCard from '../CricketCard/CricketCard';
import BadmintonCard from '../BadmintonCard/BadmintonCard';
import Link from 'next/link';

export default function Header() {
    const headerStyle = {
        backgroundImage: 'url(https://i.pinimg.com/736x/a9/1f/b9/a91fb907e46d5741271b0443e91b59d1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
        backgroundRepeat:'no-repeat',
        padding:'30px',
        marginTop:'30px'
        
      };
  return (
    <>
    <div style={headerStyle}>
      
        <h1>Game</h1>
        <h1 className='gat'>Gatherer</h1>
        <p>Search.Find.Play</p>
        <div className="sear">
          <Search />
        </div>

        <div className="filterbuttons">
          <button className='fb'>Cricket</button>
          <button className='fb'>Cricket</button>
          <button className='fb'>Cricket</button>
          <button className='fb'>Cricket</button>
          <button className='fb'>Cricket</button>
        </div>
      
    </div>
    <button className='cricket'>Cricket</button>

      <div className='cardsec'>
        
        
        <CricketCard/>
        <CricketCard/>
        <CricketCard/>
        <CricketCard/>
        <CricketCard/>
       
      </div>

      <button className='cricket'>Badminton</button>
      <div className='cardsec'>
        
        
        <BadmintonCard/>
        <BadmintonCard/>
        <BadmintonCard/>
        <BadmintonCard/>
        <BadmintonCard/>
       
      </div>


      <div >
        <Link href='/Events'>
         <button className="view">View More</button>

        </Link>
      </div>
    </>
  );
}
