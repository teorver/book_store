import { createAction } from '@reduxjs/toolkit';

export const setSearchResult = createAction<{ value: string; books: any[] }>('setSearchResult');
