import React, { useEffect } from "react";
import { useFetcher, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/textInput";
import { useContext } from "react";
import { AuthContext } from "../../App";

import './style.scss'
export const Auth = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        var userData = JSON.parse(localStorage.getItem('user'));
        const {email, password, check} = data
        if (password == userData.user_pass && email == userData.user_email) {
            navigate('/admin')
            setIsAuth(true);
            
        }
        if(check){
            localStorage.setItem('access token', 'asdhsajdjhsajkhdjkhsajhdjsahdjkas')
        }
    };

    return (
        <div className="auth__page-wrap">
            <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
                <div className="auth__form__content">
                    <h1 className="auth__form__content__head">Авторизация</h1>
                    <p className="auth__form__content__invite">
                        У вас еще нету аккаунта ?
                        <span className="auth__form__content__invite__part">Зарегистрируйтесь</span>
                    </p>

                    <div className="auth__form__content__button__wrap">
                        <div className="auth__form__content__button__google">
                            <div className="auth__form__content__button__google__img"></div>
                            <p className="auth__form__content__button__text">Google</p>
                        </div>
                        <div className="auth__form__content__button__facebook">
                            <div className="auth__form__content__button__facebook__img"></div>
                            <p className="auth__form__content__button__text">Facebook</p>
                        </div>
                    </div>

                    <div className="auth__form__content__input__wrap">
                        <TextInput
                            errors={errors}
                            name={"login"}
                            register={register}
                            validate={{required: true}}
                            placeholder="E-mail / Логин"
                            type="text"
                        />
                        <TextInput
                            errors={errors}
                            name={"password"}
                            register={register}
                            validate={{required: true}}
                            placeholder="Пароль"
                            type="text"
                        />
                    </div>

                    <div className="auth__form__content__policy__wrap">
                        <input type="checkbox" className="auth__form__content__policy__access" id='chk' {...register('check')}></input>
                        <label for="chk"></label>
                        <p className="auth__form__content__policy__text">Запомнить меня</p>
                    </div>

                    <div className="auth__form__content__onSubmit__wrap">
                        <button className="auth__form__content__onSubmit">Войти</button>
                    </div>
                </div>
            </form>
        </div>
    );
}