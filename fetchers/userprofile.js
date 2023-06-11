import axiosInstance from '../services/AxiosInstance';
import { UserProfile } from './../api/insite/api';


export const fetchedUserProfile = async (user) => {
    const userprofile = await axiosInstance.get(UserProfile(user))
        .catch(
            function (error) {
                return Promise.reject(error)
            }
        );
    return userprofile.result.data;
};