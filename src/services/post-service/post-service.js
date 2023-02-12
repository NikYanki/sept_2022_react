import {AxiosService} from "../axios-service/axios-service";
import {posts} from "../../configs";

const PostService=()=>AxiosService().get(posts)

export {PostService}
