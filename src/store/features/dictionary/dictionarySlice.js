import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: []
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    updateWord: (state, action) => {
      const index = state.words.findIndex(word => word.id === action.payload.id);
      if (index !== -1) {
        state.words[index] = action.payload;
      }
    },
    deleteWord: (state, action) => {
      state.words = state.words.filter(word => word.id !== action.payload);
    }
  }
});

export const { addWord, updateWord, deleteWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
