import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const style = {
  form: `h-14 w-full max-w-[1100px]  bg-opacity-50 rounded-lg flex text-xl`,
  input: `bg-opacity-90 w-full text-xl  p-3 bg-blue-700 text-white rounded-lg outline-none border-none`,
  button: `w-[20%] rounded-lg bg-red-600 mx-2 hover:bg-sky-700 `,
};

const SendMessage = () => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    
  }
  

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
      />
      <button className={style.button} type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
