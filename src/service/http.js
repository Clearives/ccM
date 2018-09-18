import axios from 'axios'
import qs from 'qs'

const api = ''

const Http = {
    get : (url, param) => {
        let params = ''
        if (param) {
            let _index = 0
            for (let i in param) {
                params += (_index === 0 ? '?' : '&') + `${i}=${param[i]}`
                _index++
            }
        }
        return (
            axios.get(`${api}` + `${url}` + `${params}`)
        )
    },
    postData : (url, param) => {
        return (
            axios.post(`${api}` + `${url}`, qs.stringify(param))
        )
    }
}

export default Http;