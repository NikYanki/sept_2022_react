import axios from "axios";

import {launches} from "../../configs";

const LaunchesService = axios.get(launches)

export {LaunchesService}
