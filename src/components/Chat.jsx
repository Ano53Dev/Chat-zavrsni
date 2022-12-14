import React, { useState, useEffect,} from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'; // ovo su sve firebase funkcije

const style = {
  main: `relative max-h-[1100px] flex flex-col h-[100vh] p-[10px] bg-opacity-50 bg-slate-200 p-5  radius rounded-lg overflow-y-scroll  `,
};


const Chat = () => {
  const [messages, setMessages] = useState([]);
 

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp')); // 
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
       <>
      <main className={style.main}>
        
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} /> // za prikazivanje
          ))}
          
      </main>
      {/* Send Message Compoenent */}
      <SendMessage />  
    </>
  );
};

export default Chat;
