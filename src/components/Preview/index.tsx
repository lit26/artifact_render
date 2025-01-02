import React from "react";
import { detectLanguage } from "../../utils/languageDetection";
import MermaidDiagram from "./MermaidDiagram";
import HtmlPreview from "./HtmlPreview";

interface PreviewProps {
  code: string;
  element: React.ReactNode;
  error: string | null;
}

const Preview: React.FC<PreviewProps> = ({ code, element, error }) => {
  const language = detectLanguage(code);

  const renderContent = () => {
    if (language === "React") {
      return element;
    } else if (language === "SVG") {
      return <div dangerouslySetInnerHTML={{ __html: code }} />;
    } else if (language === "HTML") {
      return <HtmlPreview code={code} />;
    } else {
      return <MermaidDiagram>{code}</MermaidDiagram>;
    }
    return null;
  };

  return (
    <div className="bg-white w-full min-h-96 text-black">
      {error ? <div className="p-2">{error}</div> : renderContent()}
    </div>
  );
};

export default Preview;
