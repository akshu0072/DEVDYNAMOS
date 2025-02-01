import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [mood, setMood] = useState(null);
  const moods = ["😊", "😐", "😞", "😡", "😢"];

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">How are you feeling today?</h1>
      <div className="flex gap-4 mt-4">
        {moods.map((emoji) => (
          <button
            key={emoji}
            className="text-4xl"
            onClick={() => setMood(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
      {mood && <p className="mt-4 text-lg">You selected: {mood}</p>}
      <Link
        to="/chatbot"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Chat with AI
      </Link>
    </div>
  );
};

export default Home;
