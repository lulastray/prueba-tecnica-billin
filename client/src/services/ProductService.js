import axios from 'axios'
import TokenService from './TokenService'


class ProductService {
    constructor(){
        const service = axios.create()
        this.service = service
        this.tokenService = new TokenService()
    }

    getOneProduct = id => {
       return this.tokenService.getConfig()
            .then(config => {
                return this.service.get(`products/${id}`, config)
                    .then(response=> {
                        console.log(response.data)
                        return response.data.data})
            
            })
    }

}

export default ProductService