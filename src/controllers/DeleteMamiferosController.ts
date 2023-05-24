import { Request, Response } from "express";
import { database } from "../database";

export class DeleteMamiferosController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const mamiferos = await database.mamiferos.delete({
            where: {
                id:Number(id)
            }
        })

        return response.json(mamiferos)

    }
}