import {useSelector} from "react-redux";

export const useUser = () => {

    const { userInfo } = useSelector((state) => state.userLogin);

    return {
        state:{
            userInfo
        }
    }

}