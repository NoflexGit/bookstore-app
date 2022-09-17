import GallerySlider from '../../components/GallerySlider';
import BooksSlider from '../../components/BooksSlider';
import TopBar from '../../components/TopBar';
import {useQuery} from "react-query";
import {Book} from "@bookstore-app/data";
import BooksService from "../../services/books.service";

/* eslint-disable-next-line */
export interface MainProps {}

const id = '62e1a00c05d145c1f8c24ea7'

export function Main(props: MainProps) {
  const {isLoading, isError, isIdle, data, error} = useQuery<Book[], Error>(['book', id], () => BooksService.getBook(id))

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
