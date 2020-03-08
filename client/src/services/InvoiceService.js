import axios from 'axios'
import TokenService from './TokenService'

class InvoiceService {
    constructor(){
        let service = axios.create()

        this.service = service
        this.tokenService = new TokenService()
    }

    getHeaders = () => {
        return this.tokenService.getToken(`${process.env.REACT_APP_USERNAME}`,`${process.env.REACT_APP_PASSWORD}`)
            .then(token => {

                return { 
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            })
    }

    getOneInvoice = id => {
        return this.getHeaders()
        .then(headers =>{
            return this.service.get(`${process.env.REACT_APP_API_URL}invoices/${id}`, headers)
                .then(response => response.data.data)
        })
     
    }
}
export default InvoiceService