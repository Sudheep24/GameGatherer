"use client"

import { useEffect } from 'react';
import React from 'react';
import './scroll.css';

const Scroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
    });
  }

  return (
    <div className='scroller'>
      <div className="innerscroll">
        <ul>
          <li>Football</li>
          <li>Basketball</li>
          <li>Baseball</li>
          <li>Soccer</li>
          <li>Tennis</li>
          <li>Golf</li>
          <li>Cricket</li>
          <li>Rugby</li>
          <li>Hockey</li>
          <li>Boxing</li>
          <li>MMA</li>
          <li>Cycling</li>
          <li>Swimming</li>
          <li>Athletics</li>
          <li>Gymnastics</li>
          <li>Wrestling</li>
        </ul>

        <ul className=' reverse'>
          <li>Football</li>
          <li>Basketball</li>
          <li>Baseball</li>
          <li>Soccer</li>
          <li>Tennis</li>
          <li>Golf</li>
          <li>Cricket</li>
          <li>Rugby</li>
          <li>Hockey</li>
          <li>Boxing</li>
          <li>MMA</li>
          <li>Cycling</li>
          <li>Swimming</li>
          <li>Athletics</li>
          <li>Gymnastics</li>
          <li>Wrestling</li>
        </ul>
      </div>
    </div>
  );
};

export default Scroll;
