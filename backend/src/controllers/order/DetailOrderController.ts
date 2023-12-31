import { Request, Response } from 'express'

import { DetailOrderService } from '../../services/order/DetailOrderService';

class DetailOrderController {
    async handle(req: Request, res: Response) {

        const id_pedido = req.query.id_pedido as string;
        const detailOrderService = new DetailOrderService();

        const detalhe = await detailOrderService.execute( {id_pedido });

        return res.json(detalhe);

    }


}

export { DetailOrderController }