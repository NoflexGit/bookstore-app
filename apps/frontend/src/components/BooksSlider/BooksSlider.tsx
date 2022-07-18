import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import BookCard from '../../components/BookCard';

export interface BooksSliderProps {
  title: string;
}

export function BooksSlider({ title }: BooksSliderProps) {
  return (
    <section>
      <div className="mb-8 flex items-end justify-between">
        <div className="text-3xl font-medium">{title}</div>
        <div className="text-sm">See all</div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <BookCard
            title="Night of the Living Rez"
            img="https://images-us.bookshop.org/ingram/9781953534187.jpg?height=500&v=v2-0cf7ddbde9be8d4f68d12313eaf7da66"
            author="Morgan Talty"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard
            title="Jane Against the World"
            img="https://images-us.bookshop.org/ingram/9781626721654.jpg?height=500&v=v2"
            author="Karen Blumenthal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard
            title="Night of the Living Rez"
            img="https://images-us.bookshop.org/ingram/9781953534187.jpg?height=500&v=v2-0cf7ddbde9be8d4f68d12313eaf7da66"
            author="Morgan Talty"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard
            title="Jane Against the World"
            img="https://images-us.bookshop.org/ingram/9781626721654.jpg?height=500&v=v2"
            author="Karen Blumenthal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard
            title="Night of the Living Rez"
            img="https://images-us.bookshop.org/ingram/9781953534187.jpg?height=500&v=v2-0cf7ddbde9be8d4f68d12313eaf7da66"
            author="Morgan Talty"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard
            title="Jane Against the World"
            img="https://images-us.bookshop.org/ingram/9781626721654.jpg?height=500&v=v2"
            author="Karen Blumenthal"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BooksSlider;
