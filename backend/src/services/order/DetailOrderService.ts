import prismaClient from "../../prisma";

interface DetailRequest {
    id_pedido: string
}

class DetailOrderService {

    async execute({ id_pedido }: DetailRequest) {

        const pedidos =  await prismaClient.pedido.findUnique({
            where: {
                id: id_pedido
            },
            include: {
                itens: {
                    where: {
                        id_pedido: id_pedido
                    },
                    include:{
                        produto:{
                        
                       }
                       }
                 

                },


            }

        });
        
        return pedidos;



    }






}


export { DetailOrderService }