import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import { initialCode } from "./utils/data";
import Preview from "./components/Preview";
import { useLiveRunner,CodeEditor } from "react-live-runner";
import * as LucideReact from 'lucide-react'
import * as Recharts from 'recharts'

function App() {
  const [activeTab, setActiveTab] = useState("code");

  const scope = useMemo(()=> {
    return {
           import: {
        react: React,
        recharts: Recharts,
        'lucide-react': LucideReact
      }
    }
  }, [])

  const { element, code, error, onChange } = useLiveRunner({
    initialCode,
    scope
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
