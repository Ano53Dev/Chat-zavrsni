import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  Container: `max-w-[1100px] mx-auto    text-center overflow-hidden`,
  sectionContainer: `flex flex-col h-[100vh]  relative min-h-fit `,
  body: `bg-[url('https://cdn.pixabay.com/photo/2022/08/18/19/00/water-7395510_960_720.jpg')]  object-cover bg-cover bg-center w-full h-full `,
};


function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.body}>
    <div className={style.Container}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
    </div>
  
  );
}

export default App;
