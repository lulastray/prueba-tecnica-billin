import axios from 'axios'
import TokenService from './TokenService'

class InvoiceService {
    constructor(){
        let service = axios.create()

        this.service = service
        this.tokenService = new TokenService()
    }



    getOneInvoice = id => {
        return this.tokenService.getConfig()
        .then(config =>{
            return this.service.get(`invoices/${id}`, config)
                .then(response => response.data.data)
        })
     
    }
}
export default InvoiceService