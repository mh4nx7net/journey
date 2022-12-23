/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-css-tags */
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const HomePage = () => {
  const [done, setDone] = useState(true);
  useEffect(() => {
    if (done) {
      alert('barakallah fii umrik mbak FITRI ku sayang,');
      alert('aku bingung mau ngomong apa..');
      alert('aku juga engga tau harus ngasi kado apa buat kamu');
      alert('udah itu aja, klik ok buat lanjuttt');
      alert(
        'One day you will ask me which is more important. My life or yours. I will say mine and you will walk away not knowing that you are my life ~gibran'
      );
      alert('ada sesuatu buat kamu 😘. klik lovee ❤️ nya yaahh');
      setDone(() => false);
    }
  }, []);
  return (
    <Layout>
      <Seo />
      <main className='layout flex min-h-screen flex-col items-center justify-center'>
        <div className='w-80'>
          <div className='hearts'>
            <div className='back'></div>
            <Link href='https://photos.app.goo.gl/n6vkR4DvFnHbn9n17'>
              <div className='heart hover:bg-red-400 active:bg-red-500'></div>
            </Link>
          </div>
        </div>
        {/* <SliderSweep /> */}
        {/* <Love /> */}
      </main>
    </Layout>
  );
};

const Love = () => {
  return (
    <>
      <style jsx>{`
        $strokeColor: grey;
        $heartColor: #db3434;
        $size: 300px; // change this to manipulate overall size
        $totalAnim: 7s;
        $delay: 0.1s;
        $squareLen: 240;
        $circleLen: 188.522;
        $heartLen: 308.522;
        $svgSize: 90px;
        $circleW: 60px;

        .heart-loader {
          position: absolute;
          display: block;
          left: 50%;
          top: 50%;
          margin-top: $size/-2;
          width: $size;
          height: $size;
          overflow: visible;

          &__group {
            transform-origin: 0 $svgSize;
            animation: group-anim $totalAnim $delay infinite;
          }

          &__square {
            stroke: $strokeColor;
            stroke-dasharray: $squareLen, $squareLen;
            stroke-dashoffset: $squareLen;
            animation: square-anim $totalAnim $delay infinite;
          }

          &__circle {
            stroke: $strokeColor;
            stroke-dasharray: $circleLen, $circleLen;
            stroke-dashoffset: $circleLen;
            transform-origin: $circleW $circleW/2;

            &.m--left {
              animation: left-circle-anim $totalAnim $delay infinite;
            }

            &.m--right {
              animation: right-circle-anim $totalAnim $delay infinite;
            }
          }

          &__heartPath {
            stroke: $heartColor;
            fill: transparent;
            stroke-dasharray: $heartLen, $heartLen;
            stroke-dashoffset: $heartLen;
            animation: heart-anim $totalAnim $delay infinite;
          }
        }
        @keyframes square-anim {
          12% {
            stroke-dashoffset: 0;
          }
          43% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          85% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        @keyframes left-circle-anim {
          12% {
            stroke-dashoffset: $circleLen;
          }
          31% {
            stroke-dashoffset: 0;
            transform: translateY(0);
          }
          41% {
            stroke-dashoffset: 0;
            transform: translateY($circleW/-2);
          }
          43% {
            stroke-dashoffset: 0;
            transform: translateY($circleW/-2);
            opacity: 1;
          }
          85% {
            stroke-dashoffset: 0;
            transform: translateY($circleW/-2);
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            transform: translateY($circleW/-2);
            opacity: 0;
          }
        }
        @keyframes right-circle-anim {
          12% {
            stroke-dashoffset: $circleLen;
          }
          31% {
            stroke-dashoffset: 0;
            transform: translateX(0);
          }
          41% {
            stroke-dashoffset: 0;
            transform: translateX($circleW/2);
          }
          43% {
            stroke-dashoffset: 0;
            transform: translateX($circleW/2);
            opacity: 1;
          }
          85% {
            stroke-dashoffset: 0;
            transform: translateX($circleW/2);
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            transform: translateX($circleW/2);
            opacity: 0;
          }
        }
        @keyframes group-anim {
          43% {
            transform: rotate(0);
          }
          54% {
            transform: rotate(-45deg);
          }
          90% {
            transform: rotate(-45deg);
            opacity: 1;
          }
          97% {
            transform: rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: rotate(-45deg);
            opacity: 0;
          }
        }
        @keyframes heart-anim {
          55% {
            stroke-dashoffset: $heartLen;
            fill: transparent;
          }
          70% {
            stroke-dashoffset: 0;
            fill: transparent;
          }
          87% {
            stroke-dashoffset: 0;
            fill: $heartColor;
          }
          100% {
            stroke-dashoffset: 0;
            fill: $heartColor;
          }
        }

        .other {
          position: absolute;
          left: 0;
          bottom: 0.5rem;
          width: 100%;
          text-align: right;

          &__link {
            font-size: 1.3rem;
            margin: 0 1rem;
          }
        }
      `}</style>
      <svg
        className='heart-loader'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 90 90'
        version='1.1'
      >
        <g className='heart-loader__group'>
          <path
            className='heart-loader__square'
            strokeWidth='1'
            fill='none'
            d='M0,30 0,90 60,90 60,30z'
          />
          <path
            className='heart-loader__circle m--left'
            strokeWidth='1'
            fill='none'
            d='M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0'
          />
          <path
            className='heart-loader__circle m--right'
            strokeWidth='1'
            fill='none'
            d='M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0'
          />
          <path
            className='heart-loader__heartPath'
            strokeWidth='2'
            d='M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0'
          />
        </g>
      </svg>
    </>
  );
};
export default HomePage;

const SliderSweep = () => {
  const slide_img = [
    '/images/tranding-food-1.png',
    '/images/tranding-food-1.png',
    '/images/tranding-food-3.png',
    '/images/tranding-food-4.png',
    '/images/tranding-food-5.png',
  ];
  SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
  return (
    <Swiper
      setWrapperSize={true}
      effect='coverflow'
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView='auto'
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
    >
      {/* using array */}
      {slide_img.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt=''
              width={300}
              height={300}
              className='rounded-xl'
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
