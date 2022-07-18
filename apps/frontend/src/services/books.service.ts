import axios from 'axios';

const baseUrl = '/api/books';

class BooksService {
  getBooks = async () => {
    const { data } = await axios(baseUrl);
    return data;
  };

  createBook = async (params: any) => {
    const { data } = await axios.post(baseUrl, params);
    return data;
  };

  deleteBook = async (id: string) => {
    const { data } = await axios.delete(`${baseUrl}/${id}`);
    return data;
  };
}

export default new BooksService();
