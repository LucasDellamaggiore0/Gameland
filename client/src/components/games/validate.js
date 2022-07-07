export default function validate(game){
    const errors = {};
    if(!game.name){
        errors.name = 'El nombre del juego es obligatorio';
    }
    if(!game.description){
        errors.description = 'La descripcion del juego es obligatoria';
    }
    if(!game.genres){
        errors.genres = 'El juego debe tener al menos un género';
    }
    if(!game.platforms){
        errors.platforms = 'El juego debe tener al menos una plataforma';
    }
    return errors;
}