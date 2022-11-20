import React from 'react';
import './category.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { category } from '../../assets/data/data';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

const SmpleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  );
};

const SmplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  );
};

export const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SmpleNextArrow />,
    prevArrow: <SmplePrevArrow />,
    responsive: [
      {
        breakPoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs' key={item.id}>
                <div className='box'>
                  <img src={item.cover} alt='' />
                  <div className='overlay'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
