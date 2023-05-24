import { Request, Response } from "express";
import { database } from "../database";

export class UpdateMamiferosController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { name, age, description, extinct} = request.body;

        const mamiferos = await database.mamiferos.update({
            where: {
                id:Number(id)
            },
            data: {
                name: name,
                age: age,
                description: description,
                extinct: extinct
        }
    })
        return response.json(mamiferos)
    }
}