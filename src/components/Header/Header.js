import React from 'react';

function Header() {
  return (
    <header class="header__start">
    <div class="logo">eShop
        <a href="/" class="logo-link"></a>
    </div>
    <div class="icon-wrapper">
        <div class="card-basket">
            <a href="/basket">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="aliceblue" aria-hidden="true" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </a>
        </div>
        <div class="card-account">
            <a href="/account/login">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="aliceblue" aria-hidden="true" width="25" height="25"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </a>
        </div>
    </div>
</header>
  )
}

export default Header;