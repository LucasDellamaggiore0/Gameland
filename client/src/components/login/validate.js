export default function validate(user) {
    const errors = {};
    if (!user.email) errors.email = 'Email is required';
    if(!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(user.email)) errors.email = 'Email is invalid';
    if (!user.password) errors.password = 'Password is required';
    return errors;
}