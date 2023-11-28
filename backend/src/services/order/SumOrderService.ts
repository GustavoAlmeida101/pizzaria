import prismaClient from "../../prisma";

interface SumRequest {
    id_pedido: string
}

class SumOrderService {
    async execute({ id_pedido }: SumRequest) {

        const order = await prismaClient.pedido.findMany({
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
                        select:{
                        nome:true,
                        preco:true
                        
                        },
                        
                        
                    },
                    
                    
                    },
                    
                },
            },
        });

        const valor =  await prismaClient.item.findMany({
            where: {
                id_pedido: id_pedido
            },
            include:{
             produto:{
                select:{
                nome:true,
                preco:true
                
                },
                
                
            },
            
            
            },
        
        });

const totalPedido = valor.reduce((icc,item)=>{
return Number(icc) + Number(item.quantidade) * Number(item.produto.preco)

 

},0)

 

        
return  {order,totalPedido} ;



 
}

}




export { SumOrderService }