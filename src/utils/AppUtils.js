import {Platform, NativeModules, Dimensions, PixelRatio, AsyncStorage} from 'react-native';

/**
 * 应用的工具类
 *
 * @export
 * @class AppUtils
 */
export default class AppUtils {

    /**
     * 是否空字符串，其中null, undefined, 字符串但长度为0等情况都判断为空字符串
     * @param {*} str
     */
    static isEmptyString(str) {
        let isEmptyString = true;
        if (typeof str === 'string' && str.length > 0) {
            isEmptyString = false;
        }

        return isEmptyString;
    }

    /**
     * 判断是否iOS平台
     */
    static isIOSPlatform = () => {
        return Platform.OS === 'ios';
    };

    /**
     * 判断是否Android平台
     */
    static isAndroidPlatform = () => {
        return Platform.OS === 'android';
    };

    /**
     * 判断是否iOS的4.0寸设备
     */
    static isIOSDevice40() {
        let isIOSDevice40 = false;
        if (Platform.OS === 'ios') {
            if (this.getScreenWidth() == 320 && this.getScreenHeight() == 568) {
                isIOSDevice40 = true;
            }
        }
        return isIOSDevice40;
    }

    /**
     * 判断是否iOS的4.7寸设备
     */
    static isIOSDevice47() {
        let isIOSDevice47 = false;
        if (Platform.OS === 'ios') {
            if (this.getScreenWidth() == 375 && this.getScreenHeight() == 667) {
                isIOSDevice47 = true;
            }
        }
        return isIOSDevice47;
    }

    /**
     * 判断是否iOS的5.5寸设备
     */
    static isIOSDevice55() {
        let isIOSDevice55 = false;
        if (Platform.OS === 'ios') {
            if (this.getScreenWidth() == 414 && this.getScreenHeight() == 736) {
                isIOSDevice55 = true;
            }
        }
        return isIOSDevice55;
    }

    /**
     * 判断是否iOS的5.8寸设备
     */
    static isIOSDevice58() {
        let isIOSDevice58 = false;
        if (Platform.OS === 'ios') {
            if (this.getScreenWidth() == 375 && this.getScreenHeight() == 812) {
                isIOSDevice58 = true;
            }
        }
        return isIOSDevice58;
    }

    /**
     * 获取屏幕宽度
     */
    static getScreenWidth() {
        return Dimensions.get('window').width;
    }

    /**
     * 获取屏幕高度
     */
    static getScreenHeight() {
        return Dimensions.get('window').height;
    }

    /**
     * 获取状态栏高度
     */
    static getStatusBarHeight() {
        let statusBarHeight;
        if (this.isIOSPlatform()) {
            statusBarHeight = this.isIOSDevice58() ? 44 : 20;
        } else {
            // statusBarHeight = Math.ceil(25 * PixelRatio.get()) / PixelRatio.get() + 0.5;
            statusBarHeight = 0;
        }
        return statusBarHeight;
    }

    /**
     * 获取导航栏高度
     */
    static getNavBarHeight() {
        let navBarHeight = 44;
        if (this.isIOSPlatform()) {
            navBarHeight = 44;
        } else {
            navBarHeight = 56;
        }
        return navBarHeight;
    }

    /**
     * 获取TabBar高度
     */
    static getTabBarHeight() {
        let tabBarHeight = 0;
        if (this.isIOSPlatform()) {
            tabBarHeight = this.isIOSDevice58() ? 83 : 49;
        } else {
            tabBarHeight = 49;
        }
        return tabBarHeight;
    }

    /**
     * 获取底部安全间距，主要是iPhoneX
     */
    static getBottomMargin() {
        let bottomMargin = 0;
        if (this.isIOSPlatform()) {
            bottomMargin = this.isIOSDevice58() ? 34 : 0;
        }
        return bottomMargin;
    }

}
