import {AxiosService} from "../axios-service/axios-service";
import {UrlS} from "../../configs";

const TodosService={
    getAllTodos:()=>AxiosService.get(UrlS.todos),
    getTodoById:(id)=>AxiosService.get(`${UrlS.todos}/${id}`)
}

export {TodosService}
