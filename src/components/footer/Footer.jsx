import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>
            Follow My Social Media
          </p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <RiLinkedinFill className='icon' />
            <BsGithub className='icon' />
          </div>
        </div>
      </footer>
    </>
  );
};
