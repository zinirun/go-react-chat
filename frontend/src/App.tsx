import { useEffect, useState } from "react";
import { sendMsg, connect } from "./api";

function App() {
  const [chatHistory, setChatHistory]: any = useState([]);

  useEffect(() => {
    connect((msg: any) => {
      setChatHistory([...chatHistory, msg]);
    });
  }, [chatHistory]);

  const handleSend = () => {
    sendMsg("hello");
  };

  return (
    <div>
      {chatHistory.map((message: any, idx: number) => (
        <div key={idx}>{message.data}</div>
      ))}
      <button onClick={handleSend}>Hit</button>
    </div>
  );
}

export default App;
