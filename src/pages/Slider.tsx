import { IonIcon } from '@ionic/react';
import Image from 'next/image';
import { Swiper } from 'swiper/react';

const Slider = () => {
  const data = [
    {
      image: '/images/tranding-food-1.png',
      price: '20',
      name: 'Special Pizza',
      rate: 4.5,
    },
    {
      image: '/images/tranding-food-2.png',
      price: '40',
      name: 'Meat Ball',
      rate: 4.5,
    },
    {
      image: '/images/tranding-food-3.png',
      price: '40',
      name: 'Burger',
      rate: 4.5,
    },
    {
      image: '/images/tranding-food-4.png',
      price: '15',
      name: 'Frish Curry',
      rate: 4.5,
    },
    {
      image: '/images/tranding-food-5.png',
      price: '15',
      name: 'Pane Cake',
      rate: 4.5,
    },
    {
      image: '/images/tranding-food-6.png',
      price: '15',
      name: 'Vanilla cake',
      rate: 4.5,
    },
    {
      image: '/images/tranding-food-7.png',
      price: '8',
      name: 'Straw Cake',
      rate: 4.5,
    },
  ];

  return (
    <div id='tranding'>
      <div className='container'>
        <Swiper
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className='swiper tranding-slider'
        >
          <div className='swiper-wrapper'>
            {data.map((card, key: number) => (
              <div className='swiper-slide tranding-slide' key={key}>
                <div className='tranding-slide-img'>
                  <Image
                    priority
                    src={card.image}
                    alt={card.name}
                    style={{ width: 'auto' }}
                    width={300}
                    height={300}
                  />
                </div>
                <div className='tranding-slide-content'>
                  <h1 className='food-price'>${card.price}</h1>
                  <div className='tranding-slide-content-bottom'>
                    <h2 className='food-name'>{card.name}</h2>
                    <h3 className='food-rating'>
                      <span>{card.rate}</span>
                      <div className='rating'>
                        <IonIcon name='star' />
                        <IonIcon name='star' />
                        <IonIcon name='star' />
                        <IonIcon name='star' />
                        <IonIcon name='star' />
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SliderControl />
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

const SliderControl = () => {
  return (
    <div className='tranding-slider-control'>
      <div className='swiper-button-prev slider-arrow'>
        <IonIcon name='arrow-back-outline' />
      </div>
      <div className='swiper-button-next slider-arrow'>
        <IonIcon name='arrow-forward-outline' />
      </div>
      <div className='swiper-pagination' />
    </div>
  );
};
