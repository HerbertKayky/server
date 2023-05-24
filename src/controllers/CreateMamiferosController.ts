import { Request, Response } from "express";
import { database } from "../database";

export class CreateMamiferosController {
    async handle(request: Request, response: Response){
        const { name, age, description, extinct} = request.body;

        const mamiferos = await database.mamiferos.create({
            data: {
                name: "Foca",
                age: 9,
                description: "A foca é um mamífero marinho que possui corpo alongado.",
                extinct: false
            }
        })

        return response.json(mamiferos)

    }
}