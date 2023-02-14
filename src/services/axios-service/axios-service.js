import axios from "axios";
import {baseUrl} from "../../configs";

const AxiosService = axios.create({baseURL:baseUrl})

export {AxiosService}
