import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genreListId: ''
};

const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
        },
    }
});

export const { selectGenreListId } = genreSlice.actions;

export default genreSlice.reducer;