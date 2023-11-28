import prismaClient from "../../prisma";

class ListCategoryService {
  async execute(){

  const category = await prismaClient.categoria.findFirst({
  select:{
     id:true,
     nome:true,
}
  }
)
 return category;
}
}

export {ListCategoryService}