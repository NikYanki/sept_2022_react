const BaseUrl = process.env.REACT_APP_API
const URLs = {
    cars: '/cars',
    login: '/auth',
    refresh: '/auth/refresh',
    me: '/auth/me',
    users: '/users'
}
const accessTokenKey = "access"
const refreshTokenKey = "refresh"

export {
    URLs,
    BaseUrl,
    accessTokenKey,
    refreshTokenKey
}
