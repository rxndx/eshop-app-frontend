import React, { useEffect, useState } from 'react';
import axios from "axios";

function Profile() {

    const [username, setUsername] = useState('initial username');
    const [email, setEmail] = useState('initial email');
    const [images, setImages] = useState('');
    const [profileicon, setProfileicon] = useState('');

    useEffect(() => {
        axiosInfo();
        console.log("2 " + images);
        getDataById(images);
    }, [])

    const axiosInfo = () => {
        axios.get("http://localhost:8080/me", {
            headers:
                { 'Authorization': ('Bearer ' + localStorage.getItem('jwt')) }
        }).then(function (response) {
            setUsername(response.data.name)
            setEmail(response.data.email)
            setImages(response.data.image)
            console.log("1 " + images);
        })
    }

    async function getDataById(images) {
        const res = await fetch(`http://localhost:8080/images/${images}`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setProfileicon(imageObjectURL);
    }

    // const logout = () => {
    //     alert("Вы выходите с аккаунта")
    //     localStorage.removeItem('jwt');
    //     setIsLoggedin = false;
    //     window.open('/', '_self')
    //   };

return (
    <section class="my-account">
        <div>
            <div class="avatar">
                <div><img class="avatar__image" src={profileicon} alt=""></img></div>
            </div>
            <h1 class="text-center">My Account <button class="edit-button">edit</button></h1>
            <div class="account-details page-width mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="account-details-main border-textSubdued border-textSubdued">
                    <h2>Account Details</h2>
                    <button class="edit-button" 
                    // onClickCapture={logout}
                    >Logout</button>
                </div>
            </div>
            <div class="account-details-main-info">
                <div class="account-details-main-info-inner">
                    <div class="account-grid grid-cols-1 gap-1">
                        <div class="details-name">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true" width="20"
                                    height="20">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>{username}</div>
                        </div>
                        <div class="details-email">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true" width="20"
                                    height="20">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>{email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}

export default Profile;