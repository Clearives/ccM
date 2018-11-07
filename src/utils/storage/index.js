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
    }
}

export {_storage as storage}
