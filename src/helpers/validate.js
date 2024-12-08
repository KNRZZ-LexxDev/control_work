export const getTextError = (type) => {
    switch(type){
        case "required":
            return "Поле обязательно для заполнения"
        case "minLength":
            return "Это поле должно содержать больше символов"
        case "maxLength":
            return "Это поле должно содержать меньше символов символов"
        case "pattern":
            return "Некоректный ввод"

        default:
            return `${type} - ошибка`
    }
}; 