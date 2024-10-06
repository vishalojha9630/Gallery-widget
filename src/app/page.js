'use client'

import React from 'react';
import Image from 'next/image';
import JoeBiden2012 from './assets/Joe-Biden-2012.jpg';
import DonaldTrump2015 from './assets/Donald-Trump-2015.jpg';
import BarackObama from './assets/Barack-Obama.jpg';
import BillClinton from './assets/Bill-Clinton.jpg';
import GeorgeBush from './assets/George-Bush.jpg';
import GeorgeWBush from './assets/George-W-Bush.jpg';
import RonaldReagan from './assets/Ronald-Reagan.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Grid } from 'swiper/modules';

const images = [
  {
    src: JoeBiden2012,
    title: 'Joe Biden',
    year: '2021-Present',
    description: 'Joe Biden In the East Room of the White House on December 6, 2021, President Joe Biden delivers remarks about proposed legislation designed to reduce prescription drug prices.',
  },
  {
    src: DonaldTrump2015,
    title: 'Donald Trump',
    year: '2017-2021',
    description: 'Donald Trump U.S. Pres. Donald Trump posing for his official portrait at the White House, Washington, D.C., October 6, 2017.',
  },
  {
    src: BarackObama,
    title: 'Barack Obama',
    year: '2009-2017',
    description: 'Barack Obama (born August 4, 1961, Honolulu, Hawaii, U.S.) is the 44th president of the United States (2009-17) and the first African American to hold the office. Before winning the presidency, Obama represented Illinois in the U.S. Senate (2005-08).',
  },
  {
    src: GeorgeWBush,
    title: 'George W. Bush',
    year: '2001-2009',
    description: 'George W. Bush (born July 6, 1946, New Haven, Connecticut, U.S.) is the 43rd president of the United States (2001-09), who led his country’s response to the September 11 terrorist attacks in 2001 and initiated the Iraq War in 2003.',
  },
  {
    src: BillClinton,
    title: 'Bill Clinton',
    year: '1993-2001',
    description: 'Bill Clinton (born August 19, 1946, Hope, Arkansas, U.S.) is the 42nd president of the United States (1993-2001), who oversaw the country’s longest peacetime economic expansion.',
  },
  {
    src: GeorgeBush,
    title: 'George Bush',
    year: '1989-1993',
    description: 'George H.W. Bush (born June 12, 1924, Milton, Massachusetts, U.S.—died November 30, 2018, Houston, Texas) was a politician and businessman who was vice president of the United States (1981-89) and the 41st president of the United States (1989-93).',
  },
  {
    src: RonaldReagan,
    title: 'Ronald Reagan',
    year: '1981-1989',
    description: 'Ronald Reagan (born February 6, 1911, Tampico, Illinois, U.S.—died June 5, 2004, Los Angeles, California) was the 40th president of the United States (1981-89), noted for his conservative Republicanism, his fervent anticommunism, and his appealing personal style, characterized by a jaunty affability and folksy charm.',
  },
]

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-800 p-6">
      <h2 className="text-white text-4xl font-bold text-center mb-10">The Presidents of US</h2>

      <Swiper
        slidesPerView={1} // Default for mobile
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        grid={{
          rows: 1,
        }}
        loop={true}
        navigation={true}
        spaceBetween={20}
        modules={[Grid, Navigation]}
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative group w-full h-full overflow-hidden rounded-lg shadow-lg">
              <Image
                priority={false}
                loading="lazy"
                alt={item.title}
                height={200}
                width={250}
                src={`${item?.src?.src}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-in-out"
              />

              <div className="absolute inset-0 flex flex-col justify-start items-center text-center mt-4 z-10 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                <h3 className="text-white text-lg font-bold">{item?.title}</h3>
                <p className="text-white text-sm">{item?.year}</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-end items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                <h2 className="text-white text-xl font-bold mb-2">{item?.title}</h2>
                <p className="text-white text-sm mb-2">{item?.year}</p>
                <p className="text-white text-sm text-center">{item?.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
