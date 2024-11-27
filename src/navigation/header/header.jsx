import React from "react";
import { Link } from "react-router-dom";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "../../App";
export const Header = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    
    return(
        <header className="header">
            {!isAuth && <b><Link to='/' className="header__item" >Регистрация</Link></b>}
            {!isAuth && <b><Link to='/auth'  className="header__item" >Авторизация</Link></b>}
            {isAuth && <b><Link to='/admin'  className="header__item" >Админ панель</Link></b>}
            {isAuth && <b><Link to='/products'  className="header__item" >Список продуктов</Link></b> }
        </header>
    )
}