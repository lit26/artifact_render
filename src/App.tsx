import { useState } from "react";
import { CodeEditor } from "react-live-runner";
import Header from "./components/Header";
import { initialCode } from "./utils/data";
import Preview from "./components/Preview";
import { useLiveRunner } from "react-live-runner";

function App() {
  const [activeTab, setActiveTab] = useState("code");

  const { element, code, error, onChange } = useLiveRunner({
    initialCode,
  });

  return (
    <div className="min-h-screen w-full p-4">
      <div className="w-full max-w-4xl bg-[#1e1e1e] text-white rounded-lg overflow-hidden">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="p-4">
          {activeTab === "code" ? (
            <CodeEditor value={code} onChange={onChange}></CodeEditor>
          ) : (
            <Preview code={code} element={element} error={error} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
