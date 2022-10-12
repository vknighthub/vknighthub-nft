import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    renkingData: [],
    filteredRenkingData: []
};

export const nftReducer = createSlice({
    name: 'nftmarketplace',
    initialState: initialState,
    reducers: {
        collectRenkingData: (state, action) => {
			state.renkingData = action.payload;
			state.filteredRenkingData = action.payload;
		}
    }
});

export const {
	collectRenkingData
} = nftReducer.actions;


export default nftReducer.reducer;
