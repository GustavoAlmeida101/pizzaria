import {Request,Response} from 'express'

import { StatusOrderService } from '../../services/order/StatusOrderService'

class StatusOrderController {
 
    async handle(req:Request,res:Response){
    
        const {id_pedido} =req.body

        const statusOrderService = new StatusOrderService();

        const status = await statusOrderService.execute({id_pedido});

        return res.json(status)
    
    
    }

}

export {StatusOrderController}