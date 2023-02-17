import axios from "axios";

import {BaseUrl} from "../../configs";
import {AuthService} from "../auth-service/auth-service";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const AxiosService = axios.create({baseURL: BaseUrl})

AxiosService.interceptors.request.use((configs) => {
    if (AuthService.isAuthenticated()) {
        console.log(AuthService.isAuthenticated());
        const access = AuthService.getAccessToken()
        console.log(access);
        configs.headers.Authorization = `Bearer ${access}`
    }
    return configs
})

let isRefreshing = false
AxiosService.interceptors.response.use((configs) => {
        return configs
    },
    async (error) => {
        const refresh = AuthService.getRefreshToken()
        if (error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true
            try {
                await AuthService.refresh(refresh)
            } catch (e) {
                AuthService.deleteTokens()
                history.replace("/login?expSession=true")
            }
            isRefreshing = false
            return AxiosService(error.cofig)
        }
        return Promise.reject(error)
    }
)

export {
    AxiosService,
    history
}
