import {AxiosService} from "../axios-service/Axios-service";
import {accessTokenKey, refreshTokenKey, URLs} from "../../configs";

const AuthService = {
    login: async function (credential) {
        const response = await AxiosService.post(URLs.login, credential)
        if (response.status === 200) {
            this.setToken(response.data)
        }
        return response;
    },

    refresh: async function (refresh) {
        const response =  await AxiosService.post(URLs.refresh, {refresh})
        if (response.status === 200) {
            this.setToken(response.data)
        }
    },
    me: () => AxiosService.get(URLs.me),

    setToken: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },
    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)
}


export {AuthService}

