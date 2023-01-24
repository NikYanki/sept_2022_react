import axios from 'axios'

import {baseURL} from '../../configs'

const AxiosService = axios.create({baseURL})

export {AxiosService}
