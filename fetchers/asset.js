import { NFTAsset, NFTAssetAddress } from "../api/api";
import axiosInstance from '../services/AxiosInstance';


export const fetchedAsset = async (asset) => {
    const nftData = await axiosInstance.get(NFTAsset(asset))
        .catch(
            function (error) {
                return Promise.reject(error)
            }
        );
    return nftData;
};


export const fetchedAssetAddress = async (asset) => {
    const config = {
        headers: { "project_id": "mainnetfOvSvgtfLlNduxJhN6Jd8UWp6cDfsGiC" }
    };
    const nftAddress = await axiosInstance.get(NFTAssetAddress(asset), config)
        .catch(
            function (error) {
                return Promise.reject(error)
            }
        );
    return nftAddress;
};