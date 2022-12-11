import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const Login = () => {

  /* 

  import Parse from 'parse/dist/parse.min.js';
  import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get(
          'username'
        )} has successfully signed in!`
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setUsername('');
      setPassword('');
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  const handleFacebookLoginLoginResponse = async function (response) {
    // Check if response has an error
    if (response.error !== undefined) {
      console.log(`Error: ${response.error}`);
      return false;
    } else {
      try {
        // Gather Facebook user info
        const userId = response.id;
        const userEmail = response.email;
        const userAccessToken = response.accessToken;
        // Try to login on Parse using linkWith and these credentials
        // Create a new Parse.User object
        const userToLogin = new Parse.User();
        // Set username and email to match facebook profile email
        userToLogin.set('username', userEmail);
        userToLogin.set('email', userEmail);
        try {
          let loggedInUser = await userToLogin.linkWith('facebook', {
            authData: { id: userId, access_token: userAccessToken },
          });
          // logIn returns the corresponding ParseUser object
          alert(
            `Success! User ${loggedInUser.get(
              'username'
            )} has successfully signed in!`
          );
          // Update state variable holding current user
          getCurrentUser();
          return true;
        } catch (error) {
          // Error can be caused by wrong parameters or lack of Internet connection
          alert(`Error! ${error.message}`);
          return false;
        }
      } catch (error) {
        console.log('Error gathering Facebook user info, please try again!');
        return false;
      }
    }
  };

        <div className="fb_connect">Sign in with Facebook
            <FacebookLogin
              appId="495562769112013"
              fields="email"
              callback={handleFacebookLoginLoginResponse}
              render={(renderProps) => (
                <div className="login-social-item login-social-item--facebook">
                  <img onClick={renderProps.onClick}  className="login-social-item__image" src={'https://findicons.com/files/icons/2830/clean_social_icons/250/facebook.png'} alt=""/>
                </div>
              )}
              />
            </div>
  */

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
      <div className="fb_connect">Sign in with Facebook</div>
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