import React, {Component} from 'react';
import {View, Platform} from "react-native";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "./home/HomeScreen";
import DiscoverScreen from "./home/DiscoverScreen";
import MineScreen from "./home/MineScreen";
import GalleryScreen from "./home/GalleryScreen";
import TabBarItem from "../components/TabBarItem";
import MovieScreen from "./movie/MovieScreen";
import WebScreen from "../components/screen/WebScreen";
import UiIndexScreen from "./ui/UiIndexScreen";
import UIFlatListScreen from "./ui/UIFlatListScreen";
import UIModalScreen from "./ui/UIModalScreen"

console.ignoredYellowBox = ['Remote debugger'];
export default class MainComponent extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}
const TabRouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../resources/tab_bar/home.png')}
                    selectedImage={require('../resources/tab_bar/home_selected.png')}
                />
            ),
        }
    },
    Gallery: {
        screen: GalleryScreen,
        navigationOptions: {
            tabBarLabel: '图库',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../resources/tab_bar/gallery.png')}
                    selectedImage={require('../resources/tab_bar/gallery_selected.png')}
                />
            ),
        },
    },
    Discover: {
        screen: DiscoverScreen,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../resources/tab_bar/discover.png')}
                    selectedImage={require('../resources/tab_bar/discover_selected.png')}
                />
            ),
        },
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../resources/tab_bar/me.png')}
                    selectedImage={require('../resources/tab_bar/me_selected.png')}
                />
            )
        },
    }
};
const TabNavigatorConfigs = {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: "none",
    tabBarOptions: {
        upperCaseLabel: false,
        showIcon: true,
        showLabel: true,
        activeTintColor: '#41ABFE',
        inactiveTintColor: '#AAACAE',
        style: {
            backgroundColor: 'white',
            borderTopColor: '#969BA533',
            height: 49,
        },
        indicatorStyle: {
            height: 0,
        },
        labelStyle: {
            fontSize: 10,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {
            marginBottom: 5,
        }
    },
};
const Tab = createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfigs);

Tab.navigationOptions = ({ navigation, navigationOptions }) => {
    const { routes, index } = navigation.state;
    let options = {}
    if (routes[index].routeName === 'Home') {
        options.title = '首页';
    } else if (routes[index].routeName === 'Gallery') {
        options = {
            header: null
        }
    } else if (routes[index].routeName === 'Discover') {
        options.title = '发现';
    }else if (routes[index].routeName === 'Mine') {
        options = {
            header: null
        }
    }
    return Object.assign(navigationOptions, options);
}
const StackRouteConfigs = {
    Tab: {
        screen: Tab
    },
    Movie: {
        screen: MovieScreen
    },
    Web: {
        screen: WebScreen
    },
    UiIndex: {
        screen: UiIndexScreen
    },
    UIFlatList: {
        screen: UIFlatListScreen
    },
    UIModal: {
        screen: UIModalScreen
    }
};
// const NavigationOptions = config => {
//     const state = config.navigation.state;
//     let gesturesEnabled = true;
//     if (state.params) {
//         if (state.params.gesturesEnabled === false || state.params.subGesturesEnabled === false) {
//             gesturesEnabled = false;
//         }
//     }
//     return {
//         gesturesEnabled: gesturesEnabled
//     };
// };
const StackNavigatorConfigs = {
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTitleStyle: {
            color: '#666',
            ...Platform.select({
                ios:null,
                android:{
                    textAlign: 'center',
                    flexGrow: 1
                }
            })
        },
        headerBackTitle: null,
        headerRight: [0, 1, 2, 3].indexOf(navigation.state.index) !== -1 ? null : <View />
    })
};
const Navigator = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);