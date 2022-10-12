import { NFTPolicy } from "../api/api";
import axiosInstance from '../services/AxiosInstance';

export const fetchedDetailNFT = async (policyid) => {
    if (policyid) {
        const nftData = await axiosInstance.get(NFTPolicy(policyid))
            .catch(
                function (error) {
                    return Promise.reject(error)
                }
            );
        return nftData;
    }
}; 
