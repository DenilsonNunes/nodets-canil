
//Tipagem criada para aceitar somente os valores no parametro da funçao
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const crearteMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    // verificando se enviei algo para o menu
    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}