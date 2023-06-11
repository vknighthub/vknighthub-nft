import { NFTTransaction } from "../api/outside/api";
import axiosInstance from '../services/AxiosInstance';


export const fetchedNFTTransaction = async (policy) => {
    const nftData = await axiosInstance.get(NFTTransaction(policy))
        .catch(
            function (error) {
                return Promise.reject(error)
            }
        );
    return nftData.items;
};