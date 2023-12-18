// keep token / username => session storage
export const authenticate = (res, next) => {
    if (window !== "undefined") {
        sessionStorage.setItem("token", JSON.stringify(res.data.token))
        sessionStorage.setItem("username", JSON.stringify(res.data.username))
    }
    next()
}
