"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.del = exports.patch = exports.put = exports.post = exports.get = exports.request = exports.all = exports.create = exports.resetAuthHeader = exports.setAuthHeader = exports.init = void 0;
var axios_1 = __importDefault(require("axios"));
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
var init = function (apiBaseUrl, reqInterceptor, respInterceptor, errInterceptor) {
    if (reqInterceptor === void 0) { reqInterceptor = requestInterceptor; }
    if (respInterceptor === void 0) { respInterceptor = responseInterceptor; }
    if (errInterceptor === void 0) { errInterceptor = errorInterceptor; }
    axios_1["default"].defaults.baseURL = apiBaseUrl;
    axios_1["default"].interceptors.request.use(reqInterceptor, errInterceptor);
    axios_1["default"].interceptors.response.use(respInterceptor, errInterceptor);
};
exports.init = init;
var setAuthHeader = function (token) {
    axios_1["default"].defaults.headers.Authorization = "Bearer ".concat(token);
};
exports.setAuthHeader = setAuthHeader;
var resetAuthHeader = function () {
    // @ts-ignore
    axios_1["default"].defaults.headers.Authorization = undefined;
};
exports.resetAuthHeader = resetAuthHeader;
exports.create = axios_1["default"].create;
var all = function (iterable) {
    return axios_1["default"].all(iterable).then(axios_1["default"].spread(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args;
    }));
};
exports.all = all;
exports.request = axios_1["default"];
exports.get = axios_1["default"].get;
exports.post = axios_1["default"].post;
exports.put = axios_1["default"].put;
exports.patch = axios_1["default"].patch;
exports.del = axios_1["default"]["delete"];
//# sourceMappingURL=http.js.map