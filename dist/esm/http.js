import axios from 'axios';
var requestInterceptor = function (req) {
    // @todo: retrive `accessToken` from where it's stored and set it here
    // @ts-ignore
    req.headers.Authorization = "Bearer accessToken";
    return req;
};
var responseInterceptor = function (res) {
    return res.data;
};
var errorInterceptor = function (error) {
    return Promise.reject(error);
};
export var init = function (apiBaseUrl, reqInterceptor, respInterceptor, errInterceptor) {
    if (reqInterceptor === void 0) { reqInterceptor = requestInterceptor; }
    if (respInterceptor === void 0) { respInterceptor = responseInterceptor; }
    if (errInterceptor === void 0) { errInterceptor = errorInterceptor; }
    axios.defaults.baseURL = apiBaseUrl;
    axios.interceptors.request.use(reqInterceptor, errInterceptor);
    axios.interceptors.response.use(respInterceptor, errInterceptor);
};
export var setAuthHeader = function (token) {
    axios.defaults.headers.Authorization = "Bearer ".concat(token);
};
export var resetAuthHeader = function () {
    // @ts-ignore
    axios.defaults.headers.Authorization = undefined;
};
export var create = axios.create;
export var all = function (iterable) {
    return axios.all(iterable).then(axios.spread(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args;
    }));
};
export var request = axios;
export var get = axios.get;
export var post = axios.post;
export var put = axios.put;
export var patch = axios.patch;
export var del = axios["delete"];
//# sourceMappingURL=http.js.map