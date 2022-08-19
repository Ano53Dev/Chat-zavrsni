import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[1100px] mx-auto   text-center overflow-hidden  `,
  sectionContainer: `flex flex-col h-[100vh]   relative min-h-fit `,
  body: `bg-slate-300 w-[100%] h-[100%] `,
};


function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.body}>
    <div className={style.appContainer}>
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
