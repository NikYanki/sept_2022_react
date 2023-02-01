import {AxiosService} from "../axios-service/axios-service";
import {UrlS} from "../../configs";

const AlbumsService = {
    getAllAlbums: () => AxiosService.get(UrlS.albums),
    getAlbumById: (id) => AxiosService.get(`${UrlS.albums}/${id}`)
}

export {AlbumsService}
