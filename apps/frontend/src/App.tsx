// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Book } from '@bookstore-app/data';
import { useQuery } from 'react-query';
import TopBar from './components/TopBar';
import Main from './pages/Main/Main';
import BooksService from './services/books.service';

export function App() {
  const { isLoading, isError, isIdle, data, error } = useQuery<Book[], Error>(
    'books',
    BooksService.getBooks
  );

  if (isLoading || isIdle) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return <Main />;
}

export default App;
