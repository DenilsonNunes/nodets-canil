import { Request, Response }from "express";

// renderizando a page home
export const home = (req: Request, res: Response) => {
    res.send('Hme no controler')
}

export const dogs = (req: Request, res: Response) => {
    res.send('Pagina de dogs do controller')
}



export const cats = (req: Request, res: Response) => {

}


export const fishes = (req: Request, res: Response) => {

}
