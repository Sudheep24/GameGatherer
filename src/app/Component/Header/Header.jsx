"use client";
import './header.css';
import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import Link from 'next/link';

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

  

  return (
    <>
      <div className='headerStyle'>
        <h1>Game</h1>
        <h1 className='gat'>Gatherer</h1>
        <div className="sear1">
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
