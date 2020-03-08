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

    getConfig = () => {
        return this.getToken(`${process.env.REACT_APP_USERNAME}`,`${process.env.REACT_APP_PASSWORD}`)
            .then(token => {

                return { 
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    baseURL:`${process.env.REACT_APP_API_URL}`
                }
            })
    }
}

export default TokenService