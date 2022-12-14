import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import axios from "axios";

function Login(){

  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="зелёный кружок" />
      </Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <fieldset className="login__fieldset">
          <p className="login__input-name">E-mail</p>
          <input className="login__input" id="login-email" type="email" name="login-email" placeholder="Введите вашу почту здесь" required />
          <span className="login__input-error"></span>
        </fieldset>
        <fieldset className="login__fieldset">
          <p className="login__input-name">Пароль</p>
          <input className="login__input" id="login-password" type="password" name="login-password" placeholder="Введите ваш пароль здесь" required />
          <span className="login__input-error"></span>
        </fieldset>
      </form>
      <div className="fb_connect" onClick={() => {
          axios.get('http://localhost:8080/oauth2/facebook/v15.0').then((function (response) {
              window.open(response.data.tokenRequestUrl, '_self');
          }))
      }}>Sign in with Facebook</div>
      <input
        class="checkbox"
        type="checkbox"
        id="reg-log"
        name="reg-log"
      />
      <button className="login__button" type="submit">Войти</button>
      <p className="login__auth">
        Ещё не зарегистрированы?
        <Link className="login__link" to="/account/signup">Регистрация</Link>
      </p>
    </section>
  )
}

export default Login;