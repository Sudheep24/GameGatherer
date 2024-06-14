import React from 'react';
import './events.css';
import ER from '../Component/Eventrender/ER';
import SideNav from '../Component/sideNav/sideNav';
import Complist from '../Component/complist/Complist';

export default function Events({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <ER />
      <div className='conteve'>
        <SideNav />
        <Complist page={page} cat={cat} />
      </div>
    </div>
  );
}
