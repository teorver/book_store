import { RootState } from '../../store';
import { Book_isbn } from '../../store.types';

const isbnSelector = (state: RootState) => state[Book_isbn.CURRENT_ISBN];

export default isbnSelector;
