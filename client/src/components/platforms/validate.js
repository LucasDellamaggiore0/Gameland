export default function validate(platform){
    const errors = {};
    if(!platform.name){
        errors.name = 'El nombre de la plataforma es obligatorio';
    }
    return errors;
} 