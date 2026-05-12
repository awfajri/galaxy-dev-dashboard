import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Badge Hunter Dashboard
        </h1>
        <p className="mt-2 text-slate-400">
          Tracking my GitHub achievements in style.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
          <h2 className="text-xl font-semibold mb-2">System Status</h2>
          <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[85%]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
