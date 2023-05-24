import { Request, Response } from "express";
import { database } from "../database";

export class FindMamiferosController {
    async handle(request: Request, response: Response){
        const { name } = request.params;

        const mamiferos = await database.mamiferos.findMany({
            where: {
                name:String(name)
            }
        })

        return response.json(mamiferos)

    }
}