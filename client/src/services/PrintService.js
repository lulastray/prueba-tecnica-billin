import axios from 'axios'
import TokenService from './TokenService'

class PrintService {
    constructor(){
        const service = axios.create()
        this.service= service
        this.tokenService = new TokenService()
    }

    printBasic = invoice =>{
        return this.tokenService.getConfig()
        .then(config => {
            return this.service.post('printer/basic',invoice, config)
            .then(response => console.log(response.message))
            .catch(err => console.log(err))
        })
    }

}


export default PrintService