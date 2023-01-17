import { Request, Response }from "express";
import { Pet } from "../models/pet";
import { crearteMenuObject } from "../helpers/createMenuObject";

// busca dos animais na barra de pesquisa
export const search = (req: Request, res: Response) => {
    let query:string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }
    
    // lista pets pelo nome inserido no search
    let list = Pet.getFromName(query);

    // renderizando na pagia
    res.render('pages/page',{
        menu: crearteMenuObject(''),
        list,
        query
    })

}