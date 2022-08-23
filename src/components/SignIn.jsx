import React from 'react'
import GoogleButton from 'react-google-button' // Package koji sam instalirao

import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    loginContainer: `flex justify-center`
}

const signIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider) // signInWithRedirect je firebase metoda
}

const SignIn = () => {
  return (
    <div className={style.loginContainer}>
        <GoogleButton onClick={signIn} />
    </div>
  )
}

export default SignIn