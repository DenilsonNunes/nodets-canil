import { Request, Response }from "express";

// importando a função do active no menu
import {crearteMenuObject} from "../helpers/createMenuObject";

// Importando o models de pet
import {Pet} from '../models/pet';




// renderizando as paginas de acordo com suas rortas
export const home = (req: Request, res: Response) => {
    let list = Pet.getall();

    res.render('pages/page',{
        // função que verifica o menu ex: dog,cat,fish ou all -> todos
        menu: crearteMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page',{
        menu: crearteMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page',{
        menu: crearteMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background:'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page',{
        menu: crearteMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background:'banner_fish.jpg'
        },
        list
    });
}
