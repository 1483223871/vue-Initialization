import http from "../http/http";
//用户登录
export const login = params => {
    return http.post("/login", params)
}