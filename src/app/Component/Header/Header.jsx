"use client"
import './header.css';
import React, { useEffect, useState } from 'react';

import Search from '../Search/Search';
import Link from 'next/link';
import CricketCard from '../CricketCard/CricketCard';
import BadmintonCard from '../BadmintonCard/BadmintonCard';
import Events from '@/app/Events/page';

const getData = async () => {
 const res = await fetch("https://gamegatherer.vercel.app/api/categories", {
    cache: "no-store"
  });
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json();
}

const Header = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const headerStyle = {
    backgroundImage: 'url(https://i.pinimg.com/736x/a9/1f/b9/a91fb907e46d5741271b0443e91b59d1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
    backgroundRepeat: 'no-repeat',
    padding: '30px',
    marginTop: '30px',
    maxWidth: '100%',
    display:'-ms-grid',
  };

  return (
    <>
      <div style={headerStyle}>
        <h1>Game</h1>
        <h1 className='gat'>Gatherer</h1>
       
        <div className="sear">
          <Search />
        </div>
        <div className="catbutt">
          {data.map((item) => (
            <Link href={`/Events?cat=${item.tittle}`} className = {'${styles[item.singlepost]}'}key={item._id}>
              
                <button className='fb'>{item.tittle}</button>
            
            </Link>
          
          
        ))}
        
        </div>


      </div>

     

     

      
    </>
  );
}

export default Header;
