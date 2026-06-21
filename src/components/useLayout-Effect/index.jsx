import { useState, useRef, useLayoutEffect } from "react";

function ChatApp() {
  const [messages, setMessages] = useState(["Hello" ,"How are you?"]);
  const chatRef = useRef();

  useLayoutEffect(() => {
    chatRef.current.scrollTop =
      chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
      <button
        onClick={() =>
          setMessages((prev) => [...prev, "New Message"])
        }
      >
        Add Message
      </button>

      <div
        ref={chatRef}
        style={{
          height: "100px",
          overflowY: "auto",
          border: "1px solid black",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </>
  );
}

export default ChatApp;