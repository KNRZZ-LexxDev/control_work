import React from "react";
import { getTextError } from "../helpers/validate";
import './style.scss';

export const TextInput = ({
    initialValue = null,
    register,
    name,
    placeholder = "Введите значение",
    errors = [],
    label,
    validate = {},
    type,
}) => {
    return (
        <div className="input">
            <div className="input__label">{label}</div>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, validate)}
                defaultValue={initialValue}
                className="input__interact"
            />
            <div className="input__error">
                {errors[name] && getTextError(errors[name]?.type)}
            </div>
        </div>
    );
};