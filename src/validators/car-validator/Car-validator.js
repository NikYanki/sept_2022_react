import Joi from "joi";

const CarValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'wtf'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'wtf',
        'number.max':'wtf mzf',
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min':'wtf',
        'number.max':'wtf mzf',
    }),
})

export {CarValidator}
