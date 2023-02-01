import {AxiosService} from "../axios-service/axios-service";
import {UrlS} from "../../configs";

const PostService={
    getPost:(id)=>AxiosService.get(`${UrlS.posts}/${id}`)
}

export {PostService}
