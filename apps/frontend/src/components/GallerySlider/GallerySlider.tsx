import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

/* eslint-disable-next-line */
export interface GallerySliderProps {}

export function GallerySlider(props: GallerySliderProps) {
  return (
    <div className="container mx-auto flex h-full items-center justify-between overflow-hidden rounded-2xl">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'bg-white w-2 h-2 mx-1 inline-flex rounded-full',
          bulletActiveClass: 'bg-indigo-700',
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=600&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=600&q=80"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default GallerySlider;
