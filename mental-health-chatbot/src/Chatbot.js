import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input) return;
    const newMessages = [...messages, { text: input, user: true }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: input,
          max_tokens: 100,
        },
        {
          headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` },
        }
      );

      setMessages([
        ...newMessages,
        { text: res.data.choices[0].text, user: false },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold">AI Chatbot</h2>
      <div className="w-full max-w-md bg-gray-100 p-4 rounded mt-4">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`p-2 ${msg.user ? "text-right" : "text-left"}`}
          >
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        className="border p-2 w-full max-w-md mt-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        onClick={sendMessage}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </div>
  );
};

export default Chatbot;
