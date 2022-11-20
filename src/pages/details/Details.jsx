import React, { useEffect, useState } from 'react';
import { blog } from '../../assets/data/data';
import { useParams } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import './details.css';

export const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));

    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  return (
    <>
      {blogs ? (
        <section className='singlePost'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>

            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>{blogs.desc}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
