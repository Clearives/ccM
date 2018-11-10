import {AsyncStorage} from 'react-native'
import Storage from 'react-native-storage'
import {sync} from './sync'

let storage = undefined
let defaultExpires = 1000 * 3600 * 24
let size = 1000

const createStorage = () => {
    storage = new Storage({
        size: size,
        storageBackend: AsyncStorage,
        defaultExpires: defaultExpires,
        enableCache: true,
        sync: sync
    })
}

const initStorage = () => {
    if (!storage) {
        createStorage()
    }
}

const _storage = {
    save(key, obj) {
        initStorage()
        storage.save({
            key: key,
            data: obj,
            expires: defaultExpires
        })
    },
    load(key, callBack) {
        initStorage()
        storage.load({
            key: key,
            autoSync: true,
            syncInBackground: true,
            syncParams: {
                extraFetchOptions: {
                },
                someFlag: true,
            }
        }).then(ret => {
            callBack && callBack(ret)
            return ret
        }).catch(err => {
            // console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO
                    callBack(null)
                    return null
                    break
                case 'ExpiredError':
                    // TODO
                    callBack(null)
                    return null
                    break
            }
        })
    },
    // !! 清除某个key下的所有数据(仅key-id数据)
    clearMapForKey(key) {
        initStorage()
        storage.clearMapForKey(key)
    },
    // 删除单个数据
    remove(key) {
        initStorage()
        storage.remove({
            key: key
        })
    },
    // !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
    clearMap() {
        initStorage()
        storage.clearMap()
    }
}

export {_storage as storage}
