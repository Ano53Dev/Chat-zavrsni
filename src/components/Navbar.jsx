import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
    nav: `bg-blue-800 h-20 rounded-lg flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Let's Chat blue</h1> 
      {user ? <LogOut /> : <SignIn />} 
     

    </div>
  );
};

export default Navbar;
/* {user ? <LogOut /> : <SignIn />} ako je user ulogiran onda prikaži LogOut, a ako je izlogiran onda prikaži SignIn   */