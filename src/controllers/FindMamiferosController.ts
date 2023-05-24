import { Request, Response } from "express";
import { database } from "../database";

export class FindMamiferosController {
    async handle(request: Request, response: Response){
        const { name: name } = request.params;
        const { name: nameBody } = request.body;


        const mamiferos = await database.mamiferos.findMany({
            where: {
                OR:[
                    {name: {contains: name}},
                    {name: {contains: nameBody}}
                ]
                  }
            })
        return response.json(mamiferos);
    }
}