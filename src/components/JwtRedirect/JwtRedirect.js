import React from "react";
import axios from "axios";

export const JwtRedirect = () => {

    let path = window.location.href.split('#')[1]
    const queryParameters = new URLSearchParams(path)
    let fbToken = queryParameters.get("access_token")

    axios.post('http://localhost:8080/authenticate', {'facebookToken': fbToken}).then((function (response) {
        localStorage.setItem('jwt', response.data.token)
        window.open('/me', '_self')
    }))
}