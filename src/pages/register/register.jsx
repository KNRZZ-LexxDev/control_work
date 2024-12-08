import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/textInput";
import './style.scss'
export const Register = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        control,
        watch,
    } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(
            {
                "user_name": getValues("name"),
                "user__email": getValues("login"),
                "user_phone": getValues("phone"),
                "user_pass":getValues("password"),
                "user__subPass":getValues("submit__password")

            })
        )
        navigate('/auth');
    };


    return(
        <div className="register__page-wrap">
            <form onSubmit={handleSubmit(onSubmit)} className="register__form">
                <div className="register__form__content">
                    <h1 className="register__form__content__head">Регистрация</h1>
                    <p className="register__form__content__invite">
                        У вас уже есть аккаунт?
                        <span className="register__form__content__invite__part">Войдите</span>
                    </p>

                    <div className="register__form__content__button__wrap">
                        <div className="register__form__content__button__google">
                            <div className="register__form__content__button__google__img"></div>
                            <p className="register__form__content__button__text">Google</p>
                        </div>
                        <div className="register__form__content__button__facebook">
                            <div className="register__form__content__button__facebook__img"></div>
                            <p className="register__form__content__button__text">Facebook</p>
                        </div>
                    </div>

                    <div className="register__form__content__input__wrap">
                        <TextInput
                            errors={errors}
                            name={"name"}
                            register={register}
                            validate={{
                                required: true,
                                minLength: {
                                    value: 2,
                                    message: 'Имя должно содержать минимум 2 символа'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Имя не должно превышать 30 символов'
                                },
                                pattern: {
                                    value: /^[A-Z]*$/i
                                }
                            }}
                            placeholder="Имя фамилия"
                            type="text"
                        />
                        <TextInput
                            errors={errors}
                            name={"login"}
                            register={register}
                            validate={{
                                required: true,
                                minLength: {
                                    value: 2,
                                    message: 'Имя должно содержать минимум 2 символа'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Имя не должно превышать 30 символов'
                                },
                                pattern: {
                                    value: /^[A-Z0-9]+@[A-Z0-9]+.[A-Z]*$/i
                                }
                            }}
                            placeholder="E-mail / Логин"
                            type="text"
                        />
                        <TextInput
                            errors={errors}
                            name={"phone"}
                            register={register}
                            validate={{
                                required: true,
                                minLength: {
                                    value: 2,
                                    message: 'Имя должно содержать минимум 2 символа'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Имя не должно превышать 30 символов'
                                },
                                pattern: {
                                    value: /^[A-Z0-9]*$/i
                                }
                            }}
                            placeholder="Номер телефона"
                            type="text"
                        />
                        <TextInput
                            errors={errors}
                            name={"password"}
                            register={register}
                            validate={{
                                required: true,
                                minLength: {
                                    value: 2,
                                    message: 'Имя должно содержать минимум 2 символа'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Имя не должно превышать 30 символов'
                                },
                                pattern: {
                                    value: /^[A-Z0-9]*$/i
                                }
                            }}
                            placeholder="Пароль"
                            type="text"
                        />
                        <TextInput
                            errors={errors}
                            name={"submit__password"}
                            register={register}
                            validate={{required: true}}
                            placeholder="Подтвердить пароль"
                            type="text"
                        />
                    </div>

                    <div className="register__form__content__policy__wrap">
                        <input type="checkbox" className="register__form__content__policy__access" id='chk'></input>
                        <label for="chk"></label>
                        <p className="register__form__content__policy__text">согласен с публичным договором предоставлния услуг</p>
                    </div>

                    <div className="register__form__content__onSubmit__wrap">
                        <button className="register__form__content__onSubmit">Регистрация</button>
                    </div>
                </div>
            </form>
        </div>
    );
};