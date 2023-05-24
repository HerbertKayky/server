import { Request, Response } from "express";
import { database } from "../database";

export class CreateMamiferosController {
    async handle(request: Request, response: Response){
        const { name, age, description, extinct} = request.body;

        const mamiferos = await database.mamiferos.create({
            data: {
                name: "Foca",
                age: 9,
                description: "A foca é um mamífero marinho que possui corpo alongado, nadadeiras adaptadas para nadar e se locomover na água, e é conhecida por sua habilidade de mergulho e por ser uma excelente nadadora.",
                extinct: false
            }
        })

        return response.json(mamiferos)

    }
}