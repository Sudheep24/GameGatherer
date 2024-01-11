import React from 'react';
import './header.css';
import Search from '../Search/Search';
import Card from '../Card/Card';

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
        <p>Search.Find.Build</p>
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

      <div className='cardsec'>
        <p className='tit'>Cricket</p>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  );
}
