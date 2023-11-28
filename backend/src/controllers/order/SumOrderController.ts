import {Request,Response} from 'express'
import { SumOrderService } from '../../services/order/SumOrderService'



class SumOrderController {
    async handle(req: Request, res: Response) {

        const id_pedido = req.query.id_pedido as string;
        const sumOrderService = new SumOrderService();

        const order = await sumOrderService.execute( {id_pedido });

        return res.json(order);

    }


}

export { SumOrderController }