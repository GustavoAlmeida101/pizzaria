import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';

import { AuthUserController } from './controllers/user/AuthUserController';

import { isAuthenticated } from './middleware/isAuthenticated';

import { DetailUserControllers } from './controllers/user/DetailUserControllers';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';

import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';

import { ListProductController } from './controllers/product/ListProductController';

import { CreateOrderController } from './controllers/order/CreateOrderController';

import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { AddItemController } from './controllers/order/AdditemController';

import { RemoveItemController } from './controllers/order/RemoveItemController';

import { SendOrderController } from './controllers/order/SendOrderController';

import { StatusOrderController } from './controllers/order/StatusOrderController';

import { ListOrderController } from './controllers/order/ListOrderController';

import { DetailOrderController } from './controllers/order/DetailOrderController';

import { SumOrderController } from './controllers/order/SumOrderController';

import multer from 'multer';

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//------------Rotas para Usuario-------------//

router.post('/user', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/userinfo', isAuthenticated, new DetailUserControllers().handle);

//-------Rotas para categoria --------//

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/listcategory', isAuthenticated, new ListCategoryController().handle)

//-------Rotas para upload -----//

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);

//-------Rotas para Produtos---------//

router.get('/category/product', isAuthenticated, new ListProductController().handle);

//-------Rotas para pedidos-----------//

router.post('/order', isAuthenticated, new CreateOrderController().handle);

router.delete('/deletar', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.put('/order/status',isAuthenticated, new StatusOrderController().handle)

router.get('/order/list',isAuthenticated, new ListOrderController().handle)

router.get('/order/detail',isAuthenticated,new DetailOrderController().handle)

router.get('/order/sum',isAuthenticated, new SumOrderController().handle)



export { router };
