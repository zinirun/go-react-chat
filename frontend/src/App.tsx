import { useEffect, useState } from "react";
import { sendMsg, connect } from "./api";

function App() {
  const [chatHistory, setChatHistory]: any = useState([]);

  useEffect(() => {
    connect((msg: any) => {
      setChatHistory([...chatHistory, msg]);
    });
  }, [chatHistory]);

  const handleSend = (e: any) => {
    if (e.keyCode === 13) {
      sendMsg(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div>
      {chatHistory.map((message: MessageEvent, idx: number) => (
        <div key={idx}>{JSON.parse(message.data).body}</div>
      ))}
      <input onKeyDown={handleSend} />
    </div>
  );
}

export default App;
