import {AxiosService} from "../";

import {users} from "../../configs";

const UsersService = () => AxiosService().get(users)

export {UsersService}
