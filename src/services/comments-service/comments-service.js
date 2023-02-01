import {AxiosService} from "../axios-service/axios-service";
import {UrlS} from "../../configs";

const CommentsService = {
    getAllComments: () => AxiosService.get(UrlS.comments),
    getCommentById: (id) => AxiosService.get(`${UrlS.comments}/${id}`)
}

export {CommentsService}
