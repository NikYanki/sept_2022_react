import {AxiosService} from "../axios-service/Axios-service";
import {URLs} from "../../configs";

const CarsService = {
    getAllCars: (page=1) => AxiosService.get(URLs.cars,{params:{page}}),
    getCarById: (id) => AxiosService.get(URLs.cars + `/${id}`),
    createCar: (newCar) => AxiosService.post(URLs.cars, newCar),
    updateCarById: (id, data) => AxiosService.put(URLs.cars + `/${id}`, data),
    deleteCarById: (id) => AxiosService.delete(URLs.cars + `/${id}`)
}
export {CarsService}
