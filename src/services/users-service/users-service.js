import {AxiosService} from "../axios-service/axios-service";
import {urls} from "../../configs";

const UsersService = {
    getAllUsers:()=>AxiosService.get(urls.users),
    getById:(id)=>AxiosService.get(urls.users+`/${id}`)
}

export {UsersService}
