import {AxiosService} from "../axios-service/axios-service";
import {urls} from "../../configs";

const PostsService = {
    getAll: ()=>AxiosService.get(urls.posts),
    getById:(id)=>AxiosService.get(urls.posts+`/${id}`)
}
export {PostsService}
