import React from 'react';
import RootSiblings from 'react-native-root-siblings';
import Loading from '../components/loading';


let sibling = undefined;
let time = 0;
let minTime = 200;  // 最小显示时间
const Hud = {
    show: (mt) => {
        sibling = new RootSiblings(<Loading />);
        time = new Date().getTime();
        minTime = mt;
    },
    hidden: ()=> {
        time = new Date().getTime() - time;
        if (sibling instanceof RootSiblings) {
            time > minTime ? sibling.destroy() : setTimeout(() => {sibling.destroy()}, minTime)
        }
    }
}

export default Hud
