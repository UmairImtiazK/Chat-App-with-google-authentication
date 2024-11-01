import React, { useState, useEffect, useRef } from 'react';
import './Rectangle10.css';
import importIcon from './import.svg';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Rectangle10() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);
  const scrollRef = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
      scrollToBottom();
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (text, isAutoResponse = false) => {
    if (user && text.trim()) {
      await addDoc(collection(db, 'messages'), {
        text,
        createdAt: serverTimestamp(),
        sender: user.uid,
        autoResponse: isAutoResponse
      });
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
      // Simulate auto-reply after 1.5 seconds
      setTimeout(() => {
        sendMessage("This is an auto-reply message", true);
      }, 1500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the form from submitting
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="rectangle10">
      <div className="messageContainer">
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`messageRow ${msg.autoResponse ? 'receivedRow' : 'sentRow'}`}
          >
            <div className={`message ${msg.autoResponse ? 'received' : 'sent'}`}>
              <div className="messageContent">
                <p>{msg.text}</p>
                <span>{msg.createdAt ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString() : '...'}</span>
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollRef}></div>
      </div>
      <div className="inputArea">
        <img src={importIcon} alt="Import Icon" />
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here.."
        />
        <button className="btn" type="button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
