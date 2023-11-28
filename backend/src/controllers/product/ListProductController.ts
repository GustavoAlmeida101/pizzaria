import {Request,Response} from 'express'
import { ListProductService } from '../../services/product/ListProductService'

class ListProductController {

    async handle (req:Request,res:Response){
 
    const id_categoria = req.query.id_categoria as string;

    const listByCategory = new ListProductService();

    const product = await listByCategory.execute({id_categoria});

    return res.json(product)

    }
}

export {ListProductController}