import axios from 'axios'


class TokenService {
    constructor () {
        let service = axios.create ({
            baseURL:`${process.env.REACT_APP_API_URL}`
        })
        this.service = service
    }

    getToken = (user, password) => {
        return this.service.post('/Login', {username: user, password: password})
        .then(response => response.data.token)
    }
}

export default TokenService