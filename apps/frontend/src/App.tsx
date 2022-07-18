// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Book } from '@bookstore-app/data';
import axios from 'axios';
import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import TopBar from './components/TopBar';
import Main from './pages/Main/Main';
import BooksService from './services/books.service';

export function App() {
  // const queryClient = useQueryClient();
  // const { isLoading, isError, isIdle, data, error } = useQuery<Book[], Error>(
  //   'books',
  //   BooksService.getBooks
  // );

  // const { mutate: createBookMutate } = useMutation(BooksService.createBook, {
  //   onSuccess: (data) => {
  //     queryClient.setQueryData('books', (previousItems: any) => [
  //       ...previousItems,
  //       data,
  //     ]);
  //   },
  // });

  // const { mutate: deleteBookMutate } = useMutation(BooksService.deleteBook, {
  //   onSuccess: (_, id) => {
  //     queryClient.setQueryData('books', (previousItems: any) =>
  //       previousItems.filter((item: Book) => item.id !== id)
  //     );
  //   },
  // });

  // const handleDelete = (id: string) => {
  //   deleteBookMutate(id);
  // };

  // if (isLoading || isIdle) {
  //   return <span>Loading...</span>;
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  return <Main />;
}

export default App;
