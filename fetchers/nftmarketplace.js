import { NFTListAll, NFTPolicy } from "../api/api";
import axiosInstance from '../services/AxiosInstance';


export const fetchedAllNFT = async () => {
    const nftData = await axiosInstance.get(NFTListAll())
        .catch(
            function (error) {
                return Promise.reject(error)
            }
        );
    return nftData.ranking;
};