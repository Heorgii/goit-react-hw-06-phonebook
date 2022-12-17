import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filterInput: '',
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        createItems(state, action) {
            state.items = [...state.items, action.payload];
            localStorage.setItem('contacts', JSON.stringify(state.items));
        },

        deleteItems(state, action) {
            state.items = state.items.filter(el => el.id !== action.payload);
            localStorage.setItem('contacts', JSON.stringify(state.items));
        },

        filterItems(state, action) {
            state.filterInput = action.payload;
        },

    },
});

export const { createItems, deleteItems, filterItems } = contactSlice.actions;
export default contactSlice.reducer;