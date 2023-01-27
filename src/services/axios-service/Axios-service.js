import axios from "axios";

import {BaseUrl} from "../../configs";

const AxiosService =axios.create({baseURL:BaseUrl})

export {AxiosService}
