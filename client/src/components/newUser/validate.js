export default function validate(user) {
    let errors = {}
    if (!user.name) {
        errors.name = 'Name is required'
    }
    if (!user.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
        errors.email = 'Invalid email address'
    }
    if (!user.password) {
        errors.password = 'Password is required'
    } else if (user.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
    }
    if (!user.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required'
    } else if (user.confirmPassword !== user.password) {
        errors.confirmPassword = 'Password and Confirm Password must match'
    }
    return errors
}