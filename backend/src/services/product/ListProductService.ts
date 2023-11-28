import prismaClient from "../../prisma";

interface ProductRequest {
    id_categoria: string,

}

class ListProductService {

    async execute({ id_categoria }: ProductRequest) {

        const product = await prismaClient.produto.findFirst({

            where: {
                id_categoria: id_categoria
            },
            select: {
                id: true,
                nome: true
            }

        })
        return product;

    }

}

export { ListProductService }