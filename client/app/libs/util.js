import axios from 'axios';
import debug from 'debug';

let util = {

};

util.title = function(title) {
    title = title ? title : '黑土';
    window.document.title = title;
};
let ajaxUrl = '';

if(process.env.NODE_ENV === 'development') {
    ajaxUrl = '';
    
}

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = ajaxUrl;

axios.interceptors.response.use((res) =>{
    if(res.data.code != '200'){
        vue.$Message.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    vue.$Message.error("网络异常");
    return Promise.reject(error);
});

util.ajax = axios.create();


localStorage.debug = 'app:*';
let logIns = debug('app:info');
logIns.log = console.info.bind(console);
util.log = logIns;

let debugIns = debug('app:debug');
debugIns.log = console.warn.bind(console);
util.debug = debugIns;

export default util;