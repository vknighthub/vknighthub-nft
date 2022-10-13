import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    trendingCategoryItemData: [],
    sortedtrendingCategoryItemData: [],
    trait: []
};

export const nftTrxReducer = createSlice({
    name: 'nfttransaction',
    initialState: initialState,
    reducers: {
        updateTrendingCategoryItemData: (state, action) => {
            state.trendingCategoryItemData = action.payload;
            state.sortedtrendingCategoryItemData = action.payload;
        },
        propertiesText: (state, action) => {
            state.trait = action.payload;
        }
    }
});

export const {
    updateTrendingCategoryItemData,
    propertiesText
} = nftTrxReducer.actions;


export default nftTrxReducer.reducer;
