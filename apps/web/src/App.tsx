import { APP_NAME } from "@/constants/app";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">{APP_NAME}</h1>

        <p className="mt-4 text-gray-500">
          React + Vite + Tailwind + TypeScript
        </p>
      </div>
    </main>
  );
}

export default App;