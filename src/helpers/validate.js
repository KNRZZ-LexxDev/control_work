export const getTextError = (type) => {
    switch(type){
        case "required":
            return "Поле обязательно для заполнения"
        default:
            return `${type} - ошибка`
    }
}; 