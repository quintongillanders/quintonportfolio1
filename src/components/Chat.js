import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    console.log("Response Status:", res.status);

    const data = await res.json();

console.log("FRONTEND GOT:", data);
setReply(data.reply);
  };

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

      <p>{reply}</p>
    </div>
  );
}

