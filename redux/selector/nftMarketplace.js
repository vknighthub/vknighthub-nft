import { createSelector } from 'reselect';

export const getNFTName = (state, policyid) => 
    state.nftmarketplace.find((nftmarketplace) => nftmarketplace.policyid === policyid);

export const getNFT = () => createSelector([getNFTName], (nftmarketplace) => nftmarketplace);
