import prismaClient from "../../prisma";

interface StatusRequest {
    id_pedido: string
}

class StatusOrderService {

    async execute({ id_pedido }: StatusRequest) {

        const status = await prismaClient.pedido.update({
            where: {
                id: id_pedido
            },
            data: {
                status: true

            }
        })

        return status

    }

}

export { StatusOrderService }