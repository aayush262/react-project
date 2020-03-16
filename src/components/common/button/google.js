import React from 'react';
import GoogleLogin from 'react-google-login';
import './button.css'


const GoogleButton = ({children})=>{
    const responseGoogle = (response) =>{
        console.log(response)
    }
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT}
            render={renderProps => (
            <button className="custom-button google" onClick={renderProps.onClick} disabled={renderProps.disabled}>{children}</button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleButton;