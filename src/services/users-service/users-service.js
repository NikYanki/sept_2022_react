import {AxiosService} from "../axios-service/axios-service";
import {urls} from "../../configs";

const UsersService = {
    getAllUsers:()=>AxiosService.get(urls.users)
}

export {UsersService}
