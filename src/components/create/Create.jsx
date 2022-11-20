import React from 'react';
import userPhoto from '../../assets/images/user.jpg';
import './create.css';

export const Create = () => {
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img'>
            <img src={userPhoto} alt=''></img> 
          </div>
          <form>
            <div className='inputFile flexCenter'>
              <input type="file" />
            </div>
            <input type='text' placeholder='Title' />
            <textarea name='' id='' cols='30' rows='10'></textarea>
            <button className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  );
};
