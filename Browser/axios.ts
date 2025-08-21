//用typescript二次封装axios
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type AxiosError } from 'axios'

//拓展AxiosRequestConfig 借口, 支持自定义选项
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    showLoading?: boolean; // 是否显示加载动画
    showError?: boolean; // 是否显示错误提示
    showSuccess?: boolean; // 是否显示成功提示
    showMessage?: boolean; // 是否显示消息提示
    showNotification?: boolean; // 是否显示通知
}

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // 基础URL
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
        charset: 'utf-8'

    },
})

//全局请求loading
let requestLoadingCount = 0

// 显示 loading 的函数 (这里用伪代码表示，具体实现可以是调用 UI 库的组件)
const showLoading = () => {
    // ElLoading.service({ fullscreen: true, text: '加载中...' });
    console.log('Loading...'); // 替换为实际的加载动画逻辑
}

// 隐藏 loading 的函数
const hideLoading = () => {
    //  ElLoading.service().close();
    console.log('Loading finished'); // 替换为实际的隐藏加载动画逻辑
}

// --- 请求拦截器 ---
instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
        // 检查自定义配置，如果 showLoading 不是 false，则显示 loading
        if (config.showLoading !== false) {
            if (requestLoadingCount === 0) {
                showLoading();
            }
            requestLoadingCount++;
        }
        // 可以在这里统一添加 token 等请求头
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        // 请求错误时隐藏 loading
        if (requestLoadingCount > 0) {
            requestLoadingCount--;
            if (requestLoadingCount === 0) {
                hideLoading();
            }
        }
        return Promise.reject(error);
    }
)

// --- 响应拦截器 ---
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对应请求拦截器的配置，如果不是 false 就处理计数器
        if (response.config && (response.config as CustomAxiosRequestConfig).showLoading !== false) {
            requestLoadingCount--;
            if (requestLoadingCount === 0) {
                hideLoading();
            }
        }
        return response.data; // 返回响应数据
    },
    (error: AxiosError) => {
        // 响应出错时，同样要处理计数器
        if (error.config && (error.config as CustomAxiosRequestConfig).showLoading !== false) {
            requestLoadingCount--;
            if (requestLoadingCount === 0) {
                hideLoading();
            }
        }
        // 全局错误处理
        let message = '';
        if (error.response) {
            // 服务器返回了响应，但状态码不是 2xx
            switch (error.response.status) {
                case 401:
                    message = '未授权，请重新登录';
                    // 执行跳转登录页等操作
                    // window.location.href = '/login';
                    break;
                case 403:
                    message = '拒绝访问';
                    break;
                case 404:
                    message = '请求资源不存在';
                    break;
                case 500:
                    message = '服务器内部错误';
                    break;
                default:
                    message = `连接错误: ${error.response.status}`;
            }
        } else if (error.request) {
            // 请求已发出，但没有收到响应 (例如网络断开)
            message = '网络连接异常，请稍后重试';
        } else {
            // 其他错误 (例如请求配置出错)
            message = error.message;
        }

        // 使用 UI 库的 Message 组件弹出错误信息
        // ElMessage.error(message);
        console.error(message);

        return Promise.reject(error);
    }
)