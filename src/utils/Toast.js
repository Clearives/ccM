import { Toast } from 'antd-mobile';

/**
 * Toast 工具类
 */
export default class ToastUtil {
    static showToastWithDuration(duration, msg, mask = true) {
        Toast.info(msg, duration, () => {}, mask);
    }

    static showToast(msg, mask = true) {
        Toast.info(msg, 1.8, () => {}, mask);
    }

    static showLongToast(msg) {
        Toast.info(msg, 3.5);
    }

    static showLoadingToast(msg) {
        if (typeof msg != 'string') {
            msg = '正在加载...';
        }
        Toast.loading(msg, 0); // 关闭此toast需要调用Toast.hide()方法
    }

    static hideToast() {
        Toast.hide();
    }
}