import {AxiosService} from "../axios-service/axios-service";

import {Users} from "../../configs";

const UsersService = {
    getAllUsers:()=>AxiosService.get(Users.users),
    getUserById:(id)=>AxiosService.get(Users.users+`/${id}`)
}

export {UsersService}
