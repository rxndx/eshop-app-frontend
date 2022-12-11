import React from "react";
import axios from "axios";

function JwtRedirect() {
    const queryParameters = new URLSearchParams(window.location.search)
    const fbToken = queryParameters.get("access_token")

    axios.post('http://localhost:8080/authenticate', {facebookToken: fbToken}).then((function (response) {
        localStorage.setItem('jwt', response.data.token)
        alert(response.data.token)
        window.open('/me', '_new')
    }))
}

export default JwtRedirect;