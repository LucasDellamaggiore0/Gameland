export default function validate(game){
    const errors = {};
    if(!game.name){
        errors.name = 'Game name is required';
    }
    if(!game.description){
        errors.description = 'Game description is required';
    }
    if(!game.genres){
        errors.genres = 'The game must have at least one genre';
    }
    if(!game.platforms){
        errors.platforms = 'The game must have at least one platform';
    }
    if(!game.released_date){
        errors.released_date = 'Release date is required';
    }
    return errors;
}