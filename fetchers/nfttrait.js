import axiosInstance from '../services/AxiosInstance';
import { NFTTrait } from './../api/api';


export const fetchedNFTTrait = async (policy) => {
    const nftData = await axiosInstance.get(NFTTrait(policy))
        .catch(
            function (error) {
                return Promise.reject(error)
            }
        );
    return nftData.traits;
};