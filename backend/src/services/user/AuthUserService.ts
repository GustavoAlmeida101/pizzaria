import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"


interface AuthRequest {
    email: string;
    senha: string;
}

class AuthUserService {
    async execute({ email, senha }: AuthRequest) {


        const user = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Usuario ou senha incorretos!")
        }

        const senhaMatch = await compare(senha, user.senha);

        if (!senhaMatch) {
            throw new Error("Usuario ou senha incorretos!")
        }
        //gerar um token JWT para o usuario
        const token = sign(
            // dados do payload
            {
                nome: user.nome,
                usuario: user.email
            },
            //secret do arquivo.env
            process.env.JWT_SECRET ,
            //dados adicionais como id do usuario e validade do token
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };