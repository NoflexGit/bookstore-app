import GallerySlider from '../../components/GallerySlider';
import BooksSlider from '../../components/BooksSlider';
import TopBar from '../../components/TopBar';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <>
      <TopBar />
      <main className="container mx-auto space-y-12 pt-20">
        <GallerySlider />
        <BooksSlider title="Bestsellers" />
        <BooksSlider title="Something new" />
        <BooksSlider title="30% off" />
      </main>
    </>
  );
}

export default Main;
