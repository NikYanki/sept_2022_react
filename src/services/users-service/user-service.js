import {AxiosService} from "../";
import {UrlS} from "../../configs";

const UserService = {
    getAllUsers: () => AxiosService.get(UrlS.users),
    getUserById: (id) => AxiosService.get(`${UrlS.users}/${id}`)
}

export {UserService}
