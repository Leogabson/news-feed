import { useState } from "react";
import "./App.css";

function App() {
  const [message] = useState("News Feed App - Setup in Progress");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          📰 News Today
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary mb-8">{message}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-primary-light text-primary px-6 py-3 rounded-lg">
            ✅ React + Vite
          </div>
          <div className="bg-primary-light text-primary px-6 py-3 rounded-lg">
            ✅ Tailwind CSS
          </div>
          <div className="bg-primary-light text-primary px-6 py-3 rounded-lg">
            ✅ News API Ready
          </div>
        </div>
        <p className="mt-8 text-text-light text-sm">
          Building components... Almost there! 🚀
        </p>
      </div>
    </div>
  );
}

export default App;
