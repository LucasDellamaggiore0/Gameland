export default function validate(genres){
    const errors = {};
    if(!genres.name){
        errors.name = 'El nombre de la plataforma es obligatorio';
    }
    return errors;
}