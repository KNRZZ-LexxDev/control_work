import React from "react";
import { getTextError } from "../../helpers/validate";
import './formStyle.scss';

export const FormInput = ({
    initialValue = null,
    register,
    name,
    placeholder = "Введите значение",
    errors = [],
    label,
    validate = {},
    type,
    classNameWrap,
    classNameInteract,
}) => {
    return (
        <div className={classNameWrap}>
            <div className="input__label">{label}</div>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, validate)}
                defaultValue={initialValue}
                className={classNameInteract}
            />
            <div className="input__error">
                {errors[name] && getTextError(errors[name]?.type)}
            </div>
        </div>
    );
};