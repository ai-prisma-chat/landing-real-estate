import { ConditionallyRender } from "react-util-kit";
import {useEffect} from "react";

import Chatbot, {createChatBotMessage} from "react-chatbot-kit";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";

import uuid from "react-uuid";

import 'react-chatbot-kit/build/main.css';
import './App.css';

function App() {

  useEffect(() => {

    if (!sessionStorage.getItem("clientId")) {
      sessionStorage.setItem('clientId', uuid())
    }
  }, [])

  return (
    <div className="App">
      <div className="app-chatbot-container">
        <ConditionallyRender
          ifTrue={true}
          show={
            <Chatbot
              config={{
                botName: 'manager',
                initialMessages: [createChatBotMessage('Напишите своё пожелание, а мы подберем для Вас лучший вариант 😉')],
              }}
              headerText='Чат с менеджером'
              placeholderText='напишите свое сообщение'
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          }
        />
      </div>
    </div>
  );
}

export default App;
