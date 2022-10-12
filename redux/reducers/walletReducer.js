import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    walletinfo : {
        balance: 0,
        address: ''
    }
};

export const walletReducer = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {
        walletInformation: (state, action) => {
			state.walletinfo = action.payload;
		}
    }
});

export const {
	walletInformation
} = walletReducer.actions;


export default walletReducer.reducer;
