import prismaClient from "../../prisma";


class ListOrderService {
    async execute() {

        const pedidos = await prismaClient.pedido.findFirst({
            select: {
                id: true,
                nome: true,
                mesa: true

            }


        })
        return pedidos;


    }



}

export { ListOrderService }