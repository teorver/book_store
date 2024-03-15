import { RootState } from '../../store';
import { Book_isbn } from '../../store.types';

const searchInputSelector = (state: RootState) => state[Book_isbn.CURRENT_SEARCHVALUE];

export default searchInputSelector;
